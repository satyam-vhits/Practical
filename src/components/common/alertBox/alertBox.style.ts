import {StyleSheet} from 'react-native';
import font from '@theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backDropped: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 55,
    minHeight: 100,
    borderRadius: 15,
    elevation: 5, // For Android shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    color: '#151515',

    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#505050',

    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    width: '100%',
  },
  buttonStyle: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  deleteButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
  cancelButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
