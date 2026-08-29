import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teek-config";
// 本地 Teek 主题包引用（与 Teek 在线主题包引用 二选一）
import { version } from "../../packages/teek/version";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { version } from "vitepress-theme-teek/es/version";

const description = [
  "✨一个自由、开放的 Minecraft 服务器，欢迎各位玩家加入！",
  "这是飞焰矩阵服务器的文档，在这你可以找到关于飞焰矩阵服务器的一切。",
].toString();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "飞焰矩阵 文档",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/fm-logo-mini.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/fm-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "飞焰矩阵 文档" }],
    ["meta", { property: "og:site_name", content: "飞焰矩阵 文档" }],
    ["meta", { property: "og:image", content: "/fm-logo-large.png" }],
    ["meta", { property: "og:url", content: "https://docs.fblaze62.top" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "FeatherBlaze" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", description }],
    ["meta", { name: "baidu-site-verification", content: "codeva-GdK2q9MO1i" }], // 百度收录
    ["meta", { name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" }], // Bing 收录验证
    ["script", { charset: "UTF-8", id: "LA_COLLECT", src: "//sdk.51.la/js-sdk-pro.min.js" }], // 51.la
    [
      "script",
      {},
      `typeof LA !== 'undefined' && LA.init({ id: "3LqfP8Icg0GeEvtn", ck: "3LqfP8Icg0GeEvtn", hashMode: true })`,
    ], // 51.la
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://docs.fblaze62.top",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url.replace(".html", "")];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/fm-logo-mini.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "玩家指南",
        link: "/guide/player/getting-started/download-modpack",
        activeMatch: "/01.玩家指南/01.加入服务器",
      },
      {
        text: "管理员指南",
        link: "/guide/op/plugins/AuthMe",
        activeMatch: "/02.管理员指南/01.插件/",
      },
      {
        text: "贡献指南",
        link: "/guide/contribute/docs/edit",
        activeMatch: "/03.贡献指南/01.维护文档/",
      },
      // {
      //   text: "指南",
      //   link: "/guide/intro",
      //   activeMatch: "/01.指南/",
      // },
      // { text: "配置", link: "/reference/config", activeMatch: "/10.配置/" },
      // { text: "开发", link: "/develop/intro", activeMatch: "/15.主题开发/" },
      // {
      //   text: "资源",
      //   items: [
      //     { text: "案例", link: "/resources/case" },
      //     { text: "常见问题", link: "/resources/qa" },
      //     { text: "功能拓展", link: "/resources/expand/intro" },
      //   ],
      // },
      // {
      //   text: "生态",
      //   items: [
      //     { text: "Components 组件", link: "/ecosystem/components" },
      //     { text: "运行时 API", link: "/ecosystem/runtime-api" },
      //     { text: "Helper 工具", link: "/ecosystem/helper" },
      //     { text: "Composables 函数", link: "/ecosystem/composables" },
      //     { text: "Markdown 插件工具", link: "/ecosystem/md-plugin-utils" },
      //   ],
      // },
      // {
      //   text: "功能页",
      //   items: [
      //     { text: "归档页", link: "/archives" },
      //     { text: "清单页", link: "/articleOverview" },
      //     { text: "登录页", link: "/login" },
      //     { text: "风险链接提示页", link: "/risk-link?target=https://vp.teek.top" },
      //     { text: "分类页", link: "/categories" },
      //     { text: "标签页", link: "/tags" },
      //   ],
      // },
      // { text: "✨ 赞赏", link: "/personal/" },
      // {
      //   text: version,
      //   items: [
      //     { text: "历史版本", link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/releases" },
      //     { text: "更新日志", link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/dev/CHANGELOG.md" },
      //   ],
      // },
    ],
    socialLinks: [
      {
        icon: "qq",
        link: "https://qm.qq.com/q/WXI8ntxaow",
      },
      {
        icon: "github",
        link: "https://github.com/fblaze62/fmdocs",
      },
    ],
    search: {
      provider: "local",
      options: {
        appId: "",
        apiKey: "",
        indexName: "",
      },
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/fblaze62/fmdocs/edit/main/docs/:path",
    },
  },
  vite: {
    plugins: [llmstxt() as any],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});
