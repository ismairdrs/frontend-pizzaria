import { OrderState } from "./order-state";
import {OrderPending} from './order-pending'

export class Order{
     state: OrderState = new OrderPending(this);

    getState():OrderState{
        return this.state;
    }
    setState(state: OrderState): void{
        this.state = state;
        console.log(`Status do pedido ${this.getStateName()} `)
    }
    getStateName(): string{
        return this.state.getName();
    }
    pedidoCriado():void{
        this.state.pedidoCriado();
    }
    pedidoCaminho():void{
        this.state.pedidoCaminho();
    }
    pedidoEntregue(): void{
        this.state.pedidoEntregue();
    }
}