import React, { createContext, useContext, useReducer } from 'react'

const context = createContext()

export function useReducerProvider() { return useContext(context) }

export function ReducerProvider({
  reducer = function (state) { return state },
  initialState,
  initializer,
  children,
}) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer)

  return React.createElement(
    context.Provider,
    { value: [state, dispatch] },
    children
  )
}
