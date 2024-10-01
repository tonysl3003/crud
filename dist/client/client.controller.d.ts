import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    create(clientDto: any): Promise<import("./client.schema").Client>;
    findAll(email?: string): Promise<import("./client.schema").Client[]>;
    update(id: string, updateClientDto: any): Promise<import("./client.schema").Client>;
    delete(id: string): Promise<import("./client.schema").Client>;
}
