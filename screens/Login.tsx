import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { styles, Colors } from '../components/styles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { Formik } from 'formik';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { loginUser } from '../services/api'

type MessageType = 'FAILED' | 'SUCCESS';

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<MessageType>('FAILED');

  const messageColors: Record<MessageType, string> = {
    SUCCESS: Colors.green,
    FAILED: Colors.red,
  };

  const handleMessage = (msg: string, type: MessageType = 'FAILED') => {
    setMessage(msg);
    setMessageType(type);
  };

const handleLogin = async (credentials, setSubmitting) => {
  try {
    const { success, message, user } = await loginUser(credentials);
    if (!success) {
      handleMessage(message, 'FAILED');
    } else {
      handleMessage(message, 'SUCCESS');
      navigation.navigate('Welcome', user); 
    }
  } catch (err: any) {
    handleMessage(err.message || 'An error occurred', 'FAILED');
  } finally {
    setSubmitting(false);
  }
};

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={20} style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.innerContainer}>
          <Image style={styles.pageLogo} source={require('../assets/adaptive-icon.png')} />
          <Text style={styles.pageTitle}>Flower Crib</Text>
          <Text style={styles.subTitle}>Account Login</Text>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email === '' || values.password === '') {
                handleMessage('Please fill all the fields.');
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting); // aqui dentro já cuida da navegação
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, isSubmitting, values }) => (
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

                <Text style={[styles.msgBox, { color: messageColors[messageType] }]}>{message}</Text>

                {!isSubmitting ? (
                  <CustomButton title="Login" onPress={handleSubmit} />
                ) : (
                  <ActivityIndicator size="large" color={Colors.primary} />
                )}

                <View style={styles.line}></View>

                <CustomButton
                  title="Sign in with Google"
                  google
                  icon={<Ionicons name="logo-google" size={25} color={Colors.primary} />}
                  onPress={handleSubmit}
                />

                <View style={styles.extraView}>
                  <Text style={styles.extraText}>Don't have an account already? </Text>
                  <View style={styles.textLink}>
                    <Text style={styles.textLinkContent} onPress={() => navigation.navigate('Signup')}>
                      Signup
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
