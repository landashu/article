// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: '首页', link: '/' },
  {
    text: 'Java',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'Java', items: [
          {text: 'JVM', link: '/java/jvm/100/'},
          {text: 'JUC',link: '/java/juc/200/'},
          {text: '设计模式',link: '/java/mode/300/'},
          {text: '其他',link: '/java/other/400/'},
      ]},
      {text: 'Spring', items:[
          {text: 'Spring', link: '/spring/spring/200/'},
          {text: 'Spring MVC',link: '/spring/spring-mvc/200/'},
          {text: 'Spring Boot',link: '/spring/spring-boot/200/'},
          {text: 'Spring Cloud',link: '/spring/spring-cloud/200/'},
      ]},
      {text: 'Mybatis', items:[
          {text: 'Mybatis', link: '/mybatis/mybatis/300/'},
          {text: 'Mybatis Plus',link: '/mybatis/mybatis-plus/300/'},
        ]},
      {text: 'Maven', link: '/maven/2300/',},
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
    ],
  },
  {
    text: '数据库',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'MySQL', link: '/mysql/1300/',},
      {text: 'MongoDB', link: '/mongodb/1800/',},
    ],
  },
  {
    text: '中间件',
    items: [
      // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
      {text: 'Kafka', link: '/kafka/1400/',},
      {text: 'RabbitMQ', link: '/rabbitmq/1500/',},
      {text: 'Redis', link: '/redis/1600/',},
      {text: 'Nginx', link: '/nginx/1700/',},
      {text: 'Elasticsearch', link: '/es/1800/',},
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
];
