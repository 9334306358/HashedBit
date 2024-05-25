
import React from 'react';
import * as Survey from 'survey-react-ui';

const surveyJson = {
  elements: [
    { name: 'FirstName', title: 'Enter your first name:', type: 'text' },
    { name: 'LastName', title: 'Enter your last name:', type: 'text' }
  ]
};

function SurveyForm() {
  return (
    <Survey.Survey json={surveyJson} />
  );
}

export default SurveyForm;
