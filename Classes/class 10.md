## Class 10 - Serverless Servers 









Serverless backend architecture are a general category to service-based backends that don't rely on us having to manage our own infrastructure, 




whether that is running our own servers or managing cloud servers. Instead, we rely on APIs to higher-level services such as storage, authentication and compute. 









Firebase is such a service, and by using Firestore we've already begun our Serverless backend integration. 




Today we'll run how to gain more flexibility, running our own JavaScript code in the cloud, still without having to write our own servers. 









### Firebase Cloud Functions 




The Firebase Functions service allows us to run small snippets of JavaScript inside the context of our project on the cloud, 




this allows us to interface with data and resources but also with extrnal services, and perform secure operations that are 




too sensitive or resource-heavy to perform on end-devices. 









### Setting up the Firebase CLI 









To deploy firebase functions we have to install the `firebase-cli` and enable functions in our project. 









To install the firebase cli execute the following command: 




`npm install -g firebase-tools` 









This will install the firebase command line tools globally and will expose the `firebase` command. 









Next, login to your firebase account from the console by running: 




`firebase login` 









You'll be prompted to authnticate with your google credentials. 









Finally, inside your project folder, run: 




`firebase init functions` 









Follow the wizard to enable `Functions` support in your project. This will create a `functions` folder. 









### Writing Firebase Functions 









To begin writing Firebase Functions, open the newly created `functions/index.js` file in your project. 




You'll notice an existing module requirement: `firebase-functions`. 









Each function is defined as a single export, by name. 









Functions are assigned triggers by the type of functions.[trigger] they extend. 









There are many different kinds of triggers, [you can read about them here](https://firebase.google.com/docs/functions). 









### HTTP triggers (network functions) 




Let's start by uncommenting the provided example: 









``` 




exports.helloWorld = functions.https.onRequest((request, response) => { 




 response.send("Hello from Firebase!"); 




}); 




``` 









As you can see, this function extends `functions.https`, meaning it provides a network trigger. 




The callback function asigned resembles a typical Node.js network handler, receiving a `request` and a `response`. 









There are two ways to trigger an `https` function. 









#### Trigger by a network request 









You can trigger a cloud function by URL by visiting the relative path to your project's function: 




`https://us-central1-<project-id>.cloudfunctions.net/<function_name>` 









#### Trigger directly from app 




You can also trigger 









### Firestore triggers 




There are many other kinds of events that could trigger a Firebase Function, one of them is data changes in your Firestore databases. 









You can specify exactly which `collections`, `wildcards` and even `records` the functions listen, and which kind of data event: 




`read`, `write`, `create`, `update` and `delete`. 









Let's look at an example `firestore` trigger: 




``` 




 




``` 









### Deploying Firebase Functions 









To deploy, or upload, functions, run the following in your console: 




`firebase deploy` 









This will package, upload and activate the functions you created. 









### Resources 




- [Introduction to Firebase tirggers](https://firebase.google.com/docs/functions) 




- [Installing Firebase CLI tools](https://firebase.google.com/docs/cli/#install-cli-windows) 




- [Writing Firebase Functions](https://firebase.google.com/docs/functions/write-firebase-functions) 




- [Deploying Firebase Functions](https://firebase.google.com/docs/functions/manage-functions) 




- [Firestore Function triggers](https://firebase.google.com/docs/functions/firestore-events) 




- [Function event context](https://firebase.google.com/docs/reference/functions/cloud_functions_.eventcontext.html) 




- [Firestore triggers](https://firebase.google.com/docs/reference/functions/providers_firestore_.documentbuilder.html#on-create) 




- [Functions HTTPS triggers](https://firebase.google.com/docs/functions/http-events)
