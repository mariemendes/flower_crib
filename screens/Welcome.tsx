import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../components/styles';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

const Welcome = ({ navigation, route }) => {
  const { fullName, email } = route.params;

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.innerContainer}>
        <Image style={styles.welcomeImage} source={require('../assets/adaptive-icon.png')} />
        <Text style={[styles.pageTitle, styles.pageTitleWelcome]}>Welcome!</Text>
        <Text style={[styles.subTitle, styles.pageSubTitleWelcome]}>{fullName}</Text>
        <Text style={[styles.subTitle, styles.pageSubTitleWelcome]}>{email}</Text>
        <View style={styles.welcomeContainer}>
          <View style={styles.formArea}>
          <Image style={styles.avatar} resizeMode="cover" source={require('../assets/adaptive-icon.png')} />
            <View style={styles.line}></View>
              <CustomButton title="Logout" onPress={() => navigation.navigate("Login")} />
            </View>
        </View>
      </View>
    </>
  );
};

export default Welcome;
