import { Order } from './order';
import { OrderDelivered } from './order-delivered';
import { OrderShipping } from './order-shipping';
import {OrderState} from './order-state'

export class OrderCreated implements OrderState{
    private name = ' OrderCreated';

    constructor(private order: Order){}

    getName(): string{
        return this.name;
    }
    getMensage(): string{
        return '';
    }

    pedidoCriado():void{
        console.log('O Pedido já foi Criado');
    }
    pedidoCaminho():void{
        this.order.setState( new OrderShipping(this.order))
    }
    pedidoEntregue(): void{
        this.order.setState(new OrderDelivered(this.order))
    }
}