import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  // VitePress's options here...
  base: '/',
  title: "Zachary Boivin",
  description: "Full Stack Developer",
  themeConfig: {
    // ...
  }
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: false,
  includeRootIndexFile: false,
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));