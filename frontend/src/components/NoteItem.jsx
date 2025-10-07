import { useState } from "react";
import { showFormattedDate } from "../utils/dateFormatter.jsx";

export const NoteItem = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleEdit, setTitleEdit] = useState(note.title);
  const [contentEdit, setContentEdit] = useState(note.content);

  const handleCancel = () => {
    setTitleEdit(note.title);
    setContentEdit(note.content);
    setIsEditing(false);
  };

  return (
    <div className="rounded-2xl shadow-lg bg-white/40 backdrop-blur-md border border-white/20 w-[300px] p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {isEditing ? (
        <>
          <input
            value={titleEdit}
            type="text"
            className="w-full rounded-lg p-2 bg-white/80 focus:bg-white outline-none border border-gray-300 focus:border-blue-500 shadow-sm transition duration-300"
            onChange={(e) => setTitleEdit(e.target.value)}
          />

          <textarea
            value={contentEdit}
            className="w-full rounded-lg p-2 mt-2 bg-white/80 focus:bg-white outline-none border border-gray-300 focus:border-blue-500 shadow-sm transition duration-300 min-h-[80px]"
            onChange={(e) => setContentEdit(e.target.value)}
          />

          <div className="mt-4 flex gap-2">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              onClick={() => {
                onUpdate(note.id, titleEdit, contentEdit);
                setIsEditing(false);
              }}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-semibold text-xl text-gray-800 mb-1">
            {note.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            {showFormattedDate(note.created_at)}
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">{note.content}</p>

          <div className="mt-3 flex gap-3">
            <button
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-300"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-300"
              onClick={() => onDelete(note.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};
