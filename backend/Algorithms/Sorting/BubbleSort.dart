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
    List stringPairs = new List();
    for(int i = 0; i<this.ar.length; i++){

      for(int j=0; j<this.ar.length-i-1; j++){
        if(this.ar[j]>this.ar[j+1]){
          int holder = this.ar[j];
         this.ar[j] = this.ar[j+1];
         this.ar[j+1] = holder;
         stringPairs.add(holder.toString() + "," + ar[j].toString());
        }
      }

    }
    for(int i = 0; i<stringPairs.length; i++){
      print(stringPairs[i]);
    }
    printArray();
    return this.ar;
  }

}