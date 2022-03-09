export interface VideoCard {
  data?: Data[];
  meta?: Meta;
}

export interface Data {
  id?: number;
  attributes?: Attributes;
}

export interface Attributes {
  displayName?: string;
  price?: number;
  baseClock?: number;
  boostClock?: number;
  overclocked?: boolean;
  vgaAmount?: number;
  hdmiAmount?: number;
  displayPortAmount?: number;
  dviAmount?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  powerSupply?: number;
}

export interface Meta {
  pagination?: Pagination;
}

export interface Pagination {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
}
