import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Smart Todo List</h1>
      <TaskList />
    </main>
  );
}
