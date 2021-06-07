import { Token } from './interface/token';

export class Singleton {
    private static instace?: Singleton | null = null;

    private token: Token[] = [];

    private constructor() { }

    static getInstace(): Singleton {
        if (Singleton.instace === null) {
            Singleton.instace = new Singleton();
        }
        return Singleton.instace;
    };

    add(token: Token): void {
        this.token.push(token);
        console.log(token)
    }
    remove(index: number): void {
        this.token.splice(index, 1);
    }
    show() {
        for (const tokens of this.token){
            console.log(tokens)
        }
        return this.token;
    }
};

/*  console.log( db1  === db2); */