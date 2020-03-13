export default function generateRandom() {
    let numAr = Math.floor((Math.random() * 100));
    if(numAr==0){
      generateRandom();
    }
    else{
    return numAr
  }
}
