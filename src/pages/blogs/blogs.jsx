import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AbFooter from "../../components/AbFooter";
import { useParams } from "react-router-dom";
import { getAllBlogs, getBlog } from "../../firebase/Blogs";
import BlogComponent from "./components/BlogComponent";
import OtherBlogs from "./components/OtherBlogs";

function Blogs() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null); // Store the single blog

  const fetchBlog = async () => {
    try {
      const fetchedBlog = await getBlog(id); // Fetch the current blog
      setBlog(fetchedBlog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

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

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const otherBlogs = blogs.filter(blogItem => blogItem.id !== id);

  return (
    <div>
      <Header />
      {blog && <BlogComponent blog={blog} />}  {/* Render blog only when it's fetched */}
      <OtherBlogs blogs={otherBlogs} />  {/* Send other blogs excluding the current one */}
      <AbFooter />
      <Footer />
    </div>
  );
}

export default Blogs;
