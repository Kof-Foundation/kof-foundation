import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos · The Kof Foundation" },
      {
        name: "description",
        content:
          "Vitrine dos projetos do ecossistema Kof: a linguagem, o compilador Kof4j, as ferramentas e o que vem a seguir.",
      },
      { property: "og:title", content: "Projetos · The Kof Foundation" },
      {
        property: "og:description",
        content: "A vitrine dos projetos e da inovação do ecossistema Kof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

const projects = [
  {
    name: "Kof",
    status: "ativo",
    tagline: "A linguagem",
    description:
      "Linguagem moderna, estaticamente tipada e orientada a intenção. Menos cerimônia, mais intenção.",
    link: "https://koflang.github.io/",
    linkLabel: "koflang.github.io",
  },
  {
    name: "Kof4j",
    status: "ativo",
    tagline: "Compilador e IR",
    description:
      "Lexer, parser, sistema de tipos, IR backend-agnóstica e os backends JVM (ASM), nativo (x86_64/riscv64/aarch64) e JS (GraalJS).",
    link: "https://github.com/KofLang/Kof4j",
    linkLabel: "github.com/KofLang/Kof4j",
  },
  {
    name: "Kof CLI",
    status: "ativo",
    tagline: "Ferramentas",
    description:
      "build, run, serve, check, test, fmt, repl, bench, profile, inspect, debug, translate, migrate — a caixa de ferramentas completa em um comando.",
    link: "https://github.com/KofLang/Kof4j/tree/main/docs/tooling",
    linkLabel: "docs/tooling",
  },
  {
    name: "KofJS",
    status: "ativo",
    tagline: "Alvo web",
    description:
      "Compilação para ES Modules com GraalJS embarcado — sem nenhuma dependência externa para o alvo web.",
    link: "https://github.com/KofLang/Kof4j",
    linkLabel: "Kof4j · backend JS",
  },
];

const roadmap = [
  ["Agora", "Estabilizar o compilador, o formatador e a suíte de testes em todos os alvos."],
  ["Em breve", "Distribuição oficial empacotada com JDK embarcado para Linux, macOS e Windows."],
  ["Próximo", "Ecossistema de bibliotecas, LSP maduro e editor com suporte de primeira classe."],
  ["Horizonte", "Programa de projetos apoiados pela fundação e bolsas para contribuidores."],
];

function Projetos() {
  return (
    <>
      <PageHero
        eyebrow="Vitrine"
        title={<>Projetos e inovação do ecossistema Kof</>}
        description="Tudo que a fundação sustenta, do compilador às ferramentas. Software livre sob GPLv3 — programas escritos em Kof continuam com a licença que você escolher."
      />

      <Section eyebrow="Projetos" title="O que já existe">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.name}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="rounded-full border border-primary/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                  {p.status}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{p.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-mono text-xs text-primary hover:underline"
              >
                {p.linkLabel} →
              </a>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Roadmap" title="Para onde vamos">
        <div className="space-y-3">
          {roadmap.map(([phase, text]) => (
            <div
              key={phase}
              className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-widest text-primary">
                {phase}
              </span>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-xl border border-border bg-surface p-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Construiu algo com Kof?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Mande seu projeto para aparecer nesta vitrine.
          </p>
          <Link
            to="/enviar-projeto"
            className="mt-6 inline-block rounded-md bg-gradient-ember px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Envie seu projeto
          </Link>
        </div>
      </Section>
    </>
  );
}
