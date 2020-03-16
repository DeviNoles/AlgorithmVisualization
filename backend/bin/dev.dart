import 'package:angel_framework/angel_framework.dart';
import 'package:angel_cors/angel_cors.dart';
import 'package:angel_framework/http.dart';
import '../Algorithms/Sorting/BubbleSort.dart';
import 'package:angel_redis/angel_redis.dart';
import 'package:resp_client/resp_client.dart';
import 'package:resp_client/resp_commands.dart';

void pushToRedis(ar, sorts) async{
  var connection = await connectSocket('192.168.0.100');
  var client = new RespClient(connection);
  var service = new RedisService(new RespCommands(client));
  if(sorts=="bubble"){
    BubbleSort kk = new BubbleSort(ar);
    ar = kk.sort();
    await service.create({'id': '0', 'list': '{$ar}'});
  }

  await connection.close();


}
void getRedis(res) async{
  var connection = await connectSocket('192.168.0.100');
  var client = new RespClient(connection);
  var service = new RedisService(new RespCommands(client));
  // Read it...
  var read = await service.read('0');
  print('printing list');
//  print(read['list']);
  res.write(read['list']);
//  await service.create({'id': '0', 'list': '{$ar[i]}'});
  await connection.close();


  // Create an object




  // Delete it.

  // Close the connection.

}
main() async {
    var app = Angel();
    var http = AngelHttp(app);
    app.fallback(cors());

    app.get('/', (req, res) => res.write('Hello, world!'));
    app.get('/help', (req, res) {
      res.write("WTF");
});
app.post('/insertRedis', (req, res) async {
    await req.parseBody();

    var nums = req.bodyAsMap['nums'];
    var sorts = req.bodyAsMap['sorts']['sort'];
    print(sorts);
    List logTypes;

    nums.forEach((k,v){
      logTypes = v;
    });
    pushToRedis(logTypes, sorts);

    if (nums== null) {
        throw AngelHttpException.badRequest(message: 'Missing name.');
    } else {
  //    res.write(kk.sort());
    }
});
app.get('/getRedis', (req, res) async {
await getRedis(res);

});
    await http.startServer('192.168.0.101', 6921);
}
