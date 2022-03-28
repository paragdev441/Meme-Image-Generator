import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addFontStyles, addDimensions, addColor } from '../../../redux/actions';

class SelectOptions extends React.Component {
  handleSelectedFontOption = ({ target }) => {
    const { optionKey } = this.props;
    this.props.addFontStyles({
      [optionKey]: target.value,
    });
  };

  render() {
    const { optionType, optionKey, label, options, memeFont } = this.props;
    return (
      <div className="options">
        <b className="option-label">{label}</b>
        <Form.Select
          aria-label="Default select example"
          onChange={this.handleSelectedFontOption}
          value={memeFont[optionType][optionKey]}
        >
          <option selected disabled>
            Select the option
          </option>
          {options?.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Form.Select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { memeFont } = state;
  return { memeFont };
};

export default connect(mapStateToProps, {
  addFontStyles,
  addDimensions,
  addColor,
})(SelectOptions);
