import { useCallback } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        autoFocus={autoFocus}
        style={styles.inputField}
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

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  inputField: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    backgroundColor: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
