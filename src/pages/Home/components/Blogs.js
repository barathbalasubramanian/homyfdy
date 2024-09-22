import React, { useEffect, useState } from 'react';
import { getAllBlogs } from '../../../firebase/Blogs'; 

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); // State to track which blog is selected
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs(); // Get blogs from Firebase
      setBlogs(fetchedBlogs); // Set the state with fetched blogs
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle opening the modal
  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <div className='py-10'>
      <div className='px-16 max-md:px-3'>
        <img src='/assets/design.svg' alt='Design' />
      </div>
      <div className='px-16 py-6 flex items-center gap-8 justify-between text-start max-md:px-3 max-md:flex-col max-md:items-start'>
        <div>
          <div className='averoxfont text-3xl pb-2'>WHAT OUR CLIENTS SAY</div>
          <div style={{ color: 'grey' }} className='w-3/4'>
            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
          </div>
        </div>
        <div
          className='cursor-pointer flex items-center gap-3 px-2 py-1'
          style={{
            textWrap: 'nowrap',
            border: '1px solid #262626',
            backgroundColor: 'var(--blackhd)',
            borderRadius: '5px',
          }}
        >
          View All Testimonials
        </div>
      </div>
      <div className='flex w-full px-16 gap-8 overflow-scroll py-10 max-md:px-3' style={{ borderBottom: '1px solid #262626' }}>
        {blogs.map((blog) => (
          <div className='ques-con cursor-pointer' key={blog.id} onClick={() => handleOpenModal(blog)}>
            <div className='pb-1'>{blog.blogName}</div>
            <div>
                <img
                  src={blog.blogImage || '/assets/profile.svg'} 
                  alt={blog.blogName}
                  style={{objectFit: 'contain' }}
                />
            </div>
            <div style={{ color: 'grey' }} className='pb-1 text-sm'>
              {blog.description ? (
                blog.description.length > 100 ? (
                  <>
                    {blog.description.substring(0, 100)}... <span style={{ color: '#007BFF' }}>Read More</span>
                  </>
                ) : (
                  blog.description
                )
              ) : (
                'No description available for this blog.'
              )}
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex flex-col text-start'>
                <div>Profile Name</div>
                <div style={{ color: 'grey' }}>{blog.publishDate || 'Unknown Date'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for blog details */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl font-semibold">{selectedBlog.blogName}</div>
              <button onClick={handleCloseModal} className="text-red-500 text-2xl">
                <img src="/assets/close.svg" alt="" />
              </button>
            </div>
            <img
              src={selectedBlog.blogImage || '/assets/profile.svg'}
              alt={selectedBlog.blogName}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="text-lg font-semibold mb-2">{selectedBlog.writerName || 'Anonymous'}</div>
            <div className="text-sm text-gray-500 mb-4">{selectedBlog.publishDate || 'Unknown Date'}</div>
            <div className="text-gray-700">{selectedBlog.description || 'No description available.'}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
