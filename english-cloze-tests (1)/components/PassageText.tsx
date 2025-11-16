
import React from 'react';
import type { QuestionType, Letter } from '../types';

interface PassageTextProps {
    parts: string[];
    questions: QuestionType[];
    userAnswers: Record<number, Letter | null>;
    isSubmitted: boolean;
}

const PassageText: React.FC<PassageTextProps> = ({ parts, questions, userAnswers, isSubmitted }) => {
    
    const findQuestion = (blank: string): QuestionType | undefined => {
        const id = parseInt(blank.match(/\d+/)?.[0] || '0');
        return questions.find(q => q.id === id);
    };

    const getBlankClass = (question: QuestionType) => {
        const baseClass = 'font-bold text-lg rounded px-2 py-0.5 transition-colors duration-300 cursor-pointer';
        const userAnswer = userAnswers[question.id];
        
        if (!isSubmitted) {
            return userAnswer ? `${baseClass} bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300` : `${baseClass} bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400`;
        }
        
        const isCorrect = userAnswer === question.correctAnswer;
        return isCorrect ? `${baseClass} bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200` : `${baseClass} bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200`;
    };

    const getAnswerText = (question: QuestionType) => {
        const userAnswer = userAnswers[question.id];
        if (isSubmitted) {
            return question.choices.find(c => c.letter === question.correctAnswer)?.text || `(${question.id})`;
        }
        if (userAnswer) {
             return question.choices.find(c => c.letter === userAnswer)?.text || `(${question.id})`;
        }
        return `(${question.id})`;
    }

    return (
        <p>
            {parts.map((part, index) => {
                const question = findQuestion(part);
                if (question) {
                    return (
                        <a href={`#question-${question.id}`} key={index} className={getBlankClass(question)}>
                           {getAnswerText(question)}
                        </a>
                    );
                }
                return <span key={index}>{part}</span>;
            })}
        </p>
    );
};

export { PassageText };
