import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex items-center justify-around backdrop-blur-md p-6 bg-transparent">
      <div className="text-2xl font-bold opacity-100 transition:opacity text-white">
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View profile on GitHub"
          title="View profile on GitHub"
          href="https://github.com/Leopoldinoo"
          className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0D1117 border border-[#4F46E5] text-[#E5E7EB]hover:bg-gradient-to-r hover:from-[#2563EB] hover:v[#4F46E5 hover:to-[#7C3AED] hover:border-transparent shadow-[0_0_15px_rgba(79,70,229,0.25)] hover:shadow-[0_0_30px_rgba(124,58,237,0.55)] transition-all duration-300hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github"
            aria-hidden="true"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <span className="hidden sm:inline whitespace-nowrap text-lg">
            View on GitHub
          </span>
        </a>
      </div>
      <nav className="space-x-6">
        <a href="#about" className="text-white hover:text-gray-300 transition">
          Sobre
        </a>
        <a
          href="#projects"
          className="text-white hover:text-gray-300 transition"
        >
          Projetos
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-300 transition"
        >
          Contato
        </a>
        <a href="#skills" className="text-white hover:text-gray-300 transition">
          Habilidades
        </a>
      </nav>
    </header>
  );
}
