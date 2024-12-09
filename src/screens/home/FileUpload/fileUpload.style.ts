import color from '@theme/color';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  uploadText: {
    fontSize: 16,
    fontWeight: '500',
    color: color.black,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  selfieContainer: {
    height: 200,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
