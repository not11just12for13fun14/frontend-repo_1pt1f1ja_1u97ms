import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-white to-emerald-50" id="home">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              AI meal planning for real life
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Smarter recipes. Zero stress.
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Turn what you have into meals you love. Get personalized recipes, grocery lists, and nutrition in seconds — powered by AI.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Try it free</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">See how it works</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=1" alt="user1" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=2" alt="user2" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=3" alt="user3" />
              </div>
              <span>Trusted by 5k+ home cooks</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-lg rounded-2xl border border-emerald-200 bg-white p-4 shadow-xl">
              <img className="rounded-xl" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop" alt="food" />
            </div>
            <div className="absolute -right-6 -bottom-6 hidden sm:block">
              <div className="h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
