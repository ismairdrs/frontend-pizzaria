import { Order } from './order';
import { OrderDelivered } from './order-delivered';
import {OrderState} from './order-state'

export class OrderShipping implements OrderState{
    private name = ' OrderShipping';

    constructor(private order: Order){}

    getName(): string{
        return this.name;
    }
    getMensage(): string{
        return '';
    }

    pedidoCriado():void{
        console.log('O Pedido já está a Caminho');
    }
    pedidoCaminho():void{
        console.log('O Pedido já está a Caminho');
            }
    pedidoEntregue(): void{
        this.order.setState(new OrderDelivered(this.order))
    }
}