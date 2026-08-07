"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/40">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <h2 className="font-serif text-2xl text-[#3A7B72]">

          SELAH

        </h2>

        <div className="flex gap-10">

          <a className="hover:text-[#D4AF37]" href="/">
            Home
          </a>

          <a className="hover:text-[#D4AF37]" href="/writings">
            Writings
          </a>

          <a className="hover:text-[#D4AF37]" href="/about">
            About
          </a>

        </div>

      </div>

    </nav>
  );
}