## Class 3 - Deeper dive into components, and leaving the browser

Today will take a deeper look at React components to fully understand how components work and communicate.
Then, we'll move back to React Native and leave to browser, moving to native apps where we'll spend the rest of the semester.

### Functional components vs. stateful class components
React components come in two variaties: `stateful` and `stateless`

#### Stateful components (class components)
Class components are the components we've been using so far in class, we define them
by extending the `React.Components` with our own class name, overwriting (at least) 
the render method to return JSX and setting up our component with lifecycle methods (such as `componentDidMount()`).

``` jsx
class MyComponent extends React.Component {
  render() {
    return (<h1>Hello World! I'm {this.props.name}!</h1>)
  }
}

<MyComponent name="Barak" />
```

These components provide us with the ability to set local `state`, update and re-render our component
when the state changes, assign class-bound handlers and, as mentioned, take advantage of lifecycle methods.

This is a great option for "smart" components that have to manage a lot of data and interaction.

You can review the common lifecycle methods in a diagram [here](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).
For a complete list of lifecycle methods, [visit the documentation](https://reactjs.org/docs/react-component.html#componentdidupdate).

[Here is an annotated example of a class component on glitch.com](https://glitch.com/edit/undefined?path=app/components/ComponentWithState.jsx:4:19)


#### Stateless components
Sometimes we just want to render a small piece of dynamic content with JSX, like a simple list item.
Or maybe we need to render the same thing hunders of times on the page and don't want to have a class
initialized with state and event handlers for every single one.

Enter functional components, single function components that receive `props` as an argument and output `JSX`.
It's as simple as calling a function.

``` jsx
const MyComponent = (props) => (
  <h1>Hello world! I'm {props.name}!</h1>
)

<MyComponent name="Barak" />
```

In fact, the output of the `render()` method on a class component or the `return` statement of a functional component are the same!
We use both in exactly the same way so we don't care which is which when we compose them in parent components.

[Here is an annotated example of a stateless functional component](https://glitch.com/edit/#!/react-basic?path=app/components/ComponentWithoutState.jsx
)


### Getting back to React Native

Now we understand React components, state, props, lifecycle methods, but every was done in the browser!
So do we have to learn a whole new library to build mobile apps? Well, yes and no.

The core of React, the classes, the `props`, the `state`, everything that isn't `<HTML>` remains the same.
We still compose components out of smaller components, we still render with `JSX` and we still operate in JavaScript.

The main differences are:
  - React Native has it's own components, they're like `<HTML>` but they're not, they are native mobile elements.
  - We can't use CSS for styling, we can only style components in code, in a flexbox-like syntax.


#### React Native components

The first step in transitioning from React (for web) and React Native is learning to use a new set of components.
If you're used to working with React or `<HTML>`, you'll just find equivalents to do the same job and you'll be on your way.

However, since our React Native code runs natively on a mobile phone, there are some extra hoops to jump through.
You'll notice some components are iOS or Android specific, and you'll have to know which device you're targeting 
in order for your layouts to work correctly, we'll see how to deal with cross-platform apps later in the semester.

First, let's look at some basic components

##### [`<View>`](https://facebook.github.io/react-native/docs/view)
A `View` is a container for content, think of it as a `<div>` in HTML.
`View`s can only contain other components, not arbitrary text or expressions.
in that sense `JSX` for React Native is less flexible than `<html>` in the browser.

##### [`<Text>`](https://facebook.github.io/react-native/docs/text)
A `Text` holds alpha-numeric text and replaces any kind of text element we use on the web like `h1`, `span`, or `p`.
All the styling for different formattings, like body text or headings, comes from the `style` property.

##### [`<Image>`](https://facebook.github.io/react-native/docs/image)
The `Image` component is used to load local and remote images.
One cool feature of React Native is that we can load local images, such as icons and logos
with `require()` from the local project folder rather than a server request.

Refer to the documentation for a complete example on using `Image`s.

##### [`<TextInput>`](https://facebook.github.io/react-native/docs/textinput)
`TextInput` reflaces the similarly named `<input type="text>` and allows us to receive input
text from our component. Since mobile apps have an onboard interactive keyboard, we have more
event options than the regular input in `html`.

`onChangeText` is called ontinuously when the text is changing.
`onSubmitEditing` is called when a user hits the `done` or `next` action key on the mobile soft keyboard.

##### [`StyleSheet`](https://facebook.github.io/react-native/docs/stylesheet)
`StyleSheet`s are not components. Rather, they are an abstraction of a `CSS class` that we can define
once and reuse continuously.

We define a single stylesheet like so:
```javascript
const style = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
});
```

When assigning stylesheets to components, we use the `style={}` property just like with inline styles.
We can provide one or more styles to a components and they override and extend in order:

`<Text style={[styles.brand, styles.heading]}>Hello World!</Text>`

You can think of each stylesheet you create as a CSS class, break each one into small style rulesets
and combine them together.

#### Scrolling and rendering long lists
`To be completed`

### Resources

#### React
- [Main component lifecycle methods in a diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).
- [Complete list of lifecycle methods](https://reactjs.org/docs/react-component.html#componentdidupdate).


#### React Native
- [Complete list of React Native components](https://facebook.github.io/react-native/docs/components-and-apis)
- [Understanding the flexbox layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [React Native's Flexbox guide](https://facebook.github.io/react-native/docs/flexbox)
- [Running Expo in the browser](https://docs.expo.io/versions/latest/introduction/running-in-the-browser/)

### Assignment - React Native
For next class, your assignment is to build your first mobile app:
`Yet another ToDo list!`

similar to the previous assignment, your app should feature:

1. A dynamic list of To-Do's, including a title, content and date.
2. Indication of completion status
3. A button or checkbox to complete each To-Do.
4. An input field to create new To-Do's.
5. Any other fancy features you might like (filtering? multiple selection? coloring? emjoi support?)
6. Anything else you dug up in the React Native documentation!

You could even convert your existing components to React Native and reuse the TO-DO editing logic.

Publish your app with expo and post it to the class 3 issue along with your full name.
