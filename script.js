// let hour = document.getElementById('hour');
// let minutes = document.getElementById('minutes');
// let secondes = document.getElementById('secondes');

// // Buttons
// let run = document.getElementById('run')
// let reset = document.getElementById('reset')
// let stop = document.getElementById('stop')

// run.addEventListener("click", () => {
//     console.log('run');
//     setTimer();
// })

// function setTimer() {
//     let comptS = 0, comptM = 0, comptH = 0;
//     const secInt = setInterval(() => {
//         comptS++;
//         secondes.innerHTML = comptS;
//         if(comptS == 60){
//             comptS = 0;
//         }
//     }, 1000);
//     const minInt = setInterval(() => {
//         comptM++;
//         minutes.innerHTML = comptM + ':';
//         if(comptM == 60){
//             comptM = 0;
//         }
//     }, 60000);
//     const hourInt = setInterval(() => {
//         comptH++;
//         hour.innerHTML = comptH + ':';
//         if(comptH == 60){
//             comptH = 0;
//         }
//     }, 360000);

//     stop.addEventListener("click", () => {
//         clearInterval(secInt)
//         clearInterval(minInt)
//         clearInterval(hourInt)
//     })
//     reset.addEventListener("click", () => {
//         comptS = 0;
//         comptM = 0;
//         comptH = 0;
//         secondes.innerHTML = "00";

//         minutes.innerHTML = '00:';

//         hour.innerHTML = '00:';

//         clearInterval(secInt)
//         clearInterval(minInt)
//         clearInterval(hourInt)
//     })
// }


//  La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau 
let id = 0;
const todos = [
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
];

console.log(todos[1].text);


calculate=(a,b)=>{
  let res1 = 0, res2 = 0;
  for (let i = 0,j=[...a].length - 1; i <[...a].length, j>=0; i++, j--) {
   res1 += [...a][i] * Math.pow(2, j)
    
  };
  for (let i = 0,j=[...b].length - 1; i <[...b].length, j>=0; i++, j--) {
    res1 += [...b][i] * Math.pow(2, j)
   };
  console.log(res1 + res2);
  
}
calculate("10", "10")
calculate("10", "100")















let x = "First test"
let y = "Second test"

let promesse = new Promise((resolve, rejected) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Opération réussie !")
    } else {
      resolve("Opération échouée !")

    }
  }, 20000);
});

console.log(x);
promesse.then((r) => {
  console.log(r);
})
  .catch((erreur) => {
    console.log(erreur);
  })
console.log(y);
