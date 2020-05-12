class MergeSort {
  List ar;
  List stringPairArray = new List();
  int count = 0;
  MergeSort(List ar){
     this.ar = ar;
   }
  void printArray(var i){
    for(int type in i){
      print(type);
  }
}


List sort(var arr, var low, var high){
  int rmid = low + ((high - low) / 2).toInt();


  if(high <= low){

  }
  else{
    sort(arr, low, rmid);
    sort(arr, rmid+1, high);
    merge(low,rmid,high);
  }
return stringPairArray;
  }
void merge(var low, var mid, var high){
  List helper = new List();

//  print("MERGE CALL ON: ");
  var index = 0;
  for(int mergeing = low; mergeing<=high; mergeing++){
    helper.add(this.ar[mergeing]);
    //print("MERGEING IS: " + mergeing.toString());
  //  print(helper[index]);
    index++;
  }

  int i= low;
	int j = mid+1;
  int k = 0;

	while(i <= mid && j <= high){
		if(this.ar[i] <= this.ar[j]){
			helper[k] = this.ar[i];
			k += 1;
      i += 1;
    }
		else{
      print("FIRST");
      print("SWITCHING: " + i.toString() + "AND " + j.toString());

      stringPairArray.add(i.toString() + "|" + j.toString());
  //     stringPairArray.add(k.toString() + "|" + i.toString());
			helper[k] = this.ar[j];
			k += 1;
      j += 1;
    }
}
while(i <= mid){
  print("SECOND");
  //  print("SWITCHING: " + k.toString() + "AND " + i.toString());
    stringPairArray.add(k.toString() + "|" + i.toString());
		helper[k] = this.ar[i];
		k += 1;
    i += 1;
}
	while(j <= high){
  //    print("THIRD");
  //  print("SWITCHING: " + k.toString() + "AND " + j.toString());
  //  stringPairArray.add(j.toString() + "|" + i.toString());
		helper[k] = this.ar[j];
		k += 1;
    j += 1;
}
	for(i = low; i <= high; i += 1){
		this.ar[i] = helper[i - low];
    }
  printArray(this.ar);
  }
}
