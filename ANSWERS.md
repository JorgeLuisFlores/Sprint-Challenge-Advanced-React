- [ ] Why would you use class component over function components (removing hooks from the question)?
Class components are much easier to read and understand, Class components are also able to hold state and pass state down within the same Class component.

- [ ] Name three lifecycle methods and their purposes.
componentDidMount() we mount components here and this is usually where we put our axios GET requests for future use of the API data.

shouldComponentUpdate() this is used to check if a component is affected by any changes to state or props.
We can use this method so certain components don't re-render unless any changes to state or props were made. 

componentWillUnmount() this method is invoked after a component is unmounted.
This is a good place to put cancelation timers on network requests if a user was unable to be authenticated.

- [ ] What is the purpose of a custom hook?
Make our code more DRY via reusability of custom hooks, plus these hooks are unique to our application which allows us to build them to our needs on a project to project basis.

- [ ] Why is it important to test our apps?
It is important to test our apps to see if they are doing the things we built them to do, before we launch anything that a user would interact with.
Better to test and ship a good app than to have our users point out the flaws during a launch.