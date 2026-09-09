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
          text: 'Kirandeep Gudepu | Full-Stack Developer & Problem Solver\n----------------------------------------------------\n- B.Tech CSE @ Medhavi Skills University (PW Institute of Innovation), Expected 2029.\n- Diploma in CSE @ St. Mary\'s Group of Institutions, Hyderabad (CGPA 8.8).\n- Builds MERN / Next.js apps, AI tools, and computer-vision projects.\n- DSA practice across HackerRank, Codeforces, LeetCode, and CodeChef.',
          type: 'output',
        });
        break;
      case 'skills':
        newHistory.push({
          text: 'Languages : Java, C++, C, Python, JavaScript, SQL\nFrontend  : React.js, Next.js, HTML5, CSS3, Bootstrap\nBackend   : Node.js, Express.js, REST APIs, Prisma\nDatabases : MongoDB, MySQL, PostgreSQL\nTools     : Git, GitHub, Docker, Postman, Vercel\nConcepts  : DSA, OOP, JWT, REST API Design, Blockchain',
          type: 'output',
        });
        break;
      case 'projects':
        newHistory.push({
          text: '1. InternScope AI    - https://internscope-ai.vercel.app/\n2. Garuda Wish Wall  - https://garuda-wish-wall-latest.vercel.app/\n3. DevForge Team     - https://team-portfolio-ebon-omega.vercel.app/\n4. Hand Gesture      - Real-time landmark recognition (Python/OpenCV)\n5. AI Assistant      - Voice/text desktop command runner (Python)',
          type: 'output',
        });
        break;
      case 'contact':
        newHistory.push({
          text: 'Email      : gudepukirandeep@gmail.com\nLinkedIn   : https://www.linkedin.com/in/kirandeep-gudepu/\nGitHub     : https://github.com/kiran1929\nHackerRank : https://www.hackerrank.com/profile/kirandeep_gudepu\nCodeforces : https://codeforces.com/profile/kiran1929\nLeetCode   : https://leetcode.com/u/thor_kiran/\nPhone      : +91 9063090446',
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
      className="w-full max-w-lg h-56 sm:h-80 rounded-xl overflow-hidden glass-panel border-white/10 flex flex-col font-mono text-[11px] sm:text-xs text-text-primary shadow-2xl cursor-text scanlines min-w-0"
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
          <span className="hidden sm:inline truncate">zsh — kirandeep</span>
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
              <div key={idx} className="text-text-secondary whitespace-pre-wrap break-words leading-relaxed">
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
        <span className="hidden sm:inline">Cmd+K for site menu</span>
        <span className="sm:hidden">type help</span>
      </div>
    </div>
  );
};
