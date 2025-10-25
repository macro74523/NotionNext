import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='w-full border-t border-gray-200/[.8] relative 
      /* 整体上下间距：桌面端更紧凑，避免与内容脱节 */
      mt-32 md:mt-48 lg:mt-56 mb-8
      /* 伪元素基础样式：统一位置和层级 */
      before:w-full before:block before:absolute before:left-0 before:z-10
      before:bg-no-repeat before:bg-center before:pointer-events-none
      /* 按屏幕分级控制伪元素高度（桌面端降低高度，避免图片过大） */
      before:h-[12rem] sm:before:h-[14rem] md:before:h-[16rem] lg:before:h-[18rem]
      /* 伪元素顶部偏移：配合高度调整，确保图片在底部区域内 */
      before:-top-[8rem] sm:before:-top-[10rem] md:before:-top-[12rem] lg:before:-top-[14rem]
      /* 恢复原背景图路径，未改动 */
      before:bg-[url(/images/footer-bg.png)]
    '>
      {/* 分屏幕控制背景图尺寸：核心解决电脑端太大问题 */}
      <style jsx global>{`
        /* 移动端：保持自适应，避免拉伸 */
        @media (max-width: 768px) {
          footer::before {
            background-size: contain;
          }
        }
        /* 电脑端（大屏）：限制图片尺寸，避免过大溢出 */
        @media (min-width: 1024px) {
          footer::before {
            background-size: contain; /* 或用 auto 保持原图比例，根据图片实际尺寸选择 */
            max-width: 1200px; /* 限制背景图最大宽度，与内容区匹配 */
            left: 50%; /* 居中 */
            transform: translateX(-50%); /* 水平居中偏移 */
          }
        }
      `}</style>

      {/* 版权信息区：确保层级高于背景图，文字清晰 */}
      <div className='max-w-[var(--content-width)] mx-auto px-6 relative z-20'>
        <p className='text-left text-xs sm:text-sm text-gray-500 font-bold 
          px-3 py-2 bg-white/80 backdrop-blur-sm rounded-md inline-block'>
          &copy; {`${copyrightDate}`} {siteConfig('AUTHOR')}
          {' · Powered by '}
          <Link
            href={'https://github.com/xxxuuu/NotionNext'}
            className='hover:underline text-gray-700 transition-colors duration-200'
            target='_blank' // 新增：打开新页面，不跳转当前页
            rel='noopener noreferrer' // 安全优化
          >
            NotionNext
          </Link>
        </p>
      </div>
    </footer>
  )
}
