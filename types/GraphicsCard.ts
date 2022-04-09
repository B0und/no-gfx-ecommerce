export interface IGraphicsResponse {
  data?: IGraphicsCard[]
  meta?: Meta
}

export interface IGraphicResponse {
  data?: IGraphicsCard
  meta?: Meta
}

export interface IGraphicsCard {
  id?: number
  displayName: string
  price: number
  baseClock?: number
  boostClock?: number
  overclocked?: boolean
  vgaAmount?: number
  hdmiAmount?: number
  displayPortAmount?: number
  dviAmount?: number | null
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
  powerSupply?: number | null
  video_chipset: IVideoChipset
  developer: IDeveloper
  manufacturer: IManufacturer
  vram?: IVRAM
  memory_type?: IMemoryType
  bus_width?: BusWidth
  connectors?: IConnector[]
  power_connector?: IPowerConnector
  motherboard_interface?: IMotherboardInterface
}

export interface IVideoChipset {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface IDeveloper {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface IManufacturer {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface IVRAM {
  id?: number
  name?: number
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface IMemoryType {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface IConnector {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface IPowerConnector {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface IMotherboardInterface {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface BusWidth {
  id?: number
  name?: string
  createdAt?: Date
  updatedAt?: Date
  publishedAt?: Date
}

export interface Meta {
  pagination?: Pagination
}

export interface Pagination {
  page?: number
  pageSize?: number
  pageCount?: number
  total?: number
}
