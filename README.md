# Kof Foundation

A frente institucional do ecossistema [Kof](https://koflang.github.io/) — uma linguagem, um compilador, vários mundos. O site é a vitrine dos projetos e da inovação do Kof e o canal por onde a fundação recebe doações e incentivos da comunidade.

- Site da linguagem: https://koflang.github.io/
- Compilador: https://github.com/KofLang/Kof4j
- Doações e patrocínio: página `/apoiar`
- Apoiadores e parcerias: página `/apoiadores`

## Stack

- [TanStack Start](https://tanstack.com/start) (React + roteamento por arquivos)
- [TanStack Router](https://tanstack.com/router)
- [Vite](https://vite.dev/) + [Nitro](https://nitro.build/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- TypeScript

## Desenvolvimento

Requer [Bun](https://bun.sh/). Para instalar as dependências e subir o servidor de desenvolvimento:

```sh
bun install
bun run dev
```

O servidor sobe em `http://localhost:8080`.

## Scripts

| Comando             | Descrição                   |
| ------------------- | --------------------------- |
| `bun run dev`       | Servidor de desenvolvimento |
| `bun run build`     | Build de produção           |
| `bun run build:dev` | Build em modo development   |
| `bun run preview`   | Pré-visualiza o build       |
| `bun run lint`      | Roda o ESLint               |
| `bun run format`    | Formata com Prettier        |

## Rotas

- `/` — início
- `/projetos` — vitrine dos projetos
- `/apoiar` — doações e patrocínio
- `/apoiadores` — empresas e pessoas que apoiam
- `/enviar-projeto` — envio de projetos da comunidade
- `/contato` — contato e parcerias

## Licença

GPLv3.
