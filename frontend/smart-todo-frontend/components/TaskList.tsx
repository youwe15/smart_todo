import useSWR from "swr";
import api from "@/utils/api";
import TaskCard from "@/components/TaskCard";

const fetcher = (url: string) => api.get(url).then(res => res.data);

export default function TaskList() {
  const { data: tasks, isLoading } = useSWR("tasks/", fetcher);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {(tasks || []).map((task: any) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
