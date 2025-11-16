
export type Letter = 'A' | 'B' | 'C' | 'D';

export interface Choice {
  letter: Letter;
  text: string;
}

export interface QuestionType {
  id: number;
  choices: Choice[];
  correctAnswer: Letter;
}

export interface ClozeTestDataType {
  id: number;
  title: string;
  passage: string;
  questions: QuestionType[];
}
