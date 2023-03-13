import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MainHeading from '../components/mainHeading';
import UserProfile from './profile/userProfile';
import Setting from './profile/setting';
import Account from './profile/account';
import Address from './profile/address';
import HelpCentre from './profile/helpcentre';


const Profile = () => {
    return(
      <Setting />
    )
};

const styles = StyleSheet.create({});

export default Profile;
