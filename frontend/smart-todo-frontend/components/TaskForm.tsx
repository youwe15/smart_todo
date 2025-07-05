import { useState, useEffect } from "react";
import api from "@/utils/api";
import { useRouter } from "next/router";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priorityScore, setPriorityScore] = useState<number | null>(null);
  const [deadline, setDeadline] = useState("");
  const [categoryId, setCategoryId] = useState<string>(""); // use string to handle empty select
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    api.get("categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to load categories", err));
  }, []);

  const createTask = async () => {
    const payload = {
      category_id: categoryId ? parseInt(categoryId) : null,
      title: title || null,
      description: description || null,
      priority_score: priorityScore ?? null,
      deadline: deadline || null,
      status: status || null,
    };

    try {
      const res = await api.post("tasks/", payload);
      if (res.status === 201) router.push("/");
    } catch (err: any) {
      console.error("Error:", err.response?.data || err.message);
      alert("Error: " + JSON.stringify(err.response?.data || err.message));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 space-y-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-2 border rounded"
        placeholder="Priority Score"
        value={priorityScore ?? ""}
        onChange={(e) =>
          setPriorityScore(e.target.value ? parseFloat(e.target.value) : null)
        }
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">-- Select Category --</option>
        {categories.map((cat: any) => (
          <option key={cat.id} value={cat.id.toString()}>
            {cat.name}
          </option>
        ))}
      </select>
      <select
        className="w-full p-2 border rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">-- Select Status --</option>
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button
        onClick={createTask}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Save Task
      </button>
    </div>
  );
}
