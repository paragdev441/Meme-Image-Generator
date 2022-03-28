import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { addMemeText } from '../../redux/actions';
import styles from './ImageContainer.module.css';

class ImageContainer extends React.Component {
  state = {
    value: '',
  };

  autoGrow = e => {
    const { target } = e;
    if (
      target.scrollHeight > target.clientHeight &&
      target.scrollHeight < 480
    ) {
      target.style.height = target.scrollHeight + 'px';
    }
  };

  handleChange = ({ target }) => {
    this.props.addMemeText(target.value);
  };

  render() {
    const { memeImage, memeText, memeFont } = this.props;
    return (
      <div
        className={styles.box}
        style={{
          backgroundImage: `url(${memeImage.imageURL})`,
        }}
      >
        <Draggable bounds="parent" axis="both">
          <textarea
            class="noscrollbars"
            style={{
              fontFamily: memeFont.font.family,
              fontSize: memeFont.font.size,
              fontWeight: memeFont.font.weight,
              fontStyle: memeFont.font.style,
              width: memeFont.dimension.width,
              height: memeFont.dimension.height,
              color: memeFont.color.text,
              backgroundColor: memeFont.color.background,
            }}
            onKeyUp={this.autoGrow}
            placeholder="Text"
            value={memeText.text}
            onChange={this.handleChange}
          />
        </Draggable>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { memeImage, memeText, memeFont } = state;
  return { memeImage, memeText, memeFont };
};

export default connect(mapStateToProps, { addMemeText })(ImageContainer);
