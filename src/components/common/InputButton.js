import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputButton = ({
  value,
    onClick,
    iconClass
}) => {
    return (
        <div className="input-group">
            <button
                type="button"
                onClick={onClick}
                className={iconClass}
            >{value}
            </button>

        </div>
    );
};

export { InputButton };




