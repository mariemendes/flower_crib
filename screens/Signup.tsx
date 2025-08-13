import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles, Colors } from '../components/styles';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import DatePickerInput from '../components/DatePickerInput';
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
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
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
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
                  // onBlur={() => handleBlur('dateOfBirth')()} // <-- corrige tipagem
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
              <CustomTextInput
                label="Confirm Password"
                icon="key"
                placeholder="* * * * * * * *"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <Text style={styles.msgBox}>...</Text>
              <CustomButton title="Signup" onPress={handleSubmit} />
              <View style={styles.line}></View>
              <View style={styles.extraView}>
                <Text style={styles.extraText}>Already have an account? </Text>
                <View style={styles.textLink}>
                  <Text style={styles.textLinkContent}>Login</Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Signup;
