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

Let's look at a basic React application example [on this glitch](https://glitch.com/~react-basic).


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

### Resources

#### JavaScript Classes and Object-oriented programming
- [JavaScript Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Class extensions on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

#### Understanding React
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)

#### Understanding React-Native

### Assignment - your first React Native app
