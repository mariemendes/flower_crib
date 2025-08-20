import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../components/styles';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from "expo-secure-store";

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
              <CustomButton
                title="Logout"
                onPress={async () => {
                  await SecureStore.deleteItemAsync("user"); // limpa storage
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "Login" }],
                  });
                }}
              />

            </View>
        </View>
      </View>
    </>
  );
};

export default Welcome;
