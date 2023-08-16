---
title: 版本说明
date: 2023-06-25 09:22:36
permalink: /version/
sidebar: true
article: false # 是否未非文章页，非文章不显示 面包屑和作者、时间，不显示最近更新栏，不会参与到最近更新文章的数据计算中
comment: false # 评论区
editLink: false
---

## 3.x

### ![easy-security 3.0.0](https://img.shields.io/badge/EasySecurity-v3.0.0-yellow)
1. 对标 easy-security 2.0.4 进行对 SpringBoot3.x 的支持
2. 去掉 forword 方式，换成 handlerExceptionResolver 处理异常，去掉 errorUrl 配置
3. 每一个内置 handler 的 index 都预留10个位置，开发者可以在之间进行修改和转换

## 2.x

### ![easy-security 2.0.4](https://img.shields.io/badge/EasySecurity-v2.0.4-yellow)
1. 去掉 SpecialPathHandler 类，改为方法
2. 只要是 Special 路径，不会做 req 和 rep 的任何处理

### ![easy-security 2.0.3](https://img.shields.io/badge/EasySecurity-v2.0.3-yellow)
1. 优化 handler 先后顺序
2. 优化解密逻辑
3. 解决加解密数据类型不匹配问题
4. 更换 ReqDataHandler 和 DecryptPathHandler 优先级，先解密后封装
5. 解耦加解密，可以自定义加解密逻辑

### ![easy-security 2.0.2](https://img.shields.io/badge/EasySecurity-v2.0.2-yellow)
1. 解决特殊路径未在Req放行

### ![easy-security 2.0.1](https://img.shields.io/badge/EasySecurity-v2.0.1-yellow)
1. 修改认证放行不生效问题
2. 修改鉴权放行不生效问题

### ![easy-security 2.0.0](https://img.shields.io/badge/EasySecurity-V2.0.0-yellow)
这一版我们做了很伟大的事情，改变了架构，并支持了功能扩展，详细如下：
1. 整体架构改变，从多链路过滤器改为单链路过滤器
2. 提供 FunctionHandler 接口，方便功能扩展
3. 对加密接口CiphertextServer进行重构，直接重写加密
4. 对 RequestWrapper 等类进行重命名

### ![easy-security 1.0.0](https://img.shields.io/badge/EasySecurity-V1.0.0-yellow)
初版


