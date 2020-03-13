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
void pushToRedis() async{
  var connection = await connectSocket('192.168.0.100');
  var client = new RespClient(connection);
  var service = new RedisService(new RespCommands(client), prefix: 'bubblesort');

  // Create an object
  await service.create({'id': 'a', 'hello': 'world'});

  // Read it...
  var read = await service.read('a');
  print(read['hello']);

  // Delete it.

  // Close the connection.
  await connection.close();
}

  List sort(){
    for(int i = 0; i<this.ar.length; i++){
      for(int j=0; j<this.ar.length-i-1; j++){
        if(this.ar[j]>this.ar[j+1]){
          int holder = this.ar[j];
         this.ar[j] = this.ar[j+1];
         this.ar[j+1] = holder;
       }
      }

    }

    pushToRedis();
    printArray();
    return this.ar;
  }

}
