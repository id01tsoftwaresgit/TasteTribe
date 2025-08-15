import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DataProvider, useData } from './DataProvider';
import * as firestore from '../lib/data/firebase/firestore';

// Mock the entire firestore module
vi.mock('../lib/data/firebase/firestore', () => ({
  getTribes: vi.fn(),
  getTribeById: vi.fn(),
  getUserProfile: vi.fn(),
  createTribe: vi.fn(),
  getTribesByOwner: vi.fn(),
}));

const TestComponent = () => {
  const data = useData();
  return (
    <div>
      <div data-testid="getTribes-type">{typeof data.getTribes}</div>
      <div data-testid="getTribeById-type">{typeof data.getTribeById}</div>
    </div>
  );
};

describe('DataProvider', () => {
  it('provides data-fetching functions to its children', () => {
    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>
    );

    // Check that the context provides functions
    expect(screen.getByTestId('getTribes-type').textContent).toBe('function');
    expect(screen.getByTestId('getTribeById-type').textContent).toBe('function');
  });

  it('exposes all functions from the firestore module', () => {
    const TestAllFunctions = () => {
      const data = useData();
      const allFunctionsPresent = Object.keys(firestore).every(fnName => typeof data[fnName] === 'function');
      return <div>{allFunctionsPresent ? 'all present' : 'some missing'}</div>;
    };

    render(
      <DataProvider>
        <TestAllFunctions />
      </DataProvider>
    );

    expect(screen.getByText('all present')).toBeInTheDocument();
  });
});
