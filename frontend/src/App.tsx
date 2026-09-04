import { motion } from 'framer-motion'
import {
  AlarmClock,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Flame,
  Gauge,
  GraduationCap,
  Menu,
  Trophy,
} from 'lucide-react'

const schedule = [
  { time: '07:30', title: 'Despertar', type: 'Rutina', color: 'cyan' },
  { time: '09:00', title: 'Bloque de estudio', type: 'Universidad', color: 'violet' },
  { time: '13:30', title: 'Almuerzo y descanso', type: 'Recreación', color: 'amber' },
  { time: '16:00', title: 'Life Organizer 2', type: 'Proyecto', color: 'blue' },
]

function StatCard({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode
  label: string
  value: string
  detail: string
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="panel relative overflow-hidden p-5"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="mb-5 flex items-center justify-between">
        <span className="text-cyan-300">{icon}</span>
        <ChevronRight className="h-4 w-4 text-slate-500" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-tight text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{detail}</p>
    </motion.article>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-grid text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-white/10 p-2 text-slate-400 lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div className="logo-mark">LO</div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">Life Organizer</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-400">Command Center · Level 01</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold text-slate-200">Viernes, 4 de septiembre</p>
              <p className="text-[11px] text-emerald-400">Langostini operativo</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-lg">🦐</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.26em] text-cyan-400">Panel principal</p>
            <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Buenos días, <span className="text-gradient">Feña.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-slate-400">Hoy no necesitas hacerlo todo. Necesitas completar el siguiente bloque.</p>
          </div>
          <button className="primary-button">
            <CheckCircle2 className="h-4 w-4" /> Registrar progreso
          </button>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={<AlarmClock />} label="Próxima alarma" value="07:30" detail="Despertar · mañana" />
          <StatCard icon={<Flame />} label="Racha despertar" value="2 días" detail="Falta 1 día para insignia" />
          <StatCard icon={<Gauge />} label="Progreso de hoy" value="60%" detail="3 de 5 objetivos" />
          <StatCard icon={<Trophy />} label="Experiencia" value="240 XP" detail="Nivel 1 · 60 XP restantes" />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="panel p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="eyebrow">Agenda táctica</p>
                <h2 className="section-title">Horario de hoy</h2>
              </div>
              <CalendarDays className="h-5 w-5 text-cyan-400" />
            </div>
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="schedule-row"
                >
                  <div className="w-14 font-mono text-sm font-bold text-slate-400">{item.time}</div>
                  <div className={`activity-line activity-${item.color}`} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold text-slate-100">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.type}</p>
                  </div>
                  <button className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300">
                    Ver
                  </button>
                </motion.div>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <article className="panel p-5 md:p-6">
              <p className="eyebrow">Objetivo prioritario</p>
              <div className="mt-4 flex items-start gap-4">
                <div className="rounded-xl bg-violet-500/15 p-3 text-violet-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-black">Bloque de estudio</h2>
                  <p className="mt-1 text-sm text-slate-400">Completa 90 minutos para ganar 40 XP.</p>
                </div>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div initial={{ width: 0 }} animate={{ width: '45%' }} className="h-full rounded-full bg-violet-500" />
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>40 min</span><span>90 min</span>
              </div>
            </article>

            <article className="panel p-5 md:p-6">
              <p className="eyebrow">Insignia próxima</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="badge-orbit"><Flame className="h-7 w-7" /></div>
                <div>
                  <h2 className="font-black">Primer impulso</h2>
                  <p className="text-sm text-slate-400">Despierta a la hora durante 3 días.</p>
                  <p className="mt-1 text-xs font-bold text-amber-300">2 / 3 días</p>
                </div>
              </div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  )
}

