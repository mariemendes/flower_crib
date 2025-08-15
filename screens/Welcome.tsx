import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../components/styles';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';

const Welcome = ({navigation}) => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.innerContainer}>
        <Image style={styles.welcomeImage} source={require('../assets/adaptive-icon.png')} />
        <Text style={[styles.pageTitle, styles.pageTitleWelcome]}>Welcome! Buddy</Text>
        <Text style={[styles.subTitle, styles.pageSubTitleWelcome]}>Name Name</Text>
        <Text style={[styles.subTitle, styles.pageSubTitleWelcome]}>email@teste.com</Text>
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
