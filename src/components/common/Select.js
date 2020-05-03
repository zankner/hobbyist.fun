import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'formik';
import ReactSelect from 'react-select';
import chroma from 'chroma-js';
import _ from 'lodash';

const customStyles = {
  control: (base) => ({
    ...base,
    height: 'calc(1.5em + .625rem + 2px)',
    minHeight: 0,
    padding: 0,
    margin: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 4,
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: 4,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0px 6px',
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    if (!data.color) return styles;
    const color = chroma(data.color);
    return {
      ...styles,
      height: 'calc(1.5em + .625rem + 2px)',
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    if (!data.color) return styles;
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    ...(data.color ? { color: data.color } : {}),
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    ...(data.color ? { color: data.color } : {}),
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

function Select({ options, name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <ReactSelect
          classNamePrefix="react-select"
          options={options}
          styles={customStyles}
          autosize={false}
          value={options ? options.find((option) => option.value === field.value) : ''}
          onChange={(option) => {
            if (Array.isArray(option)) {
              form.setFieldValue(field.name, _.map(option, 'value'));
            } else {
              form.setFieldValue(field.name, option ? option.value : null);
            }
          }}
          onBlur={field.onBlur}
          {...rest}
        />
      )}
    </Field>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
};

export default Select;
