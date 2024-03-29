import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useQuery } from 'react-query'
import getGraphicsCards from '../src/api/getGraphicCards'
import GraphicsCard from '../src/components/GraphicsCard'
import { IGraphicsCard } from '../types/GraphicsCard'
import Layout from '../src/components/Layout'
import Sidebar from '../src/components/SidebarComponents/Sidebar'
import { Box } from '@mui/system'
import getPrices from '../src/api/getPrices'
import { createContext, memo, useEffect, useState } from 'react'
import getDevelopers from '../src/api/getDevelopers'
import getManufacturers from '../src/api/getManufacturers'
import getVideoChipsets from '../src/api/getVideoChipsets'
import getVRAMs from '../src/api/getVRAMs'
import getMemoryTypes from '../src/api/getMemoryTypes'
import getBusWidths from '../src/api/getBusWidths'
import { CircularProgress, Grid } from '@mui/material'
import SortHeader from '../src/components/SortHeader'
import filtersStore from '../src/store/filters.store'
import { observer } from 'mobx-react-lite'

export const PricesContext = createContext([])

const Home: NextPage = observer(
  ({
    graphicsCards,
    prices,
    developers,
    manufacturers,
    videochipsets,
    vrams,
    memoryTypes,
    busWidths,
  }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const queryParams = filtersStore.queryString
    const { isLoading, isError, data, error } = useQuery(
      ['graphics-cards', queryParams],
      () => getGraphicsCards(queryParams),
      { initialData: graphicsCards }
    )

    const [filteredData, setFilteredData] = useState(data)

    useEffect(() => {
      setFilteredData(data)
    }, [data])

    if (isLoading) {
      return <CircularProgress />
    }

    if (isError) {
      return <span>Error {error}</span>
    }

    return (
      <Layout>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          <PricesContext.Provider value={prices}>
            <Sidebar
              developers={developers}
              manufacturers={manufacturers}
              videochipsets={videochipsets}
              vrams={vrams}
              memoryTypes={memoryTypes}
              busWidths={busWidths}
            />
          </PricesContext.Provider>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SortHeader setFilteredData={setFilteredData} initialData={data} />
            <Grid container spacing={2}>
              {filteredData?.data?.map((videoCard: IGraphicsCard) => (
                <Grid item width="100%" key={videoCard.id}>
                  <GraphicsCard videoCard={videoCard} />
                </Grid>
              ))}
            </Grid>
            {filteredData.data.length === 0 && <p>Nothing found</p>}
          </Box>
        </Box>
      </Layout>
    )
  }
)

export const getStaticProps: GetStaticProps = async () => {
  const [
    graphicsCards,
    prices,
    developers,
    manufacturers,
    videochipsets,
    vrams,
    memoryTypes,
    busWidths,
  ] = await Promise.all([
    getGraphicsCards(),
    getPrices(),
    getDevelopers(),
    getManufacturers(),
    getVideoChipsets(),
    getVRAMs(),
    getMemoryTypes(),
    getBusWidths(),
  ])

  return {
    props: {
      graphicsCards,
      prices,
      developers,
      manufacturers,
      videochipsets,
      vrams,
      memoryTypes,
      busWidths,
    },
  }
}

export default memo(Home)
