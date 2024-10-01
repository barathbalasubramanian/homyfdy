import React from 'react'
import { useNavigate } from 'react-router-dom'

function OtherBlogs({blogs}) {
    const navi = useNavigate();
    console.log(blogs)
    return (
    <div className='px-20 py-16'>
      <div className='averoxfont text-3xl pb-2'>YOU MAY ALSO LIKE</div>
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
    </div>
  )
}

export default OtherBlogs
