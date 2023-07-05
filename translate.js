// An Object of Alphabets and Translation into Morse Code.
const alphabetToMorseObject = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
}

// Here I am Flipping the Morse Object From Alphabet to Morse, into an Object of Morse to Alphabet, Which Later I found were Unnecesary.
// const alphabetToMorseObject = () => {
//   const keyArr = Object.keys(alphabetToMorseObject)
//   return Object.values(alphabetToMorseObject).reduce((result, current, index) => {
//     result[current] = keyArr[index]
//     return result
//   }, {})
// }

// An Object to Translate Morse Code into Alphabet.
const morseToAlphabetObject = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z'
}

export const translate = (str) => {
  if (/[\.]|[\-]|[\/]/.test(str)) {
    // If True , it Means we are translating Morse
    const resultArr = str.split(' ').reduce((result, current) => {
      morseToAlphabetObject[current] ? result.push(morseToAlphabetObject[current]) : result.push(' ')
      return result
    } , [])
    return resultArr.join('')
  } else if (/[[A-Za-z] /.test(str)) {
    // If True , it Means we are translating Alphabets
    const resultArr = str.split('').reduce((result, current) => {
      alphabetToMorseObject[current.toUpperCase()] ? result.push(alphabetToMorseObject[current.toUpperCase()]) : result.push('/')
      return result
    }, [])
    return resultArr.join(' ')
  } else {
    return `Invalid Input. Please Only Put "." , "_" and "/"(as a space Substitute) to Translate Morse Code, or Alphabets (A-Z) To Translate Alphabets.`
  }
}