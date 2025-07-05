from rest_framework import routers
from django.urls import path, include
from .views import TaskViewSet, CategoryViewSet, ContextEntryViewSet, AIViewSet

router = routers.DefaultRouter()
router.register(r"tasks", TaskViewSet, basename="task")
router.register(r"categories", CategoryViewSet, basename="category")
router.register(r"context", ContextEntryViewSet, basename="context")
router.register(r"ai", AIViewSet, basename="ai")

urlpatterns = [
    path("", include(router.urls)),
]
