# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a library that helps us create user interfaces. It enables us to create components efficiently so that it responds dynamically to incoming data. It also allows us to reuse bits of code.

2. Describe component state.

    Component state allows us to maintain initial values inside variables, but also enables us to constantly reupdate the value using callbacks, essentially changing the "state" of the initial value. In React, this can usually be done using the `useState` hook.

3. Describe props.

    Props are the 'data' that components process and pass down to each other (from parent to child). It enables us to initialize parent components with data sets or data retrieved using APIs and pass that down for use in child components.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    Side effects allow us to change the value of closed scope variables. In React, they can be utilized using the `useEffect` hook. You can sync effects in React components by using a dependency array as the second argument of the `useEffect` hook: you can set the effect to run/change based on the variable passed into the dependency array.
