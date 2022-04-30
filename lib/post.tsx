import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

//mdデータのディレクトリ
const postsDirectory = path.join(process.cwd(), 'posts')

//mdデータを取得
export const getPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      ...matterResult.data,
    }
  })
  return allPostsData
}
