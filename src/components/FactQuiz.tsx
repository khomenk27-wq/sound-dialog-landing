import React from 'react';
import { 
  BrainCircuit, 
  Check, 
  X, 
  RotateCw, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles,
  ArrowRight,
  Eye,
  Info
} from 'lucide-react';
import { QuizCardItem, QuizAnswerType } from '../types';

interface FactQuizProps {
  cards: QuizCardItem[];
  onAnswerCard: (cardId: number, answer: QuizAnswerType) => void;
  onFlipCard: (cardId: number) => void;
  onResetQuiz: () => void;
  onNext: () => void;
}

export const FactQuiz: React.FC<FactQuizProps> = ({
  cards,
  onAnswerCard,
  onFlipCard,
  onResetQuiz,
  onNext,
}) => {
  const answeredCount = cards.filter(c => c.userAnswer !== undefined).length;
  const correctCount = cards.filter(c => c.isCorrect).length;
  const allAnswered = answeredCount === cards.length;

  return (
    <section id="fact-quiz" className="py-20 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B22] dark:bg-[#181B22] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Блок 3. Лаборатория калибровки</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
            Факт vs Интерпретация
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] max-w-2xl mx-auto">
            Определите для каждой фразы: это объективно зафиксированный факт или ментальная достройка с защитной оценкой? Нажмите на карточку, чтобы изучить разбор.
          </p>

          {/* Clarity scoreboard */}
          <div className="mt-6 inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 text-xs sm:text-sm font-mono">
            <span className="text-slate-400">Прогресс теста:</span>
            <span className="font-bold text-white dark:text-white light:text-slate-900">
              {answeredCount} из {cards.length}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              Очки ясности: {correctCount}
            </span>
            {answeredCount > 0 && (
              <button
                onClick={onResetQuiz}
                className="text-slate-400 hover:text-white ml-2 flex items-center gap-1 transition-colors"
                title="Сбросить ответы"
              >
                <RotateCw className="w-3 h-3" />
                <span className="text-[11px] underline">сбросить</span>
              </button>
            )}
          </div>
        </div>

        {/* Cards Grid (4 interactive cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, idx) => {
            const hasAnswered = card.userAnswer !== undefined;

            return (
              <div 
                key={card.id}
                className="perspective-1000 min-h-[340px] flex flex-col"
              >
                <div 
                  className={`relative w-full h-full flex flex-col rounded-2xl transition-all duration-500 transform-style-preserve-3d border ${
                    card.isFlipped 
                      ? 'rotate-y-180 bg-[#161920] dark:bg-[#161920] light:bg-slate-50 border-indigo-500/50 shadow-indigo-500/10' 
                      : hasAnswered
                        ? card.isCorrect
                          ? 'bg-[#181B22] dark:bg-[#181B22] light:bg-white border-emerald-500/50 shadow-emerald-500/10'
                          : 'bg-[#181B22] dark:bg-[#181B22] light:bg-white border-amber-500/50 shadow-amber-500/10'
                        : 'bg-[#181B22] dark:bg-[#181B22] light:bg-white border-[#282D37] dark:border-[#282D37] light:border-slate-200 hover:border-slate-600'
                  } shadow-xl p-6`}
                >

                  {/* FRONT SIDE */}
                  <div className={`flex flex-col justify-between h-full backface-hidden ${card.isFlipped ? 'invisible' : 'visible'}`}>
                    
                    {/* Top Meta */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-100 text-slate-400 border border-[#282D37] dark:border-[#282D37] light:border-slate-200">
                          Кейс #{idx + 1}
                        </span>

                        {hasAnswered && (
                          <span className={`text-xs font-mono uppercase font-semibold flex items-center gap-1 ${
                            card.isCorrect ? 'text-emerald-400' : 'text-amber-400'
                          }`}>
                            {card.isCorrect ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Точно в цель
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-3.5 h-3.5" />
                                Ловушка иллюзии
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      {/* Phrase Quotation */}
                      <div className="my-4">
                        <div className="text-[11px] font-mono uppercase text-slate-500 mb-1">
                          Цитата из разговора:
                        </div>
                        <p className="text-lg sm:text-xl font-semibold text-white dark:text-[#F3F4F6] light:text-[#0F172A] leading-snug tracking-tight">
                          «{card.phrase}»
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action / Options */}
                    <div>
                      {!hasAnswered ? (
                        <div className="space-y-2 pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200">
                          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono mb-2">
                            Как квалифицировать эту реплику?
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              onClick={() => onAnswerCard(card.id, 'FACT')}
                              className="py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 font-mono text-xs uppercase font-bold tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                              Чистый ФАКТ
                            </button>
                            <button
                              onClick={() => onAnswerCard(card.id, 'INTERPRETATION')}
                              className="py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:border-amber-500/60 font-mono text-xs uppercase font-bold tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                              ИНТЕРПРЕТАЦИЯ
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 flex items-center justify-between">
                          <div className="text-xs font-mono text-slate-400">
                            Ваш выбор:{' '}
                            <span className={card.userAnswer === 'FACT' ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                              {card.userAnswer === 'FACT' ? 'ФАКТ' : 'ИНТЕРПРЕТАЦИЯ'}
                            </span>
                          </div>
                          <button
                            onClick={() => onFlipCard(card.id)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-400 text-xs font-mono uppercase font-semibold transition-all"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Разбор Живого Языка</span>
                          </button>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* BACK SIDE (Analysis & Living Language breakdown) */}
                  <div className={`absolute inset-0 p-6 flex flex-col justify-between h-full backface-hidden rotate-y-180 ${card.isFlipped ? 'visible' : 'invisible'}`}>
                    
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-[#282D37] dark:border-[#282D37] light:border-slate-200 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono uppercase text-slate-400">Разбор кейса #{idx + 1}</span>
                          <span className={`text-[11px] font-mono uppercase px-2 py-0.5 rounded ${
                            card.correctAnswer === 'FACT' 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          }`}>
                            Верный статус: {card.correctAnswer === 'FACT' ? 'ФАКТ' : 'ИНТЕРПРЕТАЦИЯ'}
                          </span>
                        </div>
                        <button
                          onClick={() => onFlipCard(card.id)}
                          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                        >
                          <RotateCw className="w-3 h-3" />
                          <span>к фразе</span>
                        </button>
                      </div>

                      {/* Fact Breakdown */}
                      <div className="mb-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                          Физический ФАКТ:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed">
                          {card.analysis.fact}
                        </p>
                      </div>

                      {/* Interpretation Breakdown */}
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                          Достройка / ИНТЕРПРЕТАЦИЯ:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed">
                          {card.analysis.interpretation}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Return Button */}
                    <div className="pt-3 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 text-right">
                      <button
                        onClick={() => onFlipCard(card.id)}
                        className="text-xs font-mono text-indigo-400 hover:underline"
                      >
                        ← Вернуться к карточке
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Next Step / Complete Banner */}
        <div className="text-center">
          {allAnswered ? (
            <div className="p-6 rounded-2xl bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-emerald-500/40 shadow-xl max-w-xl mx-auto animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-1">
                Все 4 кейса исследованы!
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-5">
                Ваша точность калибровки в тесте: <span className="text-emerald-400 font-bold font-mono">{correctCount} из 4</span>. Теперь взгляните на глубокую философию метода.
              </p>
              <button
                onClick={onNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/30"
              >
                <span>Перейти к Манифесту и форматам школы</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <p className="text-xs font-mono text-slate-500">
              * Пройдите оставшиеся карточки, чтобы получить полный персональный профиль калибровки
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

