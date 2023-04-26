import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:provider/provider.dart';
import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_core/firebase_core.dart';
import 'common.dart';
import 'models/model.dart';
import 'pages/home_page.dart';
import 'pages/server_page.dart';
import 'pages/settings_page.dart';

Future<Null> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  var a = FFI.ffiModel.init();
  var b = Firebase.initializeApp(
    options: FirebaseOptions(
      apiKey: "AIzaSyCgehIZk1aFP0E7wZtYRRqrfvNiNAF39-A",
      authDomain: "rustdesk.firebaseapp.com",
      databaseURL: "https://rustdesk.firebaseio.com",
      projectId: "rustdesk",
      storageBucket: "rustdesk.appspot.com",
      messagingSenderId: "768133699366",
      appId: "1:768133699366:web:d50faf0792cb208d7993e7",
      measurementId: "G-9PEH85N6ZQ",
    ),
  );
  await a;
  await b;
  refreshCurrentUser();
  toAndroidChannelInit();
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final analytics = FirebaseAnalytics.instance;
    return MultiProvider(
      providers: [
        ChangeNotifierProvider.value(value: FFI.ffiModel),
        ChangeNotifierProvider.value(value: FFI.imageModel),
        ChangeNotifierProvider.value(value: FFI.cursorModel),
        ChangeNotifierProvider.value(value: FFI.canvasModel),
      ],
      child: MaterialApp(
          initialRoute: '/',
          routes: {
            // '/connect': (context) => PassArgumentsScreen()
          },
          onGenerateRoute: (settings) {
            // // If you push the PassArguments route
            var connectUrlActive = settings.name?.startsWith(PassArgumentsScreen.routeName);
            connectUrlActive = connectUrlActive == null ? false : true;

            if (connectUrlActive) {
              var uriData = Uri.parse(settings.name!);
              var queryParams = uriData.queryParameters;
              return MaterialPageRoute(
                builder: (context) {
                  return PassArgumentsScreen(queryParams);
                },
              );
            }
          },
          navigatorKey: globalKey,
          debugShowCheckedModeBanner: false,
          title: 'RustDesk',
          theme: ThemeData(
            primarySwatch: Colors.blue,
            visualDensity: VisualDensity.adaptivePlatformDensity,
          ),
          home: !isAndroid ? WebHomePage() : HomePage(),
          navigatorObservers: [
            FirebaseAnalyticsObserver(analytics: analytics),
            FlutterSmartDialog.observer
          ],
          builder: FlutterSmartDialog.init(
              builder: isAndroid
                  ? (_, child) => AccessibilityListener(
                        child: child,
                      )
                  : null)),
    );
  }
}
