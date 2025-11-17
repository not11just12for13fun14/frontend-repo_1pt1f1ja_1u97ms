import React from 'react'

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-emerald-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white">Cook smarter this week</h2>
        <p className="mt-3 text-emerald-100 max-w-2xl mx-auto">Start a free trial and see how much time you save planning, shopping, and cooking.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Start free trial</a>
          <p className="text-emerald-100 text-sm">No credit card required</p>
        </div>
      </div>
    </section>
  )
}
