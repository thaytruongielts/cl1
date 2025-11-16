
import React from 'react';
import { BookOpenTextIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex items-center justify-center gap-4">
        <BookOpenTextIcon />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          English Reading Practice
        </h1>
      </div>
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
        Improve your comprehension with these cloze tests.
      </p>
    </header>
  );
};

export default Header;
