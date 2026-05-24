import { HeadTags } from "vuepress/config";

export default <HeadTags>[
  ["link", { rel: "icon", href: "/favicon.ico" }],
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no",
    },
  ],
  // MathJax SVG 输出的基础样式
  [
    "style",
    {},
    `mjx-container { display: inline-block; margin: 0; padding: 0; }
     mjx-container[display="true"] { display: block; text-align: center; margin: 1em 0; }`
  ],
];
