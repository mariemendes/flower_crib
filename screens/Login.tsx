import React, { useState, ComponentProps } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles, Colors } from '../components/styles';


//formik
import { Formik } from 'formik';

//icons
import Ionicons from '@expo/vector-icons/Ionicons';


// types
type IoniconName = ComponentProps<typeof Ionicons>['name'];

type MyTextInputBaseProps = {
  label: string;
  icon: IoniconName;
  [x: string]: any;
};

type MyTextInputPasswordProps = MyTextInputBaseProps & {
  isPassword: true;
  hidePassword: boolean;
  setHidePassword: (value: boolean) => void;
};

type MyTextInputNormalProps = MyTextInputBaseProps & {
  isPassword?: false;
  hidePassword?: never;
  setHidePassword?: never;
};

type MyTextInputProps = MyTextInputPasswordProps | MyTextInputNormalProps;

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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formArea}>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="test@test.com"
                placeholderTextColor={Colors.darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
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
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}: MyTextInputProps) => {
  return (
    <View>
      <View style={styles.leftIcon}>
        <Ionicons name={icon as any} size={30} color={Colors.brand} />
      </View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.textInput} autoCapitalize="none" {...props} />
      {isPassword && setHidePassword && hidePassword !== undefined && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={() => setHidePassword(!hidePassword)}
          activeOpacity={0.7}
        >
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={Colors.darkLight} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Login;
