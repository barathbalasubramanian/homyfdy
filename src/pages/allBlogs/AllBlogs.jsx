import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AbFooter from "../../components/AbFooter";
import { getAllBlogs, getBlog } from "../../firebase/Blogs";
import OtherBlogs from "../blogs/components/OtherBlogs";
import { useNavigate } from "react-router-dom";

function AllBlogs() {

  const [blogs, setBlogs] = useState([]);
  const navi = useNavigate()
  const fetchBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs(); // Fetch all blogs
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Header />
      <div className="py-10"></div>
      <div className='px-16 max-md:px-3'>
        <img src='/assets/design.svg' alt='Design' />
      </div>
      <div className='px-16 py-6 flex items-center gap-8 justify-between text-start max-md:px-3 max-md:flex-col max-md:items-start'>
        <div>
          <div className='averoxfont text-3xl pb-2'>READ OUR BLOGS</div>
          <div style={{ color: 'grey' }} className='w-full max-md:w-full'>
          Read the success stories and heartfelt blog
          </div>
        </div>      
      </div>
      <div className='flex w-full px-16 gap-8 overflow-scroll py-10 max-md:px-3' style={{ borderBottom: '1px solid #262626' }}>
        {blogs.map((blog) => (
          <div className='ques-con cursor-pointer' key={blog.id} onClick={() => navi(`/blogs/${blog.id}`)}>
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
      <AbFooter />
      <Footer />
    </div>
  );
}

export default AllBlogs;
