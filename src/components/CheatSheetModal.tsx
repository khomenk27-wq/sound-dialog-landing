import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle, 
  Layers, 
  Ear, 
  AlertOctagon, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#282D37] dark:border-[#282D37] light:border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                Шпаргалка 3×4: Живой Язык
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Официальная памятка школы коммуникации «Диалог»
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="overflow-y-auto py-6 space-y-8 pr-1">
          
          {/* Section 1: 4 Steps of Living Language */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-bold mb-3">
              <Layers className="w-4 h-4" />
              <span>4 Шага формулирования речи по Живому Языку</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="p-4 rounded-xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-200">
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold">1. ФАКТ (Видеокамера)</span>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                  Только то, что зафиксировали бы приборы. Без слов «всегда», «назло», «плохо».
                </p>
                <div className="mt-2 text-[11px] font-mono text-slate-500">
                  Пример: «Ты не ответил на письмо за 48 часов»
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-200">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold">2. ЧУВСТВО (Тело)</span>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                  Прямой сигнал нервной системы: растерянность, тревога, радость, грусть, раздражение.
                </p>
                <div className="mt-2 text-[11px] font-mono text-slate-500">
                  Не «чувствую, что ты не прав», а «я тревожусь»
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-200">
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">3. ПОТРЕБНОСТЬ (Ценность)</span>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                  Глубинная человеческая нужда: предсказуемость, ясность, уважение, сотворчество.
                </p>
                <div className="mt-2 text-[11px] font-mono text-slate-500">
                  Пример: «Мне важна ясность по срокам релиза»
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-200">
                <span className="text-xs font-mono uppercase text-purple-400 font-bold">4. ПРОСЬБА (Мостик)</span>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                  Конкретное физическое действие прямо сейчас. Открытость к отказу без обиды.
                </p>
                <div className="mt-2 text-[11px] font-mono text-slate-500">
                  Пример: «Можем ли мы созвониться на 5 минут?»
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: 3 Levels of Listening */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 font-bold mb-3">
              <Ear className="w-4 h-4" />
              <span>3 Уровня слушания собеседника</span>
            </div>

            <div className="space-y-2">
              <div className="p-3.5 rounded-xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-200 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-slate-500 mt-0.5">Уровень 1</span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                    Внутренний диалог (Слушаю себя)
                  </h5>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    Фокус на своих мыслях: «Согласен ли я?», «Что мне ответить?», «Как выглядеть умно?». Контакт отсутствует.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-200 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-indigo-400 mt-0.5">Уровень 2</span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                    Сфокусированное внимание (Слушаю собеседника)
                  </h5>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    Внимание полностью отдано партнеру: его словам, тембру, смысловым паузам. Внутренний критик выключен.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-200 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400 mt-0.5">Уровень 3</span>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                    Слушание поля (Слушаю контекст)
                  </h5>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                    Восприятие атмосферы в комнате, общего напряжения, скрытых ожиданий и непроизнесенного смысла.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: 4 Traps of Illusion */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-bold mb-3">
              <AlertOctagon className="w-4 h-4" />
              <span>4 Ловушки ума: где мозг создает симулякр</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 dark:text-slate-300 light:text-slate-800">
                <strong className="text-amber-400 block mb-1">Чтение мыслей:</strong>
                «Он специально улыбается, чтобы задеть меня» (Приписывание намерения без проверки).
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 dark:text-slate-300 light:text-slate-800">
                <strong className="text-amber-400 block mb-1">Обобщения-ловушки:</strong>
                «Ты вечно опаздываешь!», «Никто здесь ничего не делает!» (Попытка навязать вину).
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 dark:text-slate-300 light:text-slate-800">
                <strong className="text-amber-400 block mb-1">Псевдочувства:</strong>
                «Я чувствую, что меня предали» («Предали» — это обвинение собеседника, а не ваше чувство).
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 dark:text-slate-300 light:text-slate-800">
                <strong className="text-amber-400 block mb-1">Ультиматумы вместо просьб:</strong>
                Отказ собеседника воспринимается как агрессия, а не право на свои границы.
              </div>
            </div>
          </div>

          {/* Download Original PDF Cheatsheets */}
          <div className="pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200">
            <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
              Официальные материалы школы (PDF для печати):
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href="/cheat_sheet_living_language.pdf"
                download="Шпаргалка_эфира_Живой_Язык_База.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Шпаргалка эфира (База)</span>
              </a>

              <a
                href="/memo_living_language.pdf"
                download="Базовая_памятка_Живого_Языка.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase transition-colors border border-slate-700"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Базовая памятка</span>
              </a>

              <a
                href="/extended_memo_living_language.pdf"
                download="Расширенная_памятка_Живого_Языка.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase transition-colors border border-slate-700"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Расширенная памятка</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase transition-colors"
          >
            Закрыть
          </button>
        </div>

      </div>
    </div>
  );
};

