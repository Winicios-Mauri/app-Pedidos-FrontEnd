import { OrdersBoard } from '../OrderBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '637abdec6b765d4f4e729f2d',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668987261476-quatro-queijos.png',
          'price': 1.3,
        },
        'quantity': 3,
        '_id': '637abdec6b765d4f4e729f2e'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668987261476-quatro-queijos.png',
          'price': 1.3,
        },
        'quantity': 3,
        '_id': '637abdec6b765d4f4e729f2e'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de Espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em Preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✔️"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
