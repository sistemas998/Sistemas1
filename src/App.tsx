import Login from './components/Login'

function App() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{ fontFamily: 'var(--font-body)', color: 'white' }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay to make card readable */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(5, 14, 32, 0.55)' }}
      />

      <Login />
    </div>
  )
}

export default App
