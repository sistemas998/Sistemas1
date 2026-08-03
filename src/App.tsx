import Login from './components/Login'

function App() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{ fontFamily: 'var(--font-body)', color: '#021A3C' }}
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
        style={{ background: 'rgba(2, 26, 60, 0.35)' }}
      />

      <Login />
    </div>
  )
}

export default App
