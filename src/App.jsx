import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6'
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.6
        ctx.fill()

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = p.color
            ctx.globalAlpha = 0.1 * (1 - dist / 120)
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-900 relative z-10">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Authority Scale AI" className="w-10 h-10" />
          <span className="text-2xl font-bold">Authority Scale AI</span>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition cursor-pointer">
          Book a Call
        </button>
      </nav>

      {/* Hero Section with Particle Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated Particles */}
        <ParticleBackground />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

        <div className="relative z-10 px-8 text-center max-w-5xl mx-auto -mt-20">
        <p className="text-blue-500 font-semibold mb-4 tracking-wide uppercase">AI UGC Testimonials & Authority Content</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          AI-Authority Marketing for
          <span className="text-blue-500"> Founders, Doctors & Brands</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Clone yourself with AI video, build AI social media testimonials, and generate more leads than you can handle — all on autopilot.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
            Get Started Today
          </button>
          <button className="border border-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-500 transition cursor-pointer">
            See Examples
          </button>
        </div>

        {/* Trusted By Logos */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-8 uppercase tracking-wider">Trusted by leading clinics & brands</p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            {/* Stake */}
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight" style={{fontFamily: 'system-ui'}}>Stake</span>
            </div>
            {/* VaynerMedia */}
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight">VAYNER</span>
              <span className="text-xl font-light">MEDIA</span>
            </div>
            {/* Formula E */}
            <div className="flex items-center gap-1 italic">
              <span className="text-xl font-light tracking-wide">formula</span>
              <span className="text-2xl font-black text-blue-400">E</span>
            </div>
            {/* RegenixMD */}
            <div className="flex items-center gap-2">
              <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-lg font-light tracking-wide">REGENIX</span>
              <span className="text-lg font-bold text-emerald-400">MD</span>
            </div>
            {/* EliteTRT */}
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>
              </svg>
              <span className="text-lg font-black tracking-tighter">ELITE</span>
              <span className="text-lg font-light text-red-500">TRT</span>
            </div>
            {/* Tencent */}
            <div className="flex items-center gap-1">
              <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <span className="text-lg font-medium">Tencent</span>
            </div>
            {/* Fashion Nova */}
            <div className="flex items-center">
              <span className="text-lg font-light tracking-widest">FASHION</span>
              <span className="text-lg font-black">NOVA</span>
            </div>
            {/* StemCell Pro */}
            <div className="flex items-center gap-1">
              <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="19" r="2"/>
                <circle cx="5" cy="12" r="2"/>
                <circle cx="19" cy="12" r="2"/>
              </svg>
              <span className="text-lg font-bold">STEM</span>
              <span className="text-lg font-light text-cyan-400">CELL</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-950 border-y border-gray-900 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-8">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-500">10K+</div>
            <div className="text-gray-400 mt-2">Clipper Network Reach</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-500">500M+</div>
            <div className="text-gray-400 mt-2">Total Media Impressions</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-500">1000s</div>
            <div className="text-gray-400 mt-2">Reddit Posts Deployed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-500">100+</div>
            <div className="text-gray-400 mt-2">Clients Scaled</div>
          </div>
        </div>
      </section>

      {/* AI UGC Video Examples - 9:16 Vertical Videos */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">AI UGC Content Examples</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            AI-generated testimonials that build trust and authority content that positions you as the go-to expert in your field.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Video Placeholder 1 */}
            <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 hover:border-blue-500 transition overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                alt="Professional woman"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition"
              />
              <div className="text-center p-4 relative z-10">
                <div className="text-6xl mb-4">▶</div>
                <p className="text-white text-sm font-medium">AI UGC Video 1</p>
              </div>
            </div>
            {/* Video Placeholder 2 */}
            <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 hover:border-blue-500 transition overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                alt="Doctor professional"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition"
              />
              <div className="text-center p-4 relative z-10">
                <div className="text-6xl mb-4">▶</div>
                <p className="text-white text-sm font-medium">AI UGC Video 2</p>
              </div>
            </div>
            {/* Video Placeholder 3 */}
            <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 hover:border-blue-500 transition overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt="Business professional"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition"
              />
              <div className="text-center p-4 relative z-10">
                <div className="text-6xl mb-4">▶</div>
                <p className="text-white text-sm font-medium">AI UGC Video 3</p>
              </div>
            </div>
            {/* Video Placeholder 4 */}
            <div className="aspect-[9/16] bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 hover:border-blue-500 transition overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1556157382-97edd2d93e38?w=400&q=80"
                alt="Lawyer professional"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition"
              />
              <div className="text-center p-4 relative z-10">
                <div className="text-6xl mb-4">▶</div>
                <p className="text-white text-sm font-medium">AI UGC Video 4</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="px-8 py-24 bg-gray-950 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">Our 3-Step Process</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A proven system to build your authority, generate leads, and dominate search rankings.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-black/80 backdrop-blur p-8 rounded-2xl border border-gray-800">
              <div className="text-blue-500 text-5xl font-bold mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">AI UGC + Video Cloning</h3>
              <p className="text-gray-400 mb-6">
                AI testimonials and authority content for Google Ads, Facebook Ads, and organic social. Clone yourself for unlimited content across all channels.
              </p>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>• AI testimonials for paid ads (Google & Meta)</li>
                <li>• Clone yourself for authority content</li>
                <li>• Organic content for TikTok, IG, YouTube</li>
                <li>• Full channel setup & posting schedule</li>
              </ul>
            </div>
            {/* Step 2 */}
            <div className="bg-black/80 backdrop-blur p-8 rounded-2xl border border-gray-800">
              <div className="text-blue-500 text-5xl font-bold mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Lead Generation Machine</h3>
              <p className="text-gray-400 mb-6">
                Get more leads than you can handle. Our sales reps filter and qualify the best prospects so you only talk to buyers.
              </p>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>• High-volume lead generation</li>
                <li>• Dedicated sales rep filtering</li>
                <li>• Pre-qualified prospects only</li>
                <li>• Appointment setting included</li>
              </ul>
            </div>
            {/* Step 3 */}
            <div className="bg-black/80 backdrop-blur p-8 rounded-2xl border border-gray-800">
              <div className="text-blue-500 text-5xl font-bold mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Mass Distribution</h3>
              <p className="text-gray-400 mb-6">
                Proliferate your brand across the internet with our massive clipper network, organic accounts, and strategic Reddit campaigns.
              </p>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>• 1000s of clippers distributing your content</li>
                <li>• 1000s of organic accounts created</li>
                <li>• 1000s of Reddit posts for AI ranking</li>
                <li>• Phone farm engagement at scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Farm & Clipper Network Section */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Phone Farm Visual */}
            <div>
              <div className="bg-gray-950 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold mb-6 text-blue-500">Phone Farm Infrastructure</h3>
                {/* Phone Farm Placeholder */}
                <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                    alt="Phone farm"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="text-center p-4 relative z-10 bg-black/50 rounded-lg">
                    <p className="text-white font-medium">Phone Farm Image/Video</p>
                    <p className="text-gray-300 text-xs mt-1">Replace with your phone farm visual</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-900 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-500">500+</div>
                    <div className="text-gray-500 text-xs">Active Devices</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-500">24/7</div>
                    <div className="text-gray-500 text-xs">Operation</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-500">100%</div>
                    <div className="text-gray-500 text-xs">Real Engagement</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Copy */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Dominate Every Platform</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Our phone farm and clipper network of 10,000+ creates authentic engagement signals that platforms and search engines trust.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold">10K+ Clipper Network</h4>
                    <p className="text-gray-500 text-sm">Massive reach across all social platforms for viral distribution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold">Reddit Campaign Engine</h4>
                    <p className="text-gray-500 text-sm">100-1000s of strategic posts to boost SEO and AI search rankings</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold">ChatGPT & AI Optimization</h4>
                    <p className="text-gray-500 text-sm">Get recommended by AI assistants when people search for your services</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 text-2xl">✓</div>
                  <div>
                    <h4 className="font-semibold">Real Engagement Signals</h4>
                    <p className="text-gray-500 text-sm">Authentic activity that algorithms reward with more visibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Clone Video Section */}
      <section className="px-8 py-24 bg-gray-950 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4">Clone Yourself. Scale Infinitely.</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Your AI clone creates authority content 24/7. Never record another video yourself.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Clone Video Placeholder 1 */}
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center border border-gray-800 hover:border-blue-500 transition overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Doctor speaking"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
              />
              <div className="text-center p-4 relative z-10">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-white font-medium">Founder Clone Example</p>
                <p className="text-gray-300 text-xs mt-2">Before & After Comparison</p>
              </div>
            </div>
            {/* Clone Video Placeholder 2 */}
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center border border-gray-800 hover:border-blue-500 transition overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80"
                alt="Lawyer in office"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition"
              />
              <div className="text-center p-4 relative z-10">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-white font-medium">AI Authority Content</p>
                <p className="text-gray-300 text-xs mt-2">Doctor/Lawyer Clone Demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Reach Section */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Massive Media Reach</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Our network generates billions of impressions. Your content gets seen everywhere.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Instagram */}
            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <svg className="w-8 h-8 mx-auto mb-3" viewBox="0 0 24 24" fill="url(#instaGrad)">
                <defs>
                  <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80"/>
                    <stop offset="25%" stopColor="#F77737"/>
                    <stop offset="50%" stopColor="#E1306C"/>
                    <stop offset="75%" stopColor="#C13584"/>
                    <stop offset="100%" stopColor="#833AB4"/>
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div className="font-semibold">Instagram</div>
              <div className="text-blue-500 text-sm">100M+ Reach</div>
            </div>
            {/* TikTok */}
            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <svg className="w-8 h-8 mx-auto mb-3" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <div className="font-semibold">TikTok</div>
              <div className="text-blue-500 text-sm">200M+ Reach</div>
            </div>
            {/* YouTube */}
            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <svg className="w-8 h-8 mx-auto mb-3" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <div className="font-semibold">YouTube</div>
              <div className="text-blue-500 text-sm">150M+ Reach</div>
            </div>
            {/* Reddit */}
            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <svg className="w-8 h-8 mx-auto mb-3" viewBox="0 0 24 24" fill="#FF4500">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              <div className="font-semibold">Reddit</div>
              <div className="text-blue-500 text-sm">50M+ Reach</div>
            </div>
            {/* LinkedIn */}
            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <svg className="w-8 h-8 mx-auto mb-3" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-blue-500 text-sm">80M+ Reach</div>
            </div>
            {/* ChatGPT */}
            <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <svg className="w-8 h-8 mx-auto mb-3" viewBox="0 0 24 24" fill="#10A37F">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
              </svg>
              <div className="font-semibold">ChatGPT</div>
              <div className="text-blue-500 text-sm">AI Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-24 bg-gray-950 relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale Your Authority?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Join founders, doctors, and lawyers who are dominating their markets with AI-powered marketing.
          </p>
          <button className="bg-white text-black px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-200 transition cursor-pointer">
            Book Your Free Strategy Call
          </button>
          <p className="text-gray-600 mt-6 text-sm">No commitment required. See if we're a fit.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-900 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Authority Scale AI" className="w-8 h-8" />
            <span className="text-xl font-bold">Authority Scale AI</span>
          </div>
          <div className="flex gap-8 text-gray-500">
            <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">Results</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-gray-600 text-sm">&copy; 2025 Authority Scale AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
