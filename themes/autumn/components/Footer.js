import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='w-full border-t border-gray-200/[.8] relative mt-72 md:mt-60
      /* 保持原大小不变（高度、边距、偏移量均未修改） */
      before:w-full before:h-[22rem] before:z-10 before:block before:absolute before:-top-[17.6rem] before:left-0
      /* 核心调整：背景图靠左显示，替换原center；保持原缩放规则不变 */
      before:bg-[url(/images/footer-bg.png)] before:bg-no-repeat before:bg-left before:bg-cover lg:before:bg-contain
    '>
      {/* 补充自适应样式：确保所有设备背景图均靠左 */}
      <style jsx global>{`
        /* 移动端强制靠左，保持原大小比例 */
        @media (max-width: 768px) {
          footer::before {
            background-position: left center; /* 移动端靠左居中对齐 */
          }
        }
        /* 电脑端强制靠左，保持原大小比例 */
        @media (min-width: 769px) {
          footer::before {
            background-position: left center; /* 电脑端靠左居中对齐 */
          }
        }
      `}</style>

      {/* 内容区保持原样，大小和布局未修改 */}
      <div className='max-w-[var(--content-width)] mx-auto my-12'>
        <p className='mx-6 text-left text-xs text-gray-500 font-bold relative z-20'>
          &copy; {`${copyrightDate}`} {siteConfig('AUTHOR')}
          {' · Powered by '}
          <Link
            href={'https://github.com/xxxuuu/NotionNext'}
            className='hover:underline text-gray-700'>
            NotionNext
          </Link>
        </p>
      </div>
    </footer>
  )
}
