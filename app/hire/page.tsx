import type { Metadata } from 'next'

// 受注専用ページ。トップ(/)は自己紹介、ここは「何を・いくらで・何日で」に答えて
// 見積もり相談まで運ぶための営業用1枚。提案文やDMに貼って使う。

export const metadata: Metadata = {
  title: 'Web制作・業務ツール開発のご依頼 | 小野 陽広',
  description:
    'ページ1枚 ¥35,000〜・3日納品。業務ツール/Webアプリ ¥80,000〜。59本のWebアプリを公開してきた開発者が、最短3日で形にします。',
  openGraph: {
    title: 'Web制作・業務ツール開発のご依頼 | 小野 陽広',
    description: 'ページ1枚 ¥35,000〜・3日納品。触れる実績55本。',
    locale: 'ja_JP',
    type: 'website',
  },
}

const MENU = [
  {
    n: '01',
    title: 'ページを1枚つくる',
    for: '店舗・個人事業・サービスの紹介ページ',
    price: '¥35,000',
    days: '3日',
    items: ['デザインから実装まで', 'スマホ対応', '問い合わせフォーム', '公開作業まで込み'],
  },
  {
    n: '02',
    title: '今あるサイトを直す',
    for: 'スマホで崩れる・遅い・古い・フォームが動かない',
    price: '¥15,000',
    days: '2日',
    items: ['表示崩れの修正', 'スマホ対応', '表示速度の改善', '問い合わせフォームの復旧'],
  },
  {
    n: '03',
    title: '業務ツール / Webアプリ',
    for: 'Excelや手作業でやっている集計・予約・在庫・見積もり',
    price: '¥80,000',
    days: '7日〜',
    items: ['要件整理から', 'ログイン・データ保存', '管理画面', '公開・運用の引き継ぎ'],
  },
  {
    n: '04',
    title: 'AIを組み込む',
    for: '問い合わせ対応・文章生成・社内文書の検索',
    price: '¥50,000',
    days: '5日〜',
    items: ['用途に合わせた設計', '既存サイトへの組み込み', '運用コストの試算', '使い方の説明つき'],
  },
]

const WORKS = [
  { name: 'PickPC', desc: '4問でPCを提案する診断サイト。23機種収録', url: 'https://pickpc.vercel.app' },
  { name: 'BuildFlow AI', desc: '建設業向け。30秒で積算を出すSaaS', url: 'https://buildflow-ai-six.vercel.app' },
  { name: 'ProposalHub', desc: '提案文生成×案件管理×売上分析', url: 'https://proposalhub-smoky.vercel.app' },
  { name: 'NeuroSprint', desc: '英語圏向け。毎日の脳力ベンチマーク', url: 'https://playneurosprint.vercel.app' },
  { name: '偏差値シリーズ', desc: '12種類の診断テスト。シェア機能つき', url: 'https://renai-hensachi.vercel.app' },
  { name: 'SubTrack', desc: 'サブスク管理。Stripe決済つきSaaS', url: 'https://ms-subtrack.vercel.app' },
  { name: 'MUSOU 3D', desc: 'ブラウザで動く3Dアクションゲーム', url: 'https://musou-3d.vercel.app' },
  { name: 'ImageSqueeze', desc: '画像圧縮ツール。ブラウザ内で完結', url: 'https://ms-imagesqueeze.vercel.app' },
]

const STEPS = [
  { t: 'ご相談', d: 'Xの DM で「何に困っているか」を一言だけ。仕様が固まっていなくて大丈夫です', cost: '無料' },
  { t: 'お見積り', d: '内容・金額・納期を当日中にお返しします。ここで断っていただいても費用はかかりません', cost: '無料' },
  { t: '着手金', d: 'ご依頼が決まったら、お見積り金額の50%をお支払いいただいて制作を開始します', cost: '50%' },
  { t: '制作', d: '毎日その日の進捗をお送りします。途中で方向を変えたい場合も遠慮なくどうぞ', cost: '—' },
  { t: '確認・修正', d: '実際に触れる状態でご確認いただき、修正します（公開後1週間まで無料）', cost: '—' },
  { t: '公開・残金', d: '公開作業まで行い、残り50%をご請求します。請求書・領収書を発行します', cost: '50%' },
]

const FAQ = [
  {
    q: '学生に頼んで大丈夫ですか？',
    a: '肩書きではなく、実際に動いているものでご判断ください。上の実績はすべて今その場で触れます。59本を公開し、うち55本が現在も稼働中です。',
  },
  {
    q: 'なぜその納期で作れるのですか？',
    a: 'AIを使った開発の進め方を、59本ぶん自分で運用してきたからです。やることが決まっていれば、設計と実装を同時に進められます。要件が固まっていない段階からのご相談も歓迎です。',
  },
  {
    q: '途中で連絡が取れなくなりませんか？',
    a: '平日は24時間以内に必ず返信します。制作中は毎日その日の進捗をお送りします。返信が2日途切れたら、着手金は全額返金します。',
  },
  {
    q: '作ったものの権利はどうなりますか？',
    a: '納品物（ソースコード・デザイン・文章）の権利はすべてお客様のものです。こちらの実績として掲載してよいかは、別途ご相談させてください。',
  },
  {
    q: '見積りより高くなることはありますか？',
    a: 'ありません。お見積り後に金額が変わるのは、お客様から追加のご依頼があった場合だけです。その場合も必ず事前にお伝えします。',
  },
]

