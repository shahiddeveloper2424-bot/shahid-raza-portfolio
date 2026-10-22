import React, { useEffect, useState } from 'react'

/**
 * TaskFlow — a small, genuinely working to-do demo that lives inside this
 * portfolio. Self-contained: no backend, no account. Tasks persist in the
 * visitor's own browser via localStorage and never leave the device.
 */
const STORAGE_KEY = 'taskflow-demo-v1'

const SEED = [
  { id: 'seed-1', text: 'Review the project brief and agree the scope', done: true },
  { id: 'seed-2', text: 'Design the homepage and product cards', done: true },
  { id: 'seed-3', text: 'Build the checkout flow', done: false },
  { id: 'seed-4', text: 'Test on mobile and ship the update', done: false },
]

function loadTasks() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === null) return SEED
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : SEED
  } catch {
    return SEED
  }
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
]

export default function TaskFlowDemo() {
  const [tasks, setTasks] = useState(loadTasks)
  const [draft, setDraft] = useState('')
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch {
      /* storage unavailable — the demo still works for this session */
    }
  }, [tasks])

  const counts = {
    all: tasks.length,
    pending: tasks.filter((t) => !t.done).length,
    completed: tasks.filter((t) => t.done).length,
  }
  const visible = tasks.filter((t) => (filter === 'all' ? true : filter === 'pending' ? !t.done : t.done))

  const addTask = (e) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) {
      setError('Write the task first — empty tasks are not added.')
      return
    }
    setTasks((prev) => [{ id: `t-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, text, done: false }, ...prev])
    setDraft('')
    setError('')
  }

  const toggle = (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  const remove = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))
  const clearCompleted = () => setTasks((prev) => prev.filter((t) => !t.done))

  const startEdit = (task) => {
    setEditingId(task.id)
    setEditText(task.text)
  }
  const saveEdit = () => {
    const text = editText.trim()
    if (!text) return // keep editing; an empty edit is not saved
    setTasks((prev) => prev.map((t) => (t.id === editingId ? { ...t, text } : t)))
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="rounded-3xl border border-line bg-card p-5 shadow-soft sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold text-ink">TaskFlow</h3>
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
          {counts.pending} pending · {counts.completed} completed
        </p>
      </div>

      <form onSubmit={addTask} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="taskflow-new">New task</label>
        <input
          id="taskflow-new"
          value={draft}
          onChange={(e) => { setDraft(e.target.value); if (error) setError('') }}
          placeholder="Add a task — e.g. Call the client at 4pm"
          className="w-full flex-1 rounded-full border border-line bg-paper px-5 py-3 text-[15px] text-ink placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <button type="submit" className="btn-primary shrink-0">Add task</button>
      </form>
      {error && <p role="alert" className="mt-2.5 text-sm text-cyan">{error}</p>}

      <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter tasks">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors ${filter === f.key ? 'border-accent bg-accent/15 text-ink' : 'border-line text-soft hover:border-accent/60 hover:text-ink'}`}
          >
            {f.label} · {counts[f.key]}
          </button>
        ))}
        {counts.completed > 0 && (
          <button type="button" onClick={clearCompleted} className="ml-auto font-display text-sm font-semibold text-soft underline decoration-line underline-offset-4 hover:text-ink">
            Clear completed
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-line px-6 py-10 text-center">
          <p className="font-display text-lg font-semibold text-ink">
            {tasks.length === 0 ? 'No tasks yet' : filter === 'pending' ? 'Nothing pending' : 'Nothing completed yet'}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-soft">
            {tasks.length === 0
              ? 'Add your first task above — it will be saved in this browser, so it is still here when you come back.'
              : filter === 'pending'
                ? 'Everything on your list is done. Switch to All to see the full list.'
                : 'Complete a task and it will show up here.'}
          </p>
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line">
          {visible.map((task) => (
            <li key={task.id} className="flex items-center gap-3 bg-paper/40 px-4 py-3.5 sm:px-5">
              <button
                type="button"
                onClick={() => toggle(task.id)}
                aria-pressed={task.done}
                aria-label={task.done ? `Mark “${task.text}” as pending` : `Mark “${task.text}” as complete`}
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[13px] transition-colors ${task.done ? 'border-accent bg-accent text-white' : 'border-line text-transparent hover:border-accent'}`}
              >
                ✓
              </button>
              {editingId === task.id ? (
                <span className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') saveEdit(); if (e.key === 'Escape') setEditingId(null) }}
                    autoFocus
                    aria-label="Edit task"
                    className="w-full flex-1 rounded-full border border-accent bg-paper px-4 py-2 text-[15px] text-ink focus:outline-none"
                  />
                  <span className="flex gap-2">
                    <button type="button" onClick={saveEdit} className="font-display text-sm font-semibold text-accent hover:text-cyan">Save</button>
                    <button type="button" onClick={() => setEditingId(null)} className="font-display text-sm font-semibold text-soft hover:text-ink">Cancel</button>
                  </span>
                </span>
              ) : (
                <>
                  <span className={`flex-1 text-[15px] leading-snug ${task.done ? 'text-muted line-through' : 'text-ink'}`}>{task.text}</span>
                  <button type="button" onClick={() => startEdit(task)} className="font-display text-sm font-semibold text-soft hover:text-accent">Edit</button>
                  <button type="button" onClick={() => remove(task.id)} className="font-display text-sm font-semibold text-soft hover:text-ink" aria-label={`Delete “${task.text}”`}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-5 font-mono text-[10px] uppercase tracking-widest2 text-muted">
        Demo data lives only in this browser · localStorage
      </p>
    </div>
  )
}
