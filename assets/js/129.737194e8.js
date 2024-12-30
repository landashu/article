(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{605:function(a,s,t){"use strict";t.r(s);var e=t(41),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("本文及后续所有文章都以 2.4.2 做为版本讲解和入门学习")])]),a._v(" "),t("h2",{attrs:{id:"硬件和操作系统优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件和操作系统优化"}},[a._v("#")]),a._v(" 硬件和操作系统优化")]),a._v(" "),t("h3",{attrs:{id:"配置内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置内存"}},[a._v("#")]),a._v(" 配置内存")]),a._v(" "),t("p",[a._v("Hbase 对于内存的消耗是非常巨大的，主要是其 LSM 树状结构、缓存机制和日志记录机制决定的，所以物理内存当然是越大越好。")]),a._v(" "),t("h3",{attrs:{id:"配置cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置cpu"}},[a._v("#")]),a._v(" 配置 CPU")]),a._v(" "),t("p",[a._v('Hbase 给使用者的印象更偏于 "内存型" NoSql 数据库，从而忽略了 CPU 方面的需求，其实 Hbase 在某些应用上对 CPU 的消耗非常大，例如频繁使用过滤器，因为在过滤器中包含很多匹配、搜索和过滤的操作；多条件组合扫描的场景也是 CPU 密集型的；压缩操作很频繁等。如果服务器 CPU 不够强悍，会导致整个集群负载非常高，很多线程都在阻塞状态（非网络阻塞或死锁的情况）。')]),a._v(" "),t("h3",{attrs:{id:"垃圾回收器的选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器的选择"}},[a._v("#")]),a._v(" 垃圾回收器的选择")]),a._v(" "),t("p",[a._v("对于运行 Hbase 相关进程 JVM 的垃圾回收器，不仅仅关注吞吐量，还关注停顿时间，而且两者之间停顿时间更为重要，因为 Hbase 设计的初衷就是解决大规模数据集下实时访问的问题。配置方式，需要在 hbase-env.sh 文件中")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HBASE_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HBASE_OPTS")]),a._v(' -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=60 -XX:+UseParNewGC -XX:ParallelGCThreads=6"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("简要说明一下，-XX:+UseConcMarkSweepGC 表示年老代并发收集；")]),a._v(" "),t("p",[a._v("对于老年代来说， 它可以更早的开始回收。当分配在老年代的空间比率超过了一个阀值，CMS 开始运行。如果 CMS 开始的太晚，HBase 或许会直接进行 full garbage collection。这种情况会导致 block 所有的线程，如果这个时间过长，就会导致 hbase 连接超时，结果就是 regionserver 集体下线。这是不能容忍额。为了避免这种情况的发生，我们建议设置 -XX:CMSInitiatingOccupancyFraction JVM 参数来精确指定在多少百分比 CMS 应该被开始，正如上面的配置中做的那样。在 百分之 60 或 70 开始是一个好的实践。当老年代使用 CMS，默认的年轻代 GC 将被设置成 Parallel New Collector。")]),a._v(" "),t("p",[a._v("再来看看 hbase 为什么可能进行 full gc，如果我们不配置 - XX:CMSInitiatingOccupancyFraction，jdk1.5 以后会使用默认值 90%，那么很可能，当老年代内存占用超过分配给他的内存大小的 90%，会进行 CMS（老年代的回收），但是不会阻止年轻代到老年代的迁移，如果迁移过快，CMS 较慢，会出现老年代内存使用率 100%，这时会导致 full gc。如果我们把这个参数调整小一点，那么能给年轻带到老年代迁移的同时做 CMS 时一些时间，也就减少了 full gc 的发生。当然这可能会频繁的 gc，但总比整个 hbase 挂掉的好不是么？")]),a._v(" "),t("h3",{attrs:{id:"jvm堆大小设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm堆大小设置"}},[a._v("#")]),a._v(" JVM 堆大小设置")]),a._v(" "),t("p",[a._v("堆内存大小参数 hbase-env.sh 文件中设置")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HBASE_HEAPSIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16284")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("上面代码中指定堆内存大小是 16284，单位是 MB，即 16GB。当然，这个值需要根据节点实际的物理内存来决定。一般不超过实际物理内存的二分之一。")]),a._v(" "),t("h2",{attrs:{id:"hbase-调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase-调优"}},[a._v("#")]),a._v(" Hbase 调优")]),a._v(" "),t("h3",{attrs:{id:"调节数据库-datablock-的大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调节数据库-datablock-的大小"}},[a._v("#")]),a._v(" 调节数据库（dataBlock）的大小")]),a._v(" "),t("p",[a._v("HFile 数据库大小可以在列族层次设置。这个数据库不同于之前谈到的 HDFS 数据块，其默认值是 65536 字节，或 64KB。数据块索引存储每个 HFile 数据块的起始键。数据块大小的设置影响数据块索引的大小。数据块越小，索引越大，从而占用更大内存空间。同时加载进内存的数据块越小，随机查找性能更好。但是，如果需要更好的序列扫描性能，那么一次能够加载更多 HFile 数据进入内存更为合理，这意味着应该将数据块设置为更大的值。相应地，索引变小，将在随机读性能上付出更多的代价。可以在表实例化时设置数据块的大小：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("create "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table_name'")]),a._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'colfam1'")]),a._v(",BLOCKSIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'65536'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"适当时机关闭数据块缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适当时机关闭数据块缓存"}},[a._v("#")]),a._v(" 适当时机关闭数据块缓存")]),a._v(" "),t("p",[a._v("把数据块放进读缓存，并不是一定能提示性能。如果一个表或表的列族只被顺序化扫描访问或很少被访问，则 Get 或 Scan 操作花费时间长一点是可以接受的。在这种情况下，可以选择关闭列族的缓存。")]),a._v(" "),t("p",[a._v("关闭缓存的原因在于：如果只是执行很多顺序化扫描，会多次使用缓存，并且可能会滥用缓存，从而把应该放进缓存获得性能提升的数据给排挤出去。")]),a._v(" "),t("p",[a._v("所以如果关闭缓存，不仅可以避免上述情况发生，而且可以让出更多缓存给其他表和同一表的其他列族使用。数据块缓存默认打开的。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("create "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table_name'")]),a._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'colfam1'")]),a._v(",BLOCKSIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'false'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"开启布隆过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启布隆过滤器"}},[a._v("#")]),a._v(" 开启布隆过滤器")]),a._v(" "),t("p",[a._v("数据块索引提供了一个有效的方法 getDataBlockIndexReader ()，在访问某个特定的行时用来查找应该读取的 HFile 的数据块。但是刚方法的作用有限。HFile 数据块的默认大小是 64KB，一边情况下不能调整太多。")]),a._v(" "),t("p",[a._v("如果需要查找一个很短的行，只在整个数据的起始行键上建立索引是无法给出更细粒度的索引信息的。例如：某行占用 100 字节存储空间，一个 64KB 的数据包含（64*1024）/100=655.53，约 700 行，只能把起始行放在索引位上。要查找的行可能落在特定数据块上的行区间，但也不能肯定存放在那个数据块上，这就导致多种可能性；该行在表中不存在，或者存放在另一个 HFile 中，甚至在 MemStore 中。这些情况下，从硬盘读取数据块会带来 IO 开销，也会滥用数据块缓存，这会影响性能，尤其是当面对一个巨大的数据集且有很多并发读用户时。")]),a._v(" "),t("p",[a._v("布隆过滤器允许对存储在每个数据块的数据做一个反向检测。当查询某行时，先检查布隆过滤器，看看该行是否不在这个数据块。布隆过滤器要么确定回答该行不在，要么回答不知道。因此称之为反向检查。布隆过滤器也可以应用到行内的单元格上，当访问某列标识符时先使用同样的反向检测。")]),a._v(" "),t("p",[a._v("使用布隆过滤器也不是没有代价，相反，存储这个额外的索引层次占用空间。布隆过滤器的占用空间大小随着它们的索引对象数据增长而增长，所以行级布隆过滤器比列标识符级布隆过滤器占用空间要少。当空间不是问题，它们可以压榨整个系统的性能潜力。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("create "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table_name'")]),a._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'colfam1'")]),a._v(",BLOOMFILTER"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ROWCOL'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("布隆过滤器默认时 NONE。另外，还有两个值：ROW 表示行级布隆过滤器；ROWCOL 表示列标识符布隆过滤器。行级布隆过滤器在数据块中检查特定行键是否不存在，列标识符布隆过滤器检查行和列标识符联合体是否不存在。ROWCOL 布隆过滤器的空间开销高于 ROW 布隆过滤器。")]),a._v(" "),t("h3",{attrs:{id:"开启数据压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启数据压缩"}},[a._v("#")]),a._v(" 开启数据压缩")]),a._v(" "),t("p",[a._v("HFile 可以被压缩并存放在 HDFS 上，有助于节省磁盘 IO，但是读写数据时压缩和解压缩会太高 CPU 利用率。压缩时表定义的一部分，可以在建表或模式改变时设定。除非确定压缩不会提升系统的性能，否则推荐打开表的压缩。只有在数据不能被压缩，或者因为某些原因服务器的 CPU 利用率有限制要求的情况下，有可能需要关闭压缩特性。")]),a._v(" "),t("p",[a._v("Hbase 可以有多种压缩编码，包括 LZO、SNAPPY 和 GZIP，LZO 和 SNAPPY 是其中最流行的两种。")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("create "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'table_name'")]),a._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'colfam1'")]),a._v(",COMPRESSION"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'SNAPPY'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("数据实在磁盘上压缩的，内存中（MemStore 和 BlockCache）或在网络传输时是没有压缩的。")]),a._v(" "),t("h3",{attrs:{id:"设置scan缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置scan缓存"}},[a._v("#")]),a._v(" 设置 Scan 缓存")]),a._v(" "),t("p",[a._v("Hbase 的 Scan 查询中可以设置缓存，定义一次交互从服务器端传输到客户端的行数，设置方法是使用 Scan 类中 setCaching () 方法，这样能有效地减少服务器端和客户端的交互，更好地提升扫描查询的性能。")]),a._v(" "),t("h3",{attrs:{id:"显示地指定列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示地指定列"}},[a._v("#")]),a._v(" 显示地指定列")]),a._v(" "),t("p",[a._v("当使用 Scan 或 Get 处理大量的行时，最好确定一下所需要的列。因为服务器端处理完的结果，需要通过网络传输到客户端，而且此时，传输的数据量成为瓶颈，如果能有效地过滤部分数据，使用更精确的需求，能够很大程度上减少网络 IO 的花费，否则会造成很大的资源浪费。如果在查询中指定某列或者某几列，能够有效地减少网络传输量，在一定程度上提升查询性能。")]),a._v(" "),t("h3",{attrs:{id:"关闭resultscanner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭resultscanner"}},[a._v("#")]),a._v(" 关闭 ResultScanner")]),a._v(" "),t("p",[a._v("ResultScanner 类用于存储服务端扫描的最终结果，可以通过遍历该类获取查询结果。但是，如果不关闭该类，可能会出现服务端在一段时间内保存连接，资源无法释放，从而导致服务器端某些资源的不可用，还有可能引发 HRegionServer 的其他问题。所以在使用完该类后，需要执行关闭操作。这一点与 JDBC 操作 MYSQL 类似，需要关闭连接。")]),a._v(" "),t("h3",{attrs:{id:"使用批量读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用批量读"}},[a._v("#")]),a._v(" 使用批量读")]),a._v(" "),t("p",[a._v("通过调用 HTable.get (Get) 方法可以根据一个指定的行键获取 Hbase 表中的一行记录。同样 Hbase 提供了一个方法，通过调用 HTable.get (List<Get>) 方法可以根据一个指定的行键列表，批量获取多行记录。使用该方法可以在服务器端执行完批量查询后返回结果，降低网络传输的速度，节省网络 IO 开销，对于数据实时性要求高且网络传输 RTT 高的场景，能带来明显的性能提升。")]),a._v(" "),t("h3",{attrs:{id:"使用批量写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用批量写"}},[a._v("#")]),a._v(" 使用批量写")]),a._v(" "),t("p",[a._v("通过调用 HTable.put (Put) 方法可以将一个指定的行键记录写入 Hbase。同样 Hbase 提供了一个方法，通过调用 HTable.put (List<Put>) 方法可以将指定多个行键批量写入，这样做的好处是批量执行，减少网络 IO 开销。")]),a._v(" "),t("h3",{attrs:{id:"关闭写wal日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭写wal日志"}},[a._v("#")]),a._v(" 关闭写 WAL 日志")]),a._v(" "),t("p",[a._v("在默认情况下，为了保证系统的高可用性，写 WAL 日志默认开启状态。写 WAL 开启或关闭，在一定程度上确实会对系统性能产生很大影响，根据 Hbase 内部设计，WAL 是规避数据丢失风险的一种补偿机制，如果应用可以容忍一定的数据丢失的风险，可以尝试在更新数据时，闭关写 WAL。该方法存在的风险是，当 HRegionServer 宕机时，可能写入的数据会出现丢失的情况，且无法恢复。关闭写 WAL 操作通过 Put 类中的 writeToWAL () 设置。")]),a._v(" "),t("h3",{attrs:{id:"设置autoflush"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置autoflush"}},[a._v("#")]),a._v(" 设置 AutoFlush")]),a._v(" "),t("p",[a._v("Htable 有一个属性是 AutoFlush，该属性用于支持客户端的批量更新。该属性默认值是 true，即客户端每收到一条数据，立刻发送服务端。如果该属性值为 false，当客户端提交 Put 请求时，将该请求在客户端缓存，直到数据达到某个阀值的容量时（该容量参数 hbase.client.write.buff 决定）或执行 hbase.flushcommits () 时，才向 HRegionServer 提交请求。这种方式避免了每次跟服务端交互，采用批量提交的方式，所以更高效。但是，如果还没有达到该缓存而客户端崩溃，该部分数据将由于未发送到 HRegionServer 而丢失。这对于有些零容忍的在线服务是不可接受的。所以，设置该参数的时候要慎重。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setAutoFlush")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n# 达到"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("M发出去\ntable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setWriteBufferSize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n# 或者手动发送\ntable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("flushCommits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"预创建region"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预创建region"}},[a._v("#")]),a._v(" 预创建 Region")]),a._v(" "),t("p",[a._v("在 Hbase 中创建表时，该表一开始只有一个 Region，插入该表的所有数据会保存在该 Region 中。随着数据量不断增加，当该 Region 大小达到一定阀值时，就会发生分裂（Region Splitting）操作。并且在这个表创建后相当长的一段时间内，针对该表的所有写操作总是集中在某一台或者少数几台机器上，这不仅仅造成局部磁盘和网络资源紧张，同时也是对整个集群资源的浪费。这个问题在初始化表，即批量导入原始数据的时候，特别明显。为了解决这个问题，可以使用预创建 Region 的方法。")]),a._v(" "),t("p",[a._v("Hbase 内部提供了 RegionSplitter 工具，使用命令如下")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HBASE_HOME}")]),a._v("/bin/hbase org.apache.hadoop.hbase.util.RegionSplitter table_name HexStringSplit -c "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" -f cf1 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("其中，table_name 是表名，HexStringSplit 表示划分的算法，参数 - c 10 表示预创建 10 个 Region，-f cf1 表示创建一个名字为 cf1 的列族。")]),a._v(" "),t("h3",{attrs:{id:"调整zookeeper-session的有效时长"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调整zookeeper-session的有效时长"}},[a._v("#")]),a._v(" 调整 zookeeper Session 的有效时长")]),a._v(" "),t("p",[a._v("参数 zookeeper.session.timeout 用于定义连接 Zookeeper 的 Session 的有效时长，这个默认值是 180 秒。这意味着一旦某个 HRegionServer 宕机，HMaster 至少需要 180 秒才能察觉到宕机，然后开始恢复。或者客户端读写过程中，如果服务端不能提供服务，客户端直到 180 秒后才能察觉到。在某些场景中，这样的时长可能对生产线业务来将不能容忍，需要调整这个值。在 hbase-site.xml 中配置。")])])}),[],!1,null,null,null);s.default=r.exports}}]);