import Header from './components/Header'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900">
      <Header />
      <main>
        <Greeting />
        <Counter />
      </main>
      <Footer />
    </div>
  )
}

export default App
