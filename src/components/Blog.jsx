import React, { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
              <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
