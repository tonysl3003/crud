import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  // Crear cliente
  @Post()
  async create(@Body() clientDto: any) {
    return this.clientService.create(clientDto);
  }

  // Obtener listado de clientes
  @Get()
  async findAll(@Query('email') email?: string) {
    return this.clientService.findAll(email);
  }

  // Actualizar cliente
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClientDto: any) {
    return this.clientService.update(id, updateClientDto);
  }

  // Borrar cliente
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clientService.delete(id);
  }
}
