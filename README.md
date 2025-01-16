# Silent Failure in React Native useEffect Hook

This repository demonstrates a subtle bug in React Native where an `useEffect` hook with an async function that returns a value fails silently.  The component doesn't update with fetched data, and no error messages are shown in the console. This is because the return value of the `useEffect` callback is ignored. 

## Bug
The `bug.js` file contains the problematic code. The `useEffect` hook fetches user data, but the returned promise is discarded.  

## Solution
The `bugSolution.js` file provides the corrected code. The solution involves removing the unnecessary return statement from the async function inside the useEffect hook, ensuring the focus remains on using the `setUserData` state update.