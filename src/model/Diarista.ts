import { Profissional } from "./Profissional";


export class Diarista extends Profissional {
    private _agendarlimpeza: Date;
    private _calcularPreco: number;

    constructor(id: number, nome: string, email: string, telefone: number,tipo: number, avaliacoes: number[], mediaAvaliacoes: number, regiao: string, experiencia: number, disponibilidade: string
    ) {
        super(id, nome, email, telefone,tipo, avaliacoes, mediaAvaliacoes, regiao, experiencia, disponibilidade);
        this._agendarlimpeza = new Date();
        this._calcularPreco = 0;
    }
    public get agendarlimpeza(): Date {
        return this._agendarlimpeza;
    }

    public set agendarlimpeza(data: Date) {
        this._agendarlimpeza = data;
    }

    public get calcularPreco(): number {
        return this._calcularPreco;
    }

    public set calcularPreco(preco: number) {
        this._calcularPreco = preco;
    }

    public calcularPrecoServico(duracao: number): number {
        let precoPorHora: number;

        // Assuming Profissional has a protected or public _experiencia property
        if (this.experiencia > 5) {
            precoPorHora = 40;
        } else if (this.experiencia >= 2) {
            precoPorHora = 30;
        } else {
            precoPorHora = 20;
        }

        return precoPorHora * duracao;
    }

    public agendarLimpeza(data: Date, duracao: number): void {
        this._agendarlimpeza = data;
        this._calcularPreco = this.calcularPrecoServico(duracao);
        console.log(
            `Limpeza agendada para ${this._agendarlimpeza.toLocaleDateString("pt-BR")} com custo de R$${this._calcularPreco.toFixed(2)}`
        );
    }

    public cancelarAgendamento(): void {
        this._agendarlimpeza = new Date();
        this._calcularPreco = 0;
        console.log("Agendamento cancelado.");
    }

    public listarAgendamentos(): void {
        if (this._calcularPreco > 0) {
            console.log(`Agendamento: ${this._agendarlimpeza.toLocaleDateString("pt-BR")}, Preço: R$${this._calcularPreco.toFixed(2)}`);
        } else {
            console.log("Nenhum agendamento encontrado.");
        }
    }
}
