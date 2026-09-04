# Life Organizer 2 — Arquitectura base aprobada

Fecha de aprobación: 2026-09-04
Estado: Aprobada

## Stack principal

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Backend
- Django
- Django REST Framework

### Persistencia
- PostgreSQL

### Infraestructura
- Caddy como proxy inverso y terminación HTTPS.
- Docker Compose para desplegar los componentes de la aplicación.

### Servicios del agente principal
- OpenClaw se ejecutará como servicio nativo de Langostini.
- El sistema de alarmas se ejecutará como servicio nativo de Langostini.
- La aplicación web deberá integrarse con estos servicios mediante contratos explícitos, sin acoplar su ciclo de vida al contenedor web.

### Automatización auxiliar
- n8n será una herramienta subordinada para integraciones y flujos deterministas.
- n8n no será el núcleo del dominio ni el coordinador principal del sistema.

## Componentes diferidos

Los siguientes componentes no forman parte de la base inicial y solo se incorporarán cuando exista una necesidad demostrable:

- Redis.
- Celery.
- WebSockets.
- Microservicios.

Antes de incorporarlos deberá documentarse el problema concreto, la alternativa más simple evaluada y el coste operativo esperado.

## Principios de implementación

1. Monolito modular antes que microservicios.
2. Peticiones HTTP y procesos simples antes que infraestructura asíncrona compleja.
3. Persistencia explícita y respaldable en PostgreSQL.
4. Integraciones desacopladas mediante contratos claros.
5. Dockerizar la aplicación, no forzar dentro de Docker servicios nativos que dependen del host de Langostini.
6. Cambios pequeños, reversibles y verificables.
7. Cuidar CPU y memoria de la Lenovo de Langostini.
8. Delegar compilaciones, pruebas o análisis pesados a Polpulpini cuando corresponda.
