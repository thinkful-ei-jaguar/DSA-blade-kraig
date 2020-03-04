// URLify - linear

const uRLify = (string) => {
  return string.replace(/ /g, '%20')
}

console.log('URLify:', uRLify('www.thinkful.com /tauh ida parv een'))

//Filter less than 5 Array - linear.  Improvement: don't use splice or slice

const filter5 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1)
      i--
    }
  }
  console.log('Filtered array:', arr)
}

filter5([6, 3, 2, 7])

//Max sum in the array - 

const maxSum = (arr) => {
  biggest = Math.max(...arr)
  
  bigIndex = arr.indexOf(biggest)
  
  smallArr = arr.slice(0, bigIndex)
  

  secondBiggest = Math.max(...smallArr)
  console.log('Sum of two largest:', biggest + secondBiggest)
}

maxSum([5, 15, -3, 38, 0])

// Merge arrays -

const arrMerge = (arr1, arr2) => {
  arr1 = arr1.concat(arr2)

  arr1.sort((a, b) => a-b)
  console.log('Merged and sorted:', arr1)
}

arrMerge([1, 3, 5], [2, 9, 23])

// Remove characters - polynomial complexity O(n^2)

const removeChar = (string, splitter) => {
  let splitters = []
  let resultString = ''
  for (let i = 0; i < splitter.length; i++) {
    splitters.push(splitter[i])
  }

  for (let i = 0; i < string.length; i++) {
    let toConcat = true;
    for (let j = 0; j < splitters.length; j++) {
      if (string[i] === splitters[j]) {
        toConcat = false;
        
      }
    }
    if (toConcat) {
      resultString = resultString.concat(string[i])
    }
  }
  console.log('Reduced string:', resultString)
}

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')

//Products - time complexity?  Maybe O(n^2) ?

const products = (arr) => {
  
  
  let resultArr = arr.map(element => {
  
    element = arr.reduce((a, b) => a * b)/element
    return element
  })
  
  console.log('Products array: ', resultArr)
}

products([1, 3, 9, 4])

// 2D Array - save for last, directions not consistent O(n^2)?

const twoD = (arr) => {
  let containsZero = []
  arr.map((array, index) => {
    if (array.indexOf(0) !== -1) {
      containsZero.push(index)
    }
  })
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        
        arr.map(element => element[j] = 0)
      }
    }
  }

  arr.map((array, index) => {
    if (containsZero.includes(index)) {
      let zeroedArray = array.map(item => 0)
      arr[index] = zeroedArray
    }
  })
  console.log('Zero and 1s array:', arr)
}

twoD([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]])


//  String Rotation

const checkRotation = (str1, str2) => {
  let rotations = [str1]
  let rotated = str1
  let itIsRotated = false
  for (let i = 0; i < str1.length - 1; i++) {
    let toConcat = rotated[0]
    rotated = rotated.concat(toConcat).slice(1)
    rotations.push(rotated)
  }
  for (let i = 0; i < str2.length; i++) {
    if (rotations[i] === str2) {
      itIsRotated = true;
    }
  }
  console.log(`Is ${str2} a rotation of ${str1}? ${itIsRotated}`)

}

checkRotation('amazon', 'azonma')
checkRotation('amazon', 'azonam')