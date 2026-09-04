# Life Organizer 2

Plataforma personal de operaciones, hábitos y automatización multiagente.

## Estructura

- `frontend/`: React + TypeScript + Vite.
- `backend/`: Django + Django REST Framework.
- `docs/`: visión, decisiones y documentación técnica.

## Primer incremento

Panel inicial con:

- resumen del día;
- próxima alarma;
- racha de despertar;
- progreso diario;
- horario semanal básico;
- endpoint de salud del backend.

## Desarrollo local

### Backend

```bash
python3 -m venv .venv
.venv/bin/pip install -r backend/requirements.txt
.venv/bin/python backend/manage.py migrate
.venv/bin/python backend/manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

