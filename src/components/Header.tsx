import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Container = styled.header`

`;

export function Header() {
  return (
    <header>
      <div className="page-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe os pedidos dos clientes</h2>
      </div>

      <img src={logo} alt="logomarca da aplicação" />
    </header>
  );
}
