/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      :root {
        --content-width: 768px;
        --theme-color: #ff8200;
        --fg-color: #495057;
        --tag-bg: rgba(245, 245, 245, 0.8); /* Tag默认背景色 */
        --tag-hover-bg: var(--theme-color); /* Tag hover背景色（贴合主题） */
        --tag-text: #666; /* Tag默认文字色 */
        --tag-hover-text: #fff; /* Tag hover文字色 */
      }

      /* 👇 优化后的Tag标签样式（核心新增） */
      /* 匹配Tag组件中Link的选择器，若Tag组件有自定义类名可替换为实际类名 */
      a[href^="/tag/"], /* 基于Tag跳转路径匹配（/tag/xxx） */
      .tag-item { /* 若Tag组件添加了class="tag-item"，可优先用此类名 */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 4px 12px; /* 优化内边距，避免过挤/过松 */
        margin: 0 6px 6px 0; /* 优化外边距，防止标签重叠 */
        border-radius: 9999px; /* 完全圆角，更柔和 */
        background-color: var(--tag-bg);
        color: var(--tag-text);
        font-size: 13px; /* 适配文字大小，避免过大 */
        font-weight: 500; /* 文字稍粗，提升辨识度 */
        text-decoration: none; /* 清除Link默认下划线 */
        transition: all 300ms ease; /* 统一过渡动效，更流畅 */
        cursor: pointer;
      }

      /* Tag hover交互：贴合主题色，增强点击反馈 */
      a[href^="/tag/"]:hover,
      .tag-item:hover {
        background-color: var(--tag-hover-bg);
        color: var(--tag-hover-text);
        transform: scale(1.05); /* 轻微放大，提升交互感 */
        box-shadow: 0 2px 8px rgba(255, 130, 0, 0.3); /* 主题色阴影，增强层次 */
      }

      /* Tag聚焦状态：支持键盘导航，提升可访问性 */
      a[href^="/tag/"]:focus,
      .tag-item:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 130, 0, 0.5); /* 聚焦外框，贴合主题 */
      }

      /* 👇 原有样式保持不变 */
      ::selection {
        background-color: var(--theme-color) !important;
        color: #fff !important;
      }

      .notion-h-title {
        color: #343a40;
        font-weight: bold;
      }
      .notion-text, .notion-list, .notion-toggle, .notion-to-do, .notion-quote,
      .notion-callout-text, .notion-simple-table-cell {
        letter-spacing: .5px;
        color: var(--fg-color);
        font-size: 1rem;
        font-weight: 400;
      }
      .notion-inline-code {
        background: rgba(255, 229, 100, .2);
        border-radius: 2px;
        color: var(--fg-color);
      }
      .notion-asset-wrapper img {
        border-radius: .6em;
      }

      .notion-quote {
        border-radius: 0;
        border-left: 3px solid var(--theme-color);
        background-color: rgba(238,241,225,0.3);
      }
      .notion-link {
        opacity: 1;
        color: #36563c;
        border-bottom: 1px dashed #36563c !important;
        transition: all .3s;
      }
      .notion-link:hover {
        color: var(--theme-color);
        border-bottom: 1px dashed var(--theme-color) !important;
      }
      .notion-bookmark {
        transition: all .3s;
      }
      .notion-bookmark:hover {
        border-color: var(--theme-color);
      }
      .notion-callout {
        border: 0;
      }

      .notion-property-checkbox-unchecked {
        border-radius: 2px;
        border: 1.3px solid var(--theme-color);
      }
      .notion-property-checkbox-checked {
        background: var(--theme-color);
        border-radius: 2px;
      }
      .notion-property-checkbox-checked .svg {
        width: 12px;
        height: 12px;
        top: 2px;
        left: 2px
      }

      .notion-toggle > summary::marker {
        # TODO gap between marker and text
      }

      .notion-list li {
        padding-left: 0.5rem;
      }
      .notion-list ol > ul {
        padding-left: 0;
      }
      .notion-list ul > ol {
        padding-left: 0;
      }
      .notion-list li::marker {
        color: var(--theme-color);
        font-weight: 600;
        letter-spacing: -1px;
      }
      .notion-table-of-contents-item {
        opacity: 1;
      }
    `}</style>
  )
}

export { Style }
