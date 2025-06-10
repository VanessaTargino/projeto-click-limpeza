export class Diarista {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: number;
    private _avaliacoes: number [] = [];
    private _mediaAvaliacoes: number = 0;
    private _regiao: string;
    private _experiencia: number;
    private _disponibilidade: string;


    constructor (id: number, nome: string, email: string, telefone: number, avaliacoes: number[], mediaAvaliacoes: number, regiao: string, experiencia: number, disponibilidade: string) {

        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._avaliacoes = avaliacoes;
        this._mediaAvaliacoes = mediaAvaliacoes;
        this._regiao = regiao;
        this._experiencia = experiencia;
        this._disponibilidade = disponibilidade;
    }

    public get id(): number {
        return this._id;
    }
    public set id(numero: number) {
        this._id = numero;
    }

    public get nome(): string {
    return this._nome;
    }
    public set nome(nome: string) {
        this._nome = nome;
    }

    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }

    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(telefone: number) {
        this._telefone = telefone;
    }

    public get avaliacoes(): number[] {
        return this._avaliacoes;
    }
    public set avaliacoes(avaliacoes: number[]) {
        this._avaliacoes = avaliacoes;
    }

    public get mediaAvaliacoes(): number {
        return this._mediaAvaliacoes;
    }
    public set mediaAvaliacoes(mediaAvaliacoes: number) {
        this._mediaAvaliacoes = mediaAvaliacoes;
    }

    public get regiao(): string {
        return this._regiao;
    }
    public set regiao(regiao: string) {
        this._regiao = regiao;
    }

    public get experiencia(): number {
        return this._experiencia;
    }
    public set experiencia(experiencia: number) {
        this._experiencia = experiencia;
    }

    public get disponibilidade(): string {
        return this._disponibilidade;
    }
    public set disponibilidade(disponibilidade: string) {
        this._disponibilidade = disponibilidade;
    }

    

   public avaliarServico(nota: number): void {
    
        if (nota < 1 || nota > 5) {
            console.log("Nota inválida. A nota deve ser entre 1 e 5.");
            return;
        }

        this._avaliacoes.push(nota); 

        this._mediaAvaliacoes = this._avaliacoes.reduce((soma, valor) => soma + valor, 0) / this._avaliacoes.length;

        console.log(`Avaliação atualizada para ${this._mediaAvaliacoes.toFixed(2)}`);
    }

    public listarAvaliacoes(): void {
        console.log("Histórico de avaliações:", this._avaliacoes);
    }

    public obterMedia(): number {
        return this._mediaAvaliacoes;
    }
}