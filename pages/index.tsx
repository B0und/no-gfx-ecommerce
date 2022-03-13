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
import Sidebar from '../src/components/Sidebar'
import { Box } from '@mui/system'

const Home: NextPage = ({
  graphicsCards,
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
        <Sidebar />
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
  const graphicsCards = await getGraphicsCards()

  return {
    props: {
      graphicsCards,
    },
  }
}

export default Home
