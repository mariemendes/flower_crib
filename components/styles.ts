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
  scrollContainer: {
    flex: 1,
    width: '100%',
    // alignItems: 'center', 
    paddingBottom: 40 
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
    // padding: 15,
    backgroundColor: Colors.brand,
    // minWidth: 250,
    justifyContent: 'center',
    borderRadius: 5,
    height: 60,
    marginVertical: 5,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: Colors.green,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
  },
  googleText: {
    paddingLeft: 5,
  },
  msgBox: {
    textAlign: 'center',
    fontSize: 13,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor:Colors.darkLight,
    marginVertical: 10,
  },
  extraView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  extraText: {
    justifyContent: 'center',
    alignContent: 'center',
    color: Colors.tertiary,
    fontSize: 15,
  },
  textLink: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLinkContent: {
    color: Colors.brand,
    fontSize: 15
  },
  welcomeContainer: {
    padding: 25,
    paddingTop: 10,
    justifyContent: 'center',
    width: '100%',
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 'auto',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.secondary,
    marginBottom: 10,
    marginTop: 10
  },
  welcomeImage: {
    height: '50%',
    minWidth: '100%'
  },
  pageTitleWelcome: {
    fontSize: 35
  },
  pageSubTitleWelcome: {
    marginBottom: 5,
    fontWeight: 'normal'
  }
});
