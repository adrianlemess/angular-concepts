import { Address } from './address';

export interface Engineer {
    name: string;
    age: number;
    about: string;
    skils: string[];
    email: string;
    password: string;
    cpf: string;
    address: Address;
}

