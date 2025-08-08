// styles.ts
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const Colors = {
  primary: '#fff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
};

const StatusBarHeight = Constants.statusBarHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBarHeight + 40,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: Colors.primary,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  pageLogo: {
    width: 250,
    height: 200,
  },
  pageTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.brand,
    padding: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: Colors.tertiary,
  },
  formArea: {
    width: '100%',
  },
  textInput: {
    backgroundColor: Colors.secondary,
    padding: 15,
    paddingLeft: 55,
    paddingRight: 55,
    fontSize: 16,
    borderRadius: 5,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: Colors.tertiary,
  },
  inputLabel: {
    fontSize: 13,
    color: Colors.tertiary,
  },
  leftIcon: {
    position: 'absolute',
    left: 15,
    top: 35,
    zIndex: 1,
  },
  rightIcon: {
    position: 'absolute',
    right: 15,
    top: 35,
    zIndex: 1,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.brand,
    justifyContent: 'center',
    borderRadius: 5,
    height: 60,
    marginVertical: 5,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
  },
});
