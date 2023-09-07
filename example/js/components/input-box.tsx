import { useCallback } from 'react';
import { TextInput, View, type TextStyle, type ViewStyle } from 'react-native';

interface NumInputBoxProps {
  value: number;
  autoFocus?: boolean;
  onChange: (num: number) => void;
}

export const NumInputBox: React.FC<NumInputBoxProps> = ({
  value,
  onChange,
  autoFocus,
}) => {
  const memoizedOnChange = useCallback(
    (tx: string) => {
      const num = Number(tx);
      if (isNaN(num)) {
        return;
      }
      onChange(num);
    },
    [onChange]
  );

  return (
    <View style={$container}>
      <TextInput
        autoFocus={autoFocus}
        style={$inputField}
        keyboardType="number-pad"
        maxLength={3}
        onChangeText={memoizedOnChange}
        value={String(value)}
        returnKeyType="next"
        returnKeyLabel="next"
      />
    </View>
  );
};

const $container: ViewStyle = {
  padding: 12,
};

const $inputField: TextStyle = {
  height: 100,
  width: 100,
  borderWidth: 1,
  borderRadius: 20,
  padding: 12,
  backgroundColor: 'white',
  fontSize: 30,
  textAlign: 'center',
  fontWeight: 'bold',
};
