import { alphabetToMorse, morseToAlphabet } from "./script";
const string = 'HELLO'
const stringWithSpaces = 'HELLO WORLD AND UNIVERSE'
const morseString = '.... . .-.. .-.. ---'
const morseStringWithSpaces = '.... . .-.. .-.. --- / .-- --- .-. .-.. -.. / .- -. -.. / ..- -. .. ...- . .-. ... .'
const longString = 'HELLO PLANETS MOONS SUN GALAXY AND ANYONE INSIDE OF IT'
const morseLongString = '.... . .-.. .-.. --- / .--. .-.. .- -. . - ... / -- --- --- -. ... / ... ..- -. / --. .- .-.. .- -..- -.-- / .- -. -.. / .- -. -.-- --- -. . / .. -. ... .. -.. . / --- ..-. / .. -'

describe("test cases for morse to alphabet function", () => {
  it("should return a string",
  () => {
    expect(typeof morseToAlphabet(string)).toBe("string")
  })
  it("should handle space and turn it into '/' ", () => {
    expect(morseToAlphabet(morseStringWithSpaces)).toBe(stringWithSpaces)
  })
  it("should handle long lines of string and translate into morse" , () => {
    expect(morseToAlphabet(morseLongString)).toBe(longString)
  })
})

describe("Test cases for alphabet to morse translate function", () => {
  it("should return a string",
  () => {
    expect(typeof alphabetToMorse(morseString)).toBe("string")
  })
  it("should handle space and turn it into a '/'", () => {
    expect(alphabetToMorse(stringWithSpaces)).toBe(morseStringWithSpaces)
  })
  it("should handle long lines of string and translate into morse" , () => {
    expect(alphabetToMorse(longString)).toBe(morseLongString)
  })
})