import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  
  // 回到顶部函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    })
  }

  return (
    <footer className='w-full border-t border-gray-200/[.8] relative 
      mt-72 md:mt-60
      /* 移除伪元素背景图设置，改为实际图片元素 */
    '>
      {/* 底部图片容器（可点击） */}
      <div 
        className='absolute w-full h-[22rem] z-10 -top-[17.6rem] left-0
          bg-no-repeat bg-left bg-cover lg:bg-contain
          cursor-pointer /* 鼠标悬停显示手型 */
        '
        style={{ backgroundImage: `url(/images/footer-bg.png)` }}
        onClick={scrollToTop} // 点击触发回到顶部
      />

      {/* 移动端图片缩小50%样式 */}
      <style jsx global>{`
        @media only screen and (max-width: 768px) {
          footer > div:first-of-type {
            height: 11rem !important;
            top: -8.8rem !important;
            width: 50% !important;
            background-size: contain !important;
            background-position: left top !important;
          }
        }
      `}</style>

      {/* 版权信息区 */}
      <div className='max-w-[var(--content-width)] mx-auto my-12 relative z-20'>
        <p className='mx-6 text-left text-xs text-gray-500 font-bold'>
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
