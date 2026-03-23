import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../lib/blogApi";

const ManualPostPage: React.FC = () => {
  const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adminId: "",
    slug: "",
    category: "blog" as "blog" | "tutorial",
    title: "",
    excerpt: "",
    intro: "",
    content: "",
    tags: "",
    readTime: "",
    keyTakeaways: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      let imageBase64: string | undefined;
      let imageMimeType: string | undefined;

      if (imageFile) {
        if (imageFile.size > MAX_IMAGE_SIZE_BYTES) {
          throw new Error("Cover image is too large. Please use an image smaller than 2MB.");
        }

        imageBase64 = await fileToBase64(imageFile);
        imageMimeType = imageFile.type;
      }

      const result = await createPost({
        ...formData,
        imageBase64,
        imageMimeType,
      });

      setStatus("success");
      setMessage("Post published successfully.");
      navigate(`/posts/${result.slug}`);
    } catch (error) {
      const text = error instanceof Error ? error.message : "Failed to publish post";
      setStatus("error");
      setMessage(text);
    }
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Manual Blog Publisher</h1>
          <p className="text-gray-400">
            Create and publish blog/tutorial posts to Supabase (requires your private admin ID).
          </p>
        </div>

        <form onSubmit={onSubmit} className="glass-bw rounded-2xl p-8 border border-white/20 space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="adminId">Poster ID (required)</label>
            <input
              id="adminId"
              name="adminId"
              value={formData.adminId}
              onChange={onChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white"
              placeholder="Enter your private poster ID"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="title">Title</label>
              <input id="title" name="title" value={formData.title} onChange={onChange} required className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="slug">Slug (optional)</label>
              <input id="slug" name="slug" value={formData.slug} onChange={onChange} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" placeholder="auto-generated if empty" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="category">Category</label>
              <select id="category" name="category" value={formData.category} onChange={onChange} className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white">
                <option value="blog">Blog</option>
                <option value="tutorial">Tutorial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="readTime">Read time (optional)</label>
              <input id="readTime" name="readTime" value={formData.readTime} onChange={onChange} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" placeholder="e.g. 12 min read" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="excerpt">Excerpt</label>
            <textarea id="excerpt" name="excerpt" value={formData.excerpt} onChange={onChange} required rows={3} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="intro">Intro</label>
            <textarea id="intro" name="intro" value={formData.intro} onChange={onChange} required rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="content">Main content</label>
            <textarea id="content" name="content" value={formData.content} onChange={onChange} required rows={12} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" placeholder="Write full post content here. Use blank lines between paragraphs." />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="tags">Tags (comma separated)</label>
              <input id="tags" name="tags" value={formData.tags} onChange={onChange} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" placeholder="Node.js, Express, API" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2" htmlFor="keyTakeaways">Key takeaways (one per line)</label>
              <textarea id="keyTakeaways" name="keyTakeaways" value={formData.keyTakeaways} onChange={onChange} rows={3} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2" htmlFor="image">Cover image (optional)</label>
            <input id="image" type="file" accept="image/*" onChange={(event) => setImageFile(event.target.files?.[0] ?? null)} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white" />
          </div>

          <button type="submit" className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-colors" disabled={status === "loading"}>
            {status === "loading" ? "Publishing..." : "Publish Post"}
          </button>

          {message && (
            <p className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ManualPostPage;
