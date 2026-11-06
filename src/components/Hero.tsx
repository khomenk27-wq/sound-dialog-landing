import React from 'react';
import { ArrowDown, Play, ShieldAlert, Sparkles, Check, MessageSquareQuote, Terminal } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Grid Pattern & Glow Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#282D37_1px,transparent_1px)] dark:bg-[radial-gradient(#282D37_1px,transparent_1px)] light:bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Ambient Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/10 dark:bg-indigo-500/10 light:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-300 shadow-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold">
            Исследовательская лаборатория общения
          </span>
          <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">|</span>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
            Метод «Живой Язык»
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-[#F3F4F6] light:text-[#0F172A] leading-[1.1] mb-6 max-w-4xl mx-auto">
          Мы говорим <span className="text-slate-400 dark:text-slate-400 light:text-slate-500 underline decoration-slate-700 underline-offset-4">одно</span>.{' '}
          Имеем в виду <span className="text-amber-400 underline decoration-amber-500/40 underline-offset-4">другое</span>.{' '}
          <br className="hidden sm:inline" />
          А слышат от нас <span className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-4">третье</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed">
          Большинство разговоров — это не контакт, а обмен защитными масками и попытка хорошо выглядеть. Давайте проверим, как работает ваш язык в боевых условиях за 90 секунд.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onStart}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            <span>Войти в тренажер</span>
            <span className="text-xs font-mono opacity-70 bg-indigo-700/60 px-2 py-0.5 rounded">
              ~90 сек
            </span>
          </button>

          <a
            href="#manifesto"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#282D37] dark:border-[#282D37] light:border-slate-300 bg-[#181B22]/60 dark:bg-[#181B22]/60 light:bg-white/80 hover:bg-[#181B22] dark:hover:bg-[#181B22] light:hover:bg-slate-100 text-[#F3F4F6] dark:text-[#F3F4F6] light:text-[#0F172A] font-medium text-base transition-all"
          >
            <span>О методе и манифесте</span>
            <ArrowDown className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Interactive Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          
          <div className="p-4 rounded-xl bg-[#181B22]/60 dark:bg-[#181B22]/60 light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-emerald-400 mb-1">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Без диагнозов</span>
            </div>
            <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
              Не копаемся в травмах и не учим «правильной жизни». Исследуем чистую механику речи.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#181B22]/60 dark:bg-[#181B22]/60 light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-amber-400 mb-1">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>0% манипуляций</span>
            </div>
            <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
              Никаких таймеров спешки, дешевого NLP и давления на боли. Только ваш опыт и инсайты.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#181B22]/60 dark:bg-[#181B22]/60 light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-indigo-400 mb-1">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>Опора на реальность</span>
            </div>
            <p className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-slate-600">
              Разделение фактов и ментальных проекций. Прямой переход от защиты к искренней игре.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

