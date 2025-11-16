
import React from 'react';
import { RefreshCwIcon } from './Icons';

interface ScoreProps {
  score: number;
  total: number;
  onTryAgain: () => void;
}

const Score: React.FC<ScoreProps> = ({ score, total, onTryAgain }) => {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  
  const getFeedback = () => {
    if (percentage === 100) return "Excellent! Perfect score!";
    if (percentage >= 80) return "Great job! You're doing very well.";
    if (percentage >= 60) return "Good effort! Keep practicing.";
    if (percentage >= 40) return "Not bad, but there's room for improvement.";
    return "Keep trying! Practice makes perfect.";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Your Result</h3>
        <p className="text-4xl font-extrabold text-sky-600 dark:text-sky-400 my-2">
          {score} / {total}
        </p>
        <p className="text-slate-600 dark:text-slate-400">{getFeedback()}</p>
      </div>
      <button
        onClick={onTryAgain}
        className="flex items-center gap-2 px-6 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors"
      >
        <RefreshCwIcon />
        Try Again
      </button>
    </div>
  );
};

export default Score;
