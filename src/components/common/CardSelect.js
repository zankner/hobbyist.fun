/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import classNames from 'classnames';
import { Field } from 'formik';

const CardSelect = ({ title, value, description, name, className }) => (
  <Field name={name} type="select">
    {({ field, form }) => (
      <Card
        style={{ transition: 'border 0.2s', cursor: 'pointer' }}
        className={classNames('border', className,
          { 'border-primary': field.value === value },
          { 'border-white': field.value !== value })}
        onClick={() => form.setFieldValue(name, value)}
      >
        <CardBody>
          <div className="font-weight-bold fs-0 mb-2">{title}</div>
          <div style={{ lineHeight: 1.2 }}>
            <small className="text-muted fs--1">{description}</small>
          </div>
        </CardBody>
      </Card>
    )}
  </Field>
);

CardSelect.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardSelect;
