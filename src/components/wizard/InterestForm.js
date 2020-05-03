import React from 'react';
import { FormGroup } from 'reactstrap';
import { useFormikContext } from 'formik';
import CardSelect from '../common/CardSelect';

const InterestForm = () => {
  const { values } = useFormikContext();

  return (
    <>
      {values.inclination === 'creative' && (
        <FormGroup>
          <CardSelect
            value="artsy"
            name="interest"
            title="I'm an artsy person"
            description="I like photography, music, and painting over coding and writing."
            className="mb-3"
          />
          <CardSelect
            value="notartsy"
            name="interest"
            title="I'm not very artsy"
            description="I'd much rather build an app than paint a masterpiece."
          />
        </FormGroup>
      )}
      {values.inclination === 'analytical' && (
        <FormGroup>
          <CardSelect
            value="techy"
            name="interest"
            title="I like working with computers"
            description="I want to learn about building apps and designing websites."
            className="mb-3"
          />
          <CardSelect
            value="nottechy"
            name="interest"
            title="I prefer to work with my hands"
            description="I'm not really a computer person; I'd rather play chess than build an app."
          />
        </FormGroup>
      )}
      {values.inclination === 'active' && (
        <FormGroup>
          <CardSelect
            value="outdoorsy"
            name="interest"
            title="I am able to go outside"
            description="I am able and prefer to go outside and get some sunshine and fresh air."
            className="mb-3"
          />
          <CardSelect
            value="indoorsy"
            name="interest"
            title="I'm more of an inside person"
            description="I am either unable or don't want to leave the house right now."
          />
        </FormGroup>
      )}
      {values.inclination === 'inactive' && (
        <FormGroup>
          <CardSelect
            value="gamer"
            name="interest"
            title="I like playing games"
            description="I'm a fan of board games, card games, and video games."
            className="mb-3"
          />
          <CardSelect
            value="nongamer"
            name="interest"
            title="I'm not really a game person"
            description="I don't really want to work out, but I'm not a huge game person either."
          />
        </FormGroup>
      )}
    </>
  );
};

export default InterestForm;
