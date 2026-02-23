import { useState, useRef, useEffect } from 'react';
import './CommandPanel.css';
import { sendChatMessage } from '../../api/gemini';

const BUILT_IN_COMMANDS = {
  hey: "Hi! I'm the command panel — you can ask me anything about Saurav or type 'commands' to see quick commands.",
  commands: "Quick commands: hey, commands, about, skills. Or ask anything (e.g. 'What does Saurav do?' or 'Tell me about his experience') and I'll answer!",
  about:
    "Saurav is a front-end developer with 5+ years of experience in data visualization and analytical UIs. He builds client-facing landing pages and specializes in React, Vue, Next.js, Angular, GraphQL, D3.js, and Highcharts.",
  skills:
    "Saurav's primary skills: React, Next.js, Angular, Vue, HTML/CSS, JavaScript/TypeScript, Redux, GraphQL, D3.js, and building user-friendly UIs for product teams.",
};

const INTRO_LINES = [
  "Hello! I'm Saurav.",
  "Here's some facts about me:",
];

function CommandPanel() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const commandPanelRef = useRef();
  const formRef = useRef();
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

  useEffect(() => {
    if (commandPanelRef.current) {
      commandPanelRef.current.scrollTop = commandPanelRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.target[0];
    const text = (input?.value || '').trim().toLowerCase();
    if (!text) return;

    formRef.current?.reset();
    setError(null);

    const userMessage = { role: 'user', text: input.value.trim() };
    setMessages((prev) => [...prev, userMessage]);

    const builtIn = BUILT_IN_COMMANDS[text];
    if (builtIn) {
      setMessages((prev) => [...prev, { role: 'assistant', text: builtIn }]);
      return;
    }

    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "To chat with AI here, add a free Gemini API key. Copy .env.example to .env and set REACT_APP_GEMINI_API_KEY (get one at https://aistudio.google.com/apikey). Until then, try: hey, commands, about, skills.",
        },
      ]);
      return;
    }

    setLoading(true);
    try {
      const history = [...messages, userMessage].map((m) => ({
        role: m.role,
        text: m.text,
      }));
      const reply = await sendChatMessage(apiKey, history);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch (err) {
      const message = err.message || 'Something went wrong.';
      setError(message);
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant' && last?.text?.startsWith("Could not get a reply.")) {
          return prev;
        }
        return [
          ...prev,
          {
            role: 'assistant',
            text: "Could not get a reply. Try again or use: hey, commands, about, skills.",
          },
        ];
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="terminal-container" scoped>
      <header className="terminal-header mt">
        <div className="flex terminal-header-buttons">
          <div className="terminal-button close flex align-center justify-center" />
          <div className="terminal-button minimise" />
          <div className="terminal-button expand" />
        </div>
      </header>
      <div className="terminal-body">
        <div className="terminal-scroll" ref={commandPanelRef}>
        <div className="terminal-intro">
          <p className="has-text-weight-bold">{INTRO_LINES[0]}</p>
          <br />
          <p>{INTRO_LINES[1]}</p>
          <ul>
            <li className="is-rainbow-red">✅ HTML and CSS Developer</li>
            <li className="is-rainbow-orange">✅ React Developer</li>
            <li className="is-rainbow-yellow">✅ TypeScript Expert</li>
            <li className="is-rainbow-green">✅ Angular Developer</li>
            <li className="is-rainbow-blue">✅ Vue Developer</li>
            <li className="is-rainbow-violet">✅ Chess Fan</li>
          </ul>
          {apiKey && (
            <p className="terminal-hint">Ask me anything — I'm powered by Gemini.</p>
          )}
        </div>

        {messages.length > 0 && (
          <div className="terminal-chat">
            {messages.map((msg, i) => (
              <div key={i} className={`terminal-msg terminal-msg--${msg.role}`}>
                <span className="terminal-msg-prefix">{msg.role === 'user' ? '>' : '▸'}</span>
                <span className="terminal-msg-text">
                  {msg.role === 'assistant' && msg.text.includes('\n')
                    ? msg.text.split('\n').map((para, j) => (
                        <p key={j}>{para}</p>
                      ))
                    : msg.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="terminal-msg terminal-msg--assistant">
            <span className="terminal-msg-prefix">▸</span>
            <span className="terminal-msg-text terminal-typing">Thinking...</span>
          </div>
        )}

        {error && <div className="terminal-error">{error}</div>}
        </div>

        <div className="terminal-control">
          <div className="control has-icons-left flex align-center">
            <span className="icon is-left">{'>'}</span>
            <form onSubmit={handleSubmit} ref={formRef} className='form'>
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder={apiKey ? 'Ask anything or try: hey, about, skills' : 'Type: hey, commands, about, skills'}
                disabled={loading}
              />
            </form>
            <span className="cursor" />
          </div>
        </div>
      </div>
      <nav className="terminal-tmux-bar">
        <div className="screen">0</div>
        <div className="bar">zsh</div>
        <div className="battery">98%</div>
        <div className="name">Saurav's Laptop</div>
      </nav>
    </div>
  );
}

export default CommandPanel;
