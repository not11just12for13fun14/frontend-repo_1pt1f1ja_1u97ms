import React from 'react'
import { Sparkles, ListChecks, Utensils, ShoppingCart, Soup } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
        <Icon size={18} />
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
  </div>
)

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to plan meals</h2>
          <p className="mt-3 text-slate-600">From recipe inspiration to grocery delivery — simplify the entire flow.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={Sparkles} title="AI Recipe Ideas" desc="Tell us your ingredients, diet, and time. Get tailored recipes instantly." />
          <Feature icon={ListChecks} title="Weekly Meal Plans" desc="Auto-generate balanced plans that fit your goals and calendar." />
          <Feature icon={ShoppingCart} title="Smart Grocery Lists" desc="One-click lists grouped by aisle with quantities and substitutions." />
          <Feature icon={Utensils} title="Step-by-step Cooking" desc="Beautiful, guided steps with timers, tips, and voice control." />
          <Feature icon={Soup} title="Nutrition Insights" desc="Calories, macros, and allergens calculated for every recipe." />
          <Feature icon={Sparkles} title="Personalization" desc="Learns your taste over time and adapts to seasonal produce." />
        </div>
      </div>
    </section>
  )
}
