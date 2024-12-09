import {StyleSheet} from 'react-native';
import {color, font} from '@theme/index';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 10,
  },
  nameDetailContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  nameStyle: {
    fontSize: 16,
    color: color.white,
    lineHeight: 21,
  },
  indicatorStyle: {
    marginRight: 10,
  },
  nameDetailContainerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextIcon: {
    marginLeft: 13,
  },
});
