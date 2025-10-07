import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://notes-app-api-nu.vercel.app";

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/notes`);
      const result = await res.json();
      setNotes(result.data);
      setFilteredNotes(result.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (newTitle, newContent) => {
    try {
      const res = await fetch(`${baseUrl}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });
      const result = await res.json();
      if (res.ok) {
        const updated = [...notes, result.data];
        setNotes(updated);
        setFilteredNotes(updated);
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleUpdateNote = async (id, updateTitle, updateContent) => {
    try {
      const res = await fetch(`${baseUrl}/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: updateTitle, content: updateContent }),
      });
      const result = await res.json();
      if (res.ok) {
        const updated = notes.map((note) =>
          note.id === id ? result.data : note
        );
        setNotes(updated);
        setFilteredNotes(updated);
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/notes/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updated = notes.filter((note) => note.id !== id);
        setNotes(updated);
        setFilteredNotes(updated);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredNotes(notes);
    } else {
      const lower = query.toLowerCase();
      const result = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(lower) ||
          note.content.toLowerCase().includes(lower)
      );
      setFilteredNotes(result);
    }
  };

  const getNoteById = (id) => {
    console.log("Selected ID:", id);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col mt-24 items-center bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900">
        <NoteForm onAddNote={addNote} onSearch={handleSearch} />
        {loading ? (
          <p className="text-gray-500 mt-6">Loading notes...</p>
        ) : (
          <NoteList
            notes={filteredNotes}
            onDelete={handleDelete}
            onUpdate={handleUpdateNote}
            onGetById={getNoteById}
          />
        )}
      </main>
    </>
  );
}

export default App;
