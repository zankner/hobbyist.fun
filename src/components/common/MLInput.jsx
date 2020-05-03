/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import classNames from 'classnames';
import { Field } from 'formik';

const MLInput = ({ name, className, placeholder, label }) => (
  <Field name={name} type="select">
    {({ field, meta }) => (
      <InputGroup>
        <InputGroupAddon addonType="prepend">{label}</InputGroupAddon>
        <Field
          name={field.name}
          placeholder={placeholder}
          className={classNames(className, 'form-control',
            { 'is-invalid': meta.error && meta.touched })}
        />
      </InputGroup>
    )}
  </Field>
);

MLInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default MLInput;
