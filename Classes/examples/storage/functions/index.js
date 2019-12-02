const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from World! Current time:" + Date.now());
});

exports.helloIDM = functions.https.onRequest((request, response) => {
    response.send("Hello from IDM! Current time:" + Date.now());
});

exports.helloQuery = functions.https.onRequest((request, response) => {
    response.send("Hello!" + JSON.stringify(request.query));
});

exports.helloName = functions.https.onRequest((request, response) => {
    const welcome = `Hello ${request.query.name}! Welcome to ${request.query.department}` 
    response.send(welcome);
});

// Listen for changes in all documents in the 'items' collection
exports.addTimestamp = functions.firestore
    .document('items/{itemId}')
    .onCreate((change, context) => {
        // write the owner of the item securely on the server  
      return change.ref.update({
          createdAt: Date.now()
        //   owner: context.auth.uid
        })
});