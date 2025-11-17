import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-7 w-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600" />
            <span className="text-sm font-semibold">Recipli</span>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Recipli, Inc. All rights reserved.</p>
          <div className="text-xs text-slate-500 flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
