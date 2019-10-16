## Storing Data

In the previous classes we learned how to design our applications to better handle large amounts of data and data-bound components. 
We reviewed the `flux` model and implemented stores and reducers. Now comes the last part of dealing with data: *Where do we put it?*

As fancy as our UIs may be, our apps won't be very useful if all of the data is erased every time our users close and re-open the application.
To persist data, we'll learn two techniques:
1. Storing data locally on the device with local storage.
2. Storing data on the cloud with Firebase.

### Local Storage

Local storage, as the name suggests, is storage accesible on the device. It holds persistant data and allows us to cache app state without 
having to load it from a server, that means that our apps can be more responsive and work offline!

Local storage is frequently used from storing user details, latest user actions (such as the last few emails) and basically anything
else your phones can do while you're offline.

React Native provides a built-in wrapper around `iOS` and `Android`'s local storage capabilities: `AsyncStorage`.

#### Import AsyncStorage
To begin using `AsyncStorage`, import it from the main `react-native` package:
```javascript
import { AsyncStorage } from 'react-native';
```

#### Store data
To store data, call the `setItem` method with a `key` and `value`, the call will return a `Promise` that will resolve when
the storage operation completes.

```javascript
AsyncStorage
  .setItem('@MySuperStore:key', 'I like to save it.')
  .then(() => console.log('Data stored!'))
  .catch(error => console.log(error));
```

You can also use the `async / await` syntax to store values
```
try {
  // await results in the same value as Promise.then()
  await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  
  // This code will execute only after the `.setItem` promise resolved
  console.log('Data stored!')
} catch (error) {
  // catch will receive the same error as Promise.catch()
  // Error saving data
  console.log(error)
}
```


#### Retrieve data
Retrieving data is very similar to setting it, we simply call `AsyncStorage.getItem()` with the `key` we previously stored.

```javascript
AsyncStorage
  .getItem('@MySuperStore:key')
  .then(data => data)
  .catch(error => console.log(error));
```

You can also use the `async / await` syntax to store values
```
try {
  // await results in the same value as Promise.then()
  const data = await AsyncStorage.getItem('@MySuperStore:key');
  
  // This code will execute only after the `.setItem` promise resolved
  console.log(data)
} catch (error) {
  // catch will receive the same error as Promise.catch()
  // Error saving data
  console.log(error)
}
```

To learn more about the API and more available functions such as `mergeItem` and multi-value operations:
[read the `AsyncStorage` documentation.](https://docs.expo.io/versions/latest/react-native/asyncstorage/
)

### Firebase
Firebase is a cloud service operated by Google that provides many "Backend-as-a-Service" services, such as managing user authentication
and permissions, a NoSQL database that doesn't require server-side setup and many others, running cloud functions and storing and serving files (such as `HTML`, `JS`, images and videos).
You can check out the full scope of Firebase [here](https://firebase.google.com/).

You can think of Firebase as a server that's already up-and-running and managed for you.

#### Setting up a Firebase project
To get started you'll have to set up an account and a project on Firebase.
1. Navigate to [the Firebase Console](https://console.firebase.google.com/u/0/?pli=1) and login with your Google or NYU account.
2. Press `Add Project`and give your project a name, note the generated `project ID` and press `Continue`.
3. Enable to disable Google Analytics and press continue.
4. Watch the fancy wheel turn while your project gets set up.

#### Setting up a Firebase Database
1. Once in the console, choose `Database` under `Develop` in the sidebar.
2. In the popup select `Start in Test Mode` and finish the setup.

#### Generating application credentials
1. Press the cog wheel icon and choose `Project Settings`
2. Under `General`, scroll down to `Your Apps` and select the web option (`</>`).
3. Give your app a name and press `Register App`.
4. Note the app credentials and press `Continue to Console`.
5. You can always refer back yo `Your Apps` for the keys and credentials.

#### Integrating Firebase and React Native
To install the Firebase package follow the steps in [this document](https://docs.expo.io/versions/latest/guides/using-firebase/).

1. In your terminal, in the project folder, run `npm install --save firebase`
2. Import the package and setup your credentials in your code:
```javascript
import * as firebase from 'firebase';

// Initialize Firebase with credentials from the console
const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-AUTH-DOMAIN>",
  databaseURL: "<YOUR-DATABASE-URL>",
  storageBucket: "<YOUR-STORAGE-BUCKET>"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// instance a firebase Firestore connection
const dbh = firebase.firestore();
```

### Firebase Firestore
Firestore is a document-based NoSQL database, this means that we organize data as nested `documents` and `collections`, you
can think of these as `Objects` and `Arrays` where a `collection` may store multiple `documents` and `documents` can hold
`collections` as well as `documents`, creating a data hierarchy.

Each collection has an `id`, the key by which is stored just like a key-value pair in an object, and other indexed properties.

The top-level of our database is in itself a document of collections and we access data by specifying the "address" of the document we're looking for.

For example:
To access a user record stored in the `users` collection under the username `barakchamo`, I'll access
`db.collection('users').doc('barakchamo')`

To write a record, we first locate the desired record address and then set the value to it:
```javascript
const dbh = firebase.firestore();

dbh.collection("characters").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball"
})
```

#### Writing Records
As mentioned, to write a record we locate it's desired document address and set the values by passing an object to `.set`: 
The call will return a promise that will resolve upon successful addition of the record.

```javascript
dbh.collection("characters").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball"
})
```

#### Deleting Records
To delete a record, locate hit and call `.delete()`
The call will return a promise that will resolve upon succesful deletion of the record.

```javascript
dbh.collection("characters").doc("mario").set({
  employment: "plumber",
  outfitColor: "red",
  specialAttack: "fireball"
})
```

#### Reading Records
To get a document record, locate it and call `.get`.
The call will return a promise that will resolve with a `Document`. 

A document holds more than just the data.
The `exists` key notes wheter any data was found.
The `id` key holds the identifier of the document.
To get the data, call `.data()` on the document.

```javascript
var docRef = db.collection("cities").doc("SF");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
```

#### Reading multiple records

You can also read an entire collection of documents by calling `.get()` on the collection.
This will return a `querySnapshot`, which is an array that holds all found `documents`.

```javascript
db.collection("cities").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
```

You can even filter specific records from a collection using a wide range of query operators.

```javascript
db.collection("cities").where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
```

#### Listening for real-time data
Finally, the coolest feature of Firestore is that it lets you listen for
realtime changes to youd data with no effor on your side!

This means you can easily implement push updates, messaging apps, feed refreshes, etc.

To listen to realtime updates simply replace a `.get` call with an `.onSnapshot`,
the callback to onSnapshot will be called on every update:
```javascript
db.collection("cities").doc("SF")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });
```

You can even listen for changes on a filtered query:
```javascript
db.collection("cities").where("state", "==", "CA")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: ", cities.join(", "));
    });
```

### Resources
- [AsyncStorage documentation](https://facebook.github.io/react-native/docs/asyncstorage)
- [Firebase Firestore documentation](https://firebase.google.com/docs/firestore/)
- [JavaScript `Promise`s](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript's `async / await` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Using Firebase with Expo](https://docs.expo.io/versions/latest/guides/using-firebase/)
- [Expo's guide on networking (using fetch)](https://docs.expo.io/versions/latest/react-native/network/)
