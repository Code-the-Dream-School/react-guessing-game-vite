```
🏗️ Work in Progress...
```

This lesson will teach you:

- Converting stateful class components to function components using hooks

The goal for this lesson is to get experience working with React Class components and how to get the same functionality from a class component and a functional component using hooks.

The React application that you will be using is a simple number guessing game. The game is currently written using a mix of class components for components that have state and stateless functional components.

When you are done the application should have all of the same functionality, but the class components should be refactored to be function components that use the `useState` hook to manage their stateful data.

# Instructions

## Fork the repository

The first step is to fork the source repository in GitHub and then clone your forked repository to your local development system. There are instructions for forking a repository in GitHub here: https://docs.github.com/en/get-started/quickstart/fork-a-repo

Once you have it cloned locally make sure to replace any instance of `yarn start` with `yarn dev` or `npm run dev` as Vite uses `dev` for starting the development server.

> If you are using npm, just replace `yarn` with `npm` run and execute the same commands:

```
npm install
npm run dev

```

## Familiarize yourself with the code

In the current version of the application there is a mix of class components and stateless function components.
Take some time to look over the structure of the application so that you understand how it is constructed.

The class components in the current version are `NumberGuessingGame` and `GuessControl`. These are the components that you will be converting to be function components with hooks. The existing function components don't need any changes.

If you want to attempt this on your own without a step by step walkthrough first then leave the section below collapsed.

## Step by Step

<details>
    <summary>Click the arrow to expand this section and see step by step instructions to convert to function components with hooks.</summary>

### Convert `GuessControl`

- [ ] Open the `GuessControl.js` file.
- [ ] Rename the current `GuessControl` class to `GuessControlOld` if you want to keep it a reference while converting the code.
- [ ] Create a new function component called `GuessControl` that will take an `onGuess` prop.
- [ ] Copy the return value from the render function in the class component to be the return value in the new function component. Remove any references to `this.` since those will be replaced with new references to local variables or props passed in to the function component.
- [ ] Create a new state variable named `currentGuess` with setter `setCurrentGuess` and default value of an empty string. Set the `value` property for the input element to refer to this state value. (Make sure to import `useState`)
- [ ] Create a `handleInputChange` function within the component that updates the `currentGuess` state value when the user changes the value in the input. Set the `onChange` property for the input element to refer to this function.
- [ ] Create a `onSubmitGuess` function that calls the `onGuess` prop with the `currentGuess` value converted to a number and also resets the `currentGuess` to an empty string when it is called. Set the `onClick` property on the button to refer to this function.
- [ ] If you still have the old class version around as `GuessControlOld`, delete it.

### Convert `NumberGuessingGame`

- [ ] Open the `NumberGuessingGame.js` file.
- [ ] Rename the current `NumberGuessingGame` class to `NumberGuessingGameOld` if you want to keep it a reference while converting the code.
- [ ] Create a new function component called `NumberGuessingGame`.
- [ ] Copy the logic and return value from the render function in the class component to be in the new function component. Remove any references to `this.` since those will be replaced with new references.
- [ ] Create 3 state variables and their setters for `numberToGuess`, `numberOfGuesses`, and `latestGuess` and initialize them to the same values from the class component version. (Make sure to import `useState`)
- Create a `handleGuess` function that will be passed in to the `GuessControl` component as the `onGuess` prop. This function should take the guess as an argument and set the `latestGuess` state with the guess (converted to a number using the Number function) and increment the `numberOfGuesses` state.
- [ ] Create a `handleReset` function within the component that resets all 3 of the state properties the same way the handleReset function from the class component reset them. Pass this function to the `GameOver` component as the `onReset` prop.
- [ ] Update all references from the class component that referred to `this.<something>` to refer to the correct variable or function for the new function component.
- [ ] If you still have the old class version around as `NumberGuessingGameOld`, delete it.

</details>
# mls-snake
