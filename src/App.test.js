import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("When launching the App", () => {
  const wrapper = shallow(<App />);

  it("should display track names", () => {
    expect(wrapper.find('.js-results-row').length).toBe(3);
  });

  it("should display open modal button for each track name", () => {
    expect(wrapper.find('.js-modal').length).toBe(3);
  });

  it("should not display the modal", () => {
    expect(wrapper.state().isModalOpen).toBe(false);
  });
});
