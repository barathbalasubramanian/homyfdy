import React from 'react';

function BlogComponent({ blog }) {
    const handleShareClick = () => {
        const blogUrl = window.location.href; // Get the current URL
        navigator.clipboard.writeText(blogUrl)  // Copy the URL to clipboard
            .then(() => {
                alert("Blog link copied to clipboard!");  // Show alert once copied
            })
            .catch((error) => {
                console.error("Failed to copy link:", error);
            });
    };

    return (
        <div className='px-20 py-16 space-y-4'>
            <div className='w-full relative'>
                <img src={blog.blogImage} alt="" className='w-full h-[20em] object-contain' />
                <div
                    className='absolute top-2 right-5 cursor-pointer min-w-fit bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] flex items-center gap-3 px-2 py-1'
                    style={{ zIndex: "999", backgroundColor: "var(--green)", borderRadius: "5px" }}
                    onClick={handleShareClick}  // Add onClick handler
                >
                    <img src="/assets/sh.svg" alt="" /> Share
                </div>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='font-medium text-xl'>{blog.blogName}</div>
                <div>{blog.publishDate}</div>
            </div>
            <div>By: {blog.writerName}</div>
            <div>
                {blog.description}
            </div>
        </div>
    );
}

export default BlogComponent;
