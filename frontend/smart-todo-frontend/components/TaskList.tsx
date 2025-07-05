import useSWR from "swr";

import Link from "next/link";
import api from "../utils/api"; // ✅ relative path

const fetcher = (url: string) => api.get(url).then(res => res.data);

export default function TaskList() {
  const { data: tasks, isLoading } = useSWR("tasks/", fetcher);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="space-y-2">
      {tasks?.map((task: any) => (
        <div key={task.id} className="p-4 rounded-xl shadow bg-white flex justify-between">
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-500">{task.description}</p>
          </div>
          <span className="px-2 py-1 bg-purple-200 rounded text-xs">
            {Math.round(task.priority_score * 100)}%
          </span>
        </div>
      ))}
      <Link href="/add" className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded">
        + Add Task
      </Link>
    </div>
  );
}
