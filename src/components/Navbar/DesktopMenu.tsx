import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

interface IDesktopMenu {
  anchorEl: Element | ((element: Element) => Element) | null | undefined
  menuId: string
  isMenuOpen: boolean
  handleMenuClose: (event: any) => void
}

const DesktopMenu = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
}: IDesktopMenu) => {
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    </>
  )
}

export default DesktopMenu
