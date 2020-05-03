import React from 'react';
import { FormGroup } from 'reactstrap';
import { useFormikContext } from 'formik';
import CardSelect from '../common/CardSelect';

const SpecificsForm = () => {
  const { values } = useFormikContext();

  return (
    <>
      {values.inclination === 'creative' && (
        <FormGroup>
          <CardSelect
            value="artsy"
            name="interest"
            title="I'm an artsy person"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notartsy"
            name="interest"
            title="I'm not very artsy"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.inclination === 'analytical' && (
        <FormGroup>
          <CardSelect
            value="techy"
            name="interest"
            title="I like working with computers"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="nottechy"
            name="interest"
            title="I prefer to work with my hands"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.inclination === 'active' && (
        <FormGroup>
          <CardSelect
            value="outdoorsy"
            name="interest"
            title="I like to be active"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="indoorsy"
            name="interest"
            title="I prefer to work with my mind"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.inclination === 'inactive' && (
        <FormGroup>
          <CardSelect
            value="gamer"
            name="interest"
            title="I like playing games"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="nongamer"
            name="interest"
            title="I'm not really a game person"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
    </>
  );
};

export default SpecificsForm;
