import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';
import Lottie from 'react-lottie';
import { useFormikContext } from 'formik';
import axios from 'axios';
import animationData from './lottie/celebration.json';
import { AuthWizardContext } from '../../context/Context';

const Success = () => {
  const { setStep } = useContext(AuthWizardContext);
  const { resetForm, values } = useFormikContext();
  const [hobby, setHobby] = useState(null);

  useEffect(() => {
    axios.get('/api/hobbies', { params: values })
      .then(setHobby);
  }, [values]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const emptyData = () => {
    setStep(1);
    resetForm();
  };

  if (!hobby) return '';

  return (
    <>
      <Row>
        <Col className="text-center">
          <div className="wizard-lottie-wrapper">
            <div className="wizard-lottie mx-auto">
              <Lottie options={defaultOptions} />
            </div>
          </div>
          <h4 className="mb-1">We found you a hobby!</h4>
          <p className="fs-0">
            We recommend you try {hobby.name}. Get started with this online video
            course: <a href={hobby.courses[0].url}>{hobby.courses[0].name}</a>
          </p>
          <Button color="primary" className="px-5 my-3 text-white" onClick={emptyData}>
            Start Over
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Success;
