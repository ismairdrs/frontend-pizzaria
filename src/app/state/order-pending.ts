import { Order } from './order';
import { OrderCreated } from './order-created';
import { OrderDelivered } from './order-delivered';
import { OrderShipping } from './order-shipping';
import {OrderState} from './order-state'

export class OrderPending implements OrderState{
    private name = ' OrderPending';

    constructor(private order: Order){}

    getName(): string{
        return this.name;
    }
    getMensage(): string{
        return '';
    }

    pedidoCriado():void{
        this.order.setState( new OrderCreated(this.order));
    }
    pedidoCaminho():void{
        this.order.setState( new OrderShipping(this.order));

    }
    pedidoEntregue(): void{
        this.order.setState( new OrderDelivered(this.order));
    }
}