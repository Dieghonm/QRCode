# QR Code Generator

Este projeto permite a criação de códigos QR para URLs e qualquer tipo de texto. Ele oferece uma interface simples onde os usuários podem inserir uma URL ou texto para gerar os códigos QR correspondentes. O projeto é construído usando React.

## Funcionalidades

- Geração de QR Code para uma URL.
- Geração de QR Code para um texto.
- Interface simples e amigável com suporte para dispositivos móveis.
- Download da imagem do QR Code gerado com um clique.

## Tecnologias Usadas

- **React**: Framework JavaScript para construção da interface de usuário.
- **qrcode.react**: Biblioteca para geração de QR Codes em React.
- **CSS**: Estilização da interface do usuário.
- **Imagem**: Utilização de ícones personalizados para melhorar a experiência do usuário.

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Como Rodar o Projeto Localmente

1. Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar o aplicativo.

## Como Usar

1. **Gerar QR Code de URL ou Texto**:
   - Insira uma URL no campo de entrada ou um texto no campo de texto.
   - Clique no botão de geração para criar um código QR correspondente à URL ou ao texto inserido.

2. **Gerar QR Code de Wi-Fi (em breve)**:
   - A funcionalidade de geração de QR Code para informações de Wi-Fi será implementada em breve.

3. **Download do QR Code**:
   - Após gerar o QR Code, clique no botão **DOWNLOAD** para baixar a imagem do QR Code gerado.

## Personalizações

- **Estilo**: Você pode ajustar o CSS em `src/style/Input.css` para modificar a aparência do aplicativo.
- **Imagens**: As imagens de ícones (como as usadas para URL e mensagem) podem ser substituídas por suas próprias imagens, armazenadas na pasta `src/svg/`.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, correções de bugs ou novos recursos, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```
