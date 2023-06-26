const dataRegex = [
  {
    name: '※Email',
    value:
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
    child: [],
  },
  {
    name: '※Password',
    value: '',
    child: [
      {
        name: 'Minimum eight and maximum 20 characters, at least one lowercase letter, one number',
        data: '/(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9@!;#$%&)(-^:,.~*<>?]{8,20}$/',
      },
      {
        name: 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:',
        data: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/',
      },
    ],
  },
  {
    name: '※Link youtube',
    value: '/^(https://)?((www.)?youtube.com|youtu.be)/.+$/',
    child: [],
  },
  {
    name: '※Link twitter',
    value: '/(?:https://)?(?:www.)?twitter.com/(?:(?:w)*#!/)?(?:pages/)?(?:[w-]*/)*([w-]*)/',
    child: [],
  },
  {
    name: '※Only number',
    value:
      '/[\u00C0-\u1EF9a-zA-ZＡ-ｚ０-９ぁ-んァ-ン!-/:-@[-`{-~s,[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B]/g'.toString(),
    child: [],
  },
  {
    name: '※Character Japan',
    value:
      '/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g',
    child: [],
  },
];

export default dataRegex;
