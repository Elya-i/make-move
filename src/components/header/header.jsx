import { HeaderStyled, ContainerStyled, LogoStyled, CursiveStyled } from './header.style'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import Event from '@mui/icons-material/Event'
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
