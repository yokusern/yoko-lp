'use client'

import { useEffect, useRef, useState } from 'react'
import SurveySection from '@/components/SurveySection'

/* ── Data ─────────────────────────────────────────────────────────────────── */

const ROLES = ['個人開発者', 'SaaS Builder', 'Next.js エンジニア', 'プロダクト志向のエンジニア']

const STATS = [
  { n: 59,  suffix: '',  label: 'アプリを製作' },
  { n: 3,   suffix: '',  label: 'ヶ月で達成' },
  { n: 5,   suffix: '+', label: 'SaaS 本番稼働' },
  { n: 100, suffix: '+', label: '万を目指して' },
]

const PROJECTS = [
  {
    emoji: '🎓',
    tag: '大学生向け',
    name: 'サボナビ',
    desc: '「今日の授業、休んでいい？」を1秒で判定。過去問・就活情報の共有コミュニティ付き。',
    url: 'https://sabonavi-web.vercel.app',
  },
  {
    emoji: '🤖',
    tag: 'SaaS',
    name: 'ProposalHub',
    desc: 'AI提案文生成 × 案件カンバン × 売上分析。フリーランスの営業を一本化するSaaS。',
    url: 'https://proposalhub-smoky.vercel.app',
  },
  {
    emoji: '💻',
    tag: '診断ツール',
    name: 'PickPC',
    desc: '4問でPCを提案する診断サイト。23機種・13メーカー収録。Amazon アフィリエイト連携。',
    url: 'https://pickpc.vercel.app',
  },
  {
    emoji: '🏗️',
    tag: '建設DX',
    name: 'BuildFlow AI',
    desc: '工事種別と施工面積を入れるだけでAIが30秒で積算を完了。建設業界向けSaaS。',
    url: 'https://buildflow-ai-six.vercel.app',
  },
]

const SKILLS_CORE = ['TypeScript', 'Next.js', 'React', 'Firebase']
const SKILLS_REST = ['Firestore', 'Stripe', 'Tailwind CSS', 'D3.js', 'Node.js', 'Python', 'Vercel', 'GAS', 'Expo / React Native']

const LINKS = [
  { icon: '𝕏', label: 'X (Twitter)', sub: '@Yoko_ai_dev',          url: 'https://x.com/Yoko_ai_dev',                     hue: '0,0%,0%' },
  { icon: '📝', label: 'note',         sub: 'note.com/yoko_ai_logic', url: 'https://note.com/yoko_ai_logic',               hue: '171,57%,51%' },
  { icon: '🚀', label: 'Portfolio',    sub: '59本収録',                url: 'https://yokoportofolio.vercel.app',            hue: '239,84%,62%' },
  { icon: '📸', label: 'Instagram',    sub: '@yoncornrow',            url: 'https://www.instagram.com/yoncornrow/',        hue: '340,82%,59%' },
  { icon: '💼', label: 'LinkedIn',     sub: '小野 陽広',               url: 'https://www.linkedin.com/in/陽広-小野-9018b439a',        hue: '199,100%,35%' },
  { icon: '✉️', label: 'DM 受付中',    sub: 'X のDMへどうぞ',          url: 'https://x.com/Yoko_ai_dev',                   hue: '239,60%,50%' },
]

/* ── Canvas Particles ─────────────────────────────────────────────────────── */

type Pt = { x: number; y: number; vx: number; vy: number; r: number }

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let pts: Pt[] = []
    let raf: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      pts = Array.from({ length: 90 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.4 + 0.4,
      }))
    }

    const draw = () => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)

      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 130) * 0.22})`
            ctx.lineWidth = 0.5
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
        const md = Math.hypot(pts[i].x - mouse.current.x, pts[i].y - mouse.current.y)
        if (md < 180) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(139,92,246,${(1 - md / 180) * 0.45})`
          ctx.lineWidth = 0.8
          ctx.moveTo(pts[i].x, pts[i].y)
          ctx.lineTo(mouse.current.x, mouse.current.y)
          ctx.stroke()
        }
      }

      for (const p of pts) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148,163,184,0.55)`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const onMouse = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY } }
    const onTouch = (e: TouchEvent) => {
      mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.55 }}
    />
  )
}

/* ── Hooks ────────────────────────────────────────────────────────────────── */

function useTypewriter(words: string[], speed = 85, pause = 2400) {
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[wi]
    if (!del && ci < word.length) {
      const t = setTimeout(() => setCi(c => c + 1), speed)
      return () => clearTimeout(t)
    }
    if (!del && ci === word.length) {
      const t = setTimeout(() => setDel(true), pause)
      return () => clearTimeout(t)
    }
    if (del && ci > 0) {
      const t = setTimeout(() => setCi(c => c - 1), speed / 2.2)
      return () => clearTimeout(t)
    }
    if (del && ci === 0) {
      setDel(false)
      setWi(w => (w + 1) % words.length)
    }
  })

  return words[wi].slice(0, ci)
}

function useCounter(target: number, duration = 1600) {
  const [val, setVal] = useState(0)
  const [go, setGo] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !go) { setGo(true); io.disconnect() }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [go])

  useEffect(() => {
    if (!go) return
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [go, target, duration])

  return { ref, val }
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('revealed'); io.disconnect() }
    }, { threshold: 0.08 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/* ── Progress Bar ─────────────────────────────────────────────────────────── */

function ProgressBar() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const s = document.documentElement
      setPct((s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="progress-bar" style={{ width: `${pct}%` }} />
}

/* ── Counter Cell ─────────────────────────────────────────────────────────── */

function CounterCell({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const { ref, val } = useCounter(n)
  return (
    <div ref={ref} className="number-cell">
      <div className="number-n">
        {val}<span className="number-unit">{suffix}</span>
      </div>
      <div className="number-label">{label}</div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function Page() {
  const role = useTypewriter(ROLES)

  const r1 = useReveal(); const r2 = useReveal()
  const r3 = useReveal(); const r4 = useReveal()
  const r5 = useReveal(); const r6 = useReveal()

  return (
    <>
      <ProgressBar />
      <ParticleCanvas />

      {/* ── Nav ── */}
      <nav className="lp-nav">
        <span className="logo">YO-KO</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#connect">Connect</a></li>
          <li><a href="/hire">ご依頼</a></li>
        </ul>
      </nav>

      <main style={{ position: 'relative', zIndex: 10 }}>

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-eyebrow">大学3年生 × 個人開発者</div>
          <h1 className="hero-name">YO-KO</h1>
          <p className="hero-sub">小野 陽広 / Ono Hirohisa</p>

          <div className="typewriter-wrap">
            <span className="typewriter-role">{role}</span>
            <span className="tw-cursor" />
          </div>

          <div className="hero-cta">
            <a href="https://yokoportofolio.vercel.app" className="btn-primary">
              ポートフォリオを見る →
            </a>
            <a href="/hire" className="btn-secondary">
              制作のご依頼・料金 →
            </a>
            <a href="https://x.com/Yoko_ai_dev" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              𝕏 フォローする
            </a>
          </div>

          <div className="hero-pills">
            <span className="hero-pill"><strong>59本</strong>のアプリを製作</span>
            <span className="hero-pill"><strong>3ヶ月</strong>で達成</span>
            <span className="hero-pill">公立千歳科学技術大学</span>
            <span className="hero-pill">電子光工学科 3年</span>
          </div>
        </section>

        {/* ── Numbers ── */}
        <div id="about" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
          <div ref={r1} className="reveal numbers-grid">
            {STATS.map(s => (
              <CounterCell key={s.label} n={s.n} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>

        {/* ── Story ── */}
        <section className="section">
          <div ref={r2} className="reveal section-label"><span>About</span></div>
          <div ref={r3} className="reveal story-card">
            <p className="story-text">
              北海道の大学で<strong>電子光工学</strong>を学びながら、
              深夜にコードを書き続けています。<br /><br />
              最初の1本を作ってから<strong>59本のWebアプリ</strong>を製作し、55本が今も稼働中。
              TypeScript / Next.js / Firebase を軸に、
              アイデアを<strong>最短1〜3日でプロダクトに変える</strong>開発者です。<br /><br />
              目指しているのは「副業の月5万」じゃない。
              <span className="gold">スケールするSaaSで、億を超えること。</span><br /><br />
              SaaSのMRRを月100万にすることを目標に、
              今日も動いています。
            </p>
            <div className="story-meta">
              <div className="story-avatar">YO</div>
              <div className="story-info">
                <p>小野 陽広（YO-KO）</p>
                <span>公立千歳科学技術大学 / 理工学部 電子光工学科 3年</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="works" className="section" style={{ paddingTop: 0 }}>
          <div ref={r4} className="reveal section-label"><span>Selected Works</span></div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="project-arrow">↗</div>
                <span className="project-emoji">{p.emoji}</span>
                <span className="project-tag">{p.tag}</span>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
              </a>
            ))}
          </div>
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <a
              href="https://yokoportofolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              全59本のプロダクトを見る →
            </a>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section" style={{ paddingTop: 0 }}>
          <div ref={r6} className="reveal section-label"><span>Skills</span></div>
          <div className="skills-wrap">
            {SKILLS_CORE.map(s => (
              <span key={s} className="skill-tag core">{s}</span>
            ))}
            {SKILLS_REST.map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </section>

        {/* ── Survey ── */}
        <SurveySection />

        {/* ── Connect ── */}
        <section id="connect" className="section" style={{ paddingTop: 0 }}>
          <div className="reveal revealed section-label"><span>Connect</span></div>
          <div className="links-grid">
            {LINKS.map(l => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `hsla(${l.hue},0.4)`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px rgba(0,0,0,0.4), 0 0 20px hsla(${l.hue},0.15)`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = ''
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                }}
              >
                <span className="link-icon">{l.icon}</span>
                <span className="link-label">{l.label}</span>
                <span className="link-sub">{l.sub}</span>
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="lp-footer">
        <p>© 2026 YO-KO（小野 陽広）· 公立千歳科学技術大学 在学中 · Built with Next.js · Hosted on Vercel</p>
      </footer>
    </>
  )
}
