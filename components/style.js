import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: '#fff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand:'#6D28D9',
  green: '#10B981',
  red: '#EF4444',
};

const  {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: ${StatusBarHeight}px;
  background-color: ${primary}
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledTextInput = styled.TextInput.attrs((props) => ({
  autoCapitalize: props.autoCapitalize || 'none',
}))`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  font-size: 16px;
  border-radius: 5px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;


export const StyledInputLabel = styled.Text`
  font-size: 13px;
  color: ${tertiary};
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 5px;
  height: 60px;
  margin-vertical: 5px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;