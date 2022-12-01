import { useEffect, useState } from 'react';
import { OrdersBoard } from '../OrderBoard';
import { Container } from './styles';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';

export function Orders() {
  const [ orders, setOrders ] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const in_production = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string){
    setOrders((prevState) => prevState.filter(order => order._id != orderId));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de Espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em Preparação"
        orders={in_production}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersBoard
        icon="✔️"
        title="Pronto"
        orders={done}
        onCancelOrder={handleCancelOrder}
      />
    </Container>
  );
}
