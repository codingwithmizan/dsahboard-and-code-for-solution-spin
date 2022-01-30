const  MatchingCharacters = (str:string) => {
    const myStr= str.toLowerCase()
    let countDistace = 0;
    for (let i = 0; i < myStr.length; i++) {
        let charObj = {};
        let lastIdx = myStr.lastIndexOf(myStr[i]);
        if (i == lastIdx)
            continue;
        for (let j = i + 1; j < lastIdx; j++) {
            if (charObj[myStr[j]] == undefined)
                charObj[myStr[j]] = myStr[j];
        }
        if (countDistace < Object.keys(charObj).length)
        countDistace = Object.keys(charObj).length;
    }
    return countDistace
  }
  
  console.log(MatchingCharacters("mmmerme"));