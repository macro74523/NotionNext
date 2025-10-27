import { siteConfig } from '@/lib/config'
import { MenuList } from './MenuList'
import { SocialButton } from './SocialButton'
import LazyImage from '@/components/LazyImage'
import { useRouter } from 'next/router'

export const Header = props => {
  const router = useRouter()
  const bannerBgColor = siteConfig('AUTUMN_BANNER_BG_COLOR') // 外层背景色，用于渐变匹配

  return (
    <header
      style={{ backgroundColor: `${bannerBgColor}` }}
      className='w-full h-[430px] flex justify-center z-10 relative'
    >
      {/* 背景图容器：仅左右5%渐变，不遮挡核心内容 */}
      <div
        style={{ backgroundImage: `url(${siteConfig('HOME_BANNER_IMAGE')})` }}
        className={`max-w-[var(--content-width)] size-full px-5 flex justify-center items-center flex-col relative bg-cover bg-center`}
      >
        {/* 核心修改：左右仅5%面积渐变，中间90%完全显示背景图 */}
        <style jsx>{`
          div::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1; /* 严格低于内容层级，不影响点击 */
            background: linear-gradient(
              to right, 
              ${bannerBgColor} 0%,    /* 左侧起点：外层背景色 */
              transparent 5%,        /* 左侧5%处完全透明（渐变仅占5%） */
              transparent 95%,       /* 右侧95%处开始渐变（中间90%无渐变） */
              ${bannerBgColor} 100%   /* 右侧终点：外层背景色 */
            );
          }
        `}</style>

        {/* 白色卡片（z-index=20，在渐变之上，不被遮挡） */}
        <div className='rounded-xl bg-white/[.6] w-full py-4 px-5 backdrop-blur-sm hover:scale-[1.03] transition duration-300 relative bottom-5 z-20'>
          <div className='flex items-center'>
            {/* 头像点击返回（z-index继承卡片，可正常点击） */}
            <div 
              onClick={() => router.back()} 
              className='cursor-pointer'
            >
              <LazyImage
                className='size-20 rounded-full shadow-lg pointer-events-none select-none'
                src={props?.avatar || siteConfig('AVATAR')}
              />
            </div>
            <div className='flex flex-col flex-1 ml-7 size-full'>
              <h1 className='text-2xl my-0 text-[var(--theme-color)] drop-shadow-[0_2px_10px_rgba(231,156,0,0.6)] font-bold'>
                {props?.title || siteConfig('TITLE')}
              </h1>
              <div className='text-sm font-normal w-full text-gray-500 mt-2 flex justify-between'>
                <span className='flex-1'>{props?.description || siteConfig('DESCRIPTION')}</span>
                <SocialButton />
              </div>
            </div>
          </div>
        </div>

        {/* 底部导航按钮（z-index=20，在渐变之上，可正常点击） */}
        <div className='absolute w-full bottom-0 px-5 z-20'>
          <MenuList {...props} />
        </div>
      </div>
    </header>
  )
}
