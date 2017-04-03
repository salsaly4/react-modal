/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Modal from './Modal';

describe('Modal component', () => {
  const className = 'test-class';

  it('should render', () => {
    const wrapper = shallow(<Modal isModalOpen />);
    expect(wrapper.exists()).to.equal(true);
  });

  it('should render with specified backdropClass', () => {
    const wrapper = shallow(<Modal backdropClass={className} isModalOpen />);
    expect(wrapper.html()).to.contain(`class="${className}"`);
  });

  it('should render with specified modalContainerClass', () => {
    const wrapper = shallow(<Modal modalContainerClass={className} isModalOpen />);
    expect(wrapper.html()).to.contain(`class="${className}"`);
  });

  it('should render with specified modalClass', () => {
    const wrapper = shallow(<Modal modalClass={className} isModalOpen />);
    expect(wrapper.html()).to.contain(`class="${className}"`);
  });
});
/* eslint-enable no-unused-expressions */
/* eslint-enable import/no-extraneous-dependencies */
