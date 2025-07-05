import Link from "next/link";
import { ReactNode } from "react";
import { Menu, NotebookText, Brain, Plus } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-4 text-2xl font-bold text-purple-600 flex items-center gap-2">
          <NotebookText className="w-8 h-8" /> Smart Todo
        </div>
        <nav className="mt-6 space-y-1">
          <Link href="/" className="block px-6 py-3 hover:bg-purple-50">
            <Menu className="inline-block w-5 h-5 mr-2" /> Dashboard
          </Link>
          <Link href="/add" className="block px-6 py-3 hover:bg-purple-50">
            <Plus className="inline-block w-5 h-5 mr-2" /> New Task
          </Link>
        </nav>
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden flex items-center justify-between p-4 shadow bg-white w-full">
        <div className="text-xl font-semibold text-purple-600 flex items-center gap-2">
          <NotebookText className="w-6 h-6" /> Smart Todo
        </div>
        <Link
          href="/add"
          className="bg-purple-600 text-white px-3 py-1 rounded flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Task
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
