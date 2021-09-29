import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  let returnString = '';
  let addString = '';
  
  options.repeatTimes = !options.repeatTimes ? 1 : options.repeatTimes;
  options.separator = !options.separator ? '+' : options.separator;
  options.addition = options.addition === undefined ? '' : String(options.addition);
  options.additionRepeatTimes = !options.additionRepeatTimes ? 1 : options.additionRepeatTimes;
  options.additionSeparator = !options.additionSeparator ? '|' : options.additionSeparator;
  
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    addString += options.addition + options.additionSeparator;
  }

  addString += options.addition;
  for (let i = 1; i < options.repeatTimes; i++) {
    returnString += str + addString + options.separator;
  }
  
  return returnString + str + addString
}