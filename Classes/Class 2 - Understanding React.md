## Class 2 - Understanding React & React Native

In this class we'll be learning how to build cross-platform mobile applications using [React Native](https://facebook.github.io/react-native/), a framework developed and maintained by Facebook.
Today we'll focus on understanding the React JavaScript framework, how React and React Native relate to each other and how to get started writing React-based applications.

#### What is React?
React is a component-based web application framwork, using React we can write small, reusable JavaScript components that contain small amounts of application logic and how to use that logic (and data) to render parts of a web page.

You can think of a React component as a custom HTML component with your own attributes, parameters and visual output.

So, in the same way that to show an image in a web page you'll write:

`<img src={IMG_URL}/>`

You could write your own component to, for example, render a popup window by defining:

`<Popup title="My Popup" content={POPUP CONTENT}>`

To define this `<Popup/>` component we'll have to extend the `React.Component`, every component we write will be a [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) [extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends).

Each component receives properties from its parent, just like the `title` and `content` in our `<Popup>` example,
these will be used inside the component class instance to render the component and pass on to its childern components.

Let's look at a basic React application example [on this glitch](https://glitch.com/~react-basic).

You might find this hybrid `JavaScript + HTML` format odd, it's called `JSX` and combined both JavaScript code
and declarative component markup. It allows us to define component hierarchies in HTML-like syntax in the same 
place as our code so it's much easier to manage! (you'll get used to it, it's actually pretty useful).

If you're still unclear on how JSX works, [check out this post](https://reactjs.org/docs/jsx-in-depth.html)

#### What is React Native?

React Native is React's mobile-native cousin. Think of it this way:
- React is a general JavaScript component-based application development framework.
- React.js is web-based and meant for building browser-based HTML applications.
- React Native still runs on JavaScript, but is used to build native mobile applications.

##### What's the difference?
The difference is that when working in React Native we won't be using `HTML` elements, only `HTML`-like markup.
So instead of `<div>`, `<p>`, and `<span>` we'll write abstract classes such as `<View>` and `<Text>` and these
will render to the coresponding elements for each platform: iOS or Android.

Also, just remember that React-Native doesn't work in a browser, so there's no CSS, we'll be writing styles in code,
more on that later.

### Examples (on glitch.com)
- [Basic list](https://glitch.com/~react-basic)
- [ToDo list with inputs and validation](https://glitch.com/edit/#!/react-todo-example?path=app/app.jsx:10:31)

### Resources

#### JavaScript Classes and Object-oriented programming

[Classes and class extensions example from class](https://github.com/BarakChamo/Mobile-Application-Development/blob/master/Classes/examples/classes-and-extensions.js) 

- [JavaScript Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Class extensions on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [JSX in depth](https://reactjs.org/docs/jsx-in-depth.html)
- [Context, binding and arrow functions explained](https://www.codementor.io/dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc)

#### Understanding React
 [Annotated React example from class on glitch.com](https://glitch.com/edit/#!/react-basic?path=app/app.jsx:6:8) 

- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [Handling events in React](https://reactjs.org/docs/handling-events.html)
- [React Components - Lifecycle methods and class properties](https://reactjs.org/docs/react-component.html)
- [Managed form elements](https://reactjs.org/docs/forms.html)

#### Understanding React-Native
- [How React Native works](https://hackernoon.com/understanding-react-native-bridge-concept-e9526066ddb8)
- [React Native intro tutorial](https://facebook.github.io/react-native/docs/tutorial.html)

### Assignment - React Components
In a `glitch.com`, build an interactive, single-page To-Do list.
Your To-Do list app should feature the following:

1. A dynamic list of To-Do's, including a title, content and date.
2. Indication of completion status
3. A button or checkbox to complete each To-Do.
4. An input field to create new To-Do's.
5. Any other fancy features you might like (filtering? multiple selection? coloring? emjoi support?)

Extra credit for:
1. Breaking your To-Do app into multiple components.
2. Breaking those multiple components into multiple `.JSX` files.

Make your glitch public and share the link on the `Class 2 Assignment` GitHub isse.
