import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  ShieldOff, 
  Compass, 
  Coffee, 
  Users, 
  Music, 
  BookOpen, 
  ArrowUpRight,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

interface ManifestoProps {
  onOpenCheatSheet: () => void;
}

export const Manifesto: React.FC<ManifestoProps> = ({ onOpenCheatSheet }) => {
  const [activeFormatTab, setActiveFormatTab] = useState<'tea' | 'anti' | 'jam'>('anti');

  return (
    <section id="manifesto" className="py-20 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-200 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B22] dark:bg-[#181B22] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Блок 4. Философия и Культура</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-4 max-w-3xl mx-auto leading-tight">
            Общение — это не битва за правоту. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-400">
              Это совместная игра.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] max-w-2xl mx-auto">
            Экосистема школы «Диалог» и движения «Звучим». Мы возвращаем языку его изначальную функцию — быть живым инструментом сотворчества, а не броней для испуганного эго.
          </p>
        </div>

        {/* 3 Pillars of Living Language */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-6 text-center sm:text-left">
            // Три базовых столпа метода «Живой Язык»
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 shadow-xl relative group hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold mb-2">
                Столп 01
              </div>
              <h3 className="text-xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
                Разделение слоев
              </h3>
              <p className="text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] leading-relaxed">
                Умение в реальном времени видеть границу: где произошло физическое действие (видеокамера зафиксировала звук и картинку), а где мозг включил киностудию и дорисовал оскорбление или угрозу статусу.
              </p>
              <div className="mt-4 pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Факт отделен от трактовки</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 shadow-xl relative group hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldOff className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-indigo-400 font-bold mb-2">
                Столп 02
              </div>
              <h3 className="text-xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
                Снятие защитной брони
              </h3>
              <p className="text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] leading-relaxed">
                В повседневности до 80% психической энергии сжигается на попытку «выглядеть безупречно», умным, сильным или правым. Отказ от этой брони освобождает колоссальный ресурс для ясности и скорости решений.
              </p>
              <div className="mt-4 pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-100 flex items-center gap-2 text-xs font-mono text-indigo-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Контакт вместо защиты эго</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 shadow-xl relative group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase text-purple-400 font-bold mb-2">
                Столп 03
              </div>
              <h3 className="text-xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
                Культура исследования
              </h3>
              <p className="text-sm text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] leading-relaxed">
                Вместо войны двух монологов («ты не прав — нет, ты!») — совместное картографирование реальности. Собеседник становится не соперником в ринге, а исследователем-напарником.
              </p>
              <div className="mt-4 pt-4 border-t border-[#282D37] dark:border-[#282D37] light:border-slate-100 flex items-center gap-2 text-xs font-mono text-purple-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>От дуэлей к сотворчеству</span>
              </div>
            </div>

          </div>
        </div>

        {/* Practice Formats (Interactive Tabs) */}
        <div className="bg-[#181B22] dark:bg-[#181B22] light:bg-white border border-[#282D37] dark:border-[#282D37] light:border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl mb-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-[#282D37] dark:border-[#282D37] light:border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">
                Живая практика
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mt-1">
                Форматы школы вместо скучных вебинаров
              </h3>
            </div>
            
            {/* Format Selector Tabs */}
            <div className="flex items-center gap-2 bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-100 p-1.5 rounded-xl border border-[#282D37] dark:border-[#282D37] light:border-slate-300">
              <button
                onClick={() => setActiveFormatTab('anti')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                  activeFormatTab === 'anti'
                    ? 'bg-indigo-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Антинетворкинг</span>
              </button>

              <button
                onClick={() => setActiveFormatTab('tea')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                  activeFormatTab === 'tea'
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Чайные диалоги</span>
              </button>

              <button
                onClick={() => setActiveFormatTab('jam')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                  activeFormatTab === 'jam'
                    ? 'bg-purple-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>Джемы и рейвы</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Anti-networking */}
          {activeFormatTab === 'anti' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase mb-3">
                  <Users className="w-3.5 h-3.5" />
                  <span>Формат #01 • Свобода от статусов</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
                  Антинетворкинг: контакт людей, а не визиток
                </h4>
                <p className="text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] leading-relaxed mb-4">
                  Обычный нетворкинг похож на ярмарку тщеславия: люди заученно презентуют свои успехи, оценивают полезность друг друга и прячутся за фасадными должностями.
                </p>
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                  На <strong>Антинетворкинге</strong> запрещено называть должности и продавать услуги в первые 60 минут. Мы входим в контакт через живые вопросы, искренний интерес и исследование того, чем человек живет прямо сейчас.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-indigo-300 border border-indigo-500/30">
                    Без заученных питчей
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-indigo-300 border border-indigo-500/30">
                    Настоящие связи
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-indigo-300 border border-indigo-500/30">
                    Глубокий интерес
                  </span>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#282D37] dark:border-[#282D37] light:border-slate-300 relative aspect-video bg-[#0F1115]">
                <img 
                  src="/atmosphere.jpg" 
                  alt="Живая встреча антинетворкинга Диалог" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-slate-300">
                    Встреча сообщества «Звучим» в живом пространстве
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Tea Dialogues */}
          {activeFormatTab === 'tea' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase mb-3">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Формат #02 • Медленная калибровка</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
                  Чайные диалоги: глубина и калибровка слуха
                </h4>
                <p className="text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] leading-relaxed mb-4">
                  Скорость современного мира провоцирует импульсивный ответ еще до того, как собеседник закончил предложение. Мы слышим первые три слова и уже готовим контраргумент.
                </p>
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                  За чашкой коллекционного китайского чая в камерной обстановке мы замедляем темп речи. Учимся трем уровням слушания: отслеживать свою внутреннюю болтовню, полностью отдавать внимание партнеру и слышать паузы.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-emerald-300 border border-emerald-500/30">
                    Пауза перед ответом
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-emerald-300 border border-emerald-500/30">
                    3 уровня слушания
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-emerald-300 border border-emerald-500/30">
                    Камерные группы до 8 человек
                  </span>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#282D37] dark:border-[#282D37] light:border-slate-300 relative aspect-video bg-[#0F1115]">
                <img 
                  src="/simulation_to_culture.png" 
                  alt="Чайные диалоги и переход от симуляции к культуре" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-slate-300">
                    Схема: От симуляции повседневности к живой культуре
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Jams & Micro-raves */}
          {activeFormatTab === 'jam' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs font-mono uppercase mb-3">
                  <Music className="w-3.5 h-3.5" />
                  <span>Формат #03 • Раскрепощение голоса и тела</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A] mb-3">
                  Голосовые джемы и осознанные микрорейвы
                </h4>
                <p className="text-sm sm:text-base text-[#9CA3AF] dark:text-[#9CA3AF] light:text-[#64748B] leading-relaxed mb-4">
                  Зажатое горло, скованная челюсть и поверхностное дыхание — неизбежные спутники тех, кто привык сдерживать эмоции и бояться сказать «глупость».
                </p>
                <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                  Движение «Звучим» объединяет речевые практики с живым звуком, голосовым звучанием и ритмом. Выход из ментального ступора через спонтанный звук, телесную разблокировку и ощущение плеча.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-purple-300 border border-purple-500/30">
                    Звучание и импровизация
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-purple-300 border border-purple-500/30">
                    Снятие телесных зажимов
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0F1115] text-purple-300 border border-purple-500/30">
                    Драйв и живая энергия
                  </span>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#282D37] dark:border-[#282D37] light:border-slate-300 relative aspect-video bg-[#0F1115] flex items-center justify-center p-8 text-center">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8" />
                  </div>
                  <h5 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">
                    «Когда звучит тело — слова обретают вес»
                  </h5>
                  <p className="text-xs text-slate-400 font-mono">
                    Практики спонтанного звучания движения «Звучим»
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Foundations Banner (Berger, Rosenberg, Spiral Dynamics) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1115] dark:bg-[#0F1115] light:bg-slate-100 border border-[#282D37] dark:border-[#282D37] light:border-slate-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-indigo-400 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white dark:text-[#F3F4F6] light:text-[#0F172A]">
                Академический фундамент метода
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
                Бергер и Лукман (конструирование реальности), Маршалл Розенберг (NVC), Спиральная динамика (Дон Бек, Клэр Грейвз).
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 border border-indigo-500/40 text-xs font-mono uppercase font-semibold transition-all whitespace-nowrap"
          >
            <span>Открыть памятку Живого Языка</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

