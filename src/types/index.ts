export type ComicChoice = 'A' | 'B' | 'C' | null;

export interface ComicState {
  selected: ComicChoice;
  isIllusion: boolean;
  isClarity: boolean;
}

export type QuizAnswerType = 'FACT' | 'INTERPRETATION';

export interface QuizCardItem {
  id: number;
  phrase: string;
  correctAnswer: QuizAnswerType;
  userAnswer?: QuizAnswerType;
  isFlipped: boolean;
  isCorrect?: boolean;
  analysis: {
    fact: string;
    interpretation: string;
  };
}

export interface UserStats {
  comicClarity: number; // 0 or 1
  comicIllusion: number; // 0 or 1
  quizScore: number; // 0 to 4
  quizAnsweredCount: number; // 0 to 4
  totalAnswered: number; // 0 to 5
  clarityPercentage: number; // 0 to 100
}

