# React-Context-Reducer

[![Release](https://badgen.net/github/release/kifs-react/context-reducer)](https://www.npmjs.com/package/@kifs-react/context-reducer)
[![Minified](https://badgen.net/bundlephobia/min/@kifs-react/context-reducer)](https://bundlephobia.com/package/@kifs-react/context-reducer)
[![Minified + zip](https://badgen.net/bundlephobia/minzip/@kifs-react/context-reducer)](https://bundlephobia.com/package/@kifs-react/context-reducer)
[![Dependencies](https://badgen.net/github/dependents-pkg/kifs-react/context-reducer)](https://bundlephobia.com/package/@kifs-react/context-reducer)
[![Tech Debt](https://badgen.net/codeclimate/tech-debt/kifs-react/context-reducer)](https://codeclimate.com/github/kifs-react/context-reducer)
[![Maintainability](https://badgen.net/codeclimate/maintainability/kifs-react/context-reducer)](https://codeclimate.com/github/kifs-react/context-reducer)

Lightweight – no dependencies – React wrapper of a Reducer in a Context.

Features:

- It's just react wrapper

> This package is currently served as-is. With usage of all ES6 features without any bundling and/or specific whatever the system is used.

## Install

- `npm i @kifs-react/context-reducer`

## Usage

`npm i react-rest-api`

```js
// ################################
//
// App.js
//
// ################################


import { ReducerProvider, } from 'react-context-reducer'

import { Component } from './Component'

export function App() {
  function reducer(state, action) {
    switch (action.type) {
      case 'doABarrelRoll':
        return { ...state, status: 'doing a barrel roll' }
      default:
        return state
    }
  }

  const initialState = { status: '' }

  function initializer(initialState) {
    return {
      ...initialState
    }
  }

  return (
    <ReducerProvider
      // Optionnal (But recommended that's the goal of this repo): default to dummy reducer `function (state) { return state }`
      reducer={reducer}
      // Optionnal: default to undefined
      initialState={initialState}
      // Optionnal: default to undefined
      initializer={initializer} 
    >
      <Component />
    </ReducerProvider>
  )
}


// ################################
//
// Component.js
//
// ################################


import { useReducerProvider } from '../contexts/Reducer'

export function Component() {
  const [appState, appDispatch] = useReducerProvider()

  return (
    <>
      <button onClick={() => appDispatch({ type: 'doABarrelRoll' })}>Do a Barrel Roll</button>
      {JSON.stringify(appState, null, 2)}
    </>
  )
}

```