export default function HirePage() {
  return (
    <main style={{ background: 'var(--bg)', color: 'var(--text)' }} className="min-h-dvh">
      <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-20 flex flex-col gap-16">
        {/* hero */}
        <header className="flex flex-col gap-5">
          <p className="text-xs tracking-[0.3em]" style={{ color: 'var(--gold)' }}>
            WEB制作・業務ツール開発
          </p>
          <h1 className="text-3xl sm:text-5xl font-black leading-[1.25]">
            Webサイトも業務ツールも、
            <br />
            <span style={{ color: 'var(--gold)' }}>最短3日</span>で形にします。
          </h1>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#cbd5e1' }}>
            小野 陽広（おの ひろひさ）／ 公立千歳科学技術大学 理工学部 3年。
            これまでに59本のWebアプリを作って公開し、55本が今も動いています。
            下の実績は、すべてこの場でクリックして触れます。
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="https://x.com/Yoko_ai_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-6 py-3.5 font-bold text-sm"
              style={{ background: 'var(--gold)', color: '#1a1206' }}
            >
              Xで相談する（無料・返信24時間以内）
            </a>
            <a
              href="#menu"
              className="rounded-xl px-6 py-3.5 font-bold text-sm"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              料金を見る
            </a>
          </div>
        </header>

        {/* menu */}
        <section id="menu" className="flex flex-col gap-5">
          <h2 className="text-2xl font-black">できること・料金</h2>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            表示は税込・最低金額です。内容をうかがってから正式にお見積りします。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {MENU.map((m) => (
              <div
                key={m.n}
                className="rounded-2xl p-5 flex flex-col gap-3"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs tracking-widest" style={{ color: 'var(--muted)' }}>
                    {m.n}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}>
                    最短 {m.days}
                  </span>
                </div>
                <h3 className="text-lg font-black">{m.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  こんな方に: {m.for}
                </p>
                <p className="text-2xl font-black" style={{ color: 'var(--gold)' }}>
                  {m.price}
                  <span className="text-xs font-bold" style={{ color: 'var(--muted)' }}>
                    {' '}〜
                  </span>
                </p>
                <ul className="flex flex-col gap-1.5 text-xs" style={{ color: '#cbd5e1' }}>
                  {m.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: 'var(--gold)' }}>✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* works */}
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-black">実績（今すぐ触れます）</h2>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            スクリーンショットではなく、動いている本物です。クリックして確かめてください。
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {WORKS.map((w) => (
              <a
                key={w.name}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-4 py-3.5 flex items-start justify-between gap-3 transition-colors"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              >
                <span className="min-w-0">
                  <span className="block font-bold text-sm">{w.name}</span>
                  <span className="block text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                    {w.desc}
                  </span>
                </span>
                <span style={{ color: 'var(--gold)' }}>↗</span>
              </a>
            ))}
          </div>
          <a href="/" className="text-sm font-bold" style={{ color: 'var(--gold)' }}>
            プロフィールと全作品を見る →
          </a>
        </section>

        {/* steps */}
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-black">ご依頼から公開までの流れ</h2>
          <ol className="flex flex-col">
            {STEPS.map((s, i) => (
              <li
                key={s.t}
                className="grid gap-3 py-4"
                style={{
                  gridTemplateColumns: '2.2rem 1fr auto',
                  borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                }}
              >
                <span className="text-sm font-black" style={{ color: 'var(--gold)' }}>
                  {i + 1}
                </span>
                <span>
                  <span className="block font-bold text-sm">{s.t}</span>
                  <span className="block text-xs mt-1 leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {s.d}
                  </span>
                </span>
                <span className="text-xs font-bold whitespace-nowrap" style={{ color: s.cost === '無料' ? 'var(--gold)' : 'var(--muted)' }}>
                  {s.cost}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* faq */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-black">よくいただく質問</h2>
          <div className="flex flex-col gap-3">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl p-5" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <p className="font-bold text-sm">{f.q}</p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: '#cbd5e1' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* cta */}
        <section
          className="rounded-2xl p-7 flex flex-col gap-4"
          style={{ background: 'var(--bg2)', border: '1px solid var(--gold)' }}
        >
          <h2 className="text-2xl font-black">まず、困っていることだけ教えてください</h2>
          <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
            仕様も予算も決まっていなくて大丈夫です。「スマホで見ると崩れる」「毎月の集計が手作業でつらい」
            の一言から始められます。見積りまでは無料で、そこで終わっても費用は一切かかりません。
          </p>
          <a
            href="https://x.com/Yoko_ai_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-6 py-4 font-bold text-center"
            style={{ background: 'var(--gold)', color: '#1a1206' }}
          >
            X（@Yoko_ai_dev）のDMで相談する
          </a>
          <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
            平日24時間以内に返信します
          </p>
        </section>
      </div>
    </main>
  )
}
