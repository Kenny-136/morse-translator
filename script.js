// import { alphabetToMorse, morseToAlphabet } from './translate'

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
// Here is the Function to Translate an alphabet String into an Morse Code.

const alphabetToMorse= (str) => {
  const resultArr = str.split('').reduce((result, current) => {
    alphabetToMorseObject[current.toUpperCase()] ? result.push(alphabetToMorseObject[current.toUpperCase()]) : result.push('/')
    return result
  }, [])
  return resultArr.join(' ')
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

// A Function to Translate a Morse Code String Into Alphabet Words.
const morseToAlphabet = (str) => {
  const resultArr = str.split(' ').reduce((result, current) => {
    morseToAlphabetObject[current] ? result.push(morseToAlphabetObject[current]) : result.push(' ')
    return result
  } , [])
  return resultArr.join('')
}


const inputSection = document.querySelector('.input')
const resultSection = document.querySelector('#result')

const translateBtn = document.querySelector('#translateBtn')

translateBtn.addEventListener("click", () => {
  const result = translate(input.value)
  resultSection.innerText = result
})

const translate = (str) => {
  if (/[\.]|[\-]|[\/]/.test(str)) {
    // If True , it Means we are translating Morse
    const resultArr = str.split(' ').reduce((result, current) => {
      morseToAlphabetObject[current] ? result.push(morseToAlphabetObject[current]) : result.push(' ')
      return result
    } , [])
    return resultArr.join('')
  } else if (/[[A-Z]|[a-z]| /.test(str)) {
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