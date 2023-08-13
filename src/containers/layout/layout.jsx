import { Header } from '../../components/header'
import { Calendar } from '../../components/calendar';
import { Footer } from '../../components/footer';
import { LayoutStyled } from './layout.style';

export const Layout = (props) => {

  return (
    <LayoutStyled>
      <Header />
      <Calendar />
      <Footer />
    </LayoutStyled>
  );
}
