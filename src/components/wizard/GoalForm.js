import React from 'react';
import { FormGroup } from 'reactstrap';
import CardSelect from '../common/CardSelect';

const GoalForm = () => {
  return (
    <>
      <FormGroup>
        <CardSelect
          value="career"
          name="goal"
          title="Learn a career skill"
          description="Learn a skill to further your career, like coding, marketing, or music production."
          className="mb-3"
        />
        <CardSelect
          value="hobby"
          title="Pick up a hobby"
          name="goal"
          description="Learn a skill to further your career, like coding, marketing, or music production."
        />
      </FormGroup>
    </>
  );
};

export default GoalForm;
