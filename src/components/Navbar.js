export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-white/70 shadow z-50">
      <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Nitesh Kumar</h1>
        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
