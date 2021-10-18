const { createStore } = require("redux");

// Action Creators that are passed into the dispatch method as arguments.
// Do not forget to execute the function when passed into the dispatch
//  method or you will get an error.  dispatch only takes objects so we need
// to return the action object from our action creator.
const increment = () => ({ type: "INCREMENT" });

const decrement = () => ({ type: "DECREMENT" });

const customCount = (num) => {
  return {
    type: "CUSTOM_COUNT",
    payload: num,
  };
};

// When rean first the default state is added to the store.
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "CUSTOM_COUNT":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

// Creates our store.
const store = createStore(countReducer);

// A function that is passed to our store subscribe() method.
// The getState() method returns state that is stored inside our store.
const countSubscription = () => console.log(store.getState());

// subscribe() method takes a function as an argument.
// subscribe gives us a subscription to our store.
// Every time the store changes the call back passed into subscribe
// fires off.
store.subscribe(countSubscription);

// dispatch() method fires off actions to our reducer.
// Remember to envoke the function as it wants the returned object
// not the function itself.
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(customCount(5));
store.dispatch(customCount(-1));
