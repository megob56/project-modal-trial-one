import React from 'react';
import { shallow } from 'enzyme';

import ProjectModal from './ProjectModal';

describe("When launching the modal", () => {
    const isModalOpen = true;
    const wrapper = shallow(<ProjectModal show = { isModalOpen }/>);

    it("should display two radio buttons", () => {
        expect(wrapper.find('.js-radio-button').length).toBe(2);
    });

    it("should display a text input field", () => {
        expect(wrapper.find(".js-text-input").length).toBe(1);
    });

    it("should display a drop down menu", () => {
        expect(wrapper.find('.js-select-menu').length).toBe(1);
    });

    it("should display a close modal button", () => {
        expect(wrapper.find('.js-close-modal-button').length).toBe(1);
    })
});