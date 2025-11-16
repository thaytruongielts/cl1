
import React, { useState } from 'react';
import { CLOZE_TESTS } from './constants';
import ClozeTest from './components/ClozeTest';
import Header from './components/Header';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from './components/Icons';

const App: React.FC = () => {
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const totalTests = CLOZE_TESTS.length;

  const goToNextTest = () => {
    setCurrentTestIndex((prevIndex) => (prevIndex + 1) % totalTests);
  };

  const goToPreviousTest = () => {
    setCurrentTestIndex((prevIndex) => (prevIndex - 1 + totalTests) % totalTests);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="mt-8">
          <ClozeTest key={currentTestIndex} testData={CLOZE_TESTS[currentTestIndex]} />
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={goToPreviousTest}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <ArrowLeftCircleIcon />
              Previous
            </button>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Bài {currentTestIndex + 1} / {totalTests}
            </span>
            <button
              onClick={goToNextTest}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Next
              <ArrowRightCircleIcon />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
