# Smart Todo List with AI Features

This is a full-stack Smart Todo List application using Django REST Framework for the backend and Next.js for the frontend. It also integrates AI to suggest tasks based on user context.

---

## 🌐 Tech Stack

- **Backend**: Django, Django REST Framework, PostgreSQL (Supabase-hosted)
- **Frontend**: Next.js 14, TailwindCSS, TypeScript
- **AI**: Simple AI endpoint for suggesting tasks from user context

---

## 📁 Project Structure

```
smart_todo/
├── backend/              # Django backend
│   ├── api/              # API app with models, views, serializers
│   ├── backend/          # Django settings and main config
│   └── manage.py
└── frontend/
    └── smart-todo-frontend/  # Next.js 14 frontend
```

---

## ⚙️ Backend Setup

### Prerequisites

- Python 3.10+
- PostgreSQL (can use Supabase free tier)
- `pip`, `virtualenv`

### Steps

```bash
cd backend
python -m venv .venv
. .venv/Scripts/activate  # On Windows
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env  # Then update it

# Run initial migrations
python manage.py migrate

# Run dev server
python manage.py runserver
```

---

## 🚀 Frontend Setup

```bash
cd frontend/smart-todo-frontend
npm install
npm run dev
```

> Make sure the API base URL is set properly in `utils/api.ts`.

---

## 🧪 API Test Cases

### Create a Task

```bash
curl -X POST http://localhost:8000/api/tasks/   -H "Content-Type: application/json"   -d '{
    "title": "Finish assignment",
    "description": "Complete all required API tests",
    "category_id": 1,
    "priority_score": 8.5,
    "deadline": "2025-07-06",
    "status": "todo"
  }'
```

### List Tasks

```bash
curl http://localhost:8000/api/tasks/
```

### Suggest Tasks (AI)

```bash
curl -X POST http://localhost:8000/api/ai/suggest/   -H "Content-Type: application/json"   -d '{"context": "You need to submit your project by tomorrow"}'
```

---

## 🔐 Environment Variables (.env.example)

```env
DJANGO_SECRET_KEY=your-secret-key
DEBUG=1

POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your-password
POSTGRES_HOST=db.abc.supabase.co
POSTGRES_PORT=5432
```

---

## ✅ Final Checklist

- [x] Run `python manage.py migrate`
- [x] Run `npm run dev` in frontend
- [x] Test all `/api` endpoints
- [x] Add `.env` to `.gitignore`
- [x] Push to GitHub

---

## 📘 License

MIT