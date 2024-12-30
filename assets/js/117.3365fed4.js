(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{593:function(n,s,e){"use strict";e.r(s);var t=e(41),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("blockquote",[e("p",[n._v("本文及后续所有文章都以 21.7.3.14-2 做为版本讲解和入门学习")])]),n._v(" "),e("p",[n._v("ClickHouse 的物化视图是一种查询结果的持久化，它确实是给我们带来了查询效率的提升。用户查起来跟表没有区别，它就是一张表，它也像是一张时刻在预计算的表，创建的过程它是用了一个特殊引擎，加上后来 as select，就是 create 一个 table as select 的写法。")]),n._v(" "),e("p",[n._v("“查询结果集” 的范围很宽泛，可以是基础表中部分数据的一份简单拷贝，也可以是多表 join 之后产生的结果或其子集，或者原始数据的聚合指标等等。所以，物化视图不会随着基础表的变化而变化，所以它也称为快照（snapshot）")]),n._v(" "),e("p",[e("strong",[n._v("普通视图不保存数据，保存的仅仅是查询语句")]),n._v("，查询的时候还是从原表读取数据，可以将普通视图理解为是个子查询。"),e("strong",[n._v("物化视图则是把查询的结果根据相应的引擎存入到了磁盘或内存中")]),n._v("，对数据重新进行了组织，你可以理解物化视图是完全的一张新表。")]),n._v(" "),e("p",[n._v("优点：查询速度快，要是把物化视图这些规则全部写好，它比原数据查询快了很多，总的行数少了，因为都预计算好了。")]),n._v(" "),e("p",[n._v("缺点：它的本质是一个流式数据的使用场景，是累加式的技术，所以要用历史数据做去重、去核这样的分析，在物化视图里面是不太好用的。在某些场景的使用也是有限的。而且如果一张表加了好多物化视图，在写这张表的时候，就会消耗很多机器的资源，比如数据带宽占满、存储一下子增加了很多。")]),n._v(" "),e("p",[n._v("create 语法，会创建一个隐藏的目标表来保存视图数据。也可以 TO 表名，保存到一张显式的表。没有加 TO 表名，表名默认就是 .inner. 物化视图名。")]),n._v(" "),e("div",{staticClass:"language-clickhouse line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# 语法\nCREATE [MATERIALIZED] VIEW [IF NOT EXISTS] [db.]table_name [TO[db.]name]\n[ENGINE = engine] [POPULATE] AS SELECT ...\n\n# 普通表\nCREATE TABLE hits_test\n( \n  EventDate Date, CounterID UInt32, UserID UInt64, URL String, Income UInt8\n)\nENGINE = MergeTree()\nPARTITION BY toYYYYMM(EventDate)\nORDER BY (CounterID, EventDate, intHash32(UserID))\nSAMPLE BY intHash32(UserID)\nSETTINGS index_granularity = 8192\n\n# 物化视图\nCREATE MATERIALIZED VIEW hits_mv\nENGINE=SummingMergeTree\nPARTITION BY toYYYYMM(EventDate) ORDER BY (EventDate, intHash32(UserID))\nAS SELECT\n  UserID,EventDate,count(URL) as ClickCount,sum(Income) AS IncomeSum\nFROM hits_test\nWHERE EventDate >= '2014-03-20'\nGROUP BY UserID,EventDate;\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br")])]),e("p",[e("strong",[n._v("创建视图是有限制的")])]),n._v(" "),e("ul",[e("li",[n._v("必须指定物化视图的 engine 用于数据存储")]),n._v(" "),e("li",[n._v("TO [db].[table] 语法的时候，不得使用 POPULATE。")]),n._v(" "),e("li",[n._v("查询语句 (select）可以包含下面的子句： DISTINCT, GROUP BY, ORDER BY, LIMIT…")]),n._v(" "),e("li",[n._v("物化视图的 alter 操作有些限制，操作起来不大方便。")]),n._v(" "),e("li",[n._v("若物化视图的定义使用了 TO [db.] name 子语句，则可以将目标表的视图 卸载 DETACH 再装载 ATTACH")])]),n._v(" "),e("p",[e("strong",[n._v("物化视图的数据更新")])]),n._v(" "),e("ol",[e("li",[n._v("物化视图创建好之后，若源表被写入新数据则物化视图也会同步更新，但不建议使用，可以使用 insert into 物化视图表名 select ...")]),n._v(" "),e("li",[n._v("POPULATE 关键字决定了物化视图的更新策略："),e("br"),n._v("\n2.1 若有 POPULATE 则在创建视图的过程会将源表已经存在的数据一并导入，类似于 create table ... as"),e("br"),n._v("\n2.2 若无 POPULATE 则物化视图在创建之后没有数据，只会在创建只有同步之后写入源表的数据"),e("br"),n._v("\n 2.3 clickhouse 官方并不推荐使用 POPULATE，因为在创建物化视图的过程中同时写入的数据不能被插入物化视图。")]),n._v(" "),e("li",[n._v("物化视图不支持同步删除，若源表的数据不存在（删除了）则物化视图的数据仍然保留")]),n._v(" "),e("li",[n._v("物化视图是一种特殊的数据表，可以用 show tables 查看")]),n._v(" "),e("li",[n._v("物化视图数据的删除")]),n._v(" "),e("li",[n._v("物化视图的删除")])])])}),[],!1,null,null,null);s.default=a.exports}}]);