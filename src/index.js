import BaseInput from './BaseInput';

module.exports = {
  get FormContext() {
    return require('./FormContext').default;
  },
  get Form() {
    return require('./Form').default;
  },
  get BaseInput() {
    return require('./BaseInput').default;
  },
  get Input() {
    return require('./Input').default;
  },
  get Submit() {
    return require('./Submit').default;
  },
  get FormScrollView() {
    return require('./FormScrollView').default;
  },
};
