from django.urls import path
from .views import dashboard_summary, health

urlpatterns = [
    path("health/", health, name="health"),
    path("dashboard/summary/", dashboard_summary, name="dashboard-summary"),
]

