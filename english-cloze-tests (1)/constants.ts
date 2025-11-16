import type { ClozeTestDataType } from './types';

export const CLOZE_TESTS: ClozeTestDataType[] = [
  {
    id: 1,
    title: 'Bài 1: The Internet of Things (IoT)',
    passage: 'The Internet of Things (IoT) refers to the network of physical devices, vehicles, home appliances, and other items __BLANK_17__ with electronics, software, sensors, and network connectivity. This allows these objects to collect and exchange data. __BLANK_18__ example, a smart refrigerator can monitor its contents and automatically order groceries when supplies are low. This connectivity enhances efficiency and productivity in both our homes and workplaces. __BLANK_19__, security is a major concern, as the vast amount of data being collected and shared __BLANK_20__ potential risks. The future of IoT is bright, however, and it is expected to transform our lives __BLANK_21__ profoundly __BLANK_22__ the internet itself did decades ago.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'equipped' }, { letter: 'B', text: 'equip' }, { letter: 'C', text: 'equipping' }, { letter: 'D', text: 'equipment' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'For' }, { letter: 'B', text: 'By' }, { letter: 'C', text: 'In' }, { letter: 'D', text: 'On' }], correctAnswer: 'A' },
      { id: 19, choices: [{ letter: 'A', text: 'Therefore' }, { letter: 'B', text: 'Moreover' }, { letter: 'C', text: 'However' }, { letter: 'D', text: 'In addition' }], correctAnswer: 'C' },
      { id: 20, choices: [{ letter: 'A', text: 'create' }, { letter: 'B', text: 'creates' }, { letter: 'C', text: 'creating' }, { letter: 'D', text: 'creation' }], correctAnswer: 'B' },
      { id: 21, choices: [{ letter: 'A', text: 'more' }, { letter: 'B', text: 'most' }, { letter: 'C', text: 'much' }, { letter: 'D', text: 'as' }], correctAnswer: 'D' },
      { id: 22, choices: [{ letter: 'A', text: 'than' }, { letter: 'B', text: 'that' }, { letter: 'C', text: 'as' }, { letter: 'D', text: 'so' }], correctAnswer: 'C' },
    ],
  },
  {
    id: 2,
    title: 'Bài 2: The Human Brain',
    passage: 'The human brain is arguably the most complex organ __BLANK_17__ the body, __BLANK_18__ for all our thoughts, actions, and emotions. It is divided into several main parts, each controlling different functions. The cerebrum, the largest part, is __BLANK_19__ for higher-level functions like memory and language. __BLANK_20__, the cerebellum controls movement and balance. The brain constantly processes information from the outside world, making billions of neural connections every second. To keep the brain healthy, it is essential to get enough sleep, exercise regularly, and maintain a balanced __BLANK_21__. Continuous learning and mental challenges also play a vital __BLANK_22__ in cognitive maintenance.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'in' }, { letter: 'B', text: 'on' }, { letter: 'C', text: 'at' }, { letter: 'D', text: 'by' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'responsible' }, { letter: 'B', text: 'responsibly' }, { letter: 'C', text: 'responsibilities' }, { letter: 'D', text: 'response' }], correctAnswer: 'A' },
      { id: 19, choices: [{ letter: 'A', text: 'responsible' }, { letter: 'B', text: 'responsibility' }, { letter: 'C', text: 'responding' }, { letter: 'D', text: 'responded' }], correctAnswer: 'A' },
      { id: 20, choices: [{ letter: 'A', text: 'In contrast' }, { letter: 'B', text: 'Furthermore' }, { letter: 'C', text: 'Therefore' }, { letter: 'D', text: 'Similarly' }], correctAnswer: 'A' },
      { id: 21, choices: [{ letter: 'A', text: 'food' }, { letter: 'B', text: 'diet' }, { letter: 'C', text: 'meal' }, { letter: 'D', text: 'eating' }], correctAnswer: 'B' },
      { id: 22, choices: [{ letter: 'A', text: 'play' }, { letter: 'B', text: 'part' }, { letter: 'C', text: 'factor' }, { letter: 'D', text: 'role' }], correctAnswer: 'D' },
    ],
  },
  {
    id: 3,
    title: 'Bài 3: Climate Change and the Arctic',
    passage: "The Arctic region is warming at a rate __BLANK_17__ faster than the global average, __BLANK_18__ profound changes across the planet. The melting of sea ice and glaciers is causing sea levels __BLANK_19__ worldwide. This loss of ice also reduces the Earth's ability to reflect sunlight, leading to more heat being absorbed by the ocean and land. The delicate Arctic ecosystem, __BLANK_20__ to polar bears and seals, is under severe threat. __BLANK_21__, the thawing permafrost releases large amounts of greenhouse gases, creating a feedback loop that accelerates warming. Urgent global action is __BLANK_22__ to limit emissions and mitigate these devastating effects.",
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'much' }, { letter: 'B', text: 'too' }, { letter: 'C', text: 'so' }, { letter: 'D', text: 'very' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'cause' }, { letter: 'B', text: 'causes' }, { letter: 'C', text: 'caused' }, { letter: 'D', text: 'causing' }], correctAnswer: 'D' },
      { id: 19, choices: [{ letter: 'A', text: 'to rise' }, { letter: 'B', text: 'rise' }, { letter: 'C', text: 'rising' }, { letter: 'D', text: 'rose' }], correctAnswer: 'A' },
      { id: 20, choices: [{ letter: 'A', text: 'home' }, { letter: 'B', text: 'house' }, { letter: 'C', text: 'habitat' }, { letter: 'D', text: 'living' }], correctAnswer: 'A' },
      { id: 21, choices: [{ letter: 'A', text: 'Although' }, { letter: 'B', text: 'In addition' }, { letter: 'C', text: 'Despite' }, { letter: 'D', text: 'Since' }], correctAnswer: 'B' },
      { id: 22, choices: [{ letter: 'A', text: 'necessary' }, { letter: 'B', text: 'necessity' }, { letter: 'C', text: 'necessarily' }, { letter: 'D', text: 'necessitate' }], correctAnswer: 'A' },
    ],
  },
  {
    id: 4,
    title: 'Bài 4: Learning a New Language',
    passage: 'Learning a new language is a rewarding, __BLANK_17__ challenging, experience. It requires consistent effort and dedication. One of the best ways to acquire new vocabulary __BLANK_18__ to practice regularly, using flashcards or language apps. __BLANK_19__, improving pronunciation often involves listening __BLANK_20__ native speakers and imitating their sounds. Mastering grammar rules can sometimes be difficult, __BLANK_21__ they often differ significantly from your native language. However, the benefits of bilingualism are immense, including improved cognitive skills and a __BLANK_22__ understanding of other cultures.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'but' }, { letter: 'B', text: 'and' }, { letter: 'C', text: 'or' }, { letter: 'D', text: 'so' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'is' }, { letter: 'B', text: 'are' }, { letter: 'C', text: 'was' }, { letter: 'D', text: 'were' }], correctAnswer: 'A' },
      { id: 19, choices: [{ letter: 'A', text: 'Therefore' }, { letter: 'B', text: 'Although' }, { letter: 'C', text: 'In contrast' }, { letter: 'D', text: 'Moreover' }], correctAnswer: 'D' },
      { id: 20, choices: [{ letter: 'A', text: 'with' }, { letter: 'B', text: 'to' }, { letter: 'C', text: 'at' }, { letter: 'D', text: 'for' }], correctAnswer: 'B' },
      { id: 21, choices: [{ letter: 'A', text: 'because' }, { letter: 'B', text: 'although' }, { letter: 'C', text: 'so' }, { letter: 'D', text: 'yet' }], correctAnswer: 'A' },
      { id: 22, choices: [{ letter: 'A', text: 'deeper' }, { letter: 'B', text: 'deepest' }, { letter: 'C', text: 'deep' }, { letter: 'D', text: 'deeply' }], correctAnswer: 'A' },
    ],
  },
  {
    id: 5,
    title: 'Bài 5: The History of the Pencil',
    passage: 'The simple pencil has a surprisingly rich history. Before its invention, people used materials like lead or charcoal __BLANK_17__ marks. The modern pencil came into __BLANK_18__ after a large deposit of graphite was discovered in England in the 16th century. Graphite proved to be much better than lead because it left a darker, cleaner mark. Initially, graphite was simply wrapped __BLANK_19__ string or sheepskin. Later, in France, Nicolas-Jacques Conté developed the method of mixing graphite powder with clay and firing __BLANK_20__ in a kiln to create leads of varying hardness. This innovation, __BLANK_21__ still used today, made pencils widely accessible and affordable, transforming the way people wrote and __BLANK_22__ their work.',
    questions: [
      { id: 17, choices: [{ letter: 'A', text: 'to make' }, { letter: 'B', text: 'make' }, { letter: 'C', text: 'making' }, { letter: 'D', text: 'made' }], correctAnswer: 'A' },
      { id: 18, choices: [{ letter: 'A', text: 'living' }, { letter: 'B', text: 'part' }, { letter: 'C', text: 'being' }, { letter: 'D', text: 'action' }], correctAnswer: 'C' },
      { id: 19, choices: [{ letter: 'A', text: 'in' }, { letter: 'B', text: 'with' }, { letter: 'C', text: 'around' }, { letter: 'D', text: 'by' }], correctAnswer: 'A' },
      { id: 20, choices: [{ letter: 'A', text: 'them' }, { letter: 'B', text: 'it' }, { letter: 'C', text: 'which' }, { letter: 'D', text: 'that' }], correctAnswer: 'B' },
      { id: 21, choices: [{ letter: 'A', text: 'what' }, { letter: 'B', text: 'which' }, { letter: 'C', text: 'who' }, { letter: 'D', text: 'where' }], correctAnswer: 'B' },
      { id: 22, choices: [{ letter: 'A', text: 'draw' }, { letter: 'B', text: 'drawing' }, { letter: 'C', text: 'drew' }, { letter: 'D', text: 'drawn' }], correctAnswer: 'C' },
    ],
  }
];