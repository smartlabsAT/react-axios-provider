/**
 * AxiosProvider.tsx
 *
 * A simple React Context that provides an Axios instance
 * and allows swapping it as needed. 🚀
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AxiosInstance } from 'axios';

/**
 * Interface representing the data available in the Axios context.
 * Provides the current Axios instance and a function to update it. 🔄
 *
 * @interface AxiosContextData
 */
export interface AxiosContextData {
  /**
   * The current Axios instance.
   *
   * @type {AxiosInstance}
   */
  axios: AxiosInstance;

  /**
   * Replaces the current Axios instance with a new one.
   *
   * @param {AxiosInstance} instance - A pre-created Axios instance.
   */
  updateAxios: (instance: AxiosInstance) => void;
}

/**
 * Props for the AxiosProvider component which manages the Axios instance.
 *
 * @interface AxiosProviderProps
 */
export interface AxiosProviderProps {
  /**
   * The initial Axios instance (should be created, e.g. using axios.create()).
   *
   * @type {AxiosInstance}
   */
  instance: AxiosInstance;

  /**
   * Child components that can consume the Axios context.
   *
   * @type {ReactNode}
   */
  children: ReactNode;
}

/**
 * The actual Axios context. Initialized with `undefined` and later populated.
 */
const AxiosContext = createContext<AxiosContextData | undefined>(undefined);

/**
 * Provides the Axios context to its children.
 *
 * - Manages an internal Axios instance in state.
 * - Provides the `updateAxios` function to swap the instance.
 *
 * @param {AxiosProviderProps} props - The provider props.
 * @returns {JSX.Element} The context provider component. 🎉
 */
export function AxiosProvider({ instance, children }: AxiosProviderProps): React.ReactElement {
  const [axiosInstance, setAxiosInstance] = useState<AxiosInstance>(() => instance);

  /**
   * Replaces the current Axios instance with a new one.
   *
   * @param {AxiosInstance} newInstance - The new Axios instance to use.
   */
  const updateAxios = (newInstance: AxiosInstance): void => {
    setAxiosInstance(newInstance);
  };

  /**
   * The value object provided through the context.
   *
   * @type {AxiosContextData}
   */
  const contextValue: AxiosContextData = {
    axios: axiosInstance,
    updateAxios,
  };

  return <AxiosContext.Provider value={contextValue}>{children}</AxiosContext.Provider>;
}

/**
 * Custom hook for consuming the Axios context.
 *
 * @returns {AxiosContextData} The Axios context data.
 * @throws {Error} If used outside of an AxiosProvider. ⚠️
 */
export function useAxiosContext(): AxiosContextData {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error('useAxiosContext must be used within an AxiosProvider.');
  }
  return context;
}
