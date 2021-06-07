import { Order } from './order';
import {OrderState} from './order-state'

export class OrderDelivered implements OrderState{
    private name = ' OrderDelivered';

    constructor(private order: Order){}

    getName(): string{
        return this.name;
    }
    getMensage(): string{
        return '';
    }

    pedidoCriado():void{
        console.log('O Pedido já foi Entregue');
    }
    pedidoCaminho():void{
        console.log('O Pedido já foi Entregue');
    }
    pedidoEntregue(): void{
        console.log('O Pedido já foi Entregue');
    }
}