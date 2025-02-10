/**
 * AxiosProvider.test.tsx
 *
 * Simple tests for the AxiosProvider and useAxiosContext hook. 🔍
 */

import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { AxiosProvider, useAxiosContext } from '../src';
import type { AxiosInstance } from 'axios';



describe('AxiosProvider', () => {
  it('should throw an error if useAxiosContext is used outside a provider', () => {
    // Capture the expected error message to avoid Vitest "unhandled error" warnings. ⚠️
    const spyConsole = vi.spyOn(console, 'error').mockImplementation(() => {});

    function NoProviderComponent(): React.ReactElement | null {
      // This call should throw an error because it's outside the AxiosProvider.
      useAxiosContext();
      return null;
    }

    // Expect an error when rendering without a provider.
    expect(() => render(<NoProviderComponent />)).toThrow(/must be used within an AxiosProvider/i);

    spyConsole.mockRestore();
  });

  it('should provide the axios instance via context', () => {
    // Create a dummy Axios object (e.g. { get: vi.fn(), ... })
    const dummyAxios = { get: vi.fn() } as unknown as AxiosInstance;

    // Test component that consumes the Axios context.
    function TestComponent(): React.ReactElement {
      const { axios } = useAxiosContext();
      // Display text to indicate if the axios instance matches the dummy instance.
      return (<div data-testid="axiosCheck">
          {axios === dummyAxios ? 'OK' : 'FAIL'}
        </div>);
    }

    // Render the component wrapped in the AxiosProvider.
    render(<AxiosProvider instance={dummyAxios}>
      <TestComponent />
    </AxiosProvider>);

    // Expect "OK" since the axios instance in context should match dummyAxios.
    expect(screen.getByTestId('axiosCheck').textContent).toBe('OK');
  });

  it('should update the axios instance via updateAxios', async () => {
    // Initial dummy Axios instance.
    const dummyAxios1 = { get: vi.fn() } as unknown as AxiosInstance;
    // New dummy Axios instance.
    const dummyAxios2 = { post: vi.fn() } as unknown as AxiosInstance;

    function TestComponent(): React.ReactElement {
      const { axios, updateAxios } = useAxiosContext();

      return (<div>
          <div data-testid="instanceCheck">
            {axios === dummyAxios1 ? 'Instance1' : axios === dummyAxios2 ? 'Instance2' : 'Unknown'}
          </div>
          <button onClick={() => updateAxios(dummyAxios2)}>
            Switch Axios
          </button>
        </div>);
    }

    // Render the component with the initial dummy Axios.
    render(<AxiosProvider instance={dummyAxios1}>
      <TestComponent />
    </AxiosProvider>);

    // Initially, the context should contain dummyAxios1.
    expect(screen.getByTestId('instanceCheck').textContent).toBe('Instance1');

    // Click the button to switch the axios instance.
    screen.getByText('Switch Axios').click();

    // Wait for the state update and re-render, then expect dummyAxios2.
    await waitFor(() => {
      expect(screen.getByTestId('instanceCheck').textContent).toBe('Instance2');
    });
  });
});