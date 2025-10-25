import { siteConfig } from '@/lib/config'
import Link from 'next/link'

export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='w-full border-t border-gray-200/[.8] relative mt-36 md:mt-30 /* 整体上边距同步缩小50% */
      before:w-full before:h-[11rem] /* 原高度22rem → 缩小50%为11rem */ before:z-10 before:block before:absolute 
      before:-top-[8.8rem] /* 原偏移-17.6rem → 缩小50%为-8.8rem */ before:left-0
      before:bg-[url(/images/footer-bg.png)] before:bg-no-repeat before:bg-center before:bg-cover 
      lg:before:bg-contain /* 保持原有背景缩放规则 */
    '>
      <div className='max-w-[var(--content-width)] mx-auto my-6 /* 底部间距同步缩小50% */'>
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
