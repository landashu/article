(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{499:function(a,t,s){"use strict";s.r(t);var r=s(41),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"基本理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本理论"}},[a._v("#")]),a._v(" 基本理论")]),a._v(" "),s("p",[a._v("除了本身要掌握 JAVA API 的基本使用外，我们还需要对 JAVA 的所写项目以及测试方法要有所了解，首先我们得理解什么是响应时间，请求时间，HPS，TPS 以及 QPS 等。")]),a._v(" "),s("ul",[s("li",[a._v("响应时间是指用户从客户端发起一个请求开始，到客户端接收到从服务器端返回的响应结果，整个过程所耗费的时间。")]),a._v(" "),s("li",[a._v("请求时间是客户端发送请求到服务端接收到请求的时间。")]),a._v(" "),s("li",[a._v("HPS (Hits Per Second) 每秒点击次数，单位是 次 / 秒")]),a._v(" "),s("li",[a._v("TPS (Hits Per Second) 系统每秒处理交易数 (事务数，接口逻辑数)，单位是笔 / 秒")]),a._v(" "),s("li",[a._v("QPS (Query Per Second) 系统每秒处理查询次数，单位是 次 / 秒。")]),a._v(" "),s("li",[a._v("最大、最少响应时间"),s("br"),a._v("\n指用户发出请求或者指令到系统做出反应 (响应) 的最大、最少时间。")]),a._v(" "),s("li",[a._v("90% 响应时间"),s("br"),a._v("\n指 100 个人，有 90 个人 1s 内得到系统的反馈，就代表优化到一定的程度，还有 10% 相对优化复杂度就很高了。")])]),a._v(" "),s("p",[a._v("对于互联网业务中，如果某些业务有且仅有一个请求链接，那么 TPS=QPS=HPS，一盘情况下用 TPS 来衡量整个业务流程，用 QPS 来衡量接口查询次数，用 HPS 来表示对服务器单击请求。 无论 TPS，QPS，HPS，这些指标都是衡量系统处理能力非常重要的指标，越大越好，根据经验，一般情况下：")]),a._v(" "),s("ol",[s("li",[a._v("金融行业 1K TPS~50K TPS")]),a._v(" "),s("li",[a._v("保险行业 100 TPS~10W TPS")]),a._v(" "),s("li",[a._v("制造行业 10 TPS~5K TPS")]),a._v(" "),s("li",[a._v("互联网电子商务 1W TPS~100W TPS")]),a._v(" "),s("li",[a._v("互联网中型网站  1K TPS~5W TPS")]),a._v(" "),s("li",[a._v("互联网小型网站 500 TPS~1W TPS")])]),a._v(" "),s("p",[a._v("对于系统来说有三个重要的指标是我们一定要看的")]),a._v(" "),s("ul",[s("li",[a._v("吞吐量：每秒系统能够处理的请求数，任务数")]),a._v(" "),s("li",[a._v("响应时间：服务处理一个请求或一个任务的耗时")]),a._v(" "),s("li",[a._v("错误率：一批请求中结果出错的请求所占比例")])]),a._v(" "),s("h2",{attrs:{id:"jmeter使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmeter使用"}},[a._v("#")]),a._v(" JMeter 使用")]),a._v(" "),s("h3",{attrs:{id:"jmeter下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmeter下载"}},[a._v("#")]),a._v(" JMeter 下载")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("地址"),s("OutboundLink")],1)]),a._v(" "),s("blockquote",[s("p",[a._v("以下所有的请求时间都为 ms，除非标有时间单位。")])]),a._v(" "),s("h3",{attrs:{id:"转换中文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换中文"}},[a._v("#")]),a._v(" 转换中文")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/1.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"创建线程组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建线程组"}},[a._v("#")]),a._v(" 创建线程组")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/2.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/3.jpg",alt:""}})]),a._v(" "),s("p",[a._v("线程数：模拟并发用户数量"),s("br"),a._v("\n Ramp-Up 时间（秒）：在设置的时间结束之前，启动所有线程数"),s("br"),a._v("\n循环次数：单个线程执行几次")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/4.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"添加http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加http请求"}},[a._v("#")]),a._v(" 添加 http 请求")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/5.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/6.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/7.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/8.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"添加结果树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加结果树"}},[a._v("#")]),a._v(" 添加结果树")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/9.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/10.jpg",alt:""}})]),a._v(" "),s("p",[a._v("会把所有请求的信息列出来。")]),a._v(" "),s("h3",{attrs:{id:"添加汇总报告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加汇总报告"}},[a._v("#")]),a._v(" 添加汇总报告")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/11.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/12.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"聚合报告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合报告"}},[a._v("#")]),a._v(" 聚合报告")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/13.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/14.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"汇总图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#汇总图"}},[a._v("#")]),a._v(" 汇总图")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/15.jpg",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/16.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"jmeter-address-already-in-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmeter-address-already-in-use"}},[a._v("#")]),a._v(" Jmeter Address Already in use")]),a._v(" "),s("p",[a._v("windows 本身提供的端口机制问题。"),s("br"),a._v("\nwindows 提供给我们 TCP/IP 的端口为 1024-5000，并且要 4 分钟来循环回收他们，就导致我们在短时间内跑大量的请求时将端口沾满。"),s("br"),a._v("\n解决方式：")]),a._v(" "),s("ol",[s("li",[a._v("cmd 中输入 regedit 命令打开注册表")]),a._v(" "),s("li",[a._v("在 HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters  ，右击 Parameters  ，添加一个新的 DWORD，名字为 MaxUserPort，双击 MaxUserPort ，输入数值数据为 65534，基数选择十进制 (如果是分布式运行的话，控制机器和负载机制都需要这样操作)，修改完毕后重启电脑才能生效。相同的位置还可以添加 TCPTimedWaitDelay 值为 30，和 MaxUserPort  添加方式一样。")])]),a._v(" "),s("h2",{attrs:{id:"jvisualvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm"}},[a._v("#")]),a._v(" jvisualvm")]),a._v(" "),s("h3",{attrs:{id:"启动jvisualvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动jvisualvm"}},[a._v("#")]),a._v(" 启动 jvisualvm")]),a._v(" "),s("p",[a._v("jvisualvm 在 jdk 包中已经有了，只需要打开 cmd 输入 jvisualvm 就能启动")]),a._v(" "),s("blockquote",[s("p",[a._v("在高版本 JDK（大于 1.8 或后期更新的 1.8 版本）中已经不会再自动集成 VisualVM，https://visualvm.github.io/index.html 到这里进行下载")])]),a._v(" "),s("p",[a._v("下载的 visualvm 默认会找环境中的 jdk1.8，但如果你不是 jdk1.8 则可以修改配置（visualvm_218/etc/visualvm.conf），修改内容如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# 设置成自己安装的java路径\nvisualvm_jdkhome="D:\\tool\\java\\java17"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[a._v("#")]),a._v(" 线程")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/17.jpg",alt:""}})]),a._v(" "),s("p",[a._v("运行：正常运行"),s("br"),a._v("\n休眠：sleep 中的线程"),s("br"),a._v("\n等待：wait 中的线程"),s("br"),a._v("\n驻留：线程池里得空闲线程"),s("br"),a._v("\n监视：正在阻塞的线程，等待锁的。")]),a._v(" "),s("h3",{attrs:{id:"安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[a._v("#")]),a._v(" 安装插件")]),a._v(" "),s("p",[a._v("安装插件前先检查更新，如果出错了需要更新地址，先 工具 - 插件 - 更新 - 检查更新 来检测是否有错，如果有错，先查看 jdk 版本，然后去 "),s("a",{attrs:{href:"https://visualvm.github.io/pluginscenters.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://visualvm.github.io/pluginscenters.html"),s("OutboundLink")],1),a._v("，找到相同版本的 gz url，再到 插件 - 设置 - 编辑，更新 url 即可。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/18.jpg",alt:""}})]),a._v(" "),s("p",[a._v("visual GC 通过它可以看到整个垃圾回收的过程。安装完成后，退出重进。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/19.jpg",alt:""}})]),a._v(" "),s("p",[a._v("GC time：14 collections，798.209ms Last Cause ：System.gc () = 发生了 14 次 GC，花了 798.209ms。"),s("br"),a._v("\nEden Space (666.000M，292.500M)：148.296M，11 collections，223.272ms = 发生了 11 次 GC，花了 223.272ms")]),a._v(" "),s("h3",{attrs:{id:"histogram-直方图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#histogram-直方图"}},[a._v("#")]),a._v(" Histogram 直方图")]),a._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/java/other/3/20.jpg",alt:""}})]),a._v(" "),s("p",[a._v("直方图只在使用 G1 垃圾回收器才会出现")]),a._v(" "),s("ul",[s("li",[a._v("Tenuring Threshold=15：这表示对象在晋升到老年代之前需要在年轻代中经历的最少垃圾收集次数。如果一个对象在年轻代中生存超过 15 次垃圾收集循环，那么它将被转移到老年代。")]),a._v(" "),s("li",[a._v("Max Tenuring Threshold=15：这是 tenuring 阈值允许的最大值。在你的例子中，Tenuring Threshold 和 Max Tenuring Threshold 都设置为 15，这意味着这是 JVM 允许的最长时间，对象在年轻代中可以逗留而不被晋升到老年代。这限制了年轻代对象的年龄上限，简化了晋升决策。")]),a._v(" "),s("li",[a._v("Desired Survivor size=268435456：这是 G1 垃圾收集器期望的每个 Survivor 空间的理想大小。理想情况下，Survivor 空间的容量会被设为这个值，以容纳从 Eden 区或另一个 Survivor 区存活下来的对象。这个设置有助于优化年轻代的内存分配和回收效率。")]),a._v(" "),s("li",[a._v("Current survivor size=8：这表示当前某个 Survivor 空间的实际大小，单位是字节。给出的例子中，显示的 8 字节看起来异常小，几乎肯定是一个显示错误或者误解，因为这样的大小远远不足以满足正常的对象存储需求。正常情况下，这个值应该接近或等于 Desired Survivor Size。可能是由于在 VisualVM 捕获那一刻状态时，Survivor 空间正在进行调整，或者存在某种报告上的偏差，需要进一步检查和确认。")])]),a._v(" "),s("p",[a._v("从 0 到 15。每一格的颜色代表了处于该年龄级别的对象数量。例如，第一列（年龄级别 0）有一个橙色的格子，表示有一些对象刚刚进入年轻代，它们的年龄为 0。第二列（年龄级别 1）有两个橙色格子，说明有两组对象已经经历了第一次垃圾收集，现在它们的年龄为 1。")]),a._v(" "),s("p",[a._v("请注意，这个直方图并不反映实际的数量，而是通过颜色块来表示相对数量。因此，两个橙色格子并不一定表示确切的两个对象，而只是表明有多个对象处于这个年龄级别。")])])}),[],!1,null,null,null);t.default=v.exports}}]);