import React, { useState } from 'react';
import { View, TouchableOpacity, Platform, Modal, Button } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import CustomTextInput from './CustomTextInput';
import { Colors } from '../components/styles';

type DatePickerInputProps = {
  label: string;
  icon: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
};

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  icon,
  value,
  onChange,
  onBlur,
  placeholder = 'YYYY-MM-DD',
}) => {
  const [showPicker, setShowPicker] = useState(false);

  // Data inicial
    const [internalDate, setInternalDate] = useState<Date>(
      value ? new Date(value) : new Date(2000, 0, 1)
    );

    const handleDateChange = (_event: DateTimePickerEvent, selectedDate?: Date) => {
      if (Platform.OS === 'android') {
        setShowPicker(false);
      }
      if (selectedDate) {
        setInternalDate(selectedDate); // ✅ atualiza o estado interno
        const formattedDate = selectedDate.toISOString().split('T')[0];
        onChange(formattedDate); // envia para o parent
      }
    };


  return (
    <View>
      {/* Campo falso só para exibir valor */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => setShowPicker(true)}>
        <CustomTextInput
          label={label}
          icon={icon as any}
          value={value}
          editable={false}
          placeholder={placeholder}
          placeholderTextColor={Colors.darkLight}
          onBlur={() => onBlur?.()}
          pointerEvents="none"
        />
      </TouchableOpacity>

      {/* Android: modal nativo */}
      {showPicker && Platform.OS === 'android' && (
        <DateTimePicker
          value={internalDate}
          mode="date"
          display="default"
          maximumDate={new Date()}
          onChange={handleDateChange}
        />
      )}

      {/* iOS: modal custom */}
      {showPicker && Platform.OS === 'ios' && (
        <Modal transparent animationType="slide">
          <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <View style={{ backgroundColor: 'white' }}>
              <DateTimePicker
                value={internalDate}
                mode="date"
                display="spinner"
                maximumDate={new Date()}
                onChange={handleDateChange}
              />
              <Button title="Done" onPress={() => setShowPicker(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default DatePickerInput;
