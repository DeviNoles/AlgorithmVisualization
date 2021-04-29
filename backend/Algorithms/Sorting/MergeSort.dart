class MergeSort {
  List ar;
  int count = 0;
  MergeSort(List ar){
     this.ar = ar;
   }
  void printArray(var i){
    for(int type in i){
      print(type);
  }
}


void sort(var arr, var low, var high){
  int rmid = low + ((high - low) / 2).toInt();


  if(high == low){
  //  print("HIGH WAS: " + (this.ar[high]).toString() + " LOW WAS: " + (this.ar[low]).toString());
  //  print("RETURNING");
    return;
  }
//  print("TOP");
  //  print("LOW IS: " + low.toString() + " MID IS: " + rmid.toString() + " HIGH IS: " + high.toString());
  for(int test=0; test<=rmid; test++){
//    print(this.ar[test]);
  }
    sort(arr, low, rmid);

  //  print("BOTTOM");
    //print("LOW IS: " + low.toString() + " MID IS: " + (rmid+1).toString() + " HIGH IS: " + high.toString());
  for(int test=rmid+1; test<=high; test++){
    //  print(this.ar[test]);
  }
    sort(arr, rmid+1, high);

    merge(low,rmid,high);
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
			helper[k] = this.ar[j];
			k += 1;
      j += 1;
    }
}
while(i <= mid){
		helper[k] = this.ar[i];
		k += 1; i += 1;
}
	while(j <= high){
		helper[k] = this.ar[j];
		k += 1;
    j += 1;
}
	for(i = low; i <= high; i += 1){
		this.ar[i] = helper[i - low];
  }
}
}