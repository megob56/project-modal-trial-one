import React from 'react';
import { shallow } from 'enzyme';

import ProjectModal from './ProjectModal';

describe("When the add track to project button in the main app has not been clicked", () => {
    const isModalOpen = false;
    const wrapper = shallow(<ProjectModal show = { isModalOpen } />);

    it("the modal should not be visible", () => {
        expect(wrapper.find('.modal').length).toBe(0);
    });
});

describe("When launching the modal", () => { //checking for rendering
    const isModalOpen = true;
    const currentTrack = 'Soul Sista';
    const projectsList = ["Play that Funky Music", "Sick Frat House Beats", "Smoking Ganja Chilled Tunes", ];
    const wrapper = shallow(<ProjectModal show = { isModalOpen } projects={ projectsList } trackName={ currentTrack }/>);

    it("the modal should be visible", () => {
        expect(wrapper.find('.modal').length).toBe(1);
    });

    it("should render name of selected track", () => {
        expect(wrapper.find('h2').text()).toBe("Add Soul Sista to...")
    })

    it("should render two radio buttons", () => {
        expect(wrapper.find('.js-radio-button').length).toBe(2);
    });

    it("should render a text input field", () => {
        expect(wrapper.find(".js-text-input").length).toBe(1);
    });

    it("should render a check box", () => {
        expect(wrapper.find('.js-checkbox').length).toBe(1);
    });

    it("should render a drop down menu", () => {
        expect(wrapper.find('.js-select-menu').length).toBe(1);
    });

    it("should render a close modal button", () => {
        expect(wrapper.find('.js-close-modal-button').length).toBe(1);
    });

    it("should render a next button", () => {
        expect(wrapper.find('.js-next-button').length).toBe(1);
    });
});

//checking for interactions 
//checking for lifecycle calls