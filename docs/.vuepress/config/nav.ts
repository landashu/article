// nav 配置, 即上方导航栏

import {NavItem} from "vuepress/config";

export default <Array<NavItem>>[
  {text: '首页', link: '/'},
  {
    text: '语言',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'JAVA',link: '/language/java/base/1/'},
      {text: '仓颉',link: '/language/cj/1/'},
      {text: '设计模式', link: '/language/mode/1/'},
    ],
  },
  {
    text: '框架',
    items: [
      {text: 'Spring', link: '/frame/spring/200/'},
      {text: 'Mybatis', link: '/frame/mybatis/300/' },
      {text: 'Maven', link: '/frame/maven/2300/',},
      {text: 'Git', link: '/frame/git/1/',},
    ],
  },
  {
    text: '中间件',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'Kafka', link: '/kafka/1400/',},
      {text: 'RabbitMQ', link: '/rabbitmq/1/',},
      {text: 'Redis', link: '/redis/1600/',},
      {text: 'Nginx', link: '/nginx/1/',},
      {text: 'Elasticsearch', link: '/es/1800/',},
    ],
  },
  {
    text: '大数据',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'Hadoop', link: '/hadoop/700/',},
      {text: 'ClickHouse', link: '/clickhouse/800/',},
      {text: 'Hbase', link: '/hbase/900/',},
      {text: 'Hive', link: '/hive/1000/',},
      {text: 'Flume', link: '/flume/1100/',},
      {text: 'Flink', link: '/flink/1200/',},
      {text: 'MySQL', link: '/mysql/1300/',},
      {text: 'MongoDB', link: '/mongodb/1800/',},
    ],
  },
  {
    text: '前端',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'VUE3', link: '/vue3/1900/',},
      {text: '微信小程序', link: '/wx/2000/',},
    ],
  },
  {
    text: '运维',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'linux', link: '/linux/2300/',},
      {text: 'Docker', link: '/docker/400/',},
      {text: 'Jenkins', link: '/jenkins/500/',},
      {text: 'Kubernetes', link: '/kubernetes/600/',},
    ],
  },
];
