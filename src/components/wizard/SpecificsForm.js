import React from 'react';
import { FormGroup } from 'reactstrap';
import { useFormikContext } from 'formik';
import CardSelect from '../common/CardSelect';

const SpecificsForm = () => {
  const { values } = useFormikContext();

  return (
    <>
      {values.interest === 'artsy' && (
        <FormGroup>
          <CardSelect
            value="musical"
            name="specific"
            title="I'm a musical person"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notmusical"
            name="specific"
            title="I'm not a very musical person"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.interest === 'notartsy' && (
        <FormGroup>
          <CardSelect
            value="techbased"
            name="specific"
            title="I like working with computers"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="nottechbased"
            name="specific"
            title="I prefer to work with my hands"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.interest === 'techy' && (
        <FormGroup>
          <CardSelect
            value="mathematical"
            name="specific"
            title="I like math"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notmathematical"
            name="specific"
            title="I'm not a big math person"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.interest === 'nottechy' && (
        <FormGroup>
          <CardSelect
            value="business"
            name="specific"
            title="I want to learn about business"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notbusiness"
            name="specific"
            title="I'm not really into business"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.interest === 'indoorsy' && (
        <FormGroup>
          <CardSelect
            value="exercise"
            name="specific"
            title="I want to get in shape"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notexercise"
            name="specific"
            title="I just wanna have fun"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.interest === 'outdoorsy' && (
        <FormGroup>
          <CardSelect
            value="exercise"
            name="specific"
            title="I want to get in shape"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notexercise"
            name="specific"
            title="I just wanna have fun"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.interest === 'gamer' && (
        <FormGroup>
          <CardSelect
            value="contentcreation"
            name="specific"
            title="I want to learn how to make games"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notcontentcreation"
            name="specific"
            title="I just want to play"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
      {values.interest === 'notgamer' && (
        <FormGroup>
          <CardSelect
            value="food"
            name="specific"
            title="I'm interested in cooking"
            description="Learn a skill to further your career, like coding, marketing, or music production."
            className="mb-3"
          />
          <CardSelect
            value="notfood"
            name="specific"
            title="I'm not really a foodie"
            description="Learn a skill to further your career, like coding, marketing, or music production."
          />
        </FormGroup>
      )}
    </>
  );
};

export default SpecificsForm;
