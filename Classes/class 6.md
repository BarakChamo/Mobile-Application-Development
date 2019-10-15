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

### Resources
- AsyncStorage documentation
- Firebase documentation
- JavaScript `Promise`s
- JavaScript's `async / await` syntax

### Assignment
