import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
        <div className="md:flex items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">A tiny interactive demo</h3>
            <p className="mt-2 text-gray-600">Click the button and watch the number grow.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <span className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-lg bg-gray-100 px-4 text-xl font-semibold text-gray-900">
              {count}
            </span>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700 active:scale-[0.99]"
              aria-label="Increase counter"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(0)}
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-50"
              aria-label="Reset counter"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
