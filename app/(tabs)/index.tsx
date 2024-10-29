import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';


const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary'/>
        <Button label='Use this photo' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000'
  },
  button: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#f22',
    paddingTop: 15,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
})
