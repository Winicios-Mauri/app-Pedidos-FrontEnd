import { OrdersBoard } from '../OrderBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '637ebf33d6369eb466034433',
    'table': '3',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Cocas cola',
          'imagePath': '1669250848152-cerveja.png',
          'price': 1.3,
        },
        'quantity': 3,
        '_id': '637abdec6b765d4f4e729f2e'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1669250848152-cerveja.png',
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
