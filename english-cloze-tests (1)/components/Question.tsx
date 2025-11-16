
import React from 'react';
import type { QuestionType, Letter } from '../types';
import { CheckCircleIcon, XCircleIcon } from './Icons';

interface QuestionProps {
  question: QuestionType;
  userAnswer: Letter | null;
  submitted: boolean;
  onSelect: (questionId: number, answer: Letter) => void;
}

const Question: React.FC<QuestionProps> = ({ question, userAnswer, submitted, onSelect }) => {
  const getButtonClass = (letter: Letter) => {
    let baseClass = 'w-full text-left p-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-between text-sm sm:text-base';

    if (!submitted) {
      return `${baseClass} ${userAnswer === letter ? 'bg-sky-100 dark:bg-sky-900 border-sky-500' : 'bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 hover:border-sky-400 dark:hover:border-sky-500'}`;
    }

    const isCorrect = letter === question.correctAnswer;
    const isSelected = letter === userAnswer;

    if (isCorrect) {
      return `${baseClass} bg-green-100 dark:bg-green-900 border-green-500 font-semibold`;
    }
    if (isSelected && !isCorrect) {
      return `${baseClass} bg-red-100 dark:bg-red-900 border-red-500`;
    }
    
    return `${baseClass} bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 opacity-70`;
  };

  return (
    <div id={`question-${question.id}`} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50">
      <p className="font-semibold mb-3 text-slate-800 dark:text-slate-200">Câu hỏi {question.id}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.choices.map((choice) => (
          <button
            key={choice.letter}
            onClick={() => onSelect(question.id, choice.letter)}
            disabled={submitted}
            className={getButtonClass(choice.letter)}
          >
            <span>
              <span className="font-bold mr-2">{choice.letter}.</span>
              {choice.text}
            </span>
            {submitted && choice.letter === question.correctAnswer && <CheckCircleIcon className="text-green-600 dark:text-green-500" />}
            {submitted && userAnswer === choice.letter && choice.letter !== question.correctAnswer && <XCircleIcon className="text-red-600 dark:text-red-500" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
