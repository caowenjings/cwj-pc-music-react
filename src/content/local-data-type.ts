export interface ILinkItem {
  title: string
  link: string
}

export interface IIconLinkItem {
  link: string
}

// 热门主播
export interface IhotItem {
  picUrl: string
  name: string
  position: string
  url: string
}

// 歌手类别
export interface IartistItem {
  name: string
  type: number
  url: string
  id: number
}

export interface ICategoriesItem {
  title: string
  area: string | number
  artists: IartistItem[]
}
