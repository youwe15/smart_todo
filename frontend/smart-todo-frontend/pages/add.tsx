import TaskForm from "@/components/TaskForm";

export default function AddTaskPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-xl font-semibold mb-4">New Task</h1>
      <TaskForm />
    </main>
  );
}
