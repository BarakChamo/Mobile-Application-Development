## Class 9 - Authentication & OAuth

### Firebase security rules

Security rules are applied to Firebase transactions (Functions, Firestore, Storage) to validate access
to data and records. They are applied to `read`, `write`, `create`, `update` and `delete` operations.

We'll be learning how to write `version 2` of the rules, which are applied to the Firestore by default.

A security rule has the following format:
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /<some_path>/ {
      allow read, write: if <some_condition>;
    }
  }
}
```

- The `service` component identifies the Firebase service we're assigning rules to.
- The `match` component idintifies the particular resource or path we're assigning a rule to (these can be nested).
- The `alow [operation(s)]` component defines the particular security rules.

#### Applying security rules locally and globally
Records can be identified granularly, applying to a record, a database and even a record field.
They can also be genralized using wildcards so that they don't have to be copied over.

In the example above, the `{database}` is an example of a wildcard.
Wildcards can also cover arbitrary depth of nested records, such as the `{document=**}` wildcard.

[Read more about `match` wildcards here](https://firebase.google.com/docs/firestore/security/rules-structure#recursive_wildcards
).

#### Writing rules
The rules contained inside each `allow` statement are like small JavaScript snippets, they define an expression that must evaluate to `true`/`false`, resolving to whether or not a particular operation is allowed.

Note that all operations are disabled by default, which is why the default rule is always set to
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```
allowing access to all records.

The `allow` expression receives to parameters as context arguments, `request` and `response`:
`Request` contains incoming request and authentication information.
`Resource` contains:
- `data`: an object containing the current resource data
- `id`: a string containing the resource id

Read more about the [`Request`](https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth) and [`Resource`](https://firebase.google.com/docs/reference/rules/rules.firestore.Resource)

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

#### Firebase Security Rules
- [Getting started with Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Writing Security Rules](https://firebase.google.com/docs/firestore/security/rules-conditions)
- [Rule Resource documentation](https://firebase.google.com/docs/reference/rules/rules.firestore.Resource)
- [Rule Request documentation](https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth)

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
- Authentication to prevent unauthorized data access.
