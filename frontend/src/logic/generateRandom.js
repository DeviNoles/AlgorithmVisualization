export default function generateRandom() {
  let numAr = new Array(10);
  for(let i = 0; i<10; i++){
    numAr[i] = Math.floor((Math.random() * 100));
    console.log(numAr[i]);
  }
}
