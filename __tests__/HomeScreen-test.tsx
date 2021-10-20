import 'react-native';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {HomeScreen} from '../src/screens';
import {citiesMock} from '../src/test/mocks/citiesMock';

let component: RenderAPI;

describe('<HomeScreen />', () => {
  beforeEach(() => {
    component = render(
      <MockedProvider mocks={citiesMock}>
        <HomeScreen />
      </MockedProvider>,
    );
  });

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('renders elements after calling api', () => {
    expect(component.queryAllByTestId('citi-list')).toBeDefined();
  });
});
