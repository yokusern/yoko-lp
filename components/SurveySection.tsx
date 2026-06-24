'use client'

import { useState } from 'react'

const SITUATIONS = ['大学生', '社会人', 'フリーランス / 副業中', 'その他'] as const

type State = 'idle' | 'sending' | 'done' | 'error'

export default function SurveySection() {
  const [situation, setSituation] = useState('')
  const [problem, setProblem]     = useState('')
  const [wish, setWish]           = useState('')
  const [contact, setContact]     = useState('')
  const [state, setState]         = useState<State>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!situation) return
    setState('sending')
    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ situation, problem, wish, contact }),
      })
      setState(res.ok ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <section className="section" style={{ paddingTop: 0 }} id="voice">
        <div className="survey-card" style={{ textAlign: 'center', padding: '48px 32px' }}>
          <div style={{ fontSize: 42, marginBottom: 16 }}>🙌</div>
          <h3 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 12px', color: '#f1f5f9', letterSpacing: '-0.02em' }}>
            ありがとうございます！
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, margin: 0 }}>
            教えてくれた内容、次に何を作るかの参考にします。<br />
            連絡先を書いてくれた方には、できれば個別でお礼したいです。
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="section" style={{ paddingTop: 0 }} id="voice">
      <div className="reveal revealed section-label"><span>Voice</span></div>

      <div className="survey-card">
        <h2 className="survey-title">
          困ってること、教えてもらえますか？
        </h2>
        <p className="survey-sub">
          次に何を作るか迷ってます。「これが面倒くさい」「こんなツールがあれば使う」みたいな声が一番参考になります。状況とかも一緒に教えてください。
        </p>

        <form onSubmit={handleSubmit} className="survey-form">

          {/* Q1 */}
          <div className="survey-field">
            <label className="survey-label">
              状況を教えてください <span className="survey-required">*</span>
            </label>
            <div className="survey-chips">
              {SITUATIONS.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSituation(s)}
                  className={`survey-chip ${situation === s ? 'active' : ''}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Q2 */}
          <div className="survey-field">
            <label className="survey-label">
              こんなことが面倒くさいと思う
              <span className="survey-opt">（任意）</span>
            </label>
            <textarea
              value={problem}
              onChange={e => setProblem(e.target.value)}
              rows={3}
              className="survey-textarea"
              placeholder="「仕事で〇〇を毎回手作業でやっている」「〇〇を調べるのに時間がかかる」など、ざっくりで大丈夫です"
            />
          </div>

          {/* Q3 */}
          <div className="survey-field">
            <label className="survey-label">
              こんなツールがあったら毎日使う！
              <span className="survey-opt">（任意）</span>
            </label>
            <textarea
              value={wish}
              onChange={e => setWish(e.target.value)}
              rows={3}
              className="survey-textarea"
              placeholder="どんなアイデアでも。「〇〇を自動化してくれるアプリ」みたいな感じで"
            />
          </div>

          {/* Q4 */}
          <div className="survey-field">
            <label className="survey-label">
              X（@xxxx）やメールなど
              <span className="survey-opt">（任意・お礼したいです）</span>
            </label>
            <input
              type="text"
              value={contact}
              onChange={e => setContact(e.target.value)}
              className="survey-input"
              placeholder="@Yoko_ai_dev みたいな感じでOKです"
            />
          </div>

          <div className="survey-footer">
            <button
              type="submit"
              disabled={!situation || state === 'sending'}
              className="survey-submit"
            >
              {state === 'sending' ? '送信中...' : '送る'}
            </button>
            {state === 'error' && (
              <span style={{ fontSize: 13, color: '#f87171' }}>
                送信に失敗しました。もう一度試してください。
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
