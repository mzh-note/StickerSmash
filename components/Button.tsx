import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

type Props = {
  label: string
  theme?: string
}

export default function Button({label, theme}: Props) {
  if (theme) {
    return (
      <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}]}>
        <Pressable
          onPress={() => console.log('this is theme button')}
          style={[styles.button, {backgroundColor: '#fac'}]}>
          <FontAwesome name='picture-o' size={18} color='#25292e' style={styles.buttonIcon}/>
          <Text style={[styles.buttonLabel, {color: '#25292e'}]}>{label}</Text>
        </Pressable>
      </View>
    )
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => console.log(label)}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#000',
    fontSize: 15
  },
  buttonIcon: {
    paddingRight: 15,
  }
})
