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
            description="I love listening to and making music more than I like physical art."
            className="mb-3"
          />
          <CardSelect
            value="notmusical"
            name="specific"
            title="I'm not a very musical person; I prefer drawing and painting to singing."
            description="I prefer ."
          />
        </FormGroup>
      )}
      {values.interest === 'notartsy' && (
        <FormGroup>
          <CardSelect
            value="techbased"
            name="specific"
            title="I like working with computers"
            description="The idea of building an app or website interests me."
            className="mb-3"
          />
          <CardSelect
            value="nottechbased"
            name="specific"
            title="I prefer to work with my hands"
            description="I'm not really a computer person. I'd rather write a book than publish a website."
          />
        </FormGroup>
      )}
      {values.interest === 'techy' && (
        <FormGroup>
          <CardSelect
            value="mathematical"
            name="specific"
            title="I like math"
            description="I'm a big math person, and I'm interested in how computers can help solve complex problems."
            className="mb-3"
          />
          <CardSelect
            value="notmathematical"
            name="specific"
            title="I'm not a big math person"
            description="I'm interested in computers, but am not a very computer-oriented person."
          />
        </FormGroup>
      )}
      {values.interest === 'nottechy' && (
        <FormGroup>
          <CardSelect
            value="business"
            name="specific"
            title="I want to learn about business"
            description="If I had the chance, I'd love to start and run a business."
            className="mb-3"
          />
          <CardSelect
            value="notbusiness"
            name="specific"
            title="I'm not really into business"
            description="I'd rather learn about sales and marketing than leadership in a business setting."
          />
        </FormGroup>
      )}
      {values.interest === 'indoorsy' && (
        <FormGroup>
          <CardSelect
            value="exercise"
            name="specific"
            title="I want to get in shape"
            description="QUARANTINE GAINS. QUARANTINE GAINS. QUARANTINE GAINS. QUARANTINE GAINS. QUARANTINE GAINS."
            className="mb-3"
          />
          <CardSelect
            value="notexercise"
            name="specific"
            title="I just wanna have fun"
            description="I'd love to try yoga or Tai Chi rather than lift weights and do squats."
          />
        </FormGroup>
      )}
      {values.interest === 'outdoorsy' && (
        <FormGroup>
          <CardSelect
            value="exercise"
            name="specific"
            title="I want to get in shape"
            description="Running a marathon sounds like a fun time. I want to get outside and stay healthy!"
            className="mb-3"
          />
          <CardSelect
            value="notexercise"
            name="specific"
            title="I just wanna have fun"
            description="I'd rather go to the park and throw a frisbee than ride a bike up a long hill."
          />
        </FormGroup>
      )}
      {values.interest === 'gamer' && (
        <FormGroup>
          <CardSelect
            value="contentcreation"
            name="specific"
            title="I want to learn how to make games"
            description="I've always wondered how my favorite video games were made."
            className="mb-3"
          />
          <CardSelect
            value="notcontentcreation"
            name="specific"
            title="I just want to play"
            description="I want to become a better player by studying strategy and technique."
          />
        </FormGroup>
      )}
      {values.interest === 'notgamer' && (
        <FormGroup>
          <CardSelect
            value="food"
            name="specific"
            title="I'm interested in cooking"
            description="I want to impress my crush with some delicious pancakes!"
            className="mb-3"
          />
          <CardSelect
            value="notfood"
            name="specific"
            title="I'm not really a foodie"
            description="I'm interested in activities like history, knitting and photography."
          />
        </FormGroup>
      )}
    </>
  );
};

export default SpecificsForm;
