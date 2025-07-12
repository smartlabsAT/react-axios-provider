# react-axios-provider ·🚀
![npm version](https://img.shields.io/npm/v/react-axios-provider) · ![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

![axios-provider.jpg](doc/assets/axios-provider.jpg)

A flexible React Context provider for managing Axios instances throughout your application. This provider allows you to easily share and update an Axios instance across your component tree.


## ✨ Features

- 🌀 Provides a shared Axios instance via React Context
- 🔄 Allows dynamic updates to the Axios instance at runtime
- 📝 Includes TypeScript support
- 🔌 Simple integration



## 📋 Requirements

- React >=17
- Axios ^1.8.2
- Node.js >=18.0.0

## Installation 📦

```bash
npm install react-axios-provider
```

or with pnpm:

```bash
pnpm add react-axios-provider
```



## 📖 Usage

### 🎯 Basic Setup

First, wrap your application (or a part of it) with the `AxiosProvider`:

```tsx
import axios from 'axios';
import { AxiosProvider } from 'react-axios-provider';

// Create your Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

function App() {
  return (
    <AxiosProvider instance={axiosInstance}>
      <YourComponents />
    </AxiosProvider>
  );
}
```

### 🔨 Using the Axios Instance

Access the Axios instance in your components using the `useAxiosContext` hook:

```tsx
import { useAxiosContext } from 'react-axios-provider';

function UserProfile() {
  const { axios } = useAxiosContext();
  
  const fetchUser = async () => {
    try {
      const response = await axios.get('/user/profile');
      // Handle response
    } catch (error) {
      // Handle error
    }
  };
  
  return (
    // Your component JSX
  );
}
```

### 🔄 Updating the Axios Instance

You can update the Axios instance at any time (e.g., to update authentication headers):

```tsx
function AuthManager() {
  const { axios, updateAxios } = useAxiosContext();
  
  const updateToken = (newToken: string) => {
    const newInstance = axios.create({
      ...axios.defaults,
      headers: {
        ...axios.defaults.headers,
        Authorization: `Bearer ${newToken}`,
      },
    });
    
    updateAxios(newInstance);
  };
  
  return (
    // Your component JSX
  );
}
```

## 📚 API Reference

### 🔧 AxiosProvider

Main component that provides the Axios context.

#### Props

| Name | Type | Description |
|------|------|-------------|
| instance | AxiosInstance | The initial Axios instance to be provided |
| children | ReactNode | Child components that will have access to the context |

### 🎣 useAxiosContext

A custom hook that provides access to the Axios context.

#### Returns

| Name | Type | Description |
|------|------|-------------|
| axios | AxiosInstance | The current Axios instance |
| updateAxios | (instance: AxiosInstance) => void | Function to update the current Axios instance |

#### ⚠️ Error Handling

The `useAxiosContext` hook will throw an error if used outside of an `AxiosProvider`.

## 💡 Best Practices

1. **Single Provider**: Place the `AxiosProvider` as high in your component tree as needed, typically at the root of your application.

2. **Instance Updates**: When updating the Axios instance, make sure to preserve any necessary default settings from the previous instance.

3. **Error Boundaries**: Consider wrapping your components in an error boundary to catch any errors thrown by `useAxiosContext`.

---

## Contributing

We love contributions! Please follow these steps:

1. **Fork** this repository
2. Create a new **feature branch**
3. **Commit** your changes
4. **Open a Pull Request**

We'll review and merge if it fits the project's scope. 🙌

---

## License

This project is licensed under the [MIT License](./LICENSE).

Happy coding with **react-axios-provider**! Feel free to share and contribute.