import React from 'react';
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux';
import { addColor } from '../../../redux/actions';
import styles from '../Settings.module.css';

class ColorPicker extends React.Component {
  chooseColor = color => {
    const { optionKey } = this.props;
    this.props.addColor({
      [optionKey]: color.hex,
    });
  };

  render() {
    const {
      optionType,
      optionKey,
      label,
      displayColorPicker,
      openColorPicker,
      closeColorPicker,
      memeFont,
    } = this.props;
    return (
      <div className="options">
        <b className="option-label">{label}:</b>
        <>
          <div className={styles.swatch} onClick={openColorPicker}>
            <div
              className={styles.color}
              style={{ background: memeFont[optionType][optionKey] }}
            />
          </div>
          {displayColorPicker ? (
            <div className={styles.popover}>
              <div className={styles.cover} onClick={closeColorPicker} />
              <SketchPicker
                color={memeFont[optionType][optionKey]}
                onChange={this.chooseColor}
                presetColors={[
                  'TRANSPARENT',
                  '#D0021B',
                  '#F5A623',
                  '#F8E71C',
                  '#8B572A',
                  '#7ED321',
                  '#417505',
                  '#BD10E0',
                  '#9013FE',
                  '#4A90E2',
                  '#50E3C2',
                  '#B8E986',
                  '#000000',
                  '#4A4A4A',
                  '#9B9B9B',
                  '#FFFFFF',
                ]}
              />
            </div>
          ) : null}
        </>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { memeFont } = state;
  return { memeFont };
};

export default connect(mapStateToProps, { addColor })(ColorPicker);
