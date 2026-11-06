import React from 'react';
import { 
  Send, 
  Download, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  QrCode, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { UserStats } from '../types';

interface ConversionProps {
  stats: UserStats;
  onOpenCheatSheet: () => void;
}

export const Conversion: React.FC<ConversionProps> = ({ stats, onOpenCheatSheet }) => {
  // Determine tier & description based on clarity percentage
  const getTierData = (pct: number) => {
    if (pct >= 85) {
      return {
        title: 'Кристальная калибровка фактов',
        tag: 'Высокая ясность',
        tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
        description: 'Вы отлично различаете физические факты и эмоциональные наслоения. Автопилот достройки иллюзий у вас минимален, либо вы умеете вовремя его ловить за руку.',
        advice: 'Следующий уровень — тренировать эту ясность в моменты резкого личного или профессионального стресса, когда включается биологический страх отвержения.',
      };
    } else if (pct >= 55) {
      return {
        title: 'Практик с периодическим автопилотом',
        tag: 'Базовая калибровка',
        tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
        description: 'В спокойных и очевидных ситуациях вы точно видите факт. Но в двусмысленных фразах мозг по привычке достраивает негативные намерения или чувство вины.',
        advice: 'Обратите внимание на слова-маркеры: «постоянно», «намеренно», «ты никогда». Каждый раз, когда они звучат в голове — возвращайте себя к вопросу: «Что видела камера?»',
      };
    } else {
      return {
        title: 'Исследователь в зоне защитной иллюзии',
        tag: 'Высокая достройка',
        tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
        description: 'Ваша нервная система привыкла тратить массу ресурса на предугадывание мотивов собеседника, чтение мыслей и превентивную защиту своего статуса.',
        advice: 'Это не ошибка, а старая защитная стратегия. Метод «Живой Язык» позволяет снять эту броню и общаться без постоянного ожидания подвоха.',
      };
    }
  };

  const tier = getTierData(stats.clarityPercentage);

  return (
    <section id="conversion" className="py-24 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 relative overflow-hidden bg-gradient-to-b from-transparent to-dark-surface/40 dark:to-[#181B22]/40 light:to-slate-100/40">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Dynamic Result Card */}
        <div className="bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl mb-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#282D37] dark:border-[#282D37] light:border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Блок 5. Результат калибровки</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                Ваш персональный профиль речи
              </h2>
            </div>

            {/* Score Radial / Badge */}
            <div className="flex items-center gap-4 bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 p-4 rounded-2xl border border-[#282D37] dark:border-[#282D37] light:border-slate-300">
              <div className="text-right">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Уровень калибровки
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">
                  {stats.clarityPercentage}%
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-lg">
                {stats.comicClarity + stats.quizScore}/5
              </div>
            </div>
          </div>

          {/* Tier Feedback */}
          <div className="py-8">
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-mono uppercase px-3 py-1 rounded-full border ${tier.tagColor}`}>
                {tier.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                {tier.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
              {tier.description}
            </p>

            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-start gap-3">
              <Zap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-indigo-200 dark:text-indigo-200 light:text-indigo-900 leading-relaxed">
                <strong>Наблюдение школы:</strong> {tier.advice}
              </p>
            </div>
          </div>

          {/* Core Insight Callout */}
          <div className="p-6 rounded-2xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 mb-8">
            <p className="text-base sm:text-lg font-medium text-white dark:text-[#F3F4F6] light:text-[#0F172A] leading-relaxed italic text-center">
              «Теорию понять легко за 2 минуты. Удержать живой язык в реальном конфликте с начальником или близким человеком — это мышечный навык.»
            </p>
          </div>

          {/* CTA Buttons & QR Code */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Primary & Secondary Action Buttons */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-xs font-mono uppercase text-slate-400">
                // Следующий шаг для развития навыка
              </div>
              <p className="text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] mb-2">
                Заберите полную шпаргалку 3×4 по Живому Языку и подключайтесь к открытым практикам школы:
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                
                {/* Main Telegram CTA */}
                <a
                  href="https://t.me/dialogue_school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>Перейти в Telegram-канал школы Диалог</span>
                </a>

                {/* PDF Download Button */}
                <a
                  href="/cheat_sheet_living_language.pdf"
                  download="Шпаргалка_Живой_Язык_Диалог.pdf"
                  className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-[#282D37] dark:border-[#282D37] light:border-slate-300 bg-[#0F1115] dark:bg-[#0F1115] light:bg-white hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 text-white dark:text-white light:text-slate-900 font-semibold text-sm transition-all"
                  title="Скачать шпаргалку по Живому Языку (PDF)"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Скачать PDF</span>
                </a>

              </div>

              {/* Extra button: Open in-app 3x4 sheet modal */}
              <button
                onClick={onOpenCheatSheet}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Открыть интерактивную шпаргалку 3×4 прямо на сайте</span>
              </button>
            </div>

            {/* QR Code Card for mobile users */}
            <div className="bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-50 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 rounded-2xl p-4 text-center flex flex-col items-center justify-center">
              <div className="w-28 h-28 bg-white p-2 rounded-xl shadow-md mb-2 flex items-center justify-center">
                <img 
                  src="/qr_code.png" 
                  alt="QR код для перехода в Telegram канал Диалог" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Сканируйте с телефона
              </span>
              <span className="text-[10px] font-mono text-emerald-400 mt-0.5">
                t.me/dialogue_school
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

