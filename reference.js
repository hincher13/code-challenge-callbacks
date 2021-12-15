//This code snipit demonstrates the way functions interact


// function willItBlend(callback) {
//     // should be true for anything divisible by 3 between 0 and 9
//     const itBlends = Math.floor(Math.random() * 10) % 3 === 0;
  
//     if (itBlends) {
//       callback(null, "Good news! It Blends!");
//     } else {
//       callback(new Error("Oh No! It didn't Blend!"));
//     }
//   }
  
  
  
//   willItBlend(function(err, result) {
//     if (err) {
//       console.log('there is an error')
//     } else {
//       console.log('no error')
//     }
//   })