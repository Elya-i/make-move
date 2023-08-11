import { IconButton } from '@mui/material'
import { Menu, Event } from '@mui/icons-material'
import { HeaderStyled, ContainerStyled, LogoStyled, CursiveStyled } from './header.style'
import bolt from '../../assets/icons/bolt.svg'

export const Header = (props) => {

  return (
    <HeaderStyled>
      <IconButton size="large" color="move" sx={{ ml: -2 }}>
        <Menu />
      </IconButton>

      <ContainerStyled>MAKE<LogoStyled src={bolt} />
        <CursiveStyled>MOVE</CursiveStyled>
      </ContainerStyled>

      <IconButton size="large" color="move" sx={{ mr: -2 }}>
        <Event />
      </IconButton>
    </HeaderStyled>
  );
}
