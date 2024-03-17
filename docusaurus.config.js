/* eslint-disable import/no-import-module-exports */
// @ts-check
// Note: type annotations allow type checking  and IDEs autocompletion
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const tailwindCSS = require("tailwindcss");
const autoprefixerModule = require("autoprefixer");
const { themes } = require("prism-react-renderer");

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const baseUrl = "voices-against-drugs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Timeline of Richmond Supervised Consumption Sites (SCS) Incident",
  tagline: "Life is short, stay away from drugs.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://voices-bridges.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Voice-And-Bridges", // Usually your GitHub org/user name.
  projectName: "voices-against-drugs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-HanS", "zh-HanT".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/voices-bridges/${baseUrl}/edit/main/`,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({ content, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 220 } }),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/voices-bridges/${baseUrl}/edit/main/`,
          blogSidebarCount: "ALL",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
      {
        gtag: {
          trackingID: "G-V4716YXVBJ",
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(tailwindCSS);
          postcssOptions.plugins.push(autoprefixerModule);
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "voices-against-drugs",
        logo: {
          alt: "voices-against-drugs",
          src: "img/logo.webp",
        },
        items: [
          {
            to: "/docs",
            type: "docSidebar",
            sidebarId: "docsSidebarID",
            position: "left",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blogs",
            position: "left",
          },
          //   {
          //     type: "localeDropdown",
          //     position: "right",
          //   },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Voices And Bridges, built with <a href="https://docusaurus.io/">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        // https://mermaid.js.org/config/theming.html
        theme: { light: "default", dark: "forest" },
      },
    }),
  // Enable mermaid in markdown.
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  //   Integrate webpack with SWC to speed up building time.
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
