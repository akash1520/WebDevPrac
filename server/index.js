const redux = require("redux")
const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOKE = "CAKE_RESTOKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOKE = "ICECREAM_RESTOKED"
const bindActionsCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware= redux.applyMiddleware
const reduxLogger= require("redux-logger")

const logger = reduxLogger.createLogger()

function orderCake(qty) {
  return {
    type: CAKE_ORDERED,
    payload: qty
  }
}

function restokeCake(qty) {
  return {
    type: CAKE_RESTOKE,
    payload: qty
  }
}

function orderIceCream(qty) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty
  }
}

function restokeIceCream(qty) {
  return {
    type: ICECREAM_RESTOKE,
    payload: qty
  }
}

const initialCakeState = {
  numOfCake: 5,
}

const intialIcecreamState={
  numOfIcecream:10
}


const icecreamReducer = (state = intialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numOfIcecream: state.numOfIcecream - action.payload }
    case ICECREAM_RESTOKE:
      return { ...state, numOfIcecream: state.numOfIcecream + action.payload }

    default:
      return state
  }
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {

    case CAKE_ORDERED:
      return { ...state, numOfCake: state.numOfCake - action.payload }
    case CAKE_RESTOKE:
      return { ...state, numOfCake: state.numOfCake + action.payload }
    default:
      return state
  }
}

const rootReducer=combineReducers({
  cake:cakeReducer,
  iceCream:icecreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))
console.log('initialState', store.getState())

const unsubscribe = store.subscribe(() => {  })

const actions = bindActionsCreators({ orderCake, restokeCake, orderIceCream, restokeIceCream }, store.dispatch)
actions.orderCake(3)
actions.restokeCake(2)
actions.orderIceCream(4)
actions.restokeIceCream(10)
actions.restokeCake(10)

unsubscribe()