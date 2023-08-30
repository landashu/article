(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{506:function(t,s,e){"use strict";e.r(s);var n=e(41),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Df 命令是 linux 系统以磁盘分区为单位查看文件系统，可以加上参数查看磁盘剩余空间信息，命令格式位  "),e("code",[t._v("df -h")]),t._v(" ，显示内容如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Filesystem")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Size")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Used")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Avail")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Use%")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Mounted on")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("文件系统")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("容量")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可用")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Use%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("已用 %")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("挂载点")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/hda2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("45G")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("19G")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("24G")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("44%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("/dev/hda1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("494M")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("19M")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("450M")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4%")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/boot")])])])]),t._v(" "),e("p",[t._v("查看磁盘剩余空间 df -hl")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost /]# df -hl\nFilesystem               Size  Used Avail Use% Mounted on\ndevtmpfs                 1.9G     0  1.9G   0% /dev\ntmpfs                    1.9G     0  1.9G   0% /dev/shm\ntmpfs                    1.9G   29M  1.9G   2% /run\ntmpfs                    1.9G     0  1.9G   0% /sys/fs/cgroup\n/dev/mapper/centos-root   47G   16G   32G  34% /\n/dev/sda1               1014M  326M  689M  33% /boot\ntmpfs                    378M  8.0K  378M   1% /run/user/42\ntmpfs                    378M   32K  378M   1% /run/user/1000\n/dev/sr0                 4.3G  4.3G     0 100% /run/media/fengqianrun/CentOS 7 x86_64\ntmpfs                    378M     0  378M   0% /run/user/0\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("p",[t._v("查看每个根路径的分区大小 df -h")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost /]# df -h\nFilesystem               Size  Used Avail Use% Mounted on\ndevtmpfs                 1.9G     0  1.9G   0% /dev\ntmpfs                    1.9G     0  1.9G   0% /dev/shm\ntmpfs                    1.9G   29M  1.9G   2% /run\ntmpfs                    1.9G     0  1.9G   0% /sys/fs/cgroup\n/dev/mapper/centos-root   47G   16G   32G  34% /\n/dev/sda1               1014M  326M  689M  33% /boot\ntmpfs                    378M  8.0K  378M   1% /run/user/42\ntmpfs                    378M   32K  378M   1% /run/user/1000\n/dev/sr0                 4.3G  4.3G     0 100% /run/media/fengqianrun/CentOS 7 x86_64\ntmpfs                    378M     0  378M   0% /run/user/0\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("p",[t._v("返回该目录的大小 du -sh [目录名]")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost /]# du -sh /root\n803M    /root\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("返回该文件夹总 M 数  du -sm [文件夹]")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost /]# du -sm /root\n803     /root\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("查看指定文件夹下的所有文件大小（包含子文件夹) du -h [目录名]")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@localhost /]# du -h /root\n12K     /root/redis-6.0.5/utils/hyperloglog\n20K     /root/redis-6.0.5/utils/lru\n20K     /root/redis-6.0.5/utils/releasetools\n12K     /root/redis-6.0.5/utils/srandmember\n164K    /root/redis-6.0.5/utils\n71M     /root/redis-6.0.5\n803M    /root\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("产看文件属于哪个磁盘 df -h [目录]")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//没有挂载磁盘的目录，显示在系统盘\n[root@iZ2ze57v3n0zma46zqiq8nZ sh-1.5.5]# df -h /alidata/\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vda1        40G  4.6G   33G  13% /\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//挂载了磁盘的目录，显示在数据盘分区vdb1\n[root@iZ2ze57v3n0zma46zqiq8nZ sh-1.5.5]# df -h /mnt/\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vdb1        20G   45M   19G   1% /mnt\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("在显示结果中的 Filesystem 和 Mounted on，这两列就是这个目录所属的磁盘分区。"),e("br"),t._v("\n因为 Linux 是树形文件系统，目录属于哪个磁盘分区取决于挂载磁盘时的挂载点，所以要想知道目录在哪个分区，就要借助显示磁版盘信息（特别能显示挂载点）的命令。df 命令是显示磁盘容量的，但是以目录作为参数，可以显示目录所在磁盘的信息。所以这个笨办法也算是个好办法吧。")])])}),[],!1,null,null,null);s.default=a.exports}}]);