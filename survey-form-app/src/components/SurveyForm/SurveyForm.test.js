import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SurveyForm from './SurveyForm';

describe('SurveyForm', () => {
  let props;
  let shallowSurveyForm;
  let renderedSurveyForm;
  let mountedSurveyForm;

  const shallowTestComponent = () => {
    if (!shallowSurveyForm) {
      shallowSurveyForm = shallow(<SurveyForm {...props} />);
    }
    return shallowSurveyForm;
  };

  const renderTestComponent = () => {
    if (!renderedSurveyForm) {
      renderedSurveyForm = render(<SurveyForm {...props} />);
    }
    return renderedSurveyForm;
  };

  const mountTestComponent = () => {
    if (!mountedSurveyForm) {
      mountedSurveyForm = mount(<SurveyForm {...props} />);
    }
    return mountedSurveyForm;
  };  

  beforeEach(() => {
    props = {};
    shallowSurveyForm = undefined;
    renderedSurveyForm = undefined;
    mountedSurveyForm = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
