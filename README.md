
# Project

Funcionalidades básicas de la API, como crear, actualizar, eliminar y buscar clientes por correo electrónico.

## Tecnologías

- **NestJS**
- **Mongoose**
- **MongoDB**

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tonysl3003/crud.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd crud
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor:

   ```bash
   npm run start
   ```

   El servidor se ejecutará en `http://localhost:3000`.

## Endpoints de la API


### 1. Obtener todos los clientes o buscar por email

- **URL**: `/clients`
- **Método**: `GET`
- **Descripción**: Obtiene todos los usuarios o filtra por correo electrónico.
- **Parámetro opcional de consulta**: `email` (filtra por coincidencia parcial).

#### Ejemplo de URL para obtener todos los usuarios:
  
```bash
GET http://localhost:3000/clients
```

#### Ejemplo de URL para buscar clientes por correo electrónico:

```bash
GET http://localhost:3000/clients?email=example@example.com
```

### 2. Crear un nuevo cliente

- **URL**: `/clients`
- **Método**: `POST`
- **Descripción**: Crea un nuevo usuario en la base de datos.
- **Cuerpo de la solicitud** (JSON):

```json
{
  "name": "Nombre del Usuario",
  "email": "correo@ejemplo.com",
  "phone": "+1234567890",
  "password": "contraseñaSegura"
}
```

#### Ejemplo de URL:

```bash
POST http://localhost:3000/clients
```

### 3. Actualizar un cliente

- **URL**: `/clients/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza los datos de un usuario existente.
- **Parámetro de ruta**: `id` (identificador del usuario a actualizar).
- **Cuerpo de la solicitud** (JSON):

```json
{
  "name": "Nombre Actualizado",
  "email": "nuevoemail@ejemplo.com"
}
```

#### Ejemplo de URL:

```bash
PUT http://localhost:3000/clients/1234567890abcdef
```

### 4. Eliminar un usuario

- **URL**: `/clients/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un usuario de la base de datos.
- **Parámetro de ruta**: `id` (identificador del usuario a eliminar).

#### Ejemplo de URL:

```bash
DELETE http://localhost:3000/clients/1234567890abcdef
```

## Ejemplo de Solicitud HTTP

Aquí te mostramos ejemplos de cómo interactuar con la API usando herramientas como **Postman** o **curl**.

### Solicitud `GET` para obtener todos los usuarios:

```bash
curl -X GET "http://localhost:3000/clients"
```

### Solicitud `GET` para buscar usuarios por email:

```bash
curl -X GET "http://localhost:3000/clients?email=example"
```

### Solicitud `POST` para crear un usuario:

```bash
curl -X POST "http://localhost:3000/clients" -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "password123"
}'
```

### Solicitud `PUT` para actualizar un usuario:

```bash
curl -X PUT "http://localhost:3000/clients/1234567890abcdef" -H "Content-Type: application/json" -d '{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}'
```

### Solicitud `DELETE` para eliminar un usuario:

```bash
curl -X DELETE "http://localhost:3000/clients/1234567890abcdef"
```

## Validación de Datos

El DTO para la creación de usuarios está validado usando **class-validator** para asegurar que los datos enviados cumplan con los requisitos:

- `name`: Obligatorio, debe ser una cadena.
- `email`: Obligatorio, debe ser un correo electrónico válido.
- `phone`: Obligatorio, debe ser un número de teléfono válido.
- `password`: Obligatorio, debe tener una longitud mínima de 4 caracteres.
