import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { Tag } from './Tag'
import { ItemTitle } from './Title'

/**
 * 以图片为主的博客卡片
 * @param {*} param0
 * @returns
 */
const BlogItem = ({ post }) => {
  const showPageCover = post?.pageCoverThumbnail !== ''

  return (
    // 外层卡片容器：改为图片占主导的布局
    <article className="card-item relative w-full mb-8 overflow-hidden">
      {/* 图片层（占满卡片） */}
      {showPageCover ? (
        <Link href={post?.href} className="block w-full aspect-[16/9]">
          <LazyImage
            src={post?.pageCoverThumbnail}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      ) : (
        // 无图时的占位背景
        <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800"></div>
      )}

      {/* 文字层：绝对定位在图片上方（底部区域） */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
        {/* 标题（小尺寸，突出图片） */}
        <ItemTitle 
          post={post} 
          className="card-title text-white text-lg font-bold mb-1" 
        />
        
        {/* 日期+标签栏 */}
        <div className="flex flex-row flex-wrap items-center gap-2 text-sm opacity-90">
          <span>{post.date?.start_date || post.createdTime}</span>
          <div className="flex flex-row gap-2">
            {post.tags?.map(tag => (
              <Tag 
                key={post.id + tag} 
                name={tag}
                className="bg-white/20 text-white hover:bg-white/40"
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        {/* 摘要（可选，仅显示一行） */}
        {!post.results && (
          <p className="text-white/80 text-sm mt-1 line-clamp-1">
            {post.summary}
          </p>
        )}
      </div>
    </article>
  )
}

export default BlogItem
