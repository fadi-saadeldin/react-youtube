import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

const embedResponsive = (props) => {
  const rootClass = classNames("embedResponsive", "embedResponsive_16by9");

  return (
    <div className={rootClass}>
      <iframe
        className="embedResponsive__item"
        src={props.url}
      />
    </div>
  )
};

embedResponsive.propTypes = {
  url: PropTypes.string
};

embedResponsive.defaultProps = {
  url: null
};

export default embedResponsive;
