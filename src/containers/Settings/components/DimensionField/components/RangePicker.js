import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addDimensions } from '../../../../../redux/actions';

const dimesnions = {
  width: { min: 41, max: 300 },
  height: { min: 36, max: 300 },
};

class RangePicker extends React.Component {
  handleSelectedDimensionOption = ({ target }) => {
    const { optionKey } = this.props;
    this.props.addDimensions({
      [optionKey]: Number(target.value),
    });
  };

  render() {
    const { optionType, optionKey, label, memeFont } = this.props;
    return (
      <div className="options">
        <b className="option-label">{label}:</b>
        {optionKey === 'width' ? (
          <Form.Control
            className="slider"
            type="range"
            name="width"
            min={dimesnions.width.min}
            max={dimesnions.width.max}
            value={memeFont[optionType][optionKey]}
            onChange={this.handleSelectedDimensionOption}
          />
        ) : null}
        {optionKey === 'height' ? (
          <Form.Control
            className="slider"
            type="range"
            name="height"
            min={dimesnions.height.min}
            max={dimesnions.height.max}
            value={memeFont[optionType][optionKey]}
            onChange={this.handleSelectedDimensionOption}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { memeFont } = state;
  return { memeFont };
};

export default connect(mapStateToProps, {
  addDimensions,
})(RangePicker);
