import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  Send, 
  Sparkles,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { UserStats } from '../types';

interface HeaderProps {
  stats: UserStats;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCheatSheet: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  stats, 
  theme, 
  toggleTheme,
  onOpenCheatSheet 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate completion percentage based on interactions
  const completionPercent = Math.round((stats.totalAnswered / 5) * 100);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0F1115]/90 dark:bg-[#0F1115]/90 light:bg-white/90 backdrop-blur-md border-b border-dark-border dark:border-[#282D37] light:border-slate-200 py-3 shadow-lg shadow-black/10' 
        : 'bg-transparent py-4'
    }`}>
      {/* Top micro progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-dark-surface dark:bg-[#181B22] light:bg-slate-200 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-accent-interactive via-accent-fact to-emerald-400 transition-all duration-500 ease-out"
          style={{ width: `${Math.max(completionPercent, 8)}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#282D37] dark:border-[#282D37] light:border-slate-300 bg-[#181B22] dark:bg-[#181B22] light:bg-slate-100 flex items-center justify-center shadow-inner transition-transform group-hover:scale-105">
              <img 
                src="/logo.jpg" 
                alt="Логотип школы Диалог" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-mono text-emerald-400 font-bold text-xs uppercase absolute">Д</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                  ДИАЛОГ
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ЗВУЧИМ
                </span>
              </div>
              <p className="text-[11px] text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] hidden sm:block font-mono">
                Школа Эффективной Коммуникации
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a 
              href="#simulator" 
              className="text-[#9CA3AF] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-950 transition-colors"
            >
              Комикс-кейс
            </a>
            <a 
              href="#fact-quiz" 
              className="text-[#9CA3AF] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-950 transition-colors"
            >
              Факт vs Интерпретация
            </a>
            <a 
              href="#manifesto" 
              className="text-[#9CA3AF] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-950 transition-colors"
            >
              Метод и Манифест
            </a>
            <button 
              onClick={onOpenCheatSheet}
              className="flex items-center gap-1.5 text-xs font-mono uppercase px-3 py-1.5 rounded-lg border border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-all bg-[#181B22]/50"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              Шпаргалка 3×4
            </button>
          </nav>

          {/* Live Score & Actions */}
          <div className="flex items-center gap-3">
            {/* Clarity Live Badge */}
            {stats.totalAnswered > 0 && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B22] dark:bg-[#181B22] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-xs font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {stats.comicClarity + stats.quizScore}
                </span>
                <span className="text-slate-600">/</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {stats.comicIllusion + (stats.quizAnsweredCount - stats.quizScore)}
                </span>
                <span className="text-[10px] text-slate-400 ml-1">
                  ({stats.clarityPercentage}%)
                </span>
              </div>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Переключить тему оформления"
              className="p-2 rounded-lg border border-[#282D37] dark:border-[#282D37] light:border-slate-300 bg-[#181B22] dark:bg-[#181B22] light:bg-slate-100 text-[#9CA3AF] hover:text-white dark:hover:text-white light:text-slate-700 light:hover:text-slate-950 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Telegram CTA */}
            <a
              href="https://t.me/dialogue_school"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md shadow-indigo-600/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>В Telegram</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-[#282D37] dark:border-[#282D37] light:border-slate-300 bg-[#181B22] dark:bg-[#181B22] light:bg-slate-100 text-[#9CA3AF]"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 shadow-xl space-y-3 animate-slide-up">
            <a 
              href="#simulator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#F3F4F6] dark:text-[#F3F4F6] light:text-[#0F172A] hover:text-emerald-400"
            >
              Комикс-кейс «Коридор ожиданий»
            </a>
            <a 
              href="#fact-quiz" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#F3F4F6] dark:text-[#F3F4F6] light:text-[#0F172A] hover:text-emerald-400"
            >
              Тренажер «Факт vs Интерпретация»
            </a>
            <a 
              href="#manifesto" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#F3F4F6] dark:text-[#F3F4F6] light:text-[#0F172A] hover:text-emerald-400"
            >
              Манифест и форматы школы
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheatSheet();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono uppercase rounded-lg border border-[#282D37] text-emerald-400 bg-emerald-500/10"
            >
              <FileText className="w-4 h-4" />
              Открыть памятку 3×4
            </button>
            <a
              href="https://t.me/dialogue_school"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold uppercase"
            >
              <Send className="w-4 h-4" />
              Канал школы в Telegram
            </a>
          </div>
        )}

      </div>
    </header>
  );
};

