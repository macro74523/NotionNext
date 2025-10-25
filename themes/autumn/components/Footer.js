import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='w-full border-t border-gray-200/[.8] relative mt-40 md:mt-60 lg:mt-72
      before:w-full before:block before:absolute before:left-0 before:z-10
      before:bg-no-repeat before:bg-center before:bg-cover
      /* 基础伪元素尺寸 - 随屏幕适配调整 */
      before:h-[18rem] sm:before:h-[20rem] lg:before:h-[22rem]
      /* 伪元素位置调整 - 确保图片在底部区域内 */
      before:-top-[14rem] sm:before:-top-[15rem] lg:before:-top-[17.6rem]
      /* 背景图路径（可替换为你的新图片路径） */
      before:bg-[url(/images/new-footer-bg.png)]
    '>
      {/* 移动端背景适配 */}
      <style jsx global>{`
        @media (max-width: 640px) {
          footer::before {
            background-size: contain; /* 移动端图片自适应容器，避免拉伸 */
            background-position: bottom center; /* 确保图片底部对齐 */
          }
        }
      `}</style>

      <div className='max-w-[var(--content-width)] mx-auto my-12 relative z-20'>
        <p className='mx-6 text-left text-xs sm:text-sm text-gray-500 font-bold 
          px-2 py-3 bg-white/70 backdrop-blur-sm rounded-md inline-block'>
          &copy; {`${copyrightDate}`} {siteConfig('AUTHOR')}
          {' · Powered by '}
          <Link
            href={'https://github.com/xxxuuu/NotionNext'}
            className='hover:underline text-gray-700 transition-colors duration-200'>
            NotionNext
          </Link>
        </p>
      </div>
    </footer>
  )
}
