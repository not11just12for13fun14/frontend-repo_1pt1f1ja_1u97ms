import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600" />
            <span className="text-lg font-semibold tracking-tight">Recipli</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-900">Customers</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Log in</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Get started</a>
          </div>
          <button aria-label="Open menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm text-slate-700">
              <a onClick={() => setOpen(false)} href="#features" className="py-2">Features</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="py-2">Pricing</a>
              <a onClick={() => setOpen(false)} href="#testimonials" className="py-2">Customers</a>
              <a onClick={() => setOpen(false)} href="#faq" className="py-2">FAQ</a>
              <a onClick={() => setOpen(false)} href="#cta" className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
