export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-center bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-3 container">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-12 h-12 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </nav>
  );
};
