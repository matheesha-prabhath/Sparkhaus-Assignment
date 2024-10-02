import { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p>Error loading blogs: {error}</p>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow">
              <img src={blog.photo_url} alt={blog.title} className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
              <p className="text-gray-600">
                {blog.content_html
                  ? blog.content_html.substring(0, 100).replace(/<[^>]+>/g, "")
                  : "No content available"}
                ...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
