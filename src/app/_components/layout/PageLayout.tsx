import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  banner?: ReactNode;
}

export default function PageLayout({ children, sidebar, banner }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {banner && (
        <div className="mx-4 sm:mx-6 mt-4 rounded-lg overflow-hidden">
          {banner}
        </div>
      )}

      <div className="flex flex-1 gap-6 px-4 sm:px-6 py-6">
        {sidebar && (
          <aside className="hidden md:block w-1/8 shrink-0">
            {sidebar}
          </aside>
        )}
        <main className="flex-1 min-w-0">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-4 sm:px-6 py-3">
      <span className="font-medium text-sm">game archive</span>
      <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
        <a href="#" className="hover:text-black">games</a>
        <a href="#" className="hover:text-black">categories</a>
        <a href="#" className="hover:text-black">about</a>
      </nav>
      <input
        type="search"
        placeholder="search"
        className="w-1/8 h-9 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 px-4 sm:px-6 py-6 text-xs text-gray-500">
      built as a portfolio project
    </footer>
  );
}