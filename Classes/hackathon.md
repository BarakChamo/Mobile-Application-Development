# Hackathon!

This week we'll be running a React-Native Hackathon, facilitated by Microsoft's Visual Studio Code team!

## Hackathon goals
The main goal of the hackathon is to get you working in teams, collaborating in real-time and working in a fast iteration
cycle. You'll learn a about how projects are developed in the real-world and get to tackle all the kinks of React-Native
you might not be clear on, supporting each other in your groups.

## What you'll be building

I set up a Firebase collection for you, under shared credentials, that exposes a "messages" collection. 

Your goal, in teams of 2 to 3 students, is to build a client capable of adding messages to that collection, 
building your own front-end to a messaging back-end. If all goes well, all your different apps will be able to
communicate to one another since they all share the same Firebase Firestore.

## Setting up your hackathon projects

You should know how to create new Expo-based React-Native projects by now:
`expo init {NAME_OF_YOUR_PROJECT}`

Follow that [Class 6 notes on setting up Firebase in your projects](https://github.com/BarakChamo/Mobile-Application-Development/blob/master/Classes/class%206.md)

And use the [following credentials](https://github.com/BarakChamo/Mobile-Application-Development/blob/master/Classes/examples/storage/credentials.js) to the shared project:
```javascript
var firebaseConfig = {
    apiKey: "AIzaSyCK1wtd4lOAfbK32OEWJUXp-qLsmA4DF_U",
    authDomain: "idm-mobile-app.firebaseapp.com",
    databaseURL: "https://idm-mobile-app.firebaseio.com",
    projectId: "idm-mobile-app",
    storageBucket: "idm-mobile-app.appspot.com",
    messagingSenderId: "456736143938",
    appId: "1:456736143938:web:bc01511449bb6f09b14bdb"
};
```

It's very much recommended that you collaborate using [Visual Studio Code Live Share](https://www.google.com/search?sxsrf=ACYBGNQ9KnOeRoYQiFsyNEJ_3EAqW2pwoA%3A1574049752746&ei=2BfSXfakLc2b_Qb9_ZWgAg&q=visual+studio+code+live+share&oq=visual+studio+code+live+share&gs_l=psy-ab.3..0l3j0i7i30j0i30l6.3110.3747..3948...0.2..0.132.582.0j5......0....1..gws-wiz.......0i71j35i39.-ddg12F4fTY&ved=0ahUKEwj28Pui8PLlAhXNTd8KHf1-BSQQ4dUDCAo&uact=5) which we've used in class.
It'll allow you to work on different files together and even different parts of the same file.

## Firestore collection data structure
The firestore collection set up for you, `messages` contains the following data for every `message`:
- `from (string)` - The sender of the message
- `content (string)` - The content of the message
- `data (timestamp)` - The time the message was sent

A single message is already waiting for you in the collection, with id `n40CLcEWZPVGThvjJ5pn`.

To pull it, after authenticating with the provided API credentials, run:
`firestore.collection('messages').doc('n40CLcEWZPVGThvjJ5pn').get()`

To create new messages, please follow the following format:

```
firestore.collection('messages').add({
  from: 'YOUR_NAME',
  message: 'YOUR_MESSAGE',
  date: firebase.database.ServerValue.TIMESTAMP // this will translate to current time automatically
})
```

## Useful queries and Firebase Firestore functions

Target a firestore collection by calling:
`firestore.collection('messages')`

Target a particular document by id inside a collection by calling:
`firestore.collection('messages').doc(message_id)`

Remember the basisc operations we can perform with Firestore:
- Create new records with `.add()` 
- overwrite records with `.set()`
- Update records with `.update()`
- Delete records with `.delete()`

### Querying data:
Let's refresh querying data.

To get all records in a collection:
```
firestore.collection("messages").get()
  .then(function(data) {

    });
```

To get an item in a collection:
firestore.collection("messages").doc(message_id).get()
  .then(function(data) {

    });

You can also limit the number of records returned, and sort them:
```
firestore.collection("messages").orderBy("date").limit(10).get()
```

You can filter the results with a query using the `.where()` call;
```
firestore.collection("messages").where("from", "==", "Barak").get()
```

Finally, to listen to real-time updates on a Firestore query, call `.onSnapshot` instead of `.get`
on any query:
```
firestore.collection("messages").doc(message_id).onSnapshot((snapshot) => {
  // this callback is called on every data update
})
```

## Resources
[Limiting and ordering Firebase Firestore queries](https://firebase.google.com/docs/firestore/query-data/order-limit-data)
