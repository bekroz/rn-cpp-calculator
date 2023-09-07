import { useCallback, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { add } from 'react-native-rn-cpp-calculator';
import { NumInputBox } from '../components';
import { useNumInputState } from '../hooks';

export const App = (): JSX.Element => {
  const firstNum = useNumInputState(0);
  const secondNum = useNumInputState(0);
  const [result, setResult] = useState<string>('');

  const displayResult = useCallback(() => {
    const res = add(firstNum.value, secondNum.value);
    setResult(String(res));
    setTimeout(() => {
      setResult('');
    }, 2000);
  }, [firstNum.value, secondNum.value]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <NumInputBox
          autoFocus
          value={firstNum.value}
          onChange={firstNum.onChange}
        />
        <Text style={styles.text}>+</Text>
        <NumInputBox value={secondNum.value} onChange={secondNum.onChange} />
      </View>
      <ResultInfo result={result} onPress={displayResult} />
    </SafeAreaView>
  );
};

const ResultInfo = ({
  result,
  onPress,
}: {
  result: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        width: 300,
        alignItems: 'center',
      }}
    >
      <Text style={styles.text}>
        {result ? `Result: ${result}` : 'Show result'}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 34,
    fontWeight: 'bold',
  },
});
