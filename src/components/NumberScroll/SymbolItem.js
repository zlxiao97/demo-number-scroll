import React from 'react'
import PropTypes from "prop-types";

const SymbolItem = (props) => {
  const { value } = props;

  return (
    <div className="number-scroll__stage">
      <div className="number-scroll__gimmick ">{value}</div>
    </div>
  );
};

SymbolItem.propTypes = {
  value: PropTypes.string
};

SymbolItem.defaultProps = {
  value: ""
};

export default SymbolItem;
