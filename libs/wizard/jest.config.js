module.exports = {
  name: 'wizard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/wizard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
