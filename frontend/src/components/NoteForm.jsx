import { useState } from "react";

export const NoteForm = ({ onAddNote, onSearch }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote(title, content);
    setTitle("");
    setContent("");
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <section className="container max-w-xl px-6 py-6 mt-24 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={handleSearch}
          className="w-full rounded-lg p-3 bg-white/70 focus:bg-white outline-none border border-gray-300 focus:border-blue-500 shadow-sm transition duration-300"
        />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="rounded-lg p-3 bg-white/70 focus:bg-white outline-none border border-gray-300 focus:border-blue-500 shadow-sm transition duration-300"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="resize-y min-h-24 rounded-lg p-3 bg-white/70 focus:bg-white outline-none border border-gray-300 focus:border-blue-500 shadow-sm transition duration-300"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg py-3 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Add Note
        </button>
      </form>
    </section>
  );
};
