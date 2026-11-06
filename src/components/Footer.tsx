import React from 'react';
import { Send, FileText, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenCheatSheet: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheatSheet }) => {
  return (
    <footer className="border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 bg-[#0A0C0F] dark:bg-[#0A0C0F] light:bg-slate-50 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#282D37] bg-[#181B22] flex items-center justify-center">
                <img 
                  src="/logo.jpg" 
                  alt="Школа Диалог" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-bold text-base tracking-tight text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                  ДИАЛОГ
                </span>
                <span className="ml-2 text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ЗВУЧИМ
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] max-w-md leading-relaxed">
              Школа Эффективной Коммуникации «Диалог» — исследовательская лаборатория живого языка. Мы переходим от симуляции и защитных масок к открытому сотворчеству и ясности.
            </p>

            <div className="text-[11px] font-mono text-slate-500">
              «От симуляции — к живой культуре»
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white dark:text-white light:text-slate-900 font-bold mb-3 tracking-wider">
              Лаборатория
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#simulator" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Кейс «Коридор ожиданий»
                </a>
              </li>
              <li>
                <a href="#fact-quiz" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Тренажер «Факт vs Интерпретация»
                </a>
              </li>
              <li>
                <a href="#manifesto" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Манифест и 3 столпа
                </a>
              </li>
              <li>
                <a href="#conversion" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Профиль калибровки
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Materials & Links */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white dark:text-white light:text-slate-900 font-bold mb-3 tracking-wider">
              Материалы
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button
                  onClick={onOpenCheatSheet}
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Шпаргалка 3×4 (Online)</span>
                </button>
              </li>
              <li>
                <a 
                  href="/cheat_sheet_living_language.pdf" 
                  download 
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Скачать PDF шпаргалку
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/dialogue_school" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram школы</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Школа «Диалог». Движение «Звучим». Все права сохранены.
          </div>
          <div className="flex items-center gap-1">
            <span>Создано с заботой о ясности мысли и слова</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

