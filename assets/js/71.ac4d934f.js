(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{548:function(s,e,n){"use strict";n.r(e);var r=n(41),a=Object(r.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("使用 Redis 做分布式锁的思路大概是这样的：在 redis 中设置一个值表示加了锁，然后释放锁的时候就把这个 key 删除。"),n("br"),s._v("\n具体代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 获取锁\n// NX是指如果key不存在就成功，key存在返回false，PX可以指定过期时间\nSET anyLock unique_value NX PX 30000\n\n\n// 释放锁：通过执行一段lua脚本\n// 释放锁涉及到两条指令，这两条指令不是原子性的\n// 需要用到redis的lua脚本支持特性，redis执行lua脚本是原子性的\nif redis.call("get",KEYS[1]) == ARGV[1] then\nreturn redis.call("del",KEYS[1])\nelse\nreturn 0\nend\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"这种方式有几大要点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这种方式有几大要点"}},[s._v("#")]),s._v(" 这种方式有几大要点：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("一定要用 SET key value NX PX milliseconds 命令"),n("br"),s._v("\n如果不用，先设置了值，再设置过期时间，这个不是原子性操作，有可能在设置过期时间之前宕机，会造成死锁 (key 永久存在)")])]),s._v(" "),n("li",[n("p",[s._v("value 要具有唯一性"),n("br"),s._v("\n这个是为了在解锁的时候，需要验证 value 是和加锁的一致才删除 key。"),n("br"),s._v("\n这是避免了一种情况：假设 A 获取了锁，过期时间 30s，此时 35s 之后，锁已经自动释放了，A 去释放锁，但是此时可能 B 获取了锁。A 客户端就不能删除 B 的锁了。")])])]),s._v(" "),n("h2",{attrs:{id:"除了要考虑客户端要怎么实现分布式锁之外-还需要考虑redis的部署问题-redis有3种部署方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#除了要考虑客户端要怎么实现分布式锁之外-还需要考虑redis的部署问题-redis有3种部署方式"}},[s._v("#")]),s._v(" 除了要考虑客户端要怎么实现分布式锁之外，还需要考虑 redis 的部署问题，redis 有 3 种部署方式：")]),s._v(" "),n("ul",[n("li",[s._v("单机模式")]),s._v(" "),n("li",[s._v("master-slave + sentinel 选举模式")]),s._v(" "),n("li",[s._v("redis cluster 模式")])]),s._v(" "),n("p",[s._v("使用 redis 做分布式锁的缺点在于：如果采用单机部署模式，会存在单点问题，只要 redis 故障了。加锁就不行了。")]),s._v(" "),n("p",[s._v("采用 master-slave 模式，加锁的时候只对一个节点加锁，即便通过 sentinel 做了高可用，但是如果 master 节点故障了，发生主从切换，此时就会有可能出现锁丢失的问题。")]),s._v(" "),n("p",[s._v("基于以上的考虑，其实 redis 的作者也考虑到这个问题，他提出了一个 RedLock 的算法，这个算法的意思大概是这样的："),n("br"),s._v("\n假设 redis 的部署模式是 redis cluster，总共有 5 个 master 节点，通过以下步骤获取一把锁：")]),s._v(" "),n("ul",[n("li",[s._v("获取当前时间戳，单位是毫秒")]),s._v(" "),n("li",[s._v("轮流尝试在每个 master 节点上创建锁，过期时间设置较短，一般就几十毫秒")]),s._v(" "),n("li",[s._v("尝试在大多数节点上建立一个锁，比如 5 个节点就要求是 3 个节点（n / 2 +1）")]),s._v(" "),n("li",[s._v("客户端计算建立好锁的时间，如果建立锁的时间小于超时时间，就算建立成功了")]),s._v(" "),n("li",[s._v("要是锁建立失败了，那么就依次删除这个锁")]),s._v(" "),n("li",[s._v("只要别人建立了一把分布式锁，你就得不断轮询去尝试获取锁")])]),s._v(" "),n("p",[s._v("但是这样的这种算法还是颇具争议的，可能还会存在不少的问题，无法保证加锁的过程一定正确。")]),s._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/redis/1602/img.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"另一种方式-redisson"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#另一种方式-redisson"}},[s._v("#")]),s._v(" 另一种方式：Redisson")]),s._v(" "),n("p",[s._v("此外，实现 Redis 的分布式锁，除了自己基于 redis client 原生 api 来实现之外，还可以使用开源框架：Redission")]),s._v(" "),n("p",[s._v("Redisson 是一个企业级的开源 Redis Client，也提供了分布式锁的支持。我也非常推荐大家使用，为什么呢？")]),s._v(" "),n("p",[s._v("回想一下上面说的，如果自己写代码来通过 redis 设置一个值，是通过下面这个命令设置的。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SET anyLock unique_value NX PX 30000\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这里设置的超时时间是 30s，假如我超过 30s 都还没有完成业务逻辑的情况下，key 会过期，其他线程有可能会获取到锁。")]),s._v(" "),n("p",[s._v("这样一来的话，第一个线程还没执行完业务逻辑，第二个线程进来了也会出现线程安全问题。所以我们还需要额外的去维护这个过期时间，太麻烦了～")]),s._v(" "),n("p",[s._v("我们来看看 redisson 是怎么实现的？先感受一下使用 redission 的爽：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Config config = new Config();\nconfig.useClusterServers()\n.addNodeAddress("redis://192.168.31.101:7001")\n.addNodeAddress("redis://192.168.31.101:7002")\n.addNodeAddress("redis://192.168.31.101:7003")\n.addNodeAddress("redis://192.168.31.102:7001")\n.addNodeAddress("redis://192.168.31.102:7002")\n.addNodeAddress("redis://192.168.31.102:7003");\n\nRedissonClient redisson = Redisson.create(config);\n\n\nRLock lock = redisson.getLock("anyLock");\nlock.lock();\nlock.unlock();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("就是这么简单，我们只需要通过它的 api 中的 lock 和 unlock 即可完成分布式锁，他帮我们考虑了很多细节：")]),s._v(" "),n("ul",[n("li",[s._v("redisson 所有指令都通过 lua 脚本执行，redis 支持 lua 脚本原子性执行")]),s._v(" "),n("li",[s._v("redisson 设置一个 key 的默认过期时间为 30s, 如果某个客户端持有一个锁超过了 30s 怎么办？"),n("br"),s._v("\nredisson 中有一个 watchdog 的概念，翻译过来就是看门狗，它会在你获取锁之后，每隔 10 秒帮你把 key 的超时时间设为 30s"),n("br"),s._v("\n 这样的话，就算一直持有锁也不会出现 key 过期了，其他线程获取到锁的问题了。")]),s._v(" "),n("li",[s._v("redisson 的 “看门狗” 逻辑保证了没有死锁发生。"),n("br"),s._v("\n如果机器宕机了，看门狗也就没了。此时就不会延长 key 的过期时间，到了 30s 之后就会自动过期了，其他线程可以获取到锁)")])]),s._v(" "),n("h2",{attrs:{id:"对于redis的分布式锁而言-它有以下缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对于redis的分布式锁而言-它有以下缺点"}},[s._v("#")]),s._v(" 对于 redis 的分布式锁而言，它有以下缺点：")]),s._v(" "),n("ul",[n("li",[s._v("它获取锁的方式简单粗暴，获取不到锁直接不断尝试获取锁，比较消耗性能。")]),s._v(" "),n("li",[s._v("另外来说的话，redis 的设计定位决定了它的数据并不是强一致性的 ("),n("a",{attrs:{href:"https://www.jianshu.com/p/f1d388744379",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis 一直性问题看这里"),n("OutboundLink")],1),s._v(")，在某些极端情况下，可能会出现问题。锁的模型不够健壮")]),s._v(" "),n("li",[s._v("即便使用 redlock 算法来实现，在某些复杂场景下，也无法保证其实现 100% 没有问题，关于 redlock 的讨论可以看 How to do distributed locking")]),s._v(" "),n("li",[s._v("redis 分布式锁，其实需要自己不断去尝试获取锁，比较消耗性能。")])]),s._v(" "),n("p",[s._v("但是另一方面使用 redis 实现分布式锁在很多企业中非常常见，而且大部分情况下都不会遇到所谓的 “极端复杂场景”")]),s._v(" "),n("p",[s._v("所以使用 redis 作为分布式锁也不失为一种好的方案，最重要的一点是 redis 的性能很高，可以支撑高并发的获取、释放锁操作。")]),s._v(" "),n("p",[s._v("spring boot 整合 redisson 的两种方式："),n("br"),s._v("\n自己配置方式：https://www.cnblogs.com/yangzhilong/p/7605807.html"),n("br"),s._v("\nspring boot starter 方式：https://blog.csdn.net/a1058926697/article/details/116670391")])])}),[],!1,null,null,null);e.default=a.exports}}]);