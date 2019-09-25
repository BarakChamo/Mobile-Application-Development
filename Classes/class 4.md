## Class 4 - "Smart" and "Dumb" components

Last week we learned about a second kind of components, functional components, that are a slimmed down version
of class-based components - these let define components faster and are more performant than class-based components,
essentialy stripping everything away except for the `render()` method's content.

This week we'll focus on understanding how structure larger component, diving responsibility between "smart" and "dumb"
components, or "functional" and "class", or "stateful" and "stateless" components".

We'll also explore the range of open-source React Native components, libraries and utilities that are 
bundled with the `expo` library, and how to integrate them into our apps.

### The `Native` difference - using lists and native rendering
React Native provides us with a JavaScript based interface for building mobile applications using
a familiar interface and language. However, as you've seen in previous classes, we're not using HTML components and do not style elements with CSS.

Our React Native code gets `transpiled` to native elements, meaning React Native's system manages
the way our React components get rendered, allowing an added layer of performance management to how 
are layouts end up being rendered. 

Perhaps the best example for this difference is the way native scrolling and rendering of large amounts of content
are managed using the `ScrollView`, `FlatList` and `SectionList`. 

Let's look at the three alternatives of rendering a list of content:

#### [`ScrollView`](https://facebook.github.io/react-native/docs/scrollview)
As you might have noticed, unlike as elements in the browser, overflowing elements in React Native don't 
scroll automatically, and we have to manually create scroll views and define their scroll behaviour.

To create a list with a ScrollView we simply need to render all of the list items inside the ScrollView:

```jsx
<ScrollView>
  {listItems}
</ScrollView>
```

This gets the job done, but is considered bad practice since any change to any of the list items will cause
an updated re-render of the entire list. Further, all the components on the list are rendered whether or not
they are seen on screen or not. This is not a big deal when we have 10 to 15 items on a ToDo list app, but think
about an Instragram or Twitter feed, with hunders of items in a single view, and things begin to get clunky.

#### [`FlatList`](https://facebook.github.io/react-native/docs/flatlist)
The `FlatList` component is one of two managed list managers provided by React Native.
The FlatList accepts a list of items as the `data` and the rendering of each one is
handled by the `renderItem` handler, we only tell the flat list how to render each item
but the component internally calculates which should be rendered at any given moment,
and which should update.

FlatList has two significant performance benefits compared to using a ScrollView:
1. Not all components are rendered, only those currently in view.
2. Components only update when their content updates, rather than every component in the list.

To learn more about tradeoffs and benefits of using a `FlatList` refer to [the documentation](https://facebook.github.io/react-native/docs/flatlist).


#### [`SectionList`](https://facebook.github.io/react-native/docs/sectionlist)

`SectionList` extends the `FlatList` to address some limitations and provide commonly needed extra functionality
to group items by section and render section headers and organizational UI.

To learn more about section headers refer to [the documentation](https://facebook.github.io/react-native/docs/sectionlist).


### Navigation in React Native
Navigation in React Native works very similarly to navigation in JavaScript in the browser, using the `react-navigation` library
(which in itself is cross-platform and can be used with both `React` and `React Native`).

For a basic navigation example, see this [expo example](https://docs.expo.io/versions/v35.0.0/react-native/navigation/).
You can find the complete documentation [here](https://reactnavigation.org/docs/en/hello-react-navigation.html).

#### Installing `react-navigation`
To begin using the navigation library, install the `react-navigation` npm package to your project.
Further installation instructions can be found [on Expo](https://docs.expo.io/versions/v35.0.0/react-native/navigation/) and [the documentation](https://reactnavigation.org/docs/en/getting-started.html).

Install `react-navigation` and additional dependencies by running
` expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens react-navigation-stack`
in your project folder

#### Views and screens
In order to implement navigation in our application, we must define "pages" or "routes".

The term used by the `react-navigation` library is `screens`, and you can think of them
as top-level React components that will serve as the different views of our app, just like multiple `html`
pages in a static website.

Typically, we'll define each screen view in it's own component, the export of which will serve as the corresponding `screen`.

```jsx
const screens = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
};
```

#### The navigator
To actually assign each of these `screen` views to a particular route in our app, such as `/home` or `/settings`,
we need to define a navigator. the navigator is a manager that handles the rendering of the current route
and provides us with a functional interface for navigation and transitions, as well as history.

The navigator is wrapped in a container that is the actual root React component in which all our views will be rendered.

```jsx
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);
```

#### Navigation props and actions
The screen views that are rendered by the navigator receive a special `prop` called `props.navigation`.
This object contains all the routing information, history and methods that can be called to navigate between views.

Calling `navigate()` on the `navigation` object and passing a `screen` name will 
transition the view. We can pass optional properties to give the next view extra context, such as the id of
a contact to view out of a list, or the picture you clicked on to load more content, comments, etc.

```jsx
  render() {
    return (
      <Button title="Go to Jane's profile" onPress={() => this.props.navigation.navigate('Profile', { name: 'Jane' })} />
    );
  }
```

To get the values of these extra parameters, we use the `getParam` method:

```jsx
  render() {
    return (
      <View>
        <Text>Hello, {this.props.navigation.getParam('name')}</Text>
      </View>
    );
  }
```

### Resources
- [ScrollView documentation](https://facebook.github.io/react-native/docs/scrollview)
- [FlatList documentation](https://facebook.github.io/react-native/docs/flatlist)
- [SectionList documentation](https://facebook.github.io/react-native/docs/sectionlist)
- [`react-navigation` documentation](https://reactnavigation.org/docs/en/headers.html)
- [Navigation example Expo Snack](https://snack.expo.io/@barakchamo/83d672?platform=android&name=First%20navigation&dependencies=react-navigation%2Creact-navigation-stack%2Creact-navigation-tabs%2Creact-navigation-drawer&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F4.x%2Fnew-screen.js
)
- [Using the Navigator's headers](https://reactnavigation.org/docs/en/headers.html)

### Assignment - React Native
For next week, extend your Todo apps with multiple views. These could be:
- A details view for a single todo item
- A seprate `New Todo` screen
- A completed Todos archive

Using separate pages will allow you to collect and view more details than a 
single list could show. Your app could store additional data such as time of creation,
associated location, tags, contacts, etc. It could also conditionaly render 
different kinds of views or navigate to different detail views depending on the
type of todo or the data stored.

Use parameterized routing to pass information back and forth between routes.
