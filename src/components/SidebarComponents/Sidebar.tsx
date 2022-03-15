import { Box, Typography } from '@mui/material'
import getBusWidths from '../../api/getBusWidths'
import getDevelopers from '../../api/getDevelopers'
import getManufacturers from '../../api/getManufacturers'
import getMemoryTypes from '../../api/getMemoryTypes'
import getVideoChipsets from '../../api/getVideoChipsets'
import getVRAMs from '../../api/getVRAMs'
import CheckboxList from './CheckboxList'
import Price from './Price'

interface ISidebarProps {
  developers: string[]
  manufacturers: string[]
  videochipsets: string[]
  vrams: string[]
  memoryTypes: string[]
  busWidths: string[]
}

const Sidebar = (props: ISidebarProps) => {
  return (
    <Box
      sx={{
        width: '300px',
        background: '#eaeaea',

        p: '16px',
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '8px',
      }}
    >
      <Typography mb={1} variant="h5" component="h2" color="text.secondary">
        Filters
      </Typography>
      <Price />
      <CheckboxList
        title="Developer"
        initialData={props.developers}
        apiFunction={getDevelopers}
      />
      <CheckboxList
        title="Manufacturer"
        initialData={props.manufacturers}
        apiFunction={getManufacturers}
      />
      <CheckboxList
        title="Video Chipset"
        initialData={props.videochipsets}
        apiFunction={getVideoChipsets}
      />
      <CheckboxList
        title="VRAM"
        initialData={props.vrams}
        apiFunction={getVRAMs}
        postfix=" GB"
      />
      <CheckboxList
        title="Memory Type"
        initialData={props.memoryTypes}
        apiFunction={getMemoryTypes}
      />
      <CheckboxList
        title="Bus Width"
        initialData={props.busWidths}
        apiFunction={getBusWidths}
        postfix=" bit"
      />
    </Box>
  )
}

export default Sidebar
