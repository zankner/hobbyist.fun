import React from 'react';
import { FormGroup } from 'reactstrap';
import { useFormikContext } from 'formik';
import CardSelect from '../common/CardSelect';

const InclinationForm = () => {
  const { values } = useFormikContext();

  return (
    <>
      {values.goal === 'career' && (
        <FormGroup>
          <CardSelect
            value="creative"
            name="inclination"
            title="I'm creatively inclined"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="analytical"
            name="inclination"
            title="I'm analytically inclined"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.goal === 'hobby' && (
        <FormGroup>
          <CardSelect
            value="active"
            name="inclination"
            title="I like to be active"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="inactive"
            name="inclination"
            title="I prefer to work with my mind"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
    </>
  );
};

export default InclinationForm;
