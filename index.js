'use strict';

//-------------------JSON  Task 1-----------------------


// let image = {
//     name: "User photo",
//     size: "200 x 200",
//   };
//    let jsonImg = JSON.stringify(image);
//    console.log(jsonImg);
//    let newImage = JSON.parse(jsonImg);
//    console.log(newImage);

//-------------------DOM  Task 1-----------------------

// let elem = document.createElement('p');
// elem.classList.add('text');
// elem.innerHTML = 'Это всего лишь текст';
// document.body.append(elem);

// let div = document.createElement('div');
// div.classList.add('alert');
// div.innerHTML = 'А это сообщение об ошибке';
// document.body.append(div);
// div.style.background = 'red';
// div.style.color = 'white';
// div.style.padding = '20px';


//-------------------DOM  Task 2-----------------------


// let names = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
// let ol = document.createElement('ol');
// for (let i = 0; i < names.length; i++) {
//   let li = document.createElement('li');
//   li.innerHTML = `${names[i]}`;
//   if (i % 2 == 0) {
//     li.classList.add('odd');
//     li.style.background = 'blue';
//   } else {
//     li.classList.add('even');
//     li.style.background = 'green';
//   }
//   let nameArr = names[i].split('');

//   for (let k = 1; k < nameArr.length; k++) { 
//       for (let o = k +1; o < nameArr.length; o++) {
//           if (nameArr[o] == nameArr[k]) {
//               li.style.color = "white";
//           }
//       }
//   }
//   ol.append(li);
// } 

// document.body.append(ol);


//-------------------DOM  Task 3-----------------------

// function showMessage(message, background, top, left) {
//   let messages = document.querySelectorAll('.message');

//   if(messages.length > 2) {
//     messages[0].remove();
//     createMessage();
//   } else {
//     createMessage();
//   }



//   function createMessage() {
//     let div = document.createElement('div');
//     div.classList.add('message');
//     div.innerHTML = message;
//     div.style.background = background;
//     div.style.position = 'fixed';

//     let topC = top;
//     let leftC = left;
//     setCoords();  
//     document.body.append(div);


//     function setCoords() {
     
//       for (let i = 0; i <= messages.length; i++) {
//         if (messages[i].style.top == topC + 'px') {
//           topC = +top + 25 + 'px';
//           setCoords();
//         } else {
//           div.style.top = topC + 'px';
//         }
//         if (messages[i].style.left = leftC + 'px') {
//           leftC = +left + 25 + 'px';
//           setCoords();
//         } else {
//           div.style.left = leftC + 'px';
//         }
//       }
//     }
//   }

// }

// showMessage("Hello 1", 'yellow', 20, 30);
// showMessage("Hello 2", 'green', 40, 30);
// showMessage("Hello 3", 'blue', 80, 30);
// showMessage("Hello 4", 'gray', 50, 150);

// showMessage("Hello 5", 'yellow', 20, 170);
// showMessage("Hello 6", 'green', 40, 190);
// showMessage("Hello 7", 'blue', 80, 200);
// showMessage("Hello 8", 'gray', 50, 220);




//-------------------DOM  Task 4-----------------------

// let ul = document.createElement('ul');
// let arr = [];
// createLi();


// function createLi() {
//   let num = prompt('Enter a number');
//   if (typeof num === 'object' || isNaN(num) === true || num === '') {
//     document.body.append(ul);
//   } else {    
//     let sum = arr.reduce((sum, current) => sum + current, 0);
//     let inner = sum + +num;
//     arr.push(inner);
//     let li = document.createElement('li');
//     li.innerHTML = inner;
//     ul.append(li);
//     createLi();
//   }
  
// }



//-------------------isEqual-----------------------


function isEqual(obj1, obj2) {
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    return 'Both parameters are not Objects';
  } else if (typeof obj1 !== 'object') {
    return 'The first parameter is not an Object';
  } else if (typeof obj2 !== 'object') {
    return 'The second parameter is not an Object';
  }

  if (obj1 == obj2) return false;
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  } else {
    return false;
  }
  // for (let key in obj1) {
  //   if (!obj2.hasOwnProperty(key)) {
  //         return false;
  //   } else {
  //         if(obj1[key] !== obj2[key]) {
  //           return false;
  //         } 
  //     }
      
  // }
  // return true;
} 
let rama = {
  1: '1',
  2: '22'
};
let mama = {
  1: '1',
  2: '22'
};


console.log(isEqual(rama, mama));
