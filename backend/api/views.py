from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Task, Category, ContextEntry
from .serializers import TaskSerializer, CategorySerializer, ContextEntrySerializer
from .ai_engine import get_ai_suggestions

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by("-usage_count")
    serializer_class = CategorySerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by("-priority_score", "deadline")
    serializer_class = TaskSerializer

class ContextEntryViewSet(viewsets.ModelViewSet):
    queryset = ContextEntry.objects.all().order_by("-created_at")
    serializer_class = ContextEntrySerializer

class AIViewSet(viewsets.ViewSet):
    @action(detail=False, methods=["post"])
    def suggest(self, request):
        task_data = request.data.get("task", {})
        context_data = request.data.get("context", {})
        suggestions = get_ai_suggestions(task_data, context_data)
        return Response(suggestions, status=status.HTTP_200_OK)
