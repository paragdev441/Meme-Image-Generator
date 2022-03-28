import React from 'react';
import { Dropdown } from 'react-bootstrap';
import ColorPicker from './components/ColorPicker';

const ColorField = () => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const [selectedMenuOption, setMenuOption] = React.useState({
    label: 'Color',
    key: '',
  });

  const onDropdownMenuItemChange = (label, key) => {
    setMenuOption({ ...selectedMenuOption, label, key });
  };

  const openColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const closeColorPicker = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="setting-btn"
        >
          Color
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Text', 'text')}
          >
            Text
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Background', 'background')}
          >
            Background
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {selectedMenuOption.label !== 'Color' ? (
        <ColorPicker
          optionType="color"
          optionKey={selectedMenuOption.key}
          label={selectedMenuOption.label}
          displayColorPicker={displayColorPicker}
          openColorPicker={openColorPicker}
          closeColorPicker={closeColorPicker}
        />
      ) : null}
    </>
  );
};

export default ColorField;
