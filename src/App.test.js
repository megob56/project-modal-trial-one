import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("When launching the App", () => { //checking for rendering
  const wrapper = shallow(<App />);

  it("should render track names", () => {
    expect(wrapper.find('.js-results-row').length).toBe(3);
  });

  it("should render open modal button for each track name", () => {
    expect(wrapper.find('.js-modal').length).toBe(3);
  });

  it("should not render the modal", () => {
    expect(wrapper.state().isModalOpen).toBe(false);
  });
});

//checking for interactions 
//checking for lifecycle calls