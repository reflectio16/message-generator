const generateNumber = num => {
    return Math.floor(Math.random()*num)
  }
  
  const messageBox = {
  
  dailyLuckyNumber : ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  
  dailyLuckyColor: ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Black', 'White'],
  
  dailyAdvice: ['Stay at home and chill', 'Time to socialize', 'Go for a walk', 'Good time to start exercise']
  
  }
  
  let adviceArray = []
  
  for(let prop in messageBox) {
     let luckySelection = generateNumber(messageBox[prop].length)
  
  switch(prop) {
         
    case 'dailyLuckyNumber':
              adviceArray.push(`Your lucky daily number "${messageBox[prop][luckySelection]}".`)
              break
  
     case 'dailyLuckyColor':
          adviceArray.push(`Your lucky daily color "${messageBox[prop][luckySelection]}".`)
          break
  
     case 'dailyAdvice':
           adviceArray.push(`Your daily advice is "${messageBox[prop][luckySelection]}".`)  
           break   
  }
  
  }
  
  const finalFormat = advice => {
    const finalArray = adviceArray.join('\n')
  
    console.log(finalArray)
  }
  
  finalFormat(adviceArray);
  
  
  
  