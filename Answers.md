1. What problem does the context API help solve?

no longer have to pass props


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions:
describe what you going to do
reducers: is a function deals with state and action changes
store: holds state of entire app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

component state is stored locally within a component and is not accessible from other components unless it’s explicitly passed as props to it’s sub components.
Where as redux state is a centralised global store which is accessible to any component that subscribes to the store.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is  a function within a function.



1. What is your favorite state management system you've learned and this sprint? Please explain why!

use context look easier to use but I know once I learn redux it be fine.