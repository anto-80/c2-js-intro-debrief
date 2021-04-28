let myNumber = 15;
if (typeof myNumber !== 'number') {
    console.log('This is not a number');
}
 else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz');
 

} else if (myNumber % 5 === 0) {
    console.log('BUzz');
 
} else if (myNumber % 15 === 0) {
    console.log('Gen');
 
} else {
 
    console.log(myNumber);
     }
    
  

  let item = 'Hat';
  switch (item) {
      case 'Shoes':
          console.log('Shoes are $50');
          
          break;
      case 'Jeans':
          console.log('Jeans are $50');
          break;

       case 'Hat':
           console.log('Hat is $25');
           break;
       case 'Socks':
           console.log('Socks are $2');
           break;
  
      default:
          break;
  }
  function getRandomnumber(min, max) {
    return Math.random() * (max - min) + min;
  }
 getRandomnumber(50,100);