module.exports = {
  // 组件库名称
  name: 'ui-components',
  // 构建配置
  build: {
    site: {
      publicPath: '/ui-components/'
    }
  },
  // 文档站点配置
  site: {
    // 标题
    title: 'UI Components',
    // 图标
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    // 描述
    description: '示例组件库',
    // 导航
    links: [
      {
        logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/youzan/vant-demo'
      }
    ],
    // 左侧导航
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍'
          },
          {
            path: 'quickstart',
            title: '快速上手'
          }
        ]
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮'
          },
          {
            path: 'col',
            title: 'Layout 布局'
          }
        ]
      },
      {
        title: '展示组件',
        items: [
          {
            path: 'my-cell',
            title: 'MyCell 单元格'
          }
        ]
      }
    ]
  }
};
