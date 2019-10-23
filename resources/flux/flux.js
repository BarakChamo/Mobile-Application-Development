import React, {createContext, useContext, useReducer} from 'react'

/*
    This is a minimal reference Flux implementation for React
    You may use it in any project that requires state management in the following way:
    
    To understand how to use Flux, please review the official introduction:
    https://facebook.github.io/flux/docs/in-depth-overview

    Further details on use and implementation are provided here:
    https://github.com/BarakChamo/Mobile-Application-Development/blob/master/Classes/class%205.md

    To use the Store class, follow these steps:

    1. Initialize a Store instance, the constructor accepts initial application state and a reducer function
        const store 

*/ 

// The `Store` is a minimal flux implementation 
// that only uses React functionality, such as the Context API and hooks
export default class Store {
    constructor(reducer, initialState, key = 'store') {
        this.reducer = reducer
        this.initialState = initialState
        this.key = key

        // Up top, we create a new context
        // This is an object with 2 properties: { Provider, Consumer }
        // Note that it's named with UpperCase, not camelCase
        // This is important because we'll use it as a component later
        // and Component Names must start with a Capital Letter
        this.context = React.createContext();
    }

    dispatch = (type, props) => this._dispatch({type, props})

    static ASYNC = {
        FETCHING: 'FETCHING',
        DONE: 'DONE',
        ERROR: 'ERROR'
    }

    dispatchAsync = (type, props, promise) => {
        // First, dispatch a fetching action
        this._dispatch({type, props, asyncType: Store.ASYNC.FETCHING })

        // Await the promise
        promise            
            // if the promise succeeded, dispatch a DONE with the payload
            .then(result => setTimeout(this._dispatch({type, props: result, asyncType: Store.ASYNC.DONE })))
            
            // If the promise failed, dispatch an ERROR with the error
            .catch(error => setTimeout(this._dispatch({type, props: error, asyncType: Store.ASYNC.ERROR })))
    }

    mapStore = ([state, dispatch]) => {
      this._dispatch = dispatch
      return { state, dispatch: this.dispatch, dispatchAsync: this.dispatchAsync }
    }

    connect = (Component) => {
        const StoreContext = this.context
 
        return (props) => (
            <StoreContext.Consumer>
                {store => (
                    <Component {...props} store={store} />
                )}
            </StoreContext.Consumer>
        )
    };

    provide = (Component) => {
        const StoreContext = this.context

        return (
            <StoreContext.Provider value={
              this.mapStore(useReducer(this.reducer, this.initialState))
            }>
                <Component />
            </ StoreContext.Provider>
        )
    }

    // The provider is a top-level component that initializes a context root
    // All components rendered under the provider will be able to access the context using the connect() method 
    Provider = ({ reducer, initialState, children }) => {
        const StoreContext = this.context

        return (
            <StoreContext.Provider value={
              this.mapStore(useReducer(this.reducer, this.initialState))
            }>
                {children}
            </ StoreContext.Provider>
        )
    }
}