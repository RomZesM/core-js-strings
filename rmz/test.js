let a = new String('');
console.log(a.constructor);


function isString(value, foo) {
	if (typeof value === 'string' || value.constructor === '[Function: String]')
	  return true;
	return false;
  }


// console.log(isString('test'), true);
// console.log(isString(''), true);
// console.log(isString('123'), true);
// // eslint-disable-next-line no-new-wrappers
// console.log(isString(new String('test')), true);
// // eslint-disable-next-line no-new-wrappers
// console.log(isString(new String('')), true);
// // eslint-disable-next-line no-new-wrappers
// console.log(isString(new String('123')), true);

let c = new String('test');
let d = new String('');
let g = new String('123');

// console.log(typeof c, c.constructor);
// console.log(typeof d, d.constructor);
// console.log(typeof g, g.constructor);
// console.log(c.constructor === String);
// console.log(d.constructor === String);
// console.log(g.constructor === String);



// let testStr = '123456789';
// console.log(testStr.slice(testStr.indexOf('345'), testStr.lastIndexOf('345') + '345'.length));
// console.log(testStr.replace('345', ''));
// console.log(testStr.slice(3, -3));
// console.log(testStr.substring(0, 3).concat(testStr.substring(6,9)));

// let testStr2 = '123456789';
// console.log(testStr2.charCodeAt(0));


function isPalindrome(str) {
	let testStr = '';
	for (let i = 0; i < str.length; i += 1) {
		if (str[i] !== ' ' && str[i] !== ',' && str[i] !== '.' && str[i] !== '!' && str[i] !== '?') {
			testStr = testStr.concat(str[i].toLowerCase())
		}
		
	}

	let counter = 0;
	for (let index = testStr.length - 1; index >= 0; index -= 1) {
	  if (testStr[index] !== testStr[counter]) return false;
	  counter += 1;
	}
	return true;
  }

//console.log(isPalindrome("Was it a car or a cat I., -?! saw?"));


/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  let words = sentence.split(' ');
  let lengths = [];
  let max = 0;
  words.forEach((element) => {
    lengths.push(element.length)
  });
  max = Math.max(...lengths);
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length === max) return words[i];
  }
}


//console.log(findLongestWord('A long and winding road'));

function invertCase(sent) {
  function invertStr(str) {
    let ret = '';
    
    for (let i = 0; i < str.length; i += 1) {
      console.log(str.charCodeAt(i));
      if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
        ret = ret.concat(str[i].toLowerCase());
      } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
        ret = ret.concat(str[i].toUpperCase());
      } else ret = ret.concat(str[i]);
    }
    
    return ret;
  }
  const words = sent.split(' ');
  const retArr = [];
  words.forEach((element) => {
    retArr.push(invertStr(element));
  });
  return retArr.join(' ');
}

//console.log(invertCase("Hello World!"));


function extractNameFromTemplate(value) {
  let regex = /<(.+?)>/;
  let matches = value.match(regex);
  console.log(matches);
  return matches[1];
}

// console.log(extractNameFromTemplate('<div>'));

// 'hello' => 'uryyb'

function encodeToRot13(str) {
  let ret = '';
  for (let i = 0; i < str.length; i += 1) {   
    const asciiCode = str.charCodeAt(i);
    if((asciiCode > 64 && asciiCode < 78) || (asciiCode > 96 && asciiCode < 110)){
      ret =  ret.concat(String.fromCharCode(asciiCode + 13));
    } else if((asciiCode > 77 && asciiCode < 91) || (asciiCode > 109 && asciiCode < 123)){
      ret =  ret.concat(String.fromCharCode(asciiCode - 13));
    }else ret = ret.concat(str[i])
    
}
  return ret;
}

//console.log(encodeToRot13('hel lo'));

function getCardId_test(card) {
  let deck = [
  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
  ]
  let id = 0;
  for (let i = 0; i < deck.length; i += 1) {
    const element = deck[i];
    if (element === card){
      id = i;
    }
  }
  return id;
}

function getCardId(card) {
  let cardIndex = Number.parseInt(card[0]);
  let cardPow = 0;
  let id = 0;
  if (card.length === 2) {
    if (card[0] === 'A') cardIndex = 1;
    if (card[0] === 'J') cardIndex = 11;
    if (card[0] === 'Q') cardIndex = 12;
    if (card[0] === 'K') cardIndex = 13;
    if (card[1] === '♣') cardPow = 0;
    if (card[1] === '♦') cardPow = 1;
    if (card[1] === '♥') cardPow = 2;
    if (card[1] === '♠') cardPow = 3;
  }
  if (card.length === 3) {
    cardIndex = 10;
    if (card[2] === '♣') cardPow = 0;
    if (card[2] === '♦') cardPow = 1;
    if (card[2] === '♥') cardPow = 2;
    if (card[2] === '♠') cardPow = 3;
  }
    id = cardIndex + cardPow * 13 - 1;
  return id;
}

console.log(getCardId_test('2♣'));
console.log(getCardId('2♣'));