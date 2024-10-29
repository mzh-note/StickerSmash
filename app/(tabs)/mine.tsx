import {StyleSheet, Text, View} from 'react-native';

export default function Mine () {
  return (
    <>
      <View style={styles.container}>
        <Text>个人中心</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 24,
    backgroundColor: '#f5c897',
  }
})
