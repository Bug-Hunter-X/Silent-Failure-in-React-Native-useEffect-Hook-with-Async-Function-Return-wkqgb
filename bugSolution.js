The solution is to simply remove the `return data;` line from the `fetchUserData` function. The useEffect hook doesn't need to return anything in this scenario. The state update is handled correctly by the `setUserData` function.

```javascript
useEffect(() => {
  const fetchUserData = async () => {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    setUserData(data);
  };
  fetchUserData();
}, []);
```

This corrected version ensures the fetched data updates the component's state without any silent failures.