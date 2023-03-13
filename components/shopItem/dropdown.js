import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const options = ['Size: M', 'XL', 'XL', 'XL'];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={options}
        onSelect={(value) => handleOptionSelect(value)}
        defaultValue={selectedOption}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.dropdownRow}
        rowTextStyle={styles.dropdownRowText}
        // renderDropdownIcon={true}
        dropdownIconPosition={'right'}
        dropdownIconStyle={styles.dropdownIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({


  dropdownButton: {
    backgroundColor: '#D9D9D9',
    width: 90,
    height: 35
  },
  dropdownButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    width: 150
  },
  dropdownRowText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dropdownIcon: {
    fontSize: 16,
    color: 'black',
  },
  label: {
    color: 'black'
  }
});

export default Dropdown;
