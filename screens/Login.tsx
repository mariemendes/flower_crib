import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles, Colors } from '../components/styles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { Formik } from 'formik';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.innerContainer}>
        <Image style={styles.pageLogo} source={require('../assets/adaptive-icon.png')} />
        <Text style={styles.pageTitle}>Flower Crib</Text>
        <Text style={styles.subTitle}>Account Login</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formArea}>
              <CustomTextInput
                label="Email Address"
                icon="mail"
                placeholder="test@test.com"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <CustomTextInput
                label="Password"
                icon="key"
                placeholder="* * * * * * * *"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={styles.msgBox}>...</Text>
              <CustomButton title="Login" onPress={handleSubmit} />
              <View style={styles.line}></View>
              <CustomButton
                title="Sign in with Google"
                google
                icon={<Ionicons name={'logo-google'} size={25} color={Colors.primary} />}
                onPress={handleSubmit}
              />
              <View style={styles.extraView}>
                <Text style={styles.extraText}>Don't have an account already? </Text>
                <View style={styles.textLink}>
                  <Text style={styles.textLinkContent}>Signup</Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
