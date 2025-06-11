export abstract class Profissional {
    cancelarAgendamento: any;
    agendarServico(data: Date, duracao: number) {
        throw new Error("Method not implemented.");
    }

    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: number;
    private _tipo: number;
    private _avaliacoes: number [] = [];
    private _mediaAvaliacoes: number = 0;
    private _regiao: string;
    private _experiencia: number;
    private _disponibilidade: string;


    constructor (id: number, nome: string, email: string, telefone: number, tipo: number, avaliacoes: number[], mediaAvaliacoes: number, regiao: string, experiencia: number, disponibilidade: string) {

        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._tipo = tipo;
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

    public get tipo(): number {
        return this._tipo;
    }
    public set tipo(tipo: number){
        this._tipo = tipo;
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
    public visualizar(): void {

        let nivelExperiencia: string = "";

        if (this._experiencia < 1) {
            nivelExperiencia = "Iniciante";
        } else if (this._experiencia <= 3) {
            nivelExperiencia = "Intermediário";
        } else {
            nivelExperiencia = "Avançado";
        }

        console.log("\n\n*****************************************************");
        console.log("Dados da Profissional:");
        console.log("*****************************************************");
        console.log("Id do Profissional " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Email: " + this._email);
        console.log("Telefone: " + this._telefone);
        console.log("Região: " + this._regiao);
        console.log("Experiência: " + this._experiencia + " anos");
        console.log("Média de Avaliações: " + this._mediaAvaliacoes.toFixed(2));
        console.log("Nivel de Experiência: " + nivelExperiencia);
        console.log("Tipo de Profissional: " + this.tipo);
        console.log("*****************************************************\n\n");

    }

}