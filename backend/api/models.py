from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    usage_count = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Task(models.Model):
    STATUS_CHOICES = (
        ('todo', 'Todo'),
        ('in_progress', 'In Progress'),
        ('done', 'Done'),
    )
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.ForeignKey(Category, null=True, blank=True, on_delete=models.SET_NULL)
    priority_score = models.FloatField(default=0)
    deadline = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='todo')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ContextEntry(models.Model):
    SOURCE_CHOICES = (
        ('whatsapp', 'WhatsApp'),
        ('email', 'Email'),
        ('notes', 'Notes'),
    )
    content = models.TextField()
    source_type = models.CharField(max_length=20, choices=SOURCE_CHOICES)
    processed_insights = models.JSONField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.source_type}: {self.content[:30]}..."
