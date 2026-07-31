import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <Navbar />
      <Hero />
    </div>
  )
}

export default App
