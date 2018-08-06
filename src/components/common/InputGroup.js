import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  value,
    onClick,
    iconClass
}) => {
    return (
        <div className="input-group ml-2 ">
            <button
                type="button"
                onClick={onClick}
                className={iconClass}
            >{value}
            </button>

        </div>
    );
};

export { InputGroup };
