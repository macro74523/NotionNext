import { siteConfig } from '@/lib/config'
import { MenuList } from './MenuList'
import { SocialButton } from './SocialButton'
import LazyImage from '@/components/LazyImage'
// 保留：导入 Next.js 路由钩子
import { useRouter } from 'next/router'

export const Header = props => {
  // 保留：创建路由实例（头像点击返回上一层用）
  const router = useRouter()
  // 新增：获取外层 header 背景色，用于渐变匹配（确保融合自然）
  const bannerBgColor = siteConfig('AUTUMN_BANNER_BG_COLOR')

  return (
    <header
      style={{ backgroundColor: `${bannerBgColor}` }} // 外层背景色（渐变起点/终点）
      className='w-full h-[430px] flex justify-center z-10 relative' // 父容器相对定位，支撑伪元素层级
    >
      {/* 背景图容器：新增伪元素实现左右渐变遮罩 */}
      <div
        style={{ backgroundImage: `url(${siteConfig('HOME_BANNER_IMAGE')})` }}
        className={`max-w-[var(--content-width)] size-full px-5 flex justify-center items-center flex-col relative bg-cover bg-center`}
      >
        {/* 新增：左右渐变遮罩伪元素（叠加背景图，不遮挡内容） */}
        <style jsx>{`
          div::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1; // 层级：背景图之上，内容（卡片/导航/头像）之下
            // 左右→中间渐变：背景色→透明→背景色，中间保留背景图清晰区域
            background: linear-gradient(
              to right, 
              ${bannerBgColor} 0%,    // 左侧：与外层header同色
              transparent 20%,        // 左→中：渐变到透明（20%处完全透明）
              transparent 80%,        // 中→右：保持透明（80%处开始渐变）
              ${bannerBgColor} 100%   // 右侧：与外层header同色
            );
          }
        `}</style>

        {/* 保留：白色半透明卡片（需加z-index，避免被渐变遮罩遮挡） */}
        <div className='rounded-xl bg-white/[.6] w-full py-4 px-5 backdrop-blur-sm hover:scale-[1.03] transition duration-300 relative bottom-5 z-20'>
          <div className='flex items-center'>
            {/* 保留：头像外层div（点击返回上一层） */}
            <div 
              onClick={() => router.back()} 
              className='cursor-pointer' // 鼠标悬浮显示“手”型，提示可点击
            >
              <LazyImage
                className='size-20 rounded-full shadow-lg pointer-events-none select-none'
                src={props?.avatar || siteConfig('AVATAR')}
              />
            </div>
            {/* 保留：标题与描述区域 */}
            <div className='flex flex-col flex-1 ml-7 size-full'>
              <h1 className='text-2xl my-0 text-[var(--theme-color)] drop-shadow-[0_2px_10px_rgba(231,156,0,0.6)] font-bold'>
                {props?.title || siteConfig('TITLE')}
              </h1>
              <div className='text-sm font-normal w-full text-gray-500 mt-2 flex jusitify-between'>
                <span className='flex-1'>{props?.description || siteConfig('DESCRIPTION')}</span>
                <SocialButton/>
              </div>
            </div>
          </div>
        </div>

        {/* 保留：底部导航（需加z-index，避免被渐变遮罩遮挡） */}
        <div className='absolute w-full bottom-0 px-5 z-20'>
          <MenuList {...props} />
        </div>
      </div>
    </header>
  )
}
