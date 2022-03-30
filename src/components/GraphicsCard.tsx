import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { IGraphicsCard } from '../../types/GraphicsCard'
import { Box, Button } from '@mui/material'

type Props = {
  videoCard: IGraphicsCard
}

interface IDescriptionItem {
  heading: string
  text: string | number
  textPostfix?: string
}

const DescriptionItem: React.FC<IDescriptionItem> = ({
  heading,
  text,
  textPostfix,
}) => {
  return (
    <>
      {text && (
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Typography component="h3" variant="subtitle1" color="text.secondary">
            {heading}
          </Typography>
          <Typography component="p" variant="subtitle1" color="">
            {textPostfix ? text + textPostfix : text}
          </Typography>
        </Box>
      )}
    </>
  )
}

const GraphicsCard: React.FC<Props> = ({ videoCard }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        p: '16px',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
        image={`1_${videoCard?.manufacturer?.name?.toLowerCase()}_${videoCard?.developer?.name?.toLowerCase()}_${videoCard?.video_chipset?.name
          ?.split(' ')
          .join('_')
          .toLowerCase()}.jpg`}
        alt="Graphics card"
      />

      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5" sx={{ pb: '16px' }}>
          {videoCard.displayName}
        </Typography>

        <DescriptionItem
          heading="Videochipset"
          text={videoCard.video_chipset.name || ''}
        />
        <DescriptionItem
          heading="VRAM"
          text={videoCard?.vram?.name || ''}
          textPostfix=" GB"
        />
        <DescriptionItem
          heading="VRAM type"
          text={videoCard?.memory_type?.name || ''}
        />
        <DescriptionItem
          heading="Bus width"
          text={videoCard?.bus_width?.name || ''}
          textPostfix=" bit"
        />
        <DescriptionItem
          heading="Power connector"
          text={videoCard?.power_connector?.name || ''}
        />
        <DescriptionItem
          heading="Recommended power supply"
          text={videoCard?.powerSupply || ''}
          textPostfix=" W"
        />
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '16px',
        }}
      >
        <Typography variant="h4">{videoCard.price} ₽</Typography>
        <Button variant="contained">Add to cart</Button>
      </Box>
    </Card>
  )
}
export default GraphicsCard
