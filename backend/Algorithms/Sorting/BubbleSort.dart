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
  List sort(){
    List<List<int>> pairs;
    for(int i = 0; i<this.ar.length; i++){
      List out = new List();
      for(int j=0; j<this.ar.length-i-1; j++){
        if(this.ar[j]>this.ar[j+1]){
          out[0] = this.ar[j];
          out[1] = this.ar[j+1];
          this.ar[j] = out[1];
          this.ar[j+1] = out[0];
        }
        pairs[i]=out;
      }

    }
    printArray();
    for(var wts = 0; wts<pairs.length; wts++){
      for(var wtss = 0; wtss<pairs.length; wtss++){
        print(pairs[wtss]);
      }
    }
    return this.ar;
  }

}
