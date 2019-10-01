## Class 5 - Dealing with data

So far we've learned how data, and state, are created, manipulated and passed through different components in our application:
- Data is stored on components using `state`, and updated with `setState`.
- Application state is propagated with props down the component tree with `props`.
- Actions are passed with `props` as well, and can modify data up the tree.
- React re-renders components in response to state changes, and subsequent propagation of `prop` changes.

This is an important mechanism to understand as it makes it possible for us to:
- Build dynamic interfaces that change in response to data updates.
- Begin separating small reusable components and larger components that hold data.
- Manage data flow throughout our application (in cases such as interaction and navigation).

While this is a good start, we still need to address one question: `where should application data live?`
When building a simple application, such as a small Todo app, it's easy enough to have all data 
and data modifies live as local state inside a `TodoList` component, using local `state` and bound handlers
to pass data to each `TodoItem` and respond to updates and interaction. However, as applications grow in size and complexity, 
many data points are needed and are frequently reused.

Let's look at a real world example, the Instagram mobile app:

<img width="800" height="600" class="wp-image-11977 size-full" alt="app like instagram" src="https://engineerbabu.com/blog/wp-content/uploads/2018/07/app-like-instagram-002.png">

The user's data, which may be stored somewhere in the app as `this.state.user` might include attributes such as
`profilePhoto`, `likes`, `comments`, `following`, `followers`, etc. . At a quick glance at the interface you'll
notice that the same data can be needed at many parts of our application:
- The user photo is rendered in the header
- The new likes and comment counts show in a footer popup
- The following status is indicated on a viewed profile

How may we address data constraints that are not isolated and might go in different parts of our application tree?
How can we avoid reimplementing data-logic and potential duplicated API calls across our app?

### Component composition and the `render props` pattern
The `render props` design pattern is a way of designing components while removing the need for specific implementation
of their content and data requirements, in cases where the same component may be used with different state or to 
eliminate deeply nested references and prop propagation. In fact, we've been using this pattern already but haven't really discussed it in detail.

When a component is rendered, such as a `View` or a `Text`, any content rendered inside it in a containing component
will be available inside as a special property, `props.children`. This is exactly how the React Native components work:

```jsx
<View>
  <Text>Hello World!</Text>
</View>
```

`View` receives a fragment containing the rendered `<Text/>` as the `children` value, while `Text` receives plain text.
We could easily our own decoupled component as well, to render any kind of content inside:

```jsx
const MyParentComponent = (props) => (
  <View>
    {props.children}
  </View>
)

const MyChildProp = (props) => (
  <Text>{props.content}</Text>
)

return (
  <MyParentComponent>
    <MyChildComponent content="Hello world!" />
  </MyParentComponent>
)
```

By using the `children` prop, or any other prop that receives a function that renders components (such as the `renderItem` prop on the `FlatList` component), we can decouple a component from not only its data, but its particular implementation of content. That means we can create higher-level abstractions of components such as forms, popups, cards, menus, lists and any other kind of UI container. It 
also means passing data down the component tree doesn't require as many components to be tightly coupled with our data structure as well.

For example, in out Todo list example, the main `TodoList` component uses a `FlatList` to render a list of items. This list uses the `renderItem` property to render each item, so all rendering, data and assignment of event handlers that has to do with the specifics of managing Todo items is written at the `TodoList` component level, never inside the `FlatList` itself, this is a great way to "flatten" data use and make it easy to share global application state between different parts of our app.

```jsx
class TodoList extends Component {
  render () {
    ...
    <FlatList
        data={this.state.items}
        extraData={this.state.items.length}
        renderItem={(props) => (
          <TodoItem
            label={props.item.label}
            done={props.item.done}
            index={props.item.i}
            onToggleDone={this.onBoundToggleDone}
          />
        ) }
        keyExtractor={item => String(item.i)}
    />
    ...
  }
}
```

[This Expo Snack](https://snack.expo.io/@barakchamo/render-props) has three examples of building React components: A coupled components, a fully-decoupled component, and a hybrid composited component.

### The flux data-flow pattern
Render props go a long way in helping us reduce the complexity and depth of our component trees, write less data-coupled and component-coupled components and share the same state across our application. However, passing state around and handling the myriad of ways in which state can be transformed and updated can still get out of control in a non-trivial, multi-function application.

For example:
Imagine our Todo app began to grow in views and functionality: we now have a list of various kinds of todos, the ability to add, remove, share, edit and mark todos as completed. So far, each state-related action has been created on the parent as a bound handler that calls `setState`. If we added all this functionality, our component will grow into something along the lines of:

```jsx
class TodoList extends Component {
  onAddTodo() {
  }
  
  onEditTodo() {
  }
  
  onToggleTodo() {
  }
  
  onShareTodo() {
  }
  
  onDeleteTodo() {
  }
  
  onReorderTodo() {
  }
  
  onTodoDetails() {
  }
  
  // the list can go on and on...
}
```

Clearly, we need a better model for dealing with complex application state, preferably in a way that can be abstracted from the component itself.

The `flux` model provides just that, a clear model for data management in a unidirectional data-flow architecture (which React follows).

At a high-level, it introduces the following steps to the data cycle of an application:
![The Flux process](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-1300w.png)

- `Actions` are events or triggers that introduce changes and updates to state.
- `Dispatcher` propagates `actions` and digests state transformations.
- `Store` is a container for application state that can be bound to a component and shared across the app.
- `View` is a component that renders content based on the store's state.

`Action` propagation is the key to making this unidirectional flow into more of a cycle of updates:
![Action propagation in Flux](/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png)

But remember, even though actions are called up the tree, data still on "flows through React" in one way, this is contrast
to data-bound architectures such as Angular that allow data to be manipulated from both sides of a shared property.

Essentialy, this model follows that same micro-pattern we used in our todo app.
- State lives on a higher-level component and flows down the tree
- Handlers are passed down to trigger actions
- Actions propagate up the tree and manipulate state
- State changes trigger application updates and re-renders

### Resources
- [Understanding the "render props" pattern](https://reactjs.org/docs/render-props.html)
- [Introduction to Flux](https://facebook.github.io/flux/docs/in-depth-overview)
- [Redux, a popular flux implementation](https://redux.js.org/)

### Assignment - Midterms
For your midterm project you should design and implement a new mobile application that features what you've
learned in class so far, namely:

- React Native view composition and mobile rendering.
- JS-based styling and use of flexbox layouts.
- Using interactive elements (such as inputs, buttons, toggles and other native UI).
- Implementing multi-page applications and navigation.
- Handling complex application state.

Your project must include:
- Three navigation views or more.
- Shared state and state updates between views.
- Three forms of user input / interaction.
- At least one React Native or Expo component or API not taught in class.

The midterm project is one of two larger projects you'll be completing this semester and is 
a great opportunity to practice what you've learned and build functional apps that could
be featured on your portfolios!

You are welcome to explore and use any 3rd-party libraries as long as they are compatible with Expo's managed environment,
these include all the modules bundled with Expo already such as maps, camera access, multimedia interfaces, geolocation, etc.
