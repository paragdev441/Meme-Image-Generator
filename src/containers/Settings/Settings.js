import React from 'react';
import domtoimage from 'dom-to-image';
import { Accordion, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addRandomMeme, addMemeText } from '../../redux/actions';
import FontField from './components/FontField/FontField.lazy';
import DimensionField from './components/DimensionField/DimensionField.lazy';
import ColorField from './components/ColorField/ColorField.lazy';
import MemeImages from '../../api/MemeImages';

class Settings extends React.Component {
  handleMemeText = ({ target }) => {
    this.props.addMemeText(target.value);
  };

  generateImage = () => {
    const imageContainer = document.getElementById('image-placeholder');
    domtoimage.toBlob(imageContainer).then(function (blob) {
      const imageURL = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'meme-image';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  generateRandomImage = async () => {
    try {
      const { data: memesImages } = await MemeImages.get('/get_memes');
      const randomMemeIndex = Math.floor(
        Math.random() * memesImages.data.memes.length
      );
      this.props.addRandomMeme(memesImages.data.memes[randomMemeIndex].url);
    } catch (error) {
      console.log('generateRandomImage:', error);
    }
  };

  render() {
    const { memeText } = this.props;
    return (
      <div className="settings">
        <h3>Settings</h3>
        <br />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Text Settings</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <b>Meme Text</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Text"
                    value={memeText.text}
                    onChange={this.handleMemeText}
                  />
                </Form.Group>
                <div className="font-options">
                  <FontField />
                </div>
                <div className="font-options">
                  <DimensionField />
                </div>
                <div className="font-options">
                  <ColorField />
                </div>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>File Settings</Accordion.Header>
            <Accordion.Body>
              <div className="file-container">
                <Button
                  variant="primary"
                  type="button"
                  className="setting-btn"
                  onClick={this.generateRandomImage}
                >
                  Upload Random Meme Image
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  className="setting-btn"
                  onClick={this.generateImage}
                >
                  Export
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { memeText } = state;
  return { memeText };
};

export default connect(mapStateToProps, { addMemeText, addRandomMeme })(
  Settings
);
