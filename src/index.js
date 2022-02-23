// (function createHitDiv() {
//     const hit = document.createElement('div');
//     hit.id = 'test';
//     hit.style.cssText = `
//     position: absolute;
//     cursor: default;
//     font-size: 25px;
//     font-family: 'Arial';
//     `;
//     document.body.append(hit);

//     document.addEventListener('mousemove', (event) => {
//         console.log(event.pageX)
//         hit.style.cssText += `
//         top: ${event.pageY+20}px;
//         left: ${event.pageX+20}px;
//         `;
//     })
// })()

// function addText(elem) {
//   if (elem.children.length === 0) {
//     elem.innerHTML += elem.textContent;
//   } else {
//     const randomChild = elem.children[getRandomInt(0, elem.children.length)];
//     elem.append(randomChild.cloneNode(true));
//   }
// }

// document.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (event.target.tagName === 'BODY' || event.target.tagName === 'HTML')
//     return;
//   addText(event.target);
// });

// document.addEventListener('mouseover', (event) => {
//   event.target.style.boxShadow = '0px 0px 0px 2px red';
//   document.querySelector('#test').innerHTML = event.target.classList;
// });

// document.addEventListener('mouseout', (event) => {
//   event.target.style.boxShadow = 'none';
// });




// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }