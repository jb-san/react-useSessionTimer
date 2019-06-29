# react-useSessionTimer

A hook to get session timer functionality

## Installation

`npm i react-usesessiontimer` or `yarn react-usesessiontimer`

## Usage

```js
import useSessionTimer from "react-usesessiontimer";

function App() {
  const { start, stop, reset } = useSessionTimer({
    warnAfter: 3000, // call onWarning callback after 3000ms
    expireAfter: 6000, // call onExpire callback after 6000ms
    onWarning: () => {
      alert("session is about to expire, do something about it ?");
    },
    onReset: () => {
      alert("reset session timer");
    },
    onExpire: () => {
      alert("session expired");
    }
  });

  return (
    <button
      onClick={() => {
        start();
      }}
    >
      Start session timer
    </button>
  );
}
```

## Parameters

| name        | type   | description                                          |
| ----------- | ------ | ---------------------------------------------------- |
| warnAfter   | number | ms to wait until it calls the `onWarning` callback   |
| expireAfter | number | ms to wait until it calls the `onExpire` callback    |
| onWarning   | Fn     | a function that gets called after `warnAfter` ms     |
| onExpire    | Fn     | a function that gets called after `warnAfter` ms     |
| onReset     | Fn     | a function that gets called when you reset the timer |

## Returns

| name  | type | description                 |
| ----- | ---- | --------------------------- |
| start | Fn   | function to start the timer |
| stop  | Fn   | function to stop the timer  |
| reset | Fn   | function to reset the timer |

# Todo

- [] Tests
