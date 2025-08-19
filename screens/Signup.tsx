import React, { useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { styles, Colors } from '../components/styles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import DatePickerInput from '../components/DatePickerInput';
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signupUser } from '../services/api'; // função da API

type MessageType = 'FAILED' | 'SUCCESS';

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<MessageType>('FAILED');

  const messageColors: Record<MessageType, string> = {
    SUCCESS: Colors.green,
    FAILED: Colors.red,
  };

  const handleMessage = (msg: string, type: MessageType = 'FAILED') => {
    setMessage(msg);
    setMessageType(type);
  };

  const handleSignup = async (values, setSubmitting) => {
    const { fullName, email, password, confirmPassword, dateOfBirth } = values;

    if (password !== confirmPassword) {
      handleMessage('Passwords do not match', 'FAILED');
      setSubmitting(false);
      return;
    }

    try {
      const response = await signupUser({ fullName, email, password, dateOfBirth });

      if (!response.data.success) {
        handleMessage(response.data.message, 'FAILED'); // exibe erro da API, ex: email já cadastrado
      } else {
        handleMessage(response.data.message, 'SUCCESS'); // sucesso
        navigation.navigate('Welcome', response.data.user);
      }
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      handleMessage('An error occurred. Try again.', 'FAILED');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={20} style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}
          keyboardShouldPersistTaps="handled"
        >
          <Image style={styles.pageLogo} source={require('../assets/adaptive-icon.png')} />
          <Text style={styles.pageTitle}>Flower Crib</Text>
          <Text style={styles.subTitle}>Account Signup</Text>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
              dateOfBirth: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              handleSignup(values, setSubmitting);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, isSubmitting }) => (
              <View style={styles.formArea}>
                <CustomTextInput
                  label="Full Name"
                  icon="person"
                  placeholder=""
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
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
                <DatePickerInput
                  label="Date of Birth"
                  icon="calendar"
                  value={values.dateOfBirth}
                  onChange={(val) => setFieldValue('dateOfBirth', val)}
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
                  isPassword
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <CustomTextInput
                  label="Confirm Password"
                  icon="key"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={Colors.darkLight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                {/* Mensagem de erro ou sucesso */}
                {message !== '' && (
                  <Text style={[styles.msgBox, { color: messageColors[messageType] }]}>
                    {message}
                  </Text>
                )}

                {/* Botão de signup ou loading */}
                {!isSubmitting ? (
                  <CustomButton title="Signup" onPress={handleSubmit} />
                ) : (
                  <ActivityIndicator size="large" color={Colors.primary} />
                )}

                <View style={styles.line}></View>
                <View style={styles.extraView}>
                  <Text style={styles.extraText}>Already have an account? </Text>
                  <View style={styles.textLink}>
                    <Text style={styles.textLinkContent} onPress={() => navigation.navigate('Login')}>
                      Login
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
