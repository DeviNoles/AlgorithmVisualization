import '../Algorithms/Sorting/MergeSort.dart';

void main(){
  List logTypes = new List();
  logTypes.add(5);
   logTypes.add(4);
   logTypes.add(3);
   logTypes.add(2);
   logTypes.add(1);
   //logTypes.add(7);

MergeSort kk = new MergeSort(logTypes);
  print ('Hello World');
  kk.sort(logTypes, 0, 4);
  kk.printArray(logTypes);
}
