import fs from 'fs'
import path from 'path'

export function getGalleryImages() {
  const dir = path.join(process.cwd(), 'public/asset/img')
  return fs.readdirSync(dir).map(file => `/asset/img/${file}`)
}