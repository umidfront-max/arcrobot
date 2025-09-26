import React, { useEffect, useState } from "react";
import { getBlogId_API, getBlog_API } from "../service/index";
import { useParams, useNavigate } from "react-router-dom";
import BlogNavigation from "../components/BlogNavigation"; // oldingi yozib berganimni shu faylga joylaysan

function BlogId() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
    if (id) fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    const [error, response] = await getBlogId_API(id);
    if (error) {
      console.error("Xatolik:", error);
      setError("Ma'lumotni olishda xatolik yuz berdi.");
      setLoading(false);
      return;
    }
    setBlog(response);
    setLoading(false);
  };

  const fetchBlogs = async () => {
    const [error, response] = await getBlog_API();

    if (error) {
      console.error("Xatolik:", error);
      return;
    }
    setBlogs(response.data);
  };

  if (loading) {
    return <p className="text-center pt-32">Yuklanmoqda...</p>;
  }

  if (error) {
    return <p className="text-center pt-32 text-red-500">{error}</p>;
  }

  if (!blog) {
    return <p className="text-center pt-32">Blog topilmadi.</p>;
  }

  // Hozirgi blogning indexini topish
  const currentIndex = blogs.findIndex((b) => String(b.id) === String(id));

  return (
    <div className="container1 pt-32 ">
      {/* Sana */}
      <p className="text-black/70">
        {new Date(blog.createdAt).toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>

      <h1 className="font-inter-600 text-[60px] leading-[64px] mt-10 max-lg:leading-10 max-lg:text-[36px]">
        {blog.title}
      </h1>

      <p className="text-black/60 my-4">{blog.subtitles}</p>

      <div className="flex gap-4 items-center mt-12 ">
        {blog.author_image ? (
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={blog.author_image}
            alt="author"
          />
        ) : (
          <div className="w-12 h-12 bg-black/10 rounded-full"></div>
        )}

        <div>
          <p className="font-inter-500 max-md:text-sm">{blog.author_name}</p>
          <p className="font-inter-500 text-black/60 text-sm">
            {blog.author_description}
          </p>
          <p className="font-inter-500 text-black/60 text-sm">
            {blog.author_phone}
          </p>
        </div>
      </div>
      <div className="border border-black/10 my-12"></div>

      {/* Image */}
      {blog.images?.length > 0 && (
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mt-6">
          {blog.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`blog-image-${index}`}
              className="w-full h-[510px] max-sm:h-[360px] object-cover rounded-xl"
            />
          ))}
        </div>
      )}

      {/* HTML description */}
      {blog.description && (
        <div
          className="mt-10 text-black/90 leading-7 editorr table-wrapper"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>
      )}

      {/* Previous / Next navigation */}
      {blogs.length > 0 && currentIndex !== -1 && (
        <div className="mt-20">
          <BlogNavigation
            blogs={blogs}
            currentIndex={currentIndex}
            onNavigate={(newId) => navigate(`/block/${newId}`)}
          />
        </div>
      )}
    </div>
  );
}

export default BlogId;
