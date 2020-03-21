class BubbleSort {
  List ar;
  int count = 0;
  BubbleSort(List ar){
     this.ar = ar;
   }
  void printArray(){
    for(int type in ar){
      print(type);
  }
}


  List sort(){
    List stringPairArray = new List();
    for(int i = 0; i<this.ar.length; i++){
      for(int j=0; j<this.ar.length-i-1; j++){
        if(this.ar[j]>this.ar[j+1]){
          int holder = this.ar[j];
         this.ar[j] = this.ar[j+1];
         this.ar[j+1] = holder;
         var pass = this.ar[j];
      //   stringPairArray.add(holder.toString() + "," + j.toString() + "|" +
      // pass.toString() + "," + (j+1).toString());

      stringPairArray.add(j.toString() + "|" + (j+1).toString());

       }
      }
    }

    //printArray();
    return stringPairArray;
  }

}
