// make our state a function so it's not global and can be altered somewhere else in the app..
//So we want our dispatch method to call a reducer every time an action is dispatched so we call it in the arg
function createStore(reducer) {
  let state;
 /* state is now accessible to dispatch by putting dispatch in our function..
  we need to be able to call dispatch in other areas 
  So we expose the method by having our function return a JavaScript object that has a dispatch method.
  We'll call this returned JavaScript object our store, and, therefore, we'll call the 
  method createStore, because that's what it does.
 */
  function dispatch(action) {
    state = reducer(state, action);
    render();
  };
 

  //This method simply returns the state, which we can use elsewhere in our application.
  function getState() {
    return state;
  }
 
  return {
    dispatch,
    getState
  };
};

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};



function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

dispatch({ type: '@@INIT' })
let button = document.getElementById('button');
 
button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})


//So we have this object called a store which contains all of our application's state
// createStore takes the reducer reducer as an argument
let store = createStore(reducer);
store.dispatch({ type: '@@INIT' });


//conclusion 
//a call to dispatch should call a reducer, reassign the state, and render a change.
//This is implemented inside the createStore method.


