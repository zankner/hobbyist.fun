import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Nav, NavItem, NavLink } from 'reactstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Formik } from 'formik';
import GoalForm from './GoalForm';
import InterestForm from './InterestForm';
import InclinationForm from './InclinationForm';
import Success from './Success';
import AppContext, { AuthWizardContext } from '../../context/Context';
import ButtonIcon from '../common/ButtonIcon';
import SpecificsForm from './SpecificsForm';

const HobbyForm = () => {
  const { isRTL } = useContext(AppContext);
  const { user, setUser, step, setStep } = useContext(AuthWizardContext);

  const handleSubmit = (data) => {
    setUser({ ...user, ...data });
    setStep(step + 1);
  };

  const handleBackStep = (targetStep) => {
    if (targetStep < step) {
      setStep(targetStep);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          goal: null,
          inclination: null,
          interest: null,
          specific: null,
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Card tag={Form} className="theme-wizard">
            <CardHeader className="bg-light">
              <Nav className="justify-content-center">
                <NavItem>
                  <NavLink
                    className={classNames('font-weight-semi-bold', {
                      'done cursor-pointer': step > 1,
                      active: step === 1,
                    })}
                    onClick={() => handleBackStep(1)}
                  >
                    <span className="nav-item-circle-parent">
                      <span className="nav-item-circle">
                        <FontAwesomeIcon icon="bullseye" />
                      </span>
                    </span>
                    <span className="d-none d-md-block mt-1 fs--1">Goals</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classNames('font-weight-semi-bold', {
                      'done  cursor-pointer': step > 2,
                      active: step === 2,
                    })}
                    onClick={() => handleBackStep(2)}
                  >
                    <span className="nav-item-circle-parent">
                      <span className="nav-item-circle">
                        <FontAwesomeIcon icon="meteor" />
                      </span>
                    </span>
                    <span className="d-none d-md-block mt-1 fs--1">Inclinations</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classNames('font-weight-semi-bold', {
                      'done  cursor-pointer': step > 3,
                      active: step === 3,
                    })}
                    onClick={() => handleBackStep(3)}
                  >
                    <span className="nav-item-circle-parent">
                      <span className="nav-item-circle">
                        <FontAwesomeIcon icon="user" />
                      </span>
                    </span>
                    <span className="d-none d-md-block mt-1 fs--1">Interests</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classNames('font-weight-semi-bold', {
                      'done  cursor-pointer': step > 4,
                      active: step === 4,
                    })}
                    onClick={() => handleBackStep(4)}
                  >
                    <span className="nav-item-circle-parent">
                      <span className="nav-item-circle">
                        <FontAwesomeIcon icon="search" />
                      </span>
                    </span>
                    <span className="d-none d-md-block mt-1 fs--1">Specifics</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classNames('font-weight-semi-bold', {
                      'done  cursor-pointer': step > 4,
                    })}
                  >
                    <span className="nav-item-circle-parent">
                      <span className="nav-item-circle">
                        <FontAwesomeIcon icon="thumbs-up" />
                      </span>
                    </span>
                    <span className="d-none d-md-block mt-1 fs--1">Done</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody className="fs--1 font-weight-normal px-md-6 pt-4 pb-3">
              {step === 1 && <GoalForm />}
              {step === 2 && <InclinationForm />}
              {step === 3 && <InterestForm />}
              {step === 4 && <SpecificsForm />}
              {step === 5 && <Success />}
            </CardBody>
            <CardFooter
              className={classNames('px-md-6 bg-light', { 'd-none': step === 5, ' d-flex': step < 5 })}
            >
              <ButtonIcon
                color="link"
                icon={isRTL ? 'chevron-right' : 'chevron-left'}
                iconAlign="left"
                transform="down-1 shrink-4"
                className={classNames('px-0 font-weight-semi-bold', { 'd-none': step === 1 })}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Prev
              </ButtonIcon>

              <ButtonIcon
                color="primary"
                className="ml-auto px-5"
                type="submit"
                icon={isRTL ? 'chevron-left' : 'chevron-right'}
                iconAlign="right"
                transform="down-1 shrink-4"
              >
                Next
              </ButtonIcon>
            </CardFooter>
          </Card>
        )}
      </Formik>
    </>
  );
};

export default HobbyForm;
