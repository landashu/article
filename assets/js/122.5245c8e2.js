(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{600:function(s,t,a){"use strict";a.r(t);var e=a(41),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("本文及后续所有文章都以 21.7.3.14-2 做为版本讲解和入门学习")])]),s._v(" "),a("p",[s._v("基本上来说传统关系型数据库（以 MySQL 为例）的 SQL 语句，ClickHouse 基本都支持，这里不会从头讲解 SQL 语法只介绍 ClickHouse 与标准 SQL（MySQL）不一致的地方。")]),s._v(" "),a("h2",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[s._v("#")]),s._v(" Insert")]),s._v(" "),a("p",[s._v("基本与标准 SQL（MySQL）一致，都是用如下语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("…"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("…"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若是从表到表的插入")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table_name_2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"update-和-delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-和-delete"}},[s._v("#")]),s._v(" Update 和 Delete")]),s._v(" "),a("p",[s._v("ClickHouse 提供了 Delete 和 Update 的能力，这类操作被称为 Mutation 查询，它可以看做 Alter 的一种。")]),s._v(" "),a("p",[s._v("虽然可以实现修改和删除，但是和一般的 OLTP 数据库不一样，"),a("strong",[s._v("Mutation 语句是一种很 “重” 的操作，而且不支持事务")]),s._v("。")]),s._v(" "),a("p",[s._v("“重” 的原因主要是每次修改或者删除都会导致放弃目标数据的原有分区，重建新分区。所以"),a("strong",[s._v("尽量做批量的变更")]),s._v("，不要进行频繁小数据的操作。")]),s._v(" "),a("p",[s._v("删除操作")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" t_order_smt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" sku_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sku_001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改操作")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" t_order_smt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" total_amount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("toDecimal32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000.00")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("由于操作比较 “重”，所以 Mutation 语句分两步执行，同步执行的部分其实只是进行新增数据新增分区并把旧分区打上逻辑上的失效标记。直到触发分区合并的时候，才会删除旧数据释放磁盘空间，一般不会开放这样的功能给用户，由管理员完成。")]),s._v(" "),a("h2",{attrs:{id:"查询操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询操作"}},[s._v("#")]),s._v(" 查询操作")]),s._v(" "),a("p",[s._v("ClickHouse 基本上与标准 SQL 差别不大"),a("br"),s._v("\n➢ 支持子查询"),a("br"),s._v("\n➢ 支持 CTE (Common Table Expression 公用表表达式 with 子句)"),a("br"),s._v("\n➢ 支持各种 JOIN，但是 JOIN 操作无法使用缓存，所以即使是两次相同的 JOIN 语句，ClickHouse 也会视为两条新 SQL"),a("br"),s._v("\n➢ 窗口函数"),a("br"),s._v("\n➢ 不支持自定义函数"),a("br"),s._v("\n➢ GROUP BY 操作增加了 with rollup\\with cube\\with totals 用来计算小计和总计。")]),s._v(" "),a("ul",[a("li",[s._v("rollup：类似于 group by a,b，会分成 group by a；group by a,b。")]),s._v(" "),a("li",[s._v("cube：group by a,b，会分成 group by a,b；group by a；group by b；还有查看所有（select * from table 不带 group by）。")]),s._v(" "),a("li",[s._v("totals：group by a,b；查看所有（select * from table 不带 group by）；全部聚合。")])]),s._v(" "),a("p",[s._v("更多操作可以通过官方文档查看 https://clickhouse.com/docs/zh/sql-reference/functions/")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sku_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total_amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_order_mt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sku_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with rollup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"alter-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-操作"}},[s._v("#")]),s._v(" alter 操作")]),s._v(" "),a("p",[s._v("同 MySql 的修改字段基本一致"),a("br"),s._v("\n新增字段语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 列名 类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String等"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" afte 哪一列后面"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改字段语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 列名 类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String等"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除字段语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" 列名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"导出数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出数据"}},[s._v("#")]),s._v(" 导出数据")]),s._v(" "),a("div",{staticClass:"language-clickhouse line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("clickhouse-client --query \"select * from 表名 where create_time = '2021-10-29 16:00:00'\" --format CSVWithNames > /home/data/1.cvs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://clickhouse.com/docs/zh/interfaces/formats/",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多导入导出看官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);