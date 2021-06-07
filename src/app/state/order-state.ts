export interface OrderState{
    getName(): string;
    getMensage(): string;
    pedidoCriado():void;
    pedidoCaminho():void;
    pedidoEntregue(): void;

}