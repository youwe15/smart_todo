import { CheckCircle2, Clock, ListTodo } from "lucide-react";

export default function TaskCard({ task }: { task: any }) {
  const statusColor = {
    todo: "bg-gray-200",
    in_progress: "bg-yellow-200",
    done: "bg-green-200",
  }[task.status];

  return (
    <div className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg flex items-center gap-1">
          <ListTodo className="w-5 h-5 text-purple-600" /> {task.title}
        </h3>
        <span className={`px-2 py-1 text-xs rounded ${statusColor}`}>{task.status}</span>
      </div>
      {task.description && <p className="text-sm text-gray-600 mt-1">{task.description}</p>}
      <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> {task.deadline || "No deadline"}
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4" /> {Math.round(task.priority_score || 0)}%
        </span>
      </div>
    </div>
  );
}