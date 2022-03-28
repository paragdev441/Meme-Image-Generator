import React from 'react';
import { Dropdown } from 'react-bootstrap';
import RangePicker from './RangePicker';

const DimensionField = () => {
  const [selectedMenuOption, setMenuOption] = React.useState({
    label: 'Dimensions',
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
          Dimensions
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Width', 'width')}
          >
            Width
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => onDropdownMenuItemChange('Height', 'height')}
          >
            Height
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {selectedMenuOption.label !== 'Dimensions' ? (
        <RangePicker
          optionType="dimension"
          optionKey={selectedMenuOption.key}
          label={selectedMenuOption.label}
        />
      ) : null}
    </>
  );
};

export default DimensionField;
