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
            description="I'm a creative person. I'd rather spend my time drawing than doing math."
            className="mb-3"
          />
          <CardSelect
            value="analytical"
            name="inclination"
            title="I'm analytically inclined"
            description="I'm an analytical person. I prefer puzzles and math to music and art."
          />
        </FormGroup>
      )}
      {values.goal === 'hobby' && (
        <FormGroup>
          <CardSelect
            value="active"
            name="inclination"
            title="I like to be active"
            description="I like to move my body, get my heart rate up, and get my blood pumping."
            className="mb-3"
          />
          <CardSelect
            value="notActive"
            name="inclination"
            title="I prefer to work with my mind"
            description="I'm more of a thinker than a mover. I prefer chess to yoga."
          />
        </FormGroup>
      )}
    </>
  );
};

export default InclinationForm;
