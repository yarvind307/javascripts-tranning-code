//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


Math.random()

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
  
  random(1, 10);
  

  //Date

