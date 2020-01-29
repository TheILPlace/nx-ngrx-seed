module.exports = {
  name: 'login',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
