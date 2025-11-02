import { Rocket } from 'lucide-react'

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow">
            <Rocket className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm text-gray-500 leading-none">Welcome to</p>
            <h1 className="text-lg font-semibold text-gray-900 leading-tight">Hello World</h1>
          </div>
        </div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          Powered by Vite + React
        </a>
      </div>
    </header>
  )
}

export default Header
