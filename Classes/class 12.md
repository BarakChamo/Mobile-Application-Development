# Class 12 - The Job Interview

Today, in pairs, we'll practice some real-world job-getting skills!

Each part of this document lists several questions.
In your pairs, go turn-by-turn and quiz each other.

If it's your turn to ask: you're encouraged to ask follow-up questions and dig in.
If it's your turn to answer: give complete answers and explain your thought process.

## General advice
- Don't freeze, talk through your problems and doubts.
- While coding explain your thought process.
- Ask leading and clarifying questions to get a better idea of what the question is aiming at.
- Talk through your decisions while coding, why are you choosing one approach over others?

## Part 1 - general questions

*What are the differences between a class component and functional component?*

*What is state? Hows does it work? How do you manipulate it?*

*What are props? How are they defined?*

*How does data flow in React Native? How do components communicate with one another?*

*What are the different ways to render lists in React Native? Why are some better than others?*

*What are lifecycle methods? when are they called? can you describe one?*

*What are some approaches to building re-usable components?*

*What is Flux? What are the pros and cons of using it?*

*What is a reducer? How is it used?*

*What are "smart" component? What are "dumb" component?*

*Can you use CSS in React Native? How do you style React Native components?*

*Explain the Flexbox layout model, how does it work?*

*What is a style guide? What is a living style guide? How can one be implemented in React Native?*

*What is data persistance? Why do you need it? How do you implement it?*

*What is a NoSQL datastore? How is it different from a SQL datastore?*

*In Firebase, what are security rules? what are they used for?*

*What are promises? Why are they useful? What is `async/await`?*

## Part 2 - whiteboarding

### *Sketch component-based layouts*

1. Sketch the component-based layout of a main app view, featuring a header, footer, and main section router.
Map the component tree to each layout section, how would all of these component remain in sync and communicate with one another? 

How would the header, footer and main section communicate? propose a data-oriented solution and a prop-oriented solution.

2. Sketch the component-based layout of an autocomplete input box, this should include an input text field, a popup dropdown showing
related search results.

What styles would be applied to each component to achieve the desired visual results?

How can the component be extended to show different kinds of search results by type? Propose a composition based approach and a props based approach.

How would you handle interaction in different parts of the component?


3. Sketch the component-based layout of a tag editor:

![Tag input field](https://i.stack.imgur.com/rVZ8x.png)

How is data stored in this component? How is interaction handled? Sketch the component-based layout and interaction flow.

How can the component be modified to support and inline layout?
![inline tag input field](https://i.stack.imgur.com/68Cyg.png)


### *Sketch data models*

1. Design the data structure for an application that features a list of group messages. 
Each group contains several participants and a message history, as well as group metadata like name and icon.

Describe the data flow between the "smart components" of this app and illustrate the component-based flow of data in a message view
and group list view.

2. Design the data structure for an Instagram-like application, how can it be optimized to show user-specific content such as
friends who like content, sharing history and social activity?

Describe the data flow between the "smart components" of this app and illustrate the component-based flow of data in a feed view and a single post view.


### *Sketch state and interaction models*

1. Describe and sketch the flow of an authenticated user logging into a messaging app using social authentication.
- Describe the function call sequence
- How does each call modify the application state?
- How does each state change impact the view and app routing?

2. Describe the layout and operation of a pull-to-refresh and scroll-to-load list component.
- how is content rendered inside the list?
- What prop-based interface can be designed to make the component re-usable
- Describe the interaction flow and how it maps to handler calls and state changes

## Part 3 - Implementation (in Expo Snack)

1. Implement as semantic styling button, that changes in color depending on the presence of semantic props.
  - implement error, warning and success states. Error should have highest priority, then warning and finally success.
  
2. Implement an autocomplete input with options list.
  - show results from an array of values as a user types in an input field (no need for database, define an array of strings for possible results)
  - filter results based on the first part of each string (no need for advanced matching)
  - list should update as the user types and hide when the input is empty.
  
3. Implement a progress bar component
  - The component should show a visual indication of progress
  - Color of both parts of the bar should be customizable
  - Value range should be normalized to 0 to 1
  - Bonus: how would you animate the values of the progress bar on change?
  
4. Implement an accordion interface, a collapsible list with headers:
![Accordion layout](https://cdn.dribbble.com/users/949126/screenshots/5404975/accordion_2x.jpg)

- Sections should open and close on header press
- Only one section should be open at a time, as one is opened, others should close

  

