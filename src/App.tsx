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
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
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
