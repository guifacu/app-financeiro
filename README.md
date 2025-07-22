# App Financeiro

Uma aplicação web para controle financeiro pessoal, desenvolvida com Next.js e TypeScript.

## Funcionalidades

- Visualização de entradas, saídas e balanço
- Análise gráfica de gastos
- Categorização de despesas
- Listagem de transações
- Suporte a transações parceladas

## Tecnologias Utilizadas

- Next.js 15
- React 19
- TypeScript
- Recharts (para gráficos)
- Lucide React (para ícones)
- Date-fns (para manipulação de datas)
- Zod (para validação de dados)

## Estrutura do Projeto

```
src/
  ├── app/              # Páginas da aplicação
  ├── components/       # Componentes React
  │   ├── analysis/    # Componentes de análise e gráficos
  │   ├── cards/       # Componentes de cartões financeiros
  │   ├── categories/  # Componentes de categorias
  │   └── transactions/# Componentes de transações
  ├── constants/       # Constantes e dados mock
  ├── styles/          # Arquivos de estilo
  ├── types/           # Definições de tipos TypeScript
  └── utils/           # Funções utilitárias
```

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata os arquivos com Prettier
