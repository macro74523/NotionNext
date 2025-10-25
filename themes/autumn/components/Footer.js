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
      /* 调整整体间距，确保背景图在可视范围内 */
      mt-24 md:mt-32 lg:mt-40 mb-8
      /* 伪元素基础样式：确保显示优先级 */
      before:w-full before:block before:absolute before:left-0 before:z-10
      before:bg-no-repeat before:bg-center before:pointer-events-none
      before:opacity-100 /* 强制显示，避免被隐藏 */
      /* 调整高度：电脑端适当增加，确保图片能显示 */
      before:h-[14rem] sm:before:h-[16rem] md:before:h-[18rem] lg:before:h-[20rem]
      /* 调整顶部偏移：减少负值，避免图片上移超出可视区 */
      before:-top-[10rem] sm:before:-top-[11rem] md:before:-top-[13rem] lg:before:-top-[15rem]
      /* 路径不变！保持原始图片路径 */
      before:bg-[url(/images/footer-bg.png)]
    '>
      <style jsx global>{`
        /* 移动端：保持自适应 */
        @media (max-width: 768px) {
          footer::before {
            background-size: contain; /* 移动端自适应 */
          }
        }
        /* 电脑端：修复不显示问题 */
        @media (min-width: 769px) {
          footer::before {
            background-size: cover; /* 改用cover，确保图片铺满横向区域 */
            background-position: bottom center; /* 底部对齐，避免上移隐藏 */
            max-width: 100%; /* 取消过严的宽度限制，让图片随屏幕宽度显示 */
            left: 0; /* 取消居中偏移，避免位置错误 */
            transform: none; /* 清除 translateX，防止偏移导致隐藏 */
          }
        }
      `}</style>

      <div className='max-w-[var(--content-width)] mx-auto px-6 relative z-20'>
        <p className='text-left text-xs sm:text-sm text-gray-500 font-bold 
          px-3 py-2 bg-white/80 backdrop-blur-sm rounded-md inline-block'>
          &copy; {`${copyrightDate}`} {siteConfig('AUTHOR')}
          {' · Powered by '}
          <Link
            href={'https://github.com/xxxuuu/NotionNext'}
            className='hover:underline text-gray-700 transition-colors duration-200'
            target='_blank'
            rel='noopener noreferrer'
          >
            NotionNext
          </Link>
        </p>
      </div>
    </footer>
  )
}
