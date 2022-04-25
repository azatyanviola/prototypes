
// const head = {
//     glasses: 1
//   };
  
// const table = {
//     __proto__ : head,
//     pen: 3
//   };
  
// const bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
//   };
  
// const pockets = {
//     __proto__: bed,
//     money: 2000
//   };

//   console.log(pockets.sheet); // 1
//   console.log(pockets.pen); // 3
//   console.log(pockets.glasses); // 1
//   console.log(head.glasses);// 1
//   console.log(table.sheet); // undefined

//*************** */

Function.prototype.defer = function f(ms){
    setTimeout(this, ms);
}

function f(){
    console.log('How are you?');
}

f.defer(5000); // 'How are you?' 5 seconds later

//*************** */

const dictionary = Object.create(null, {
    toString: { 
      value() { 
        return Object.keys(this).join();
      }
    }
  });
  
  dictionary.apple = 'apple';
  dictionary.plum = 'plum';
  dictionary.pear = 'pear';
  
  for(let key in dictionary) {
    console.log( key ); // apple, plum, pear
  }
  
  console.log( dictionary ); // {apple: 'Apple', plum: 'plum', pear: 'pear', toString: ƒ}