import { Globe, Sparkles } from 'lucide-react'

function Greeting() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/50 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium">Just started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Hello, World!
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-prose">
            A minimal, beautiful starter showcasing a classic greeting with modern styling. Tweak it, extend it, and make it yours.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800"
            >
              <Globe className="h-4 w-4" />
              Learn Tailwind
            </a>
            <a
              href="https://react.dev/learn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow border border-gray-200 hover:bg-gray-50"
            >
              React Basics
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-lg">
            <div className="h-full w-full rounded-2xl bg-white grid place-items-center">
              <div className="text-center p-6">
                <Globe className="mx-auto h-16 w-16 text-indigo-600" />
                <p className="mt-4 text-xl font-semibold text-gray-900">You just said it 👋</p>
                <p className="mt-2 text-gray-600">This is your canvas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Greeting
