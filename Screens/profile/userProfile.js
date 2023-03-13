import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MainHeading from '../../components/mainHeading';


const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('gender');
  const [imageUri, setImageUri] = useState('../../img/imgs.jpeg');
  const [phNumber, setPhnumber] = useState('');
  const [location, setLocation] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('state');

  const handleSaveProfile = () => {
    // Handle profile saving logic here
  };

  const handleSelectImage = () => {
    // Handle image selection logic here
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <MainHeading text="Profile" />
      <View style={styles.container}>

        <TouchableOpacity onPress={handleSelectImage}>
          {imageUri ? (
            <Image source={require('../../img/imgs.jpeg')} style={styles.image} />
          ) : (
            <Text style={styles.addImageText}>Add Image</Text>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phNumber}
          onChangeText={setPhnumber}
          placeholderTextColor="gray"
        />


        <Picker
          dropdownIconColor={'gray'}
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Gender" value="gender" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>


        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.input}
          placeholder="Pin Code"
          value={pinCode}
          onChangeText={setPinCode}
          placeholderTextColor="gray"
        />

        <Picker
          dropdownIconColor={'gray'}
          selectedValue={state}
          onValueChange={(itemValue) => setState(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Stae" value="state" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.saveButtonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingBottom: 20
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#F5F4F5'
  },
  picker: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#F5F4F5',
    color: 'gray'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ccc',
    marginTop: 30,
    marginBottom: 10
  },
  addImageText: {
    fontSize: 18,
    color: 'black',
    marginVertical: 20,
  },
  saveButton: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#FFBF23',
    borderWidth: 1
  },
  saveButtonText: {
    textAlign: 'center',
    color: '#FFBF23',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfile;
