let _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
       return clampedValue;
      
    },
    inRange(number, start, end) {
      if(end === undefined) {
        end = start;
        start = 0;
      };
      if(end < start) {
        let temp = end;
        end = start;
        start = temp;
      };
      const isInRange = (number >= start && number < end);
      return isInRange;
    },
    words(string) {
      return string.split(' ');
    },
    pad(string, length) {
      if(string.length >= length) {
        return string;
      };
      let frontPad = Math.floor((length - string.length)/2);
      let endPad = length - (frontPad + string.length);
      let space = ' ';
      let paddedString = space.repeat(frontPad) + string + space.repeat(endPad);
      return paddedString;
    },
    has(obj, key) {
      /*const hasValue = key === undefined ? false : true;*/
      const hasValue2 = key in obj ? true : false;
      return hasValue2;
    },
    invert(obj) {
      let invObj = {};
      for(key in obj) {
        let val = obj[key];
        invObj[val] = key;
      };
      return invObj;
    },
    findKey(obj, predicate) {
      for(key in obj) {
        let val = obj[key];
        let predicateReturnValue = predicate(val);
        if(predicateReturnValue) {
          return key;
        };
      
      };
      return undefined;
    },
    drop(arr, num) {
      
      if(!num) {
        num = 1;
      };
      let dropArr = arr.slice(num);
      return dropArr;
    }, 
    dropWhile(arr, predicate) {
      let ind = arr.findIndex((element, index) => !predicate(element, index, arr)); //negate the value (use !) since we are looking to drop elements until the predicate returns a falsy value
      let dWArr = this.drop(arr, ind);
      return dWArr;
    },
    chunk(arr, size) {
      if(!size) {
        size = 1;
      };
      let chunkArr = [];
      for(let i = 0; i < arr.length; i+=size) {
        let arrChunk = arr.slice(i, i+size);
        chunkArr.push(arrChunk);
      }
      return chunkArr;
    }
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;