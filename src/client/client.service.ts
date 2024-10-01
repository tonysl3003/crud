import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Client, ClientDocument } from './client.schema';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  // Crear cliente
  async create(clientDto: any): Promise<Client> {
    const hashedPassword = await bcrypt.hash(clientDto.password, 10);
    const createdClient = new this.clientModel({
      ...clientDto,
      password: hashedPassword,
    });
    return createdClient.save();
  }

  // Obtener listado de clientes (opcional filtrado por email)
  async findAll(email?: string): Promise<Client[]> {
    if (email) {
      return this.clientModel.find({ email }).exec();
    }
    return this.clientModel.find().exec();
  }

  // Actualizar cliente
  async update(id: string, updateClientDto: any): Promise<Client> {
    return this.clientModel
      .findByIdAndUpdate(id, updateClientDto, { new: true })
      .exec();
  }

  // Borrar cliente
  async delete(id: string): Promise<Client> {
    return this.clientModel.findByIdAndDelete(id).exec();
  }
}
