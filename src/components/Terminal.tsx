import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'System initialized. Type "help" to see available commands.', type: 'success' },
    { text: 'guest@kirandeep-gudepu:~$ ', type: 'output' },
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    // Scroll to bottom on history change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history];
    // Remove the last 'prompt' line temporarily to insert the input and output
    if (newHistory.length > 0 && newHistory[newHistory.length - 1].text.endsWith('~$ ')) {
      newHistory.pop();
    }

    newHistory.push({ text: `guest@kirandeep-gudepu:~$ ${input}`, type: 'input' });

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: 'Available commands:\n  about    - Summary of who I am\n  skills   - Core technologies I work with\n  projects - Showcases key projects I built\n  contact  - Get my contact information\n  clear    - Clear the terminal screen',
          type: 'output',
        });
        break;
      case 'about':
        newHistory.push({
          text: 'Kirandeep Gudepu | Full-Stack Developer & AI Enthusiast\n----------------------------------------------------\n- Currently pursuing Bachelor of Technology in CSE @ Medhavi Skills University.\n- Completed Diploma in Computer Science & Engineering @ St. Mary\'s Group.\n- Passionate about Web Apps, Computer Vision, and Backend Architectures.\n- Focused on writing optimized code and solving complex algorithmic problems.',
          type: 'output',
        });
        break;
      case 'skills':
        newHistory.push({
          text: 'Languages : C, C++, Java, Python, JavaScript, SQL\nFrontend  : HTML5, CSS3, React.js, Bootstrap\nBackend   : Node.js, Express.js, REST APIs\nDatabases : MongoDB, MySQL\nDevOps    : Git, GitHub, Docker\nConcepts  : DSA, OOPs, JWT, Blockchain Basics',
          type: 'output',
        });
        break;
      case 'projects':
        newHistory.push({
          text: '1. Garuda Wish Wall  - Fullstack social wall for anonymous wishes (MERN)\n2. Garuda Pay        - Fintech digital ledger wallet and payment platform (Node/Express/Mongo)\n3. Hand Gesture      - Computer vision app recognizing hand tracking landmarks (Python/OpenCV/MediaPipe)\n4. AI Assistant      - Desktop system command executor via voice/text (Python/Speech-to-Text)',
          type: 'output',
        });
        break;
      case 'contact':
        newHistory.push({
          text: 'Email    : gudepukirandeep@gmail.com\nLinkedIn : linkedin.com/in/kirandeep-gudepu\nGitHub   : github.com/kiran1929\nPhone    : +91 9063090446',
          type: 'output',
        });
        break;
      case 'clear':
        setHistory([{ text: 'guest@kirandeep-gudepu:~$ ', type: 'output' }]);
        setInput('');
        return;
      case 'kg':
        newHistory.push({
          text: '⚡ K G   E A S T E R   E G G ⚡\n"while(true) { learn(); build(); solve(); }"\nCongrats on finding this system command! Keep building.',
          type: 'success',
        });
        break;
      default:
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for available list.`,
          type: 'error',
        });
    }

    newHistory.push({ text: 'guest@kirandeep-gudepu:~$ ', type: 'output' });
    setHistory(newHistory);
    setInput('');
  };

  return (
    <div 
      onClick={focusInput}
      className="w-full max-w-lg h-80 rounded-xl overflow-hidden glass-panel border-white/10 flex flex-col font-mono text-xs text-text-primary shadow-2xl cursor-text scanlines"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-border-primary select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setHistory([{ text: 'guest@kirandeep-gudepu:~$ ', type: 'output' }])} title="Clear Terminal" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-1.5 text-text-secondary/70">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>zsh - guest@kirandeep-gudepu</span>
        </div>
        <div className="w-14" /> {/* Spacer */}
      </div>

      {/* Terminal History */}
      <div 
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto space-y-2 select-text"
      >
        {history.map((line, idx) => {
          if (line.type === 'input') {
            return (
              <div key={idx} className="text-text-primary">
                {line.text}
              </div>
            );
          }
          if (line.type === 'output') {
            return (
              <div key={idx} className="text-text-secondary whitespace-pre-wrap leading-relaxed">
                {line.text}
              </div>
            );
          }
          if (line.type === 'error') {
            return (
              <div key={idx} className="text-red-400 whitespace-pre-wrap">
                {line.text}
              </div>
            );
          }
          if (line.type === 'success') {
            return (
              <div key={idx} className="text-accent-cyan whitespace-pre-wrap">
                {line.text}
              </div>
            );
          }
          return null;
        })}

        {/* Current Prompt Input */}
        <form onSubmit={handleCommand} className="flex items-center w-full">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-0 outline-none text-text-primary focus:ring-0 p-0 text-xs caret-accent-cyan"
            placeholder="type command..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </form>
      </div>
      
      {/* Terminal Footer */}
      <div className="px-4 py-2 border-t border-border-primary bg-black/20 flex items-center justify-between text-[10px] text-text-secondary/50 select-none">
        <span>Active shell: /bin/zsh</span>
        <span>Cmd+K for site menu</span>
      </div>
    </div>
  );
};
