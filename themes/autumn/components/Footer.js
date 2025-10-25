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
      /* 电脑端保持原边距，移动端缩小上边距 */
      mt-72 md:mt-60
      /* 伪元素基础样式（电脑端不变） */
      before:w-full before:h-[22rem] before:z-10 before:block before:absolute 
      before:-top-[17.6rem] before:left-0
      before:bg-[url(/images/footer-bg.png)] before:bg-no-repeat before:bg-left 
      before:bg-cover lg:before:bg-contain
    '>
      {/* 强制移动端缩小50%，解决样式未生效问题 */}
      <style jsx global>{`
        /* 精确匹配移动端断点，确保样式覆盖 */
        @media only screen and (max-width: 768px) {
          /* 强制伪元素尺寸缩小50%，提高选择器优先级 */
          footer:before {
            height: 11rem !important; /* 原22rem → 缩小50% */
            top: -8.8rem !important; /* 原-17.6rem → 同步缩小 */
            width: 50% !important; /* 宽度同步缩小50% */
            background-size: contain !important; /* 强制图片适配缩小后的容器 */
            background-position: left top !important; /* 靠左上对齐，避免留白 */
          }
          
          /* 移动端内容区同步缩小间距 */
          footer > div {
            margin-top: 6rem !important;
            margin-bottom: 6rem !important;
          }
        }
      `}</style>

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
