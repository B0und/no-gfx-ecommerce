import { AccountCircle } from '@mui/icons-material'
import { Badge, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import CompareIcon from '@mui/icons-material/AlignVerticalTop'
import FavouriteIcon from '@mui/icons-material/Favorite'

interface IMobileMenu {
  mobileMoreAnchorEl:
    | Element
    | ((element: Element) => Element)
    | null
    | undefined
  mobileMenuId: string
  isMobileMenuOpen: boolean
  handleMobileMenuClose: (event: any) => void
  handleProfileMenuOpen: (event: any) => void
}

const MobileMenu: React.FC<IMobileMenu> = ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <CompareIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FavouriteIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
}

export default MobileMenu
