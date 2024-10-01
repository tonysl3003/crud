import { Model } from 'mongoose';
import { Client, ClientDocument } from './client.schema';
export declare class ClientService {
    private clientModel;
    constructor(clientModel: Model<ClientDocument>);
    create(clientDto: any): Promise<Client>;
    findAll(email?: string): Promise<Client[]>;
    update(id: string, updateClientDto: any): Promise<Client>;
    delete(id: string): Promise<Client>;
}
