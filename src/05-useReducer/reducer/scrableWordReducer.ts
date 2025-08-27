export interface ScrableWordState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}

const GAME_WORDS: string[] = [
  // Fáciles (cortos y comunes)
  'NARUTO',
  'SASUKE',
  'SAKURA',
  'GAARA',
  'NEJI',
  'LEE',
  'INO',
  'KIBA',
  'SHINO',

  // Medios (un poco más largos o menos comunes)
  'KAKASHI',
  'ITACHI',
  'OBITO',
  'MADARA',
  'TSUNADE',
  'OROCHIMARU',
  'DEIDARA',
  'SHIKAMARU',
  'KONAN',

  // Difíciles (largos o más complicados de recordar/escribir)
  'UZUMAKI',        // Apellido de Naruto
  'UCHIHA',         // Clan de Sasuke e Itachi
  'SARUTOBI',       // Hiruzen Sarutobi
  'NAMIKAZE',       // Minato Namikaze
  'JIRAIYA',
  'TOBIRAMA',
  'HASHIRAMA'
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
export const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
export const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = ():ScrableWordState => {

  const shuffledWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length,
  }
}

export type ScrambleWordsAction = 
| { type: 'SET_GUESS', payload: string }
| { type: 'CHECK_ANSWER' }
| { type: 'SKIP_CASE' }
| { type: 'RESET_GAME', payload: ScrableWordState }


export const scrambleWordReducer = ( state: ScrableWordState, action: ScrambleWordsAction ): ScrableWordState => {

  switch (action.type) {

    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase()
      }

    case 'CHECK_ANSWER':

      if( state.currentWord === state.guess ){
        const newWords = state.words.slice(1);
        

        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: '',
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0]),

        }

      }
      return {
        ...state,
        guess: '',
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors ? true : false,
        
      }

    case 'SKIP_CASE': {

      if( state.skipCounter >= state.maxSkips ) return state;

      const updatedWords = state.words.slice(1);

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updatedWords,
        currentWord: updatedWords[0],
        scrambledWord: scrambleWord(updatedWords[0]),
        guess: '',
      }

    }

    case 'RESET_GAME': 
      return action.payload
      
    default:
      return state
    }

}