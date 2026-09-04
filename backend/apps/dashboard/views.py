from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def health(_request):
    return Response({"status": "ok", "service": "life-organizer2-api"})


@api_view(["GET"])
def dashboard_summary(_request):
    return Response({
        "next_alarm": "07:30",
        "wake_streak_days": 2,
        "daily_progress": 60,
        "experience": 240,
        "level": 1,
    })

