// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  // 'GET /api/tables': require('mockjs').mock({
  //   success: true,
  //   data: [{name:'@Name'}],
  // }),
  'GET /api/tables' (req, res) {
    setTimeout(() => {
      res.json(require('mockjs').mock({
        success: true,
        'data|20': [{
          'frameId|+1': 1000,
          'videoName|1': ['冰雪奇缘', '超能陆战队', '美国队长3', '阿凡达', '肖申克的救赎', '教父', '低俗小说', '辛德勒的名单', '盗梦空间', '蝙蝠侠：黑暗骑士', '星球大战', '指环王', '美丽心灵', '当幸福来敲门'],
          addDate: '@now()',
          videoImg: 'http://img.cache.pdawo.com/uploads/20130801/dgep0fyqtpq.jpg',
          startTime: /[1]:[0]{1}[0-5]{1}:[0-5]{1}[0-9]{1}/,
          duration: / [1-2]{1}[0-9]{1}/,
          'adBrand|1': ['丰田', '通用', '大众', '奥迪', '奔驰', '雷克萨斯', '宝马', '凯迪拉克', '沃尔沃', '香奈儿', '可口可乐', '百事可乐', '锤子科技', '益达', '好吃点', 'Intel', '华硕', '苹果', '联想'],
          adName: '@Name',
          'adType|1': ['家具', '汽车', '饮料'],
          adImage: 'http://s.cn.bing.net/th?id=OIP.M74d023afe28e53faa0c0c3d548f757d2o0&w=176&h=110&c=8&rs=1&qlt=90&pid=3.1&rm=2',
          videoSrc: 'http://resource.handsight.com.cn/TVHelp01/video/1477301768422_7247.mp4',
          'status|1': [''],
        }],
      })
    );
    },
  1500);
  },
  'GET /api/categories': require('mockjs').mock({
  success: true,
  data: {
      adType: ['家具', '汽车', '饮料'],
      adName: {
        家具: ['全友', '宜家', '红星美凯龙'],
        汽车: ['丰田', '大众', '奥迪', '通用', '奔驰'],
        饮料: ['可口可乐', '百事可乐', '雪碧', '芬达', '王老吉'],
      },
    },
}),
  'GET /api/posts': require('mockjs').mock({
    success: true,
    'data|12': [{
      'key|+1': 0,
      title: '@Name',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }],
  }),
  // '/api/tables': function (req, res) {
  //   setTimeout(() => {
  //     res.json({
  //       success: true,
  //       data: [{
  //         key: 1,
  //         name: 'Lyn',
  //         age:10,
  //         address: 'sdhsjakdhjka',
  //       }, {
  //         key: 2,
  //         name: 'Lyn',
  //         age:10,
  //         address: 'sdhsjakdhjka',
  //       }],
  //     });
  //   }, 500);
  // },
  '/api/todos' (req, res) {
    setTimeout(() => {
      res.json({
        success: true,
        data: [{
          id: 1,
          text: 'Learn antd',
          isComplete: true,
        }, {
          id: 2,
          text: 'Learn ant-tool',
        }, {
          id: 3,
          text: 'Learn dora',
        }],
      });
    }, 500);
  },
  '/api/users' (req, res) {
    res.json({
      success: true,
      data: [{
        name: 'lyn',
        age: 28,
      }, {
        name: 'Lee',
        age: 30,
      }],
    });
  },

};

//  address:'@county(true)',
//  "age|20-45": 100,
