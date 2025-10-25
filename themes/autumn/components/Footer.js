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
      /* 按屏幕尺寸分级适配高度，避免移动端图片过高 */
      before:h-[18rem] sm:before:h-[20rem] lg:before:h-[22rem]
      /* 适配不同屏幕的图片位置，确保不溢出可视区 */
      before:-top-[14rem] sm:before:-top-[15rem] lg:before:-top-[17.6rem]
      /* 恢复原背景图路径，未做修改 */
      before:bg-[url(/images/footer-bg.png)]
    '>
      {/* 移动端专属适配：避免图片拉伸/裁剪 */}
      <style jsx global>{`
        @media (max-width: 640px) {
          footer::before {
            background-size: contain; /* 移动端图片自适应容器，不拉伸 */
            background-position: bottom center; /* 确保图片底部对齐，不裁切关键部分 */
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
