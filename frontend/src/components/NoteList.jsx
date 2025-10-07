import { NoteItem } from "./NoteItem";

export const NoteList = ({ notes, onUpdate, onDelete }) => {
  return (
    <section className="container mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="flex items-center gap-3 text-3xl font-semibold text-gray-800">
          <img
            src="/note.svg"
            alt="note icon"
            className="w-10 h-10 drop-shadow-sm"
          />
          My Notes
        </h2>
        <span className="text-gray-500 text-sm font-medium">
          {notes.length} total notes
        </span>
      </div>

      {notes.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <img
            src="/empty.svg"
            alt="Empty notes"
            className="w-40 h-40 opacity-60 mb-4"
          />
          <h1 className="text-xl font-medium text-gray-600">No notes yet</h1>
          <p className="text-gray-400 text-sm mt-1">
            Try adding a new note to get started!
          </p>
        </div>
      )}
    </section>
  );
};
