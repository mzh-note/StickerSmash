import {Image, type ImageSource} from 'expo-image';
import {StyleSheet} from 'react-native';

type Props = {
  imageSource: ImageSource;
}

export default function ImageViewer({ imageSource}: Props) {
  return <Image source={imageSource} style={styles.image}/>
}

const styles = StyleSheet.create({
  image: {
    width: '90%',
    marginLeft: '5%',
    height: 440,
    marginRight: '5%',
    marginTop: '10%',
    borderRadius: 18,
  }
})
