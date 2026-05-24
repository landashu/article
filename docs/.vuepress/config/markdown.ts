import { MarkdownConfig } from "vuepress/config";
import mathjax3 from "markdown-it-mathjax3";

export default <MarkdownConfig>{
  lineNumbers: true,
  plugins: [
    "markdown-it-sub",
    "markdown-it-sup",
    "markdown-it-footnote",
    "markdown-it-task-lists",
    ["markdown-it-attrs", { allowedAttributes: ["id", "class", /^data-.*$/] }],
    "markdown-it-imsize",
    "markdown-it-abbr",
    "markdown-it-ins",
    "markdown-it-multimd-table-ext",
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
    md.use(mathjax3);
  },
  extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
};
