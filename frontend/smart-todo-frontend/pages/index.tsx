import TaskList from "@/components/TaskList";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link
          href="/add"
          className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded flex items-center gap-1"
        >
          <Plus className="w-5 h-5" /> Add Task
        </Link>
      </div>
      <TaskList />
    </>
  );
}