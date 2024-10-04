import { useState, useEffect } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=35")
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

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  const showLessBlogs = () => {
    setVisibleBlogs(3);
  };

  const viewFullBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const goBackToList = () => {
    setSelectedBlog(null);
  };

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p>Error loading blogs: {error}</p>;
  }

  // If a blog is selected, show the full content of that blog
  if (selectedBlog) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <button onClick={goBackToList} className="mb-6 text-blue-500 hover:underline">
            Back to Blogs
          </button>
          <h2 className="text-4xl font-bold mb-4">{selectedBlog.title}</h2>
          <img
            src={selectedBlog.photo_url}
            alt={selectedBlog.title}
            className="mb-4 w-full h-64 object-cover"
          />
          <div
            dangerouslySetInnerHTML={{ __html: selectedBlog.content_html }}
            className="text-gray-800"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="blog-card bg-gray-100 p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => viewFullBlog(blog)}>
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
        <div className="text-center mt-8">
          {visibleBlogs < blogs.length && (
            <button
              onClick={loadMoreBlogs}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4">
              Load More
            </button>
          )}
          {visibleBlogs > 4 && (
            <button
              onClick={showLessBlogs}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
