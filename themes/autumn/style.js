/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 扩展基础变量，提升复用性 */
      :root {
        --content-width: 768px;
        --theme-color: #ff8200;
        --theme-color-light: rgba(255, 130, 0, 0.1); /* 新增主题色浅色版本 */
        --fg-color: #495057;
        --fg-color-dark: #343a40; /* 标题深色 */
        --link-color: #36563c;
        --border-radius: 0.6em;
        --spacing-sm: 0.5rem;
        --spacing-md: 1rem;
        --transition-default: all 0.3s ease; /* 统一过渡效果 */
      }

      /* 全局基础优化 */
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased; /* 字体抗锯齿 */
        line-height: 1.5; /* 基础行高 */
      }

      /* 选中效果优化 */
      ::selection {
        background-color: var(--theme-color) !important;
        color: #fff !important;
        transition: var(--transition-default); /* 平滑过渡 */
      }

      /* 标题样式优化 */
      .notion-h-title {
        color: var(--fg-color-dark);
        font-weight: bold;
        margin-top: calc(var(--spacing-md) * 1.5); /* 标题上间距 */
        margin-bottom: var(--spacing-sm); /* 标题下间距 */
        line-height: 1.3; /* 标题行高 */
      }

      /* 文本类元素优化 - 保持原有类名 */
      .notion-text, .notion-list, .notion-toggle, .notion-to-do, .notion-quote,
      .notion-callout-text, .notion-simple-table-cell {
        letter-spacing: 0.5px;
        color: var(--fg-color);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.7; /* 提升行高，增强可读性 */
        margin-bottom: var(--spacing-sm); /* 统一文本块间距 */
      }

      /* 行内代码样式优化 */
      .notion-inline-code {
        background: rgba(255, 229, 100, 0.2);
        border-radius: 2px;
        color: var(--fg-color);
        padding: 0 0.25rem; /* 增加内边距，避免文字贴边 */
        font-size: 0.95rem; /* 略小于正文，区分层级 */
      }

      /* 图片样式优化 */
      .notion-asset-wrapper img {
        border-radius: var(--border-radius);
        transition: var(--transition-default);
        max-width: 100%; /* 确保图片不溢出容器 */
        height: auto; /* 保持图片比例 */
        margin: var(--spacing-md) 0; /* 图片上下间距 */
      }
      .notion-asset-wrapper img:hover {
        transform: translateY(-2px); /* 轻微上浮效果 */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 悬停阴影 */
      }

      /* 引用样式优化 */
      .notion-quote {
        border-radius: 0;
        border-left: 3px solid var(--theme-color);
        background-color: rgba(238, 241, 225, 0.3);
        padding: var(--spacing-md); /* 增加内边距 */
        margin: var(--spacing-md) 0; /* 引用块间距 */
      }

      /* 链接样式优化 */
      .notion-link {
        opacity: 1;
        color: var(--link-color);
        border-bottom: 1px dashed var(--link-color) !important;
        transition: var(--transition-default);
        padding: 0 0.1rem; /* 增加点击区域 */
      }
      .notion-link:hover {
        color: var(--theme-color);
        border-bottom: 1px dashed var(--theme-color) !important;
        background-color: var(--theme-color-light); /* 悬停背景色 */
      }

      /* 书签样式优化 */
      .notion-bookmark {
        transition: var(--transition-default);
        border-radius: 4px; /* 轻微圆角 */
        padding: var(--spacing-sm); /* 内边距调整 */
      }
      .notion-bookmark:hover {
        border-color: var(--theme-color);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* 悬停阴影 */
      }

      /* 提示框样式 */
      .notion-callout {
        border: 0;
        border-radius: 4px; /* 轻微圆角 */
        padding: var(--spacing-md); /* 统一内边距 */
        margin: var(--spacing-md) 0; /* 上下间距 */
      }

      /* 复选框样式优化 */
      .notion-property-checkbox-unchecked {
        border-radius: 2px;
        border: 1.3px solid var(--theme-color);
        transition: var(--transition-default);
      }
      .notion-property-checkbox-unchecked:hover {
        background-color: var(--theme-color-light); /* 未选中悬停效果 */
      }
      .notion-property-checkbox-checked {
        background: var(--theme-color);
        border-radius: 2px;
        transition: var(--transition-default);
      }
      .notion-property-checkbox-checked .svg {
        width: 12px;
        height: 12px;
        top: 2px;
        left: 2px;
        fill: white; /* 确保勾选图标颜色 */
      }

      /* 解决toggle marker间距问题 */
      .notion-toggle > summary {
        padding-left: var(--spacing-sm); /* 调整summary内边距 */
        cursor: pointer; /* 鼠标指针提示 */
      }
      .notion-toggle > summary::marker {
        color: var(--theme-color); /* 保持主题色一致 */
        font-size: 1.2em; /* 调整marker大小 */
        margin-right: 0.3rem; /* 增加与文本的间距 */
      }
      .notion-toggle > summary::-webkit-details-marker {
        color: var(--theme-color); /* 兼容webkit浏览器 */
        margin-right: 0.3rem;
      }

      /* 列表样式优化 */
      .notion-list {
        margin: var(--spacing-sm) 0; /* 列表块间距 */
      }
      .notion-list li {
        padding-left: var(--spacing-sm);
        margin-bottom: 0.3rem; /* 列表项间距 */
      }
      .notion-list ol > ul,
      .notion-list ul > ol {
        padding-left: var(--spacing-md); /* 嵌套列表缩进优化 */
        margin-top: 0.3rem;
      }
      .notion-list li::marker {
        color: var(--theme-color);
        font-weight: 600;
        letter-spacing: -1px;
      }

      /* 目录样式 */
      .notion-table-of-contents-item {
        opacity: 1;
        transition: var(--transition-default);
        padding: 0.2rem 0; /* 目录项间距 */
      }
      .notion-table-of-contents-item:hover {
        color: var(--theme-color); /* 目录项悬停效果 */
        padding-left: 0.2rem; /* 轻微缩进动画 */
      }

      /* 响应式适配 */
      @media (max-width: 768px) {
        :root {
          --content-width: 90%; /* 小屏幕内容宽度 */
        }
        .notion-text, .notion-list, .notion-toggle, .notion-to-do, .notion-quote,
        .notion-callout-text, .notion-simple-table-cell {
          font-size: 0.95rem; /* 小屏幕字体略小 */
        }
      }
    `}</style>
  )
}

export { Style }
