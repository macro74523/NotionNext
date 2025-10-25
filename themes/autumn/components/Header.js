import { siteConfig } from '@/lib/config'
import { MenuList } from './MenuList'
import { SocialButton } from './SocialButton'
import LazyImage from '@/components/LazyImage'

export const Header = (props) => {
  // 提取配置项，减少重复调用
  const bannerBgColor = siteConfig('AUTUMN_BANNER_BG_COLOR')
  const bannerImage = siteConfig('HOME_BANNER_IMAGE')
  const avatar = props?.avatar || siteConfig('AVATAR')
  const title = props?.title || siteConfig('TITLE')
  const description = props?.description || siteConfig('DESCRIPTION')

  return (
    <header 
      className="w-full flex justify-center z-10"
      style={{ backgroundColor: bannerBgColor }}
    >
      {/* 横幅容器 - 使用动态高度适配不同屏幕 */}
      <div 
        className="max-w-[var(--content-width)] w-full px-5 flex justify-center items-center flex-col relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
        // 动态高度：最小300px，最大430px，中间按视口高度50%自适应
        style={{ height: 'clamp(300px, 50vh, 430px)' }}
      >
        {/* 个人信息卡片 */}
        <div className="rounded-xl bg-white/60 w-full py-4 px-5 backdrop-blur-sm hover:scale-103 transition-all duration-300 relative bottom-5 shadow-sm">
          <div className="flex items-center">
            {/* 头像 - 添加alt属性提升可访问性 */}
            <LazyImage
              className="w-20 h-20 rounded-full shadow-lg pointer-events-none select-none"
              src={avatar}
              alt={title || 'User Avatar'} // 头像描述，默认使用标题
            />
            
            <div className="flex flex-col flex-1 ml-7 h-full">
              {/* 标题 */}
              <h1 className="text-2xl m-0 text-[var(--theme-color)] drop-shadow-[0_2px_10px_rgba(231,156,0,0.6)] font-bold">
                {title}
              </h1>
              
              {/* 描述与社交按钮 */}
              <div className="text-sm font-normal w-full text-gray-500 mt-2 flex justify-between items-center">
                <span className="flex-1">{description}</span>
                <SocialButton />
              </div>
            </div>
          </div>
        </div>
        
        {/* 导航菜单 - 固定在底部 */}
        <div className="absolute w-full bottom-0 px-5">
          <MenuList {...props} />
        </div>
      </div>
    </header>
  )
}
