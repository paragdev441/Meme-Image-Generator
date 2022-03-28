import React from 'react';
import { Dropdown } from 'react-bootstrap';
import fontProperties from '../../../../assets/json/fontProperties.json';
import SelectOptions from './components/SelectOptions';

const FontField = () => {
  const [selectedMenuOption, setMenuOption] = React.useState({
    label: 'Font',
    key: '',
  });

  const onDropdownMenuItemChange = (label, key) => {
    setMenuOption({ ...selectedMenuOption, label, key });
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="setting-btn"
        >
          Font
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Family', 'family')}
          >
            Family
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Size', 'size')}
          >
            Size
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Weight', 'weight')}
          >
            Weight
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Style', 'style')}
          >
            Style
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {selectedMenuOption.label !== 'Font' ? (
        <SelectOptions
          optionType="font"
          optionKey={selectedMenuOption.key}
          label={selectedMenuOption.label}
          options={fontProperties[selectedMenuOption.key]}
        />
      ) : null}
    </>
  );
};

export default FontField;
