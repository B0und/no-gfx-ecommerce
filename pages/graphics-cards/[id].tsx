import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useQuery } from 'react-query'
import getGraphicCard from '../../src/api/getGraphicCard'
import Carousel from '../../src/components/Carousel'
import Layout from '../../src/components/Layout'
import Link from '../../src/components/Link'

const DetailedGraphicsCard = ({ id }: { id: number }) => {
  const { isLoading, isError, data, error } = useQuery(
    ['graphics-cards', id],
    () => getGraphicCard(id)
  )

  const images = []
  for (let i = 1; i < 7; i++) {
    const manufacturer = data?.data?.manufacturer.name?.toLowerCase()
    const developer = data?.data?.developer.name?.toLowerCase()
    let chipset = data?.data?.video_chipset.name?.toLowerCase()
    chipset = chipset?.split(' ').join('_')
    images.push(`${i}_${manufacturer}_${developer}_${chipset}.jpg`)
  }
  console.log(images)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error {error}</span>
  }

  return (
    <Layout>
      <Box component="section" sx={{ display: 'flex', gap: '100px' }}>
        <Carousel images={images} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          <Link
            variant="subtitle1"
            color="secondary"
            href="/"
            sx={{
              color: '#757577',
              textDecoration: 'none',
            }}
          >
            . / Graphics Cards /
          </Link>

          <Typography
            component="h2"
            variant="h4"
            sx={{ pt: '32px', pb: '16px' }}
          >
            {data?.data?.displayName}
          </Typography>

          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {data?.data?.price}
            </Typography>
            <Typography variant="h4" sx={{ color: '#a0a0a1' }}>
              ₽
            </Typography>
          </Box>
          <Button variant="contained">Add to cart</Button>
        </Box>
      </Box>
      <Typography component="h3" variant="h5" sx={{ pt: '64px', pb: '16px' }}>
        Specifications
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        color=""
        sx={{ pb: '48px', maxWidth: '100ch' }}
      >
        Any described warranty is supplied by the manufacturer of this article
        and is provided at least in germany. The full warranty information,
        including the coverage and requirements to claim the warranty is
        detailed on the manufacturers website. You can find a link to this site
        on our brand overview. More information about warranties.
      </Typography>
      <Box
        component="section"
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          width: 'fit-content',
        }}
      >
        <Typography component="h3" variant="subtitle1" color="text.secondary">
          Videochipset
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.video_chipset.name}
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          GPU Base Clock
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.baseClock} MHz
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          GPU Boost Clock
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.boostClock} MHz
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          Overclocked
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.overclocked || 'No'}
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          VRAM
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.vram?.name} GB
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          VRAM Type
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.memory_type?.name}
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          Connectors
        </Typography>
        <div>
          {data?.data?.connectors?.map((connector) => (
            <Typography
              key={connector.id}
              component="p"
              variant="subtitle1"
              color=""
            >
              {connector.name}
            </Typography>
          ))}
        </div>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          Motherboard interface
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.motherboard_interface?.name}
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          Bus Width
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.bus_width?.name} bit
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          Power Connector
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.power_connector?.name}
        </Typography>

        <Typography component="h3" variant="subtitle1" color="text.secondary">
          Recommended Power Supply
        </Typography>
        <Typography component="p" variant="subtitle1" color="">
          {data?.data?.powerSupply} W
        </Typography>
      </Box>
    </Layout>
  )
}
export const getServerSideProps = (context: { params: { id: number } }) => {
  // console.log(context)
  return {
    props: {
      id: context.params.id,
    },
  }
}
export default DetailedGraphicsCard
