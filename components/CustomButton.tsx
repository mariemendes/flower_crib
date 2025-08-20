import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import { styles } from "./styles"; // usa o styles que já tem Colors

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  google?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  google = false,
  icon,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        google && styles.googleButton,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
    {icon && <>{icon}</>}
      <Text
        style={[
          styles.buttonText,
          google && styles.googleText,
          textStyle
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
