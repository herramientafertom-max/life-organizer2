# Life Organizer 2 — Análisis inicial

Fecha: 2026-09-04
Estado: descubrimiento inicial; arquitectura y tecnologías aún no cerradas.

## 1. Visión

Life Organizer 2 será una plataforma personal web, gamificada y multiagente para organizar la vida del progenitor, medir avances y automatizar trabajos personales y profesionales.

No debe limitarse a registrar información: debe ayudar activamente a ejecutar rutinas, despertar, estudiar, ejercitarse, desarrollar proyectos y revisar resultados.

## 2. Problemas que debe resolver

1. Dificultad para despertar y mantener un horario funcional.
2. Falta de una vista unificada entre horario, calendario, alarmas y tareas.
3. Poca motivación causada por interfaces planas y progreso poco visible.
4. Ausencia de medición consistente de hábitos, aciertos, fallos y rachas.
5. Fragmentación de proyectos, encargos y herramientas de desarrollo.
6. Necesidad de coordinar a Langostini y Polpulpini sin duplicar trabajos.
7. Riesgo operativo demostrado por la pérdida de la versión anterior tras dejar de pagar la VPS.

## 3. Capacidades funcionales preliminares

### Organización personal
- Horario semanal interactivo.
- Creación y edición de bloques con categorías.
- Calendario sincronizado con el horario.
- Alarmas y recordatorios vinculados a bloques, hábitos o tareas.
- Registro de cumplimiento, incumplimiento y justificación.

### Seguimiento y gamificación
- Métricas por día, semana y mes.
- Rachas de aciertos y fallos.
- Experiencia, niveles, insignias y logros.
- Indicadores para despertar temprano, estudio y ejercicio.
- Panel visual de progreso inspirado en interfaces de videojuegos, sin copiar activos protegidos.

### Proyectos y trabajo
- Proyectos, tareas, subtareas, prioridades y dependencias.
- Trabajos de clientes separados de los proyectos personales.
- Evidencias, entregables y revisión.
- Automatización de flujos deterministas mediante herramientas auxiliares.

### Operación multiagente
- Langostini como agente principal, operativo y desarrollador progresivo.
- Polpulpini como agente colaborador y ejecutor preferente de cargas pesadas.
- Cola compartida, estados y asignación de trabajos.
- Bloqueo o reserva de tareas para impedir duplicación.
- Registro de decisiones, acciones y resultados.
- Recuperación ante desconexiones.

## 4. Requisitos no funcionales preliminares

- Persistencia independiente de una única VPS.
- Copias de seguridad y procedimiento probado de recuperación.
- Bajo consumo para el nodo de Langostini.
- Interfaz web adaptable a computador y teléfono.
- Seguridad por permisos y confirmación para acciones sensibles.
- Auditoría trazable de usuarios, agentes y automatizaciones.
- Diseño modular e incremental.
- Portabilidad y reducción de dependencia de proveedores.
- Interfaz atractiva, rápida y con respuesta visual clara.

## 5. Vacíos que deben resolverse

1. ¿Qué panel de alarmas se utiliza actualmente y cómo se integra?
2. ¿Las alarmas deben sonar en teléfono, Lenovo, navegador u otros dispositivos?
3. ¿Qué ocurre si el navegador está cerrado o el servidor se desconecta?
4. ¿Qué define exactamente que despertar, estudiar o ejercitarse fue cumplido?
5. ¿La validación será manual, automática o combinada?
6. ¿Cómo se corrige un registro erróneo sin dañar métricas o auditoría?
7. ¿Cómo se calcularán experiencia, niveles, rachas e insignias?
8. ¿Qué acciones puede ejecutar cada agente sin autorización?
9. ¿Qué datos financieros se administrarán y qué límites tendrá el asesor?
10. ¿Qué información de clientes requiere aislamiento o cifrado especial?
11. ¿Debe funcionar parcialmente sin conexión?
12. ¿Qué datos de la versión anterior pueden recuperarse o reutilizarse?

## 6. Riesgos detectados

- Intentar construir todas las áreas simultáneamente.
- Dar prioridad a la estética antes de asegurar alarmas y persistencia.
- Convertir la gamificación en un sistema fácil de manipular o desmotivador.
- Automatizar acciones sensibles sin autorización explícita.
- Depender nuevamente de un único servidor sin respaldo.
- Integrar demasiadas herramientas antes de definir contratos y responsabilidades.

## 7. Recomendación de alcance inicial

El primer incremento debería demostrar un ciclo personal completo:

1. Crear un bloque semanal.
2. Asociarle una alarma o recordatorio.
3. Registrar si se cumplió.
4. Actualizar una racha y una métrica.
5. Mostrar el resultado en un panel visual atractivo.
6. Conservar el historial y poder restaurarlo.

Esto valida el núcleo de valor sin intentar implementar inmediatamente proyectos, clientes, asesor financiero y coordinación multiagente completa.

## 8. Próximo documento recomendado

Crear una especificación de actores, casos de uso y reglas de negocio, empezando por el dominio más crítico: **despertar, alarmas, horario y comprobación de cumplimiento**.
