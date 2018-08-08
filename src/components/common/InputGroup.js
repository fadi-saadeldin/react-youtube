import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  defaultValue,
  onKeyPress
}) => {
  return (
    <div className="input-group ml-5 ">
      <input
        className="form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        onKeyPress={onKeyPress}
      />
    
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: 'text'
};

export {InputGroup};
