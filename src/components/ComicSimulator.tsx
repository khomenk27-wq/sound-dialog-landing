import React, { useState } from 'react';
import { 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles,
  Bot,
  User,
  ShieldAlert,
  BrainCircuit,
  MessageCircleQuestion
} from 'lucide-react';
import { ComicChoice } from '../types';

interface ComicSimulatorProps {
  choice: ComicChoice;
  onSelectChoice: (choice: ComicChoice) => void;
  onNext: () => void;
}

export const ComicSimulator: React.FC<ComicSimulatorProps> = ({
  choice,
  onSelectChoice,
  onNext,
}) => {
  const [showAlternative, setShowAlternative] = useState(false);

  const isChosen = choice !== null;
  const isIllusion = choice === 'A' || choice === 'B';
  const isFact = choice === 'C';

  return (
    <section id="simulator" className="py-20 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B22] dark:bg-[#181B22] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Блок 2. Интерактивный комикс-кейс</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
            Коридор ожиданий
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] max-w-xl mx-auto">
            Обыденная рабочая переписка в мессенджере. Проверьте, что в первые 3 секунды фиксирует ваш разум.
          </p>
        </div>

        {/* Comic / Messenger Card Wrapper */}
        <div className="bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          
          {/* Top Panel / Chat header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#282D37] dark:border-[#282D37] light:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 flex items-center justify-center font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 font-mono text-sm">
                  АК
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#181B22] dark:border-[#181B22] light:border-white rounded-full" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                  Алексей (Коллега / Партнер)
                </div>
                <div className="text-xs text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] flex items-center gap-1.5 font-mono">
                  <span>Пятница, 18:47</span>
                  <span>•</span>
                  <span className="text-emerald-400">в сети</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-100 text-slate-400 border border-[#282D37] dark:border-[#282D37] light:border-slate-200">
              Ситуация #01
            </div>
          </div>

          {/* Incoming Message Bubble */}
          <div className="mb-8">
            <div className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">
              Входящее сообщение:
            </div>
            <div className="inline-block max-w-lg bg-[#222733] dark:bg-[#222733] light:bg-slate-100 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-2xl rounded-tl-sm px-5 py-4 shadow-md">
              <p className="text-lg sm:text-xl font-medium text-white dark:text-[#F3F4F6] light:text-[#0F172A] tracking-wide">
                «Понятно. Делай как знаешь.»
              </p>
              <div className="text-right mt-1 text-[11px] font-mono text-slate-400">
                18:47 ✓✓
              </div>
            </div>
          </div>

          {/* Interactive Question */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-4">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>Что на самом деле произошло в этот момент?</span>
            </div>

            {/* 3 Choices */}
            <div className="space-y-3">
              
              {/* Option A */}
              <button
                onClick={() => onSelectChoice('A')}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                  choice === 'A'
                    ? 'bg-amber-500/10 border-amber-500/60 ring-1 ring-amber-500/30'
                    : 'bg-[#0F1115]/60 dark:bg-[#0F1115]/60 light:bg-slate-50 border-[#282D37] dark:border-[#282D37] light:border-slate-200 hover:border-slate-600 dark:hover:border-slate-600 light:hover:border-slate-400'
                }`}
              >
                <div className={`w-6 h-6 rounded-md font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                  choice === 'A' ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800 text-slate-300'
                }`}>
                  А
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                    «Он обиделся и пассивно-агрессивно перекладывает ответственность на меня.»
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-400 mt-1 font-mono">
                    Фокус на приписывании чужих скрытых мотивов
                  </p>
                </div>
              </button>

              {/* Option B */}
              <button
                onClick={() => onSelectChoice('B')}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                  choice === 'B'
                    ? 'bg-amber-500/10 border-amber-500/60 ring-1 ring-amber-500/30'
                    : 'bg-[#0F1115]/60 dark:bg-[#0F1115]/60 light:bg-slate-50 border-[#282D37] dark:border-[#282D37] light:border-slate-200 hover:border-slate-600 dark:hover:border-slate-600 light:hover:border-slate-400'
                }`}
              >
                <div className={`w-6 h-6 rounded-md font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                  choice === 'B' ? 'bg-amber-500 text-black font-bold' : 'bg-slate-800 text-slate-300'
                }`}>
                  Б
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                    «Я накосячил, надо срочно оправдаться или переделать всё заново.»
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-400 mt-1 font-mono">
                    Фокус на чувстве вины и спешной защите репутации
                  </p>
                </div>
              </button>

              {/* Option C */}
              <button
                onClick={() => onSelectChoice('C')}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                  choice === 'C'
                    ? 'bg-emerald-500/10 border-emerald-500/60 ring-1 ring-emerald-500/30'
                    : 'bg-[#0F1115]/60 dark:bg-[#0F1115]/60 light:bg-slate-50 border-[#282D37] dark:border-[#282D37] light:border-slate-200 hover:border-slate-600 dark:hover:border-slate-600 light:hover:border-slate-400'
                }`}
              >
                <div className={`w-6 h-6 rounded-md font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                  choice === 'C' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800 text-slate-300'
                }`}>
                  В
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-white dark:text-[#F3F4F6] light:text-[#0F172A] font-medium">
                    «Человек прислал 4 слова: "Понятно. Делай как знаешь." Всё остальное — моя фантазия.»
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-400 mt-1 font-mono">
                    Фиксация объективной физической реальности
                  </p>
                </div>
              </button>

            </div>
          </div>

          {/* Feedback & Analysis Panel */}
          {isChosen && (
            <div className={`p-5 rounded-xl border mt-6 animate-fade-in ${
              isFact 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-100' 
                : 'bg-amber-500/10 border-amber-500/40 text-amber-100'
            }`}>
              
              <div className="flex items-center gap-2 mb-2">
                {isFact ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                      ✓ Зафиксирован чистый факт (Счетчик ясности: +1)
                    </span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                      ⚠️ Сработал автопилот интерпретации (Счетчик иллюзий: +1)
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-200 dark:text-slate-200 light:text-slate-800 font-normal">
                {isFact ? (
                  <>
                    <strong className="text-white dark:text-white light:text-black">Точный выстрел.</strong> Текст — это просто символы. Пока нет уточняющего вопроса, любая приписанная эмоция — это симулякр, созданный вашей защитной системой.
                  </>
                ) : (
                  <>
                    <strong className="text-white dark:text-white light:text-black">Классическая достройка.</strong> Мозг мгновенно дорисовал обиду, тон голоса и мотивы, которых не было в тексте. Вы начали спорить не с человеком, а со своей галлюцинацией о нем.
                  </>
                )}
              </p>

              {/* Extra: Live Language Alternative button */}
              <div className="mt-4 pt-4 border-t border-slate-700/40">
                <button
                  onClick={() => setShowAlternative(!showAlternative)}
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <MessageCircleQuestion className="w-4 h-4" />
                  <span>{showAlternative ? 'Скрыть живой отклик' : 'Как звучит Живой Язык в этой ситуации?'}</span>
                </button>

                {showAlternative && (
                  <div className="mt-3 p-3.5 rounded-lg bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-800 animate-slide-up">
                    <span className="text-emerald-400 font-mono font-bold block mb-1">
                      Мостик Живого Языка:
                    </span>
                    «Слушай, когда ты пишешь "делай как знаешь", ты согласен с направлением или есть сомнения, которые стоит обсудить?»
                    <span className="block mt-1 text-[11px] text-slate-400 font-mono">
                      (Отказ от домыслов + прямой вопрос без обвинения и без оправданий)
                    </span>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200">
            {isChosen ? (
              <button
                onClick={() => onSelectChoice(null)}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Выбрать другой вариант</span>
              </button>
            ) : (
              <div className="text-xs font-mono text-slate-500">
                Выберите один из трех вариантов выше
              </div>
            )}

            <button
              onClick={onNext}
              disabled={!isChosen}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${
                isChosen
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span>Дальше: Тренажер «Факт vs Интерпретация»</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

