import { Badge, Box, IconButton } from '@mui/material'
import React, { useCallback, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginIcon from '@mui/icons-material/Login'
import MoreIcon from '@mui/icons-material/MoreVert'
import CompareIcon from '@mui/icons-material/AlignVerticalTop'
import FavouriteIcon from '@mui/icons-material/Favorite'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { LoginModal } from '../LoginModal'

interface INavPanel {
  menuId: string
  mobileMenuId: string
  handleMobileMenuOpen: (event: any) => void
  handleProfileMenuOpen: (event: any) => void
}

const NavPanel: React.FC<INavPanel> = ({
  handleMobileMenuOpen,
  menuId,
  handleProfileMenuOpen,
  mobileMenuId,
}) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev)
  }, [])

  return (
    <div>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '8px' }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="info">
            <CompareIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="info">
            <FavouriteIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" aria-label="shopping cart" color="inherit">
          <Badge badgeContent={17} color="info">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="log in"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
          onClick={toggleModal}
        >
          <LoginIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="user account"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {showModal ? (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  )
}

export default NavPanel
