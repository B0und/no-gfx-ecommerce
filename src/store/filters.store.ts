import { makeAutoObservable } from 'mobx'
import { toJS } from 'mobx'
import qs from 'qs'
import { parseCategoryString } from '../utils/utils'

type FilterItem = { name: string; value: boolean }

class Filters {
  filterList = new Map()

  constructor() {
    makeAutoObservable(this)
  }

  addFilter(filterKey: string, item: FilterItem[]) {
    const parsedKey = parseCategoryString(filterKey)
    if (!this.filterList.has(parsedKey)) {
      this.filterList.set(parsedKey, item)
    }
  }

  toggleCheckbox(filterKey: string, index: number) {
    const parsedKey = parseCategoryString(filterKey)
    const category = this.filterList.get(parsedKey)
    category[index].value = !category[index].value
  }

  get queryString() {
    const res: any = { filters: {} }

    this.filterList.forEach((values, categoryKey) => {
      const appliedFilters = []

      for (const filterField of toJS(values)) {
        if (filterField.value == true) {
          appliedFilters.push(filterField.name)
        }
      }

      if (appliedFilters.length !== 0) {
        const parsedKey = parseCategoryString(String(categoryKey))
        res.filters[parsedKey] = { name: {} }
        res.filters[parsedKey]['name'] = { $in: {} }
        res.filters[parsedKey]['name']['$in'] = appliedFilters
      }
    })

    return qs.stringify(res, {
      encodeValuesOnly: true,
    })
  }
}

export default new Filters()
