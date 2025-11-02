function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
        <p>© {year} Hello World Starter</p>
        <p className="text-gray-500">
          Built with love, styled with Tailwind
        </p>
      </div>
    </footer>
  )
}

export default Footer
