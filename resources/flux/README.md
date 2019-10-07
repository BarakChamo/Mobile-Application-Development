# Flux.js - a minimal Flux implementation

This is a simple implementation of the flux model implemented purely using React's Context and Hooks APIs.
To use it, import or copy `flux.js` from this folder into your project.

[Here's an example of using Flux.js with React Native in an Expo Snack.](https://snack.expo.io/@barakchamo/flux-from-scratch)
[Here's the actual code](https://github.com/BarakChamo/Mobile-Application-Development/blob/master/resources/flux/flux.js)

## API

### `Store` - Class
The store is a class containing the functionality and higher-order compomenets to manage state using a flux architecture in a React app (both React and React Native).

### `new Store(reducer, initialState, key = 'store')` - Constrctor
The `Store` constructor expects three arguments:
- `reducer(state, action: {type, props}) -> state` - a reducer function that accepts current state and an action object and returns new state. The action object is of the form `action: {type, props}` where props is optional and passed from the dispatcher.
- `initialState` - an object to initialize application state.
- `key` - an optional string to set the name of the store when exposed as a prop on connected components (defaults to `store`). 


### `Store.Provider` - React Component
The provider is a higher-order component that is responsible for storing application state and triggering re-renders when the state updates.
It must wrap all components you wish to have connected to state, usually it's best to have the `Provider` be the top level component.

### `Store.connect()` - function
The Store's `connect()` function wraps any components with store access and exposes the `store` property.
Note that this property might be named differently according to the optional `key` argument passed to the `Store` constructor.

#### `{ store }` - React property
Connected components will receive a `store` property that includes to keys:

##### `state`
`state` is the current state of the application, use it as you would `this.state` and `this.props`.
The store state is initialized with the `initialState` passed to the store constructor and will update automatically on every dispatch.

##### `dispatch(actionId, actionProps)`
The dispatch is the main interface we use to trigger state updates on our store, call it with:
- `actionId` - the action enumerator (id) used to identify this action in your reducer
- `actionProps` - an optional object containing additional action data (such as payloads, inputs, api data, etc.)


## Setup
Begin by importing the flux `Store` module into your project:
```javascript
import Store from './flux'
```

Initialize the Store with a reducer function and an initial state object
```javascript
import reducer from './reducer'

const initialState = {
  todos: [...]
  user: {...}
}

const store = new Store(reducer, initialState)
```

## Usage
Integrating the store to your app is a two step process.

First, you must wrap your app in a Provider:
```jsx
const store = new Store(reducer, initialState)

class App extends Components {
  render() {
    return (
      <store.Provider>
        <View>
          ...the rest of your app code...
        </View>
      </store.Provider>
    )
  }
}
```

Then, connect each component you'd like to extend with store access.
These components will receive the `store` property containing the `state` and `dispatch`.
```jsx
const Screen = ({store}) => (
  <View>
    <Text>Hello, {store.state.user.name}</Text>
    <Button onPress={() => store.dispatch('ADD_TODO', {label: 'Do things!')} />
  </View>
)
```

It's important to understand the dyanmic between the dispatch and the reducer:

To dispatch an action you'll call `store.dispatch(actionId, actionProps)`
where `actionId` is an action identifer and actionProps is an optional props object.
```jsx
<Button label="Add Todo" onPress={() => store.dispatch('ADD_TODO', {label: 'Do Things!'})} />
```

This action will then trigger the reudcer, which will receive the action type (id) and props as the action argument.
Notice that `type` and `props` are contained inside the seconds `action` argument, passed from dispatch(type, props)
```javascript
function reducer(state, {type, props}) {
  switch(type) {
    case `ADD_TODO`:
      const todos = state.todos
      todos.push(props.label)
      return {
        ...state,
        todos
      }
  }
}
```
