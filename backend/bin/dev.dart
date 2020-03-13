import 'package:angel_framework/angel_framework.dart';
import 'package:angel_cors/angel_cors.dart';
import 'package:angel_framework/http.dart';

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

    if (nums== null) {
        throw AngelHttpException.badRequest(message: 'Missing name.');
    } else {
        res.write(nums);
    }
});
    await http.startServer('localhost', 6921);
}
