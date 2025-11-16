
import React, { useState, useMemo } from 'react';
import type { ClozeTestDataType, Letter, QuestionType } from '../types';
import Question from './Question';
import Score from './Score';
import { PassageText } from './PassageText';

interface ClozeTestProps {
  testData: ClozeTestDataType;
}

const ClozeTest: React.FC<ClozeTestProps> = ({ testData }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, Letter | null>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (questionId: number, answer: Letter) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    return testData.questions.reduce((score, question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleTryAgain = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const score = useMemo(() => calculateScore(), [userAnswers, isSubmitted]);

  const passageParts = useMemo(() => testData.passage.split(/(__BLANK_\d+__)/), [testData.passage]);

  const findQuestion = (blank: string) => {
    const id = parseInt(blank.match(/\d+/)?.[0] || '0');
    return testData.questions.find(q => q.id === id);
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{testData.title}</h2>
      <div className="prose prose-slate dark:prose-invert max-w-none text-lg leading-relaxed space-y-4">
        <PassageText parts={passageParts} questions={testData.questions} userAnswers={userAnswers} isSubmitted={isSubmitted} />
      </div>

      <div className="mt-8 space-y-6">
        {testData.questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            userAnswer={userAnswers[question.id] || null}
            onSelect={handleAnswerSelect}
            submitted={isSubmitted}
          />
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
        {isSubmitted ? (
          <Score
            score={score}
            total={testData.questions.length}
            onTryAgain={handleTryAgain}
          />
        ) : (
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 ease-in-out"
          >
            Check Answers
          </button>
        )}
      </div>
    </div>
  );
};

export default ClozeTest;
