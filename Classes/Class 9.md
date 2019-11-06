## Class 9 - Authentication & OAuth

### Resources

#### Expo Authentication
- [Using Firebase with Expo](https://docs.expo.io/versions/latest/guides/using-firebase/)
- [Using Google OAuth with Expo](https://docs.expo.io/versions/latest/sdk/google/)
- [Using Facebook OAuth with Expo](https://docs.expo.io/versions/v35.0.0/sdk/facebook/)
- [Using Third-party auth with browser flows in Expo](https://docs.expo.io/versions/latest/sdk/auth-session/)

#### Firebase Authentication
- [Getting started with Web Authentication in Firebase](https://firebase.google.com/docs/auth/web/start)
- [Handling Authentication in Firebase](https://firebase.google.com/docs/auth/web/manage-users)
- [Password Authentication in Firebase](https://firebase.google.com/docs/auth/web/password-auth)
- [Managing users and user profiles](https://firebase.google.com/docs/auth/web/manage-users)
- [Access control and user data management](https://firebase.google.com/docs/firestore/solutions/role-based-access)

#### Tutorial
- [Implementing Facebook authentication with Expo and Firebase](https://hackernoon.com/firebase-auth-using-facebook-log-in-on-expo-react-native-2c9f1aaf26b7)
- [Third-party authentication with GitHub tutorial (complete with `AsyncStorage` implementation)](https://blog.expo.io/firebase-github-authentication-with-react-native-2543e32697b4)

### Assignment - Authentication and Users
For next class, your assignment is to build a small app, or extend an existing one, that will feature user-specific data access and account management.

Your app should be able to store and retrieve user records from Firestore and only load and display data created by the currently logged in user.

There are many ways to guarantee users only have access to their content, and you'll have to find one that suits your needs and your app requirements.

Your apps should feature:
- Login and signup views
- Automatic navigation based on authentication state
- User-created records filtered by the currently logged in user.
