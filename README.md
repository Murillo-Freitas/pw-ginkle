# Ginkle

Aplicação React para cadastro e gestão de Instituições de Longa Permanência para Idosos (ILPI), usando PrimeReact e Vite.

## Stack

- React 18
- React Router DOM 6
- PrimeReact e PrimeFlex
- Axios
- Vite 7
- ESLint 9
- Docker com Nginx para servir o build de produção

## Scripts

```sh
npm install
npm run dev
npm run lint
npm run build
```

## Desenvolvimento local

O servidor de desenvolvimento sobe em:

```txt
http://localhost:5173
```

## Build de produção

```sh
npm run build
```

O resultado fica em `dist/`.

## Docker

Build da imagem:

```sh
docker build -t teddy .
```

Executar localmente:

```sh
docker run -p 4173:80 teddy
```

Ou com Compose:

```sh
docker compose up --build
```

Aplicação disponível em:

```txt
http://localhost:4173
```

## Deploy

O projeto está configurado como SPA. Em ambientes como Vercel, rotas internas são redirecionadas para `index.html`.

## Observações

- O login atual é uma sessão local simples usando cookie ou localStorage.
- As listagens consomem APIs mockadas externas.
- O código foi reorganizado para centralizar rotas, sessão, normalização de dados e serviços HTTP.
- Se a API externa falhar, o front usa dados seedados e um CRUD local persistido em `localStorage`, mantendo o site funcional para estudo e demonstração.
