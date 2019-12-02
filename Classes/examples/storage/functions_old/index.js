const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


// Listen for changes in all documents in the 'items' collection
exports.addOwner = functions.firestore
    .document('items/{itemId}')
    .onCreate((change, context) => {
        // write the owner of the item securely on the server  
      return change.ref.update({
          owner: context.auth.uid
      })
    });