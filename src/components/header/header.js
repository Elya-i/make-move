import { IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { HeaderStyled } from './header.style'

export const Header = (props) => {

  return (
    <HeaderStyled>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Menu />
      </IconButton>
    </HeaderStyled>
  );
}