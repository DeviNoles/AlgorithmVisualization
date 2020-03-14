import 'package:angel_redis/angel_redis.dart';
import 'package:resp_client/resp_client.dart';
import 'package:resp_client/resp_commands.dart';

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
void pushToRedis(count, ar) async{
  var connection = await connectSocket('192.168.0.100');
  var client = new RespClient(connection);
  var service = new RedisService(new RespCommands(client));

  // Create an object
  await service.create({'id': '{$count}', 'list': '{$ar}'});

  // Read it...
  var read = await service.read('{$count}');
  print('printing list');
 print(read['list']);

  // Delete it.

  // Close the connection.
  await connection.close();
}

  List sort(){
    int count = 0;
    List stringPairArray = new List();
    for(int i = 0; i<this.ar.length; i++){
      for(int j=0; j<this.ar.length-i-1; j++){
        if(this.ar[j]>this.ar[j+1]){
          int holder = this.ar[j];
         this.ar[j] = this.ar[j+1];
         this.ar[j+1] = holder;
         var pass = this.ar[j];
         stringPairArray.add(holder.toString() + "," + pass.toString());
       }
      }
    }
   pushToRedis(count, stringPairArray);
    printArray();
    return stringPairArray;
  }

}
