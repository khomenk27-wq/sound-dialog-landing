import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComicSimulator } from './components/ComicSimulator';
import { FactQuiz } from './components/FactQuiz';
import { Manifesto } from './components/Manifesto';
import { Conversion } from './components/Conversion';
import { Footer } from './components/Footer';
import { CheatSheetModal } from './components/CheatSheetModal';
import { ComicChoice, QuizCardItem, QuizAnswerType, UserStats } from './types';

const INITIAL_CARDS: QuizCardItem[] = [
  {
    id: 1,
    phrase: 'Ты постоянно меня перебиваешь и не даешь вставить слова!',
    correctAnswer: 'INTERPRETATION',
    isFlipped: false,
    analysis: {
      fact: 'За последние 10 минут наш разговор пересекся в один момент 3 раза.',
      interpretation: 'Слова «постоянно» и «не даешь» — защитное обобщение, чтобы усилить обвинение и занять позицию судьи.',
    },
  },
  {
    id: 2,
    phrase: 'Отчет был отправлен в четверг в 18:42 вместо среды 12:00.',
    correctAnswer: 'FACT',
    isFlipped: false,
    analysis: {
      fact: 'Точная фиксация события во времени без эмоциональной окраски.',
      interpretation: 'Сюда еще не добавили «он безответственный лентяй». С этим фактом уже можно спокойно работать.',
    },
  },
  {
    id: 3,
    phrase: 'Он намеренно проигнорировал мою идею на созвоне, чтобы показать свое превосходство.',
    correctAnswer: 'INTERPRETATION',
    isFlipped: false,
    analysis: {
      fact: 'После озвучивания идеи ведущий перешел к следующему слайду без комментария.',
      interpretation: '«Намеренно» и «показать превосходство» — чтение мыслей. Мы защищаем свое эго, заранее назначая другого врагом.',
    },
  },
  {
    id: 4,
    phrase: 'Собеседник повысил громкость голоса и скрестил руки на груди.',
    correctAnswer: 'FACT',
    isFlipped: false,
    analysis: {
      fact: 'Физическое наблюдение аудиовизуальных сигналов.',
      interpretation: 'начинается там, где мы говорим: «Он закрылся и проявляет агрессию». Возможно, ему просто холодно.',
    },
  },
];

export const App: React.FC = () => {
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Comic state
  const [comicChoice, setComicChoice] = useState<ComicChoice>(null);

  // Quiz cards state
  const [quizCards, setQuizCards] = useState<QuizCardItem[]>(INITIAL_CARDS);

  // Cheat Sheet modal state
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  // Sync theme with html root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Card interaction handlers
  const handleAnswerCard = (cardId: number, answer: QuizAnswerType) => {
    setQuizCards(prev =>
      prev.map(card => {
        if (card.id === cardId) {
          const isCorrect = answer === card.correctAnswer;
          return {
            ...card,
            userAnswer: answer,
            isCorrect,
          };
        }
        return card;
      })
    );
  };

  const handleFlipCard = (cardId: number) => {
    setQuizCards(prev =>
      prev.map(card => {
        if (card.id === cardId) {
          return {
            ...card,
            isFlipped: !card.isFlipped,
          };
        }
        return card;
      })
    );
  };

  const handleResetQuiz = () => {
    setQuizCards(INITIAL_CARDS);
  };

  // Calculate live stats
  const comicClarity = comicChoice === 'C' ? 1 : 0;
  const comicIllusion = comicChoice === 'A' || comicChoice === 'B' ? 1 : 0;
  const comicAnswered = comicChoice !== null ? 1 : 0;

  const quizScore = quizCards.filter(c => c.isCorrect).length;
  const quizAnsweredCount = quizCards.filter(c => c.userAnswer !== undefined).length;

  const totalAnswered = comicAnswered + quizAnsweredCount;
  const totalCorrect = comicClarity + quizScore;

  // Percentage (if no answers yet, default to baseline 50% or 0%)
  const clarityPercentage = totalAnswered === 0 ? 0 : Math.round((totalCorrect / totalAnswered) * 100);

  const stats: UserStats = {
    comicClarity,
    comicIllusion,
    quizScore,
    quizAnsweredCount,
    totalAnswered,
    clarityPercentage,
  };

  const scrollToSimulator = () => {
    document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuiz = () => {
    document.getElementById('fact-quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToManifesto = () => {
    document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-[#0F1115] text-[#F3F4F6]' 
        : 'bg-[#F8FAFC] text-[#0F172A]'
    }`}>
      {/* Sticky Header with Progress Bar & Navigation */}
      <Header
        stats={stats}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
      />

      <main>
        {/* Block 1: Hero */}
        <Hero onStart={scrollToSimulator} />

        {/* Block 2: Interactive Comic-Case */}
        <ComicSimulator
          choice={comicChoice}
          onSelectChoice={setComicChoice}
          onNext={scrollToQuiz}
        />

        {/* Block 3: Trainer-sorter Fact vs Interpretation */}
        <FactQuiz
          cards={quizCards}
          onAnswerCard={handleAnswerCard}
          onFlipCard={handleFlipCard}
          onResetQuiz={handleResetQuiz}
          onNext={scrollToManifesto}
        />

        {/* Block 4: Manifesto & School Formats */}
        <Manifesto onOpenCheatSheet={() => setIsCheatSheetOpen(true)} />

        {/* Block 5: Conversion Screen with Dynamic Profile */}
        <Conversion
          stats={stats}
          onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenCheatSheet={() => setIsCheatSheetOpen(true)} />

      {/* Interactive 3x4 Cheat Sheet Modal */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
};

export default App;

