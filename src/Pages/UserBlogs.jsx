import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UserBlogs = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/dogBlog/getUserBlog",
        { withCredentials: true }
      );
      setUserBlogs(data.blogs);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load user blogs");
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/dogBlog/deleteBlog/${id}`,
        { withCredentials: true }
      );
      toast.success("Blog deleted successfully");
      // Refresh the list after deletion
      fetchUserBlogs();
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    fetchUserBlogs();
  }, []);

  if (loading) return <p>Loading your blogs...</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Blogs</h2>
      {userBlogs.length === 0 && <p>You have no blogs yet.</p>}
      <div className="space-y-6">
        {userBlogs.map((blog) => (
          <div key={blog._id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            {blog.mainImage && (
              <img
                src={blog.mainImage.url}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <button
              onClick={() => deleteBlog(blog._id)}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Delete Blog
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBlogs;
