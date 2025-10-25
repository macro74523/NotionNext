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
      /* 电脑端保持原上边距，移动端缩小50% */
      mt-72 md:mt-60 sm:mt-36
      /* 伪元素基础样式（电脑端保持原样） */
      before:w-full before:h-[22rem] before:z-10 before:block before:absolute 
      before:-top-[17.6rem] before:left-0
      before:bg-[url(/images/footer-bg.png)] before:bg-no-repeat before:bg-left 
      before:bg-cover lg:before:bg-contain
    '>
      {/* 移动端专属样式：缩小50% + 保持靠左 */}
      <style jsx global>{`
        @media (max-width: 768px) {
          footer::before {
            /* 伪元素高度缩小50%（22rem → 11rem） */
            height: 11rem;
            /* 顶部偏移同步缩小50%（-17.6rem → -8.8rem），保持位置比例 */
            top: -8.8rem;
            /* 背景图尺寸适配缩小后的容器，避免拉伸 */
            background-size: auto 100%;
            /* 强制保持靠左，与电脑端一致 */
            background-position: left center;
          }
        }
      `}</style>

      {/* 内容区间距：移动端同步缩小50% */}
      <div className='max-w-[var(--content-width)] mx-auto my-12 sm:my-6'>
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
