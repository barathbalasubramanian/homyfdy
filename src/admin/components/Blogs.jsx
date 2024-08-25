import React, { useState, useEffect, useRef } from 'react';
import Noti from './Noti';
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from '../../firebase/Blogs';

function Blogs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogName, setBlogName] = useState('');
  const [writerName, setWriterName] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editingBlogId, setEditingBlogId] = useState(null); // Track which blog is being edited

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      if (editingBlogId) {
        // Update blog if editing
        await updateBlog(editingBlogId, {
          blogName,
          writerName,
          publishDate,
          // Handle image upload here if needed
        });
      } else {
        // Create new blog
        await createBlog({
          blogName,
          writerName,
          publishDate,
          // Handle image upload here if needed
        });
      }
      fetchBlogs(); // Refresh the list after saving
      setIsModalOpen(false);
      handleClear();
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  const handleClear = () => {
    setBlogName('');
    setWriterName('');
    setPublishDate('');
    setSelectedFile(null);
    setEditingBlogId(null); // Reset editing state
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const fetchBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find(blog => blog.id === id);
    setBlogName(blogToEdit.blogName);
    setWriterName(blogToEdit.writerName);
    setPublishDate(blogToEdit.publishDate);
    setEditingBlogId(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      fetchBlogs(); // Refresh blogs after deletion
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main className="flex flex-col py-6 px-8 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col gap-8 w-full max-md:mr-2.5 max-md:max-w-full">
          <div className='flex items-center justify-between max-md:flex-col max-md:items-start gap-4'>
            <div className="flex overflow-hidden flex-wrap gap-2 items-center px-3 w-1/2 max-md:w-[90%] text-xs leading-6 text-center text-gray-400 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid min-h-[40px] max-md:max-w-full">
              <input type="text" placeholder="Search..." className="gap-0 self-stretch my-auto bg-transparent border-none focus:outline-none" aria-label="Search" />
            </div>
            <div>
              <Noti />
            </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='text-black font-semibold text-2xl'>
              Blogs
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => setIsModalOpen(true)}>
              Add Blog
            </div>
          </div>

          <div className="p-6 text-black">
            <div className="flex w-full bg-green-100 p-4 font-bold text-[16px]">
              <div className="w-1/4">Blog Name</div>
              <div className="w-1/4">Writer Name</div>
              <div className="w-1/4">Date of Publish</div>
              <div className='w-[3.5em]'>Image</div>
              <div className="w-1/4"></div>
            </div>
            {blogs.map((blog) => (
              <div key={blog.id} className="flex items-center w-full p-4 border-b border-gray-200">
                <div className="w-1/4 flex items-center gap-4">
                  <div>{blog.blogName}</div>
                </div>
                <div className="w-1/4">{blog.writerName}</div>
                <div className="w-1/4">{blog.publishDate}</div>
                <div className='w-[3.5em]'><img src='/assets/image.svg' alt={blog.blogName} className="w-12 h-12 object-cover rounded-full" /></div>
                <div className="w-1/4 flex justify-center gap-4">
                  <button 
                    onClick={() => handleEdit(blog.id)} 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(blog.id)} 
                    className="text-white rounded-lg"
                  >
                    <img src="/assets/delete.svg" alt="Delete" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                <div className='w-full flex items-center justify-between mb-6'>
                  <div className="text-xl font-semibold text-black">{editingBlogId ? 'Update Blog' : 'Add Blog'}</div>
                  <div className='font-bold text-xl text-red-500 cursor-pointer' onClick={() => setIsModalOpen(false)}><img src='/assets/close.svg' alt='Close'/></div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <label className="block text-gray-700">Blog Name</label>
                    <input
                      type="text"
                      value={blogName}
                      onChange={(e) => setBlogName(e.target.value)}
                      className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Writer Name</label>
                    <input
                      type="text"
                      value={writerName}
                      onChange={(e) => setWriterName(e.target.value)}
                      className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Date of Publish</label>
                    <input
                      type="date"
                      value={publishDate}
                      onChange={(e) => setPublishDate(e.target.value)}
                      className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Upload Image</label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div 
                      className='flex flex-col gap-2 w-full items-center border py-4 mt-3 rounded-xl px-3 border-gray-300 cursor-pointer' 
                      onClick={triggerFileInput}>
                      <img src="assets/upload.svg" style={{ width: "4em" }} alt="Upload Image" />
                      <div className='text-neutral-500'>
                        {selectedFile ? selectedFile.name : "Upload image"}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <button onClick={handleClear} className="bg-gray-300 text-black px-4 py-2 rounded-lg">
                      Clear
                    </button>
                    <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                      {editingBlogId ? 'Update' : 'Save'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Blogs;
