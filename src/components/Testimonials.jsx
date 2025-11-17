import React from 'react'

const testimonials = [
  {
    quote: 'I spend half the time planning and still eat better than ever. The AI is scarily good at using leftovers.',
    name: 'Aisha',
    role: 'Busy parent',
  },
  {
    quote: 'Swapped takeout for quick, healthy dinners. Grocery list is a game changer.',
    name: 'Marco',
    role: 'Software engineer',
  },
  {
    quote: 'Finally a tool that respects my allergies and culture. Recipes feel like they were written for me.',
    name: 'Priya',
    role: 'Nutrition student',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Loved by home cooks</h2>
          <p className="mt-3 text-slate-600">Real results from people who cook daily.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{t.name} <span className="text-slate-500 font-normal">— {t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
