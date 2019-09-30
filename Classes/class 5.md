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


### The flux data-flow pattern

### Resources
- [Understanding the "render props" pattern](https://reactjs.org/docs/render-props.html)
- [Introduction to Flux](https://facebook.github.io/flux/docs/in-depth-overview)
- [Redux, a popular flux implementation](https://redux.js.org/)

### Assignment - Midterms
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
