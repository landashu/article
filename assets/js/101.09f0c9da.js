(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{578:function(s,a,e){"use strict";e.r(a);var n=e(41),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户"}},[s._v("#")]),s._v(" 用户")]),s._v(" "),e("p",[s._v("关于 useradd 的某些参数：")]),s._v(" "),e("ul",[e("li",[s._v("-u UID：指定 UID，这个 UID 必须是大于等于 500，并没有其他用户占用的 UID")]),s._v(" "),e("li",[s._v("-g GID/GROUPNAME：指定默认组，可以是 GID 或者 GROUPNAME，同样也必须真实存在")]),s._v(" "),e("li",[s._v("-G GROUPS：指定附加组")]),s._v(" "),e("li",[s._v("-c COMMENT：指定用户的注释信息")]),s._v(" "),e("li",[s._v("-d PATH：指定用户的家目录")])]),s._v(" "),e("blockquote",[e("p",[s._v("-g 基本组：如果没有指定用户组，创建用户的时候系统会默认同时创建一个和这个用户名同名的组，这个组就是基本组，不可以把用户从基本组中删除。在创建文件时，文件的所属组就是用户的基本组。"),e("br"),s._v("\n-G 附加组：除了基本组之外，用户所在的其他组，都是附加组。用户是可以从附加组中被删除的。"),e("br"),s._v("\n用户不论为与基本组中还是附加组中，就会拥有该组的权限。一个用户可以属于多个附加组。但是一个用户只能有一个基本组。")])]),s._v(" "),e("p",[s._v("查看所有用户")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" xulei -d /home/users/xulei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("删除用户及关联的目录")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" -r xulei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"usermod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usermod"}},[s._v("#")]),s._v(" usermod")]),s._v(" "),e("p",[s._v("usermod 命令用于修改用户帐号。")]),s._v(" "),e("ul",[e("li",[s._v("-c <备注> 　修改用户帐号的备注文字。")]),s._v(" "),e("li",[s._v("-d 登入目录 > 　修改用户登入时的目录。")]),s._v(" "),e("li",[s._v("-e <有效期限> 　修改帐号的有效期限。")]),s._v(" "),e("li",[s._v("-f <缓冲天数> 　修改在密码过期后多少天即关闭该帐号。")]),s._v(" "),e("li",[s._v("-g <主组> 　修改用户所属主组。")]),s._v(" "),e("li",[s._v("-G <群组> 　修改用户所属的附加群组。")]),s._v(" "),e("li",[s._v("-l <帐号名称> 　修改用户帐号名称。")]),s._v(" "),e("li",[s._v("-L 锁定用户密码，使密码无效。")]),s._v(" "),e("li",[s._v("-s 修改用户登入后所使用的 shell。")]),s._v(" "),e("li",[s._v("-u 修改用户 ID。")]),s._v(" "),e("li",[s._v("-U 解除密码锁定。")]),s._v(" "),e("li",[s._v("-a 代表 append，也就是将用户添加到新用户组中而不必离开原有的其他用户组")])]),s._v(" "),e("p",[s._v("将 xulei 添加到 root 组")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -g root xulei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果添加的用户不能通过 ssh 登录，可以查看用户受否有 bash 权限")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有用户，可以查看用户是否有如下路径")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改用户有 /bin/bash 权限")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -s /bin/bash 用户名\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止用户有 /bin/bash 改为 /sbin/nologin")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -s /sbin/nologin 用户名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"用户组-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户组-group"}},[s._v("#")]),s._v(" 用户组 group")]),s._v(" "),e("p",[s._v("关于组的增加和删除信息会在 etc 目录的 group 文件中找到，命令 cat /etc/group 可以看到自己的分组和分组 id，0 表示管理员（root），1 - 500 表示系统用户。")]),s._v(" "),e("p",[s._v("groupadd 命令 语法格式如下：")]),s._v(" "),e("ul",[e("li",[s._v("-g：指定新建工作组的 id；")]),s._v(" "),e("li",[s._v("-r：创建系统工作组，系统工作组的组 ID 小于 500；")]),s._v(" "),e("li",[s._v('-K：覆盖配置文件 "/ect/login.defs"；')]),s._v(" "),e("li",[s._v("-o：允许添加组 ID 号不唯一的工作组。")]),s._v(" "),e("li",[s._v("-f,--force: 如果指定的组已经存在，此选项将失明了仅以成功状态退出。当与 -g 一起使用，并且指定的 GID_MIN 已经存在时，选择另一个唯一的 GID（即 - g 关闭）。")])]),s._v(" "),e("p",[s._v("查看所有组")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看当前组")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xulei@node102 sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" \nxulei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("查看用户所属组")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("xulei@node102 sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v(" root\nroot "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("删除组")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupdel")]),s._v(" xulei\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加额外组")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G 组名称 用户名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"文件权限-chown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件权限-chown"}},[s._v("#")]),s._v(" 文件权限 chown")]),s._v(" "),e("p",[s._v("用来更改某个目录或文件的用户名和用户组。")]),s._v(" "),e("ul",[e("li",[s._v("user : 新的档案拥有者的使用者 ID")]),s._v(" "),e("li",[s._v("group : 新的档案拥有者的使用者群体 (group)")]),s._v(" "),e("li",[s._v("-c : 若该档案拥有者确实已经更改，才显示其更改动作")]),s._v(" "),e("li",[s._v("-f : 若该档案拥有者无法被更改也不要显示错误讯息")]),s._v(" "),e("li",[s._v("-h : 只对于连结 (link) 进行变更，而非该 link 真正指向的档案")]),s._v(" "),e("li",[s._v("-v : 显示拥有者变更的详细资料")]),s._v(" "),e("li",[s._v("-R : 对目前目录下的所有档案与子目录进行相同的拥有者变更 (即以递回的方式逐个变更)")]),s._v(" "),e("li",[s._v("--help : 显示辅助说明")]),s._v(" "),e("li",[s._v("--version : 显示版本")])]),s._v(" "),e("p",[s._v("修改 abc 文件的所有者")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root abc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("把目录 /demo 及其下的所有文件和子目录的所有人改成 root，所属组改成 roota。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:roota /demo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"chmod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[s._v("#")]),s._v(" chmod")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("-rwxr--r--. "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" xulei root  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("98")]),s._v(" Sep  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":49 arp.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("-rwxr--r--  一共 10 个字符，下面讲解下：")]),s._v(" "),e("ul",[e("li",[s._v("d 表示目录，如果是 - 表示是一个普通文件。剩余的 9 个字符，分成 3 组，每组 3 个字符，分别表示 user/group/others 的 rwx 权限；")]),s._v(" "),e("li",[s._v("u user 表示拥有者，可以看到拥有者是 xulei 用户，但文件还属于 root 组，因此 xulei 还是无法执行该文件。")]),s._v(" "),e("li",[s._v("g group 表示组，除了 mysql 这个人的 同一个 MySQL 组拥有的权力")]),s._v(" "),e("li",[s._v("o others 就是其他人了，啥权限也没有。")]),s._v(" "),e("li",[s._v("a 表示 “所有 (all) 用户”。它是系统默认值。")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node102 sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod a+rwx checkLogin.sh ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node102 sh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\ntotal "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n-rwxr--r--. "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" xulei root  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("98")]),s._v(" Sep  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":49 arp.sh\n-rwxrwxrwx. "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" xulei root "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("353")]),s._v(" Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":31 checkLogin.sh\n-rwxr--r--. "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  root "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" Sep  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":39 nginx_check.sh\n-rwxr-xr-x. "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root  root "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("595")]),s._v(" Nov "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":15 start.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);