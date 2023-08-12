import { Header } from '../../components/header'
import { Footer } from '../../components/footer/footer';
import { LayoutStyled } from './layout.style';

export const Layout = (props) => {

  return (
    <LayoutStyled>
      <Header />
      <Footer />
    </LayoutStyled>
  );
}
