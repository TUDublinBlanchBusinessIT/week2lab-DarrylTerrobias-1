import {View, TextView, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paragraph: {
    margin:24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



export default function App(){

  return(
    <view>
      <Text style={styles.paragraph}>Hello,World</Text>
    </view>
  )
};
