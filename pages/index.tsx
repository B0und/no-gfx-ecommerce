import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { useQuery } from 'react-query'
import getGraphicsCards from '../src/api/getGraphicCards'
import GraphicsCard from '../src/components/GraphicsCard'
import { IGraphicsCard } from '../types/GraphicsCard'
import Layout from '../src/components/Layout'
import Sidebar from '../src/components/SidebarComponents/Sidebar'
import { Box } from '@mui/system'
import getPrices from '../src/api/getPrices'
import { createContext } from 'react'

export const PricesContext = createContext([])

const Home: NextPage = ({
  graphicsCards,
  prices,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isLoading, isError, data, error } = useQuery(
    'graphics-cards',
    getGraphicsCards,
    { initialData: graphicsCards }
  )

  if (isLoading) {
    return <span>Loading...</span>
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
        }}
      >
        <PricesContext.Provider value={prices}>
          <Sidebar />
        </PricesContext.Provider>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: '1',
          }}
        >
          {data?.data?.map((videoCard: IGraphicsCard) => (
            <GraphicsCard key={videoCard.id} videoCard={videoCard} />
          ))}
        </Box>
      </Box>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [graphicsCards, prices] = await Promise.all([
    getGraphicsCards(),
    getPrices(),
  ])

  return {
    props: {
      graphicsCards,
      prices,
    },
  }
}

export default Home
