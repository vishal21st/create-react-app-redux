function getNumbersFromRange (start, end) {
  if (start === end) return start
  if (start > end) throw new Error("range start cannot be greater then range end");
  let range = [];
  for (let i = start; i <= end; i++ ) {
    range.push(i);
  }
  return range;
}

export const  getNumbersFromTextInput = (text) => {
  let inputs = text.split(',')
  let inputHash = {}
  for (let index in inputs) {
    const input = inputs[index]
    if (input.indexOf('-') !== -1) {
      let rangeInputs = input.split('-') 
      rangeInputs = getNumbersFromRange(parseInt(rangeInputs[0]), parseInt(rangeInputs[1]))
      for (let i in rangeInputs) {
        inputHash[rangeInputs[i]] = -1
      }
    } else if (input !== "") {
      inputHash[input] = -1
    }
  }
  return inputHash
}

export const findDuplicatesNumbers = (numberList, inputHash) => {
  let uniqNumbers =  [];
  let duplicateNumberHash = {};
  
  for (let index in numberList) {
    const number = numberList[index]
    if (inputHash[number] != null) {
      inputHash[number] = 1
    }
  }

  for (let key in inputHash) {
    if (inputHash[key] === 1) {
      duplicateNumberHash[key] = true
    } else {
      uniqNumbers.push(key)
    }
  }

  return {uniqNumbers, duplicateNumberHash}
}


export const validateInput = (text) => {
  if (text === "") return true

  if (text) {
    let reg = /^[\d , -]+$/
    return reg.test(text)
  }

  return false
  
}


