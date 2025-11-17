import React from 'react'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Get started',
    features: [
      '10 AI recipe requests / month',
      'Basic nutrition info',
      'Save 20 favorites',
      'Community support',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9',
    tagline: 'For home cooks',
    features: [
      'Unlimited AI recipes',
      'Weekly meal planning',
      'Smart grocery lists',
      'Advanced nutrition',
      'Sync across devices',
    ],
    cta: 'Start 7-day trial',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$29',
    tagline: 'Families & roommates',
    features: [
      'Everything in Pro',
      'Household profiles',
      'Shared lists & pantry',
      'Allergy coordination',
      'Priority support',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that fits your cooking routine.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlighted ? 'border-slate-900 shadow-lg' : 'border-slate-200'} bg-white p-6`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                  <p className="text-sm text-slate-500">{tier.tagline}</p>
                </div>
                <div className="text-3xl font-extrabold text-slate-900">{tier.price}<span className="text-base font-medium text-slate-500">/mo</span></div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold ${tier.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 text-slate-900 hover:bg-slate-50'}`}>{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
