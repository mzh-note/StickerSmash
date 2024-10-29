import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'expo-router';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href='/' style={styles.button}>go to home screen</Link>
      <Link href='/mine' style={styles.button}>去设置</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 24,
  },
  text: {
    color: '#000',
  },
  button: {
    textDecorationLine: 'underline',
    color: 'orange',
    fontSize: 14,
    paddingTop: 15,
  }
})
