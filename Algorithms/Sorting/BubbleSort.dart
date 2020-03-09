class BubbleSort {
  List ar;
  BubbleSort(List ar){
     this.ar = ar;
   }
  void printArray(){
    for(int type in ar){
      print(type);
  }
}
  void sort(){
    for(int i = 0; i<this.ar.length; i++){
      for(int j=0; j<this.ar.length-i-1; j++){
        if(this.ar[j]>this.ar[j+1]){
          int holder = this.ar[j];
          this.ar[j] = this.ar[j+1];
          this.ar[j+1] = holder;
          printArray();
        }
        print('\n');
      }

    }

  }
}
