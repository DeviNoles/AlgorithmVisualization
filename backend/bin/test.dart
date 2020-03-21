import '../Algorithms/Sorting/MergeSort.dart';

void main(){
  List logTypes = new List();
  logTypes.add(12);
   logTypes.add(11);
   logTypes.add(13);
   logTypes.add(6);
   logTypes.add(4);
   logTypes.add(7);

MergeSort kk = new MergeSort(logTypes);
  print ('Hello World');
  kk.sort(logTypes, 0, 5);
  kk.printArray(logTypes);
}
