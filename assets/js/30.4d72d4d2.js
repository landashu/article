(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{507:function(s,a,t){"use strict";t.r(a);var n=t(41),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("awk 命令是逐行扫描文件（从第 1 行到最后一行），寻找含有目标文本的行，如果匹配成功，则会在该行上执行用户想要的操作；反之，则不对行做任何处理。")]),s._v(" "),t("h2",{attrs:{id:"f-指定字段分隔符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#f-指定字段分隔符"}},[s._v("#")]),s._v(" F（指定字段分隔符）")]),s._v(" "),t("p",[s._v("默认使用空格作为分隔符。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost awk]# echo \"aa bb  cc dd  ee ff\" | awk  '{print $1}'\naa\n[root@localhost awk]# echo \"aa bb l cc dd l ee ff\" | awk -F 'l' '{print $1}'\naa bb \n[root@localhost awk]# echo \"aa bb  cc : dd  ee ff\" | awk -F ':' '{print $1}'\naa bb  cc \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"fs-字段分隔符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fs-字段分隔符"}},[s._v("#")]),s._v(" FS（字段分隔符）")]),s._v(" "),t("p",[s._v("默认是空格和制表符。"),t("br"),s._v("\n$0 表示当前整行内容，$1，$2 表示第一个字段，第二个字段")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost zabbix_agentd.d]# echo \"aa bb cc  dd\" | awk '{ print $0}'\naa bb cc  dd\n[root@localhost zabbix_agentd.d]# echo \"aa bb cc  dd\" | awk '{ print $1}'\naa\n[root@localhost zabbix_agentd.d]# echo \"aa bb cc  dd\" | awk '{ print $2}'\nbb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"nf-当前行的字段个数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nf-当前行的字段个数"}},[s._v("#")]),s._v(" NF（当前行的字段个数）")]),s._v(" "),t("p",[t("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr"},attrs:{jax:"SVG"}},[t("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26.328ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 11637 950"}},[t("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[t("g",{attrs:{"data-mml-node":"math"}},[t("g",{attrs:{"data-mml-node":"mi"}},[t("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"}})]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(888,0)"}},[t("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D439",d:"M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"}})]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(1637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("就")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(2637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("代")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(3637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("表")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(4637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("最")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(5637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("后")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(6637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("一")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(7637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("个")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(8637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("字")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(9637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("段")])]),t("g",{attrs:{"data-mml-node":"mi",transform:"translate(10637,0)"}},[t("text",{attrs:{"data-variant":"italic",transform:"scale(1,-1)","font-size":"884px","font-family":"serif","font-style":"italic"}},[s._v("，")])])])])])]),s._v("(NF-1) 代表倒数第二个字段")],1),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost zabbix_agentd.d]# echo \"aa bb cc  dd\" | awk '{ print $NF}'\ndd\n[root@localhost zabbix_agentd.d]# echo \"aa bb cc  dd\" | awk '{ print $(NF-1)}'\ncc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"nr-当前处理的是第几行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nr-当前处理的是第几行"}},[s._v("#")]),s._v(" NR (当前处理的是第几行)")]),s._v(" "),t("p",[s._v("打印当前行号和当前文本内容")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost awk]# cat test.txt \naa ss\ndd ff\ngg hh\n[root@localhost awk]# cat test.txt | awk '{print NR\")\", $0}'\n1) aa ss\n2) dd ff\n3) gg hh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("逗号表示输出的变量之间用空格分隔；"),t("br"),s._v("\n右括号必需使用 双引号 才可以原样输出"),t("br"),s._v("\n打印指定行内容：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[root@localhost S17]# java -version \njava version "1.8.0_131"\nJava(TM) SE Runtime Environment (build 1.8.0_131-b11)\nJava HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)\n[root@localhost S17]# java -version 2>&1  | awk \'NR==1 {print $0}\'\njava version "1.8.0_131"\n[root@localhost S17]# \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"filename-当前文件名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filename-当前文件名"}},[s._v("#")]),s._v(" FILENAME (当前文件名)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost awk]#  awk '{print FILENAME, NR\")\", $0}' test.txt \ntest.txt 1) aa ss\ntest.txt 2) dd ff\ntest.txt 3) gg hh\n[root@localhost awk]# cat test.txt | awk '{print FILENAME, NR\")\", $0}'\n- 1) aa ss\n- 2) dd ff\n- 3) gg hh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("awk   '{condition  action}'   filename 这种形式时可以打印文件名；"),t("br"),s._v("\n通过 |（管道符）读取内容时打印的是 -")]),s._v(" "),t("h2",{attrs:{id:"其他变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他变量"}},[s._v("#")]),s._v(" 其他变量")]),s._v(" "),t("p",[s._v("RS：行分隔符，用于分割每一行，默认是换行符。"),t("br"),s._v("\nOFS：输出字段的分隔符，用于打印时分隔字段，默认为空格。"),t("br"),s._v("\nORS：输出记录的分隔符，用于打印时分隔记录，默认为换行符。"),t("br"),s._v("\nOFMT：数字输出的格式，默认为％.6g。")]),s._v(" "),t("h2",{attrs:{id:"print-和-printf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#print-和-printf"}},[s._v("#")]),s._v(" print 和 printf")]),s._v(" "),t("p",[s._v("awk 中同时提供了 print 和 printf 两种打印输出的函数。")]),s._v(" "),t("p",[s._v("print 函数，参数可以是变量、数值或者字符串。字符串必须用双引号引用，参数用逗号分隔。如果没有逗号，参数就串联在一起而无法区分。这里，逗号的作用与输出文件的分隔符的作用是一样的，只是后者是空格而已。")]),s._v(" "),t("p",[s._v("printf 函数，其用法和 c 语言中 printf 基本相似，可以格式化字符串，输出复杂时，printf 更加好用，代码更易懂。")]),s._v(" "),t("h2",{attrs:{id:"其他函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他函数"}},[s._v("#")]),s._v(" 其他函数")]),s._v(" "),t("p",[s._v("toupper ()：字符转为大写。"),t("br"),s._v("\ntolower ()：字符转为小写。"),t("br"),s._v("\nlength ()：返回字符串长度。"),t("br"),s._v("\nsubstr ()：返回子字符串。"),t("br"),s._v("\nsubstr ($1,2)：返回第一个字段，从第 2 个字符开始一直到结束。"),t("br"),s._v("\nsubstr ($1,2,3)：返回第一个字段，从第 2 个字符开始开始后的 3 个字符。"),t("br"),s._v("\nsin ()：正弦。"),t("br"),s._v("\ncos ()：余弦。"),t("br"),s._v("\nsqrt ()：平方根。"),t("br"),s._v("\nrand ()：随机数。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost awk]# echo \"aa bb  cc dd  ee ff\" | awk  '{print toupper($1)}'\nAA\n[root@localhost awk]# echo \"aa BB  cc dd  ee ff\" | awk  '{print tolower($2)}'\nbb\n[root@localhost awk]# echo \"aa BB  cc dd  ee ff\" | awk  '{print length($2)}'\n2\n[root@localhost awk]# echo \"asdfghj\" | awk '{print substr($1,2,3)}'\nsdf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件"}},[s._v("#")]),s._v(" 条件")]),s._v(" "),t("p",[s._v("awk 允许指定输出条件，只输出符合条件的行。"),t("br"),s._v("\nawk  ' 条件 {动作}' 文件名")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost awk]# cat exp.txt \n/stsvc/fms/conf/application.yml\n/stsvc/sms/conf/application.yml\n/stsvc/tms/conf/application.yml\n/root/home/chenfan\n/root/home/jhhuang\n[root@localhost awk]# cat exp.txt | awk '/stsvc/ {print $0}'     包含 stsvc 的行\n/stsvc/fms/conf/application.yml\n/stsvc/sms/conf/application.yml\n/stsvc/tms/conf/application.yml\n[root@localhost awk]# cat exp.txt | awk '/stsvc\\/fms/ {print $0}' 包含 stsvc/fms 的行\n/stsvc/fms/conf/application.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("布尔值判断")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost awk]# cat exp.txt | awk 'NR==2 {print $0}'　　等于第二行\n/stsvc/sms/conf/application.yml\n[root@localhost awk]# cat exp.txt | awk 'NR>4 {print $0}'　　大于第四行\n/root/home/jhhuang\n[root@localhost awk]# cat exp.txt | awk 'NR%2==1 {print $0}'　　奇数行\n/stsvc/fms/conf/application.yml\n/stsvc/tms/conf/application.yml\n/root/home/jhhuang\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("某个字段等于具体值")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost awk]# cat test.txt \naa ss\ndd ff\ngg hh\n[root@localhost awk]# cat test.txt | awk ' $2==\"ff\" {print $0}'\ndd ff\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("if 语句")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[root@localhost awk]# echo "aa ss dd" | awk \'{ if($3 == "dd") print $0; else print "nothing"}\'\naa ss dd\n[root@localhost awk]# echo "aa ss dds" | awk \'{ if($3 == "dd") print $0; else print "nothing"}\'\nnothing\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[s._v("#")]),s._v(" demo")]),s._v(" "),t("p",[s._v("以下脚本复制粘贴就可用，需要在和应用同级目录新建一个 logs 文件夹，使用方法 ./ 脚本.sh start 应用名称.jar，其中使用了 awk 命令解决获取 pid 问题")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#/bin/bash\n\n# 这里说一下 我用 /bin/sh 脚本里打印非正常 换成 /bin/bash 就好了\n# 通过执行文件获得 要被执行的jar 例如 ./start.sh test-0.0.1.jar 获取到 test-0.0.1.jar\n# $@获得所有参数,$1获得第一个参数\nMATHOD=$1\nAPP_NAME=$2\n# 在方法内直接使用是无法获取到个数的\nPARAM=$#\n\n# 参数校验\ncheck(){\n    if [ $PARAM -ne 2 ]; then\n        echo "run method  $0 start | stop  app_name.jar"\n        exit\n    fi\n}\n\n\n# 判断程序是否运行 如果不存在返回1，存在返回0\nis_exist(){\n    check\n    # grep -v grep 就是查找不含有 grep 字段的行，默认第一条命令会查出两行数据，第一行一般是我们所需要的，第二行就属于 grep的数据\n    # grep 是查找含有指定文本行的意思，比如grep test 就是查找含有test的文本的行\n    # grep -v 是反向查找的意思，比如 grep -v grep 就是查找不含有 grep 字段的行\n    # $(ps -ef | grep $jarname | grep -v grep) 是执行一个命令，并把结果赋给pid\n    # awk 百度\n    pid=`ps -ef | grep $APP_NAME | grep -v grep | awk \'{print $2}\'`\n    # [ -z STRING ] “STRING” 的长度为零则为真。\n    if [ -z "$pid" ]; then\n        return 1\n    else\n        return 0\n    fi\n}\n\n#启动方法\nstart(){\n    is_exist\n    # %%-* 表示从右边开始，删除最后（最左边）的 - 号及右边的多有字符\n    LOG_NAME="${APP_NAME%%-*}.log"\n    # $? 是一个特殊变量，用来获取上一个命令的退出状态，或者上一个函数的返回值。\n    # -eq 等于\n    if [ $? -eq 0 ]; then\n        stop\n        start_app\n    else\n        start_app\n    fi\n}\n\nstart_app(){\n    echo "$APP_NAME start..."\n    # 2> 表示把标准错误(stderr)重定向，标准输出(stdout)是1 2> 后面可以跟文件名，或者是&1, &2，分别表示重定向到标准输出和标准错误。\n    nohup java -jar $APP_NAME > logs/$LOG_NAME 2>&1 &\n    # 延迟 1s 1秒 1m 1分钟 1h 1小时 1d 1天\n    sleep 1s;\n    tail -f logs/$LOG_NAME\n}\n\n\n\n# 停止运行\nstop(){\n    is_exist\n    if [ $? -eq 0 ]; then\n        echo "$APP_NAME is running "\n        kill -9 $pid\n        echo "$APP_NAME is kill ok. pid is $pid"\n    else\n        echo "${APP_NAME} is not running"\n    fi\n}\n\n# 判断参数1是否为空，为空则告诉标准写法，不为空则把参数当方法执行\nif [ ! $1 ]; then\n    echo "run method  $0 start | stop  app_name.jar"\n    exit\nelse\n    $1\nfi\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br")])]),t("blockquote",[t("p",[s._v("编写 shell 脚本，函数一定要在最上面，否则调用函数会报 command not found")])])])}),[],!1,null,null,null);a.default=e.exports}}]);