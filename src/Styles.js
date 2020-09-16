import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backdrop: {
    opacity: 0,
    position: 'absolute',
    top: height,
    bottom: height,
    left: 0,
    right: 0,
  },
  radioOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioOptionButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioOptionButtonMark: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  radioOptionText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default styles;
