const sampleTestData = [
  {
    name: 'Input',
    samples: [
      {
        name: 'Zenkaku characters (2 byte):',
        data: 'ａｂｃｄ０１２３',
      },
      {
        name: 'Special characters:',
        data: '!@#$%^&*(){}-_+=:";/?.,<>|',
      },
      {
        name: 'Hiragana characters:',
        data: 'ぁあぃいぅうぇえぉお',
      },
      {
        name: ' Katakana characters:',
        data: 'ァアィイゥウェエォオ',
      },
    ],
  },
  {
    name: 'Email',
    samples: [
      {
        name: 'Invalid',
        data: 'tester@devit | tester | #@%^%#$@#$@#.com | @example.com | Joe Smith <email@example.com> | email.example.com | あいうえお@example.com | email@111.222.333.44444',
      },
    ],
  },
];

export default sampleTestData;
