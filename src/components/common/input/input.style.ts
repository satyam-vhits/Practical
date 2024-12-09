import {StyleSheet} from 'react-native';
import {color, font} from '@theme/index';

const style = StyleSheet.create({
  searchIcon: {marginLeft: 16},
  mainContainer: {
    marginBottom: 16,
  },
  container: {
    height: 55,
    borderRadius: 10,
    borderColor: color.silver,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: color.white,
    flexDirection: 'row',
  },
  input: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: color.black,
    flex: 1,
  },
  rightIcon: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 20,
  },
  error: {
    fontSize: 12,
    color: color.danger,

    marginLeft: 10,
    marginTop: 5,
  },
  labelStyle: {
    fontSize: 14,
    color: color.black,
    marginBottom: 7,
    marginTop: 10,
  },
  hidePasswordIcon: {
    justifyContent: 'center',
    paddingRight: 16,
  },
});

export default style;
