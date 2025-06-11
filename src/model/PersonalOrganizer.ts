import { Profissional } from "./Profissional";

export class PersonalOrganizer extends Profissional {
    private _agendamentos: { data: Date; ambiente: string; duracao: number; preco: number }[] = [];

    constructor(id: number, nome: string, email: string, telefone: number,tipo: number, avaliacoes: number[], mediaAvaliacoes: number, regiao: string, experiencia: number, disponibilidade: string
    ) {
        super(id, nome, email, telefone, tipo, avaliacoes, mediaAvaliacoes, regiao, experiencia, disponibilidade);
    }

    public calcularPrecoServico(duracao: number, ambiente: string): number {
        let precoBase = 0;

        switch (ambiente.toLowerCase()) {
            case "cozinha":
                precoBase = 50;
                break;
            case "quarto":
                precoBase = 45;
                break;
            case "banheiro":
                precoBase = 40;
                break;
            case "escritório":
                precoBase = 55;
                break;
            default:
                precoBase = 35;
        }

        const bonus = this.experiencia >= 5 ? 1.2 : this.experiencia >= 2 ? 1.1 : 1;

        return precoBase * duracao * bonus;
    }

    public agendarOrganizacao(data: Date, ambiente: string, duracao: number): void {
        const preco = this.calcularPrecoServico(duracao, ambiente);
        this._agendamentos.push({ data, ambiente, duracao, preco });

        console.log(`Organização de ${ambiente} agendada para ${data.toLocaleDateString("pt-BR")} (Duração: ${duracao}h) - Preço: R$${preco.toFixed(2)}`);
    }

    public listarAgendamentos(): void {
        if (this._agendamentos.length === 0) {
            console.log("Nenhum agendamento encontrado.");
            return;
        }

        console.log("Agendamentos:");
        for (const ag of this._agendamentos) {
            console.log(`${ag.data.toLocaleDateString("pt-BR")} - ${ag.ambiente}, ${ag.duracao}h - R$${ag.preco.toFixed(2)}`);
        }
    }

    public cancelarTodosAgendamentos(): void {
        this._agendamentos = [];
        console.log("Todos os agendamentos foram cancelados.");
    }
}
