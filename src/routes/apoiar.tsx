import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/apoiar")({
  head: () => ({
    meta: [
      { title: "Apoiar · The Kof Foundation" },
      {
        name: "description",
        content:
          "Doe ou patrocine a The Kof Foundation e ajude a manter a linguagem Kof, o compilador e suas ferramentas livres e em evolução.",
      },
      { property: "og:title", content: "Apoiar · The Kof Foundation" },
      {
        property: "og:description",
        content:
          "Doações da comunidade e patrocínio corporativo para o ecossistema Kof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Apoiar;
});

const channels = [
  {
    name: "GitHub Sponsors",
    description:
      "Apoio recorrente mensal, direto na plataforma onde o código vive. Ideal para desenvolvedores.",
    href: "https://github.com/sponsors/KofLang",
    cta: "Patrocinar no GitHub",
    featured: true,
  },
  {
    name: "Ko-fi",
    description:
      "Uma doação única, do tamanho de um café. Sem cadastro e sem compromisso.",
    href: "https://ko-fi.com/koflang",
    cta: "Pagar um café",
    featured: false,
  },
  {
    name: "Pix",
    description:
      "Para quem está no Brasil: transferência direta, sem taxa de intermediário.",
    href: null,
    cta: "Chave Pix a definir",
    featured: false,
  },
];

const tiers = [
  {
    name: "Koffie",
    amount: "R$ 15 / mês",
    perks: ["Nome na página de apoiadores", "Badge de apoiador no GitHub"],
  },
  {
    name: "Contribuidor",
    amount: "R$ 75 / mês",
    perks: [
      "Tudo do nível anterior",
      "Acesso ao canal de apoiadores",
      "Voto consultivo no roadmap",
    ],
  },
  {
    name: "Empresa",
    amount: "Sob consulta",
    perks: [
      "Logo no site e no README",
      "Suporte prioritário para adoção",
      "Sessões técnicas com o time",
    ],
  },
];

function Apoiar() {
  return (
    <>
      <PageHero
        eyebrow="Doações e patrocínio"
        title={
          <>
            Cada apoio vira <span className="text-gradient-ember">código livre</span>
          </>
        }
        description="A fundação não vende licença nem fecha o compilador. O que mantém o Kof de pé é a comunidade — e empresas que dependem dele."
      />

      <Section eyebrow="Canais" title="Como apoiar hoje">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <Card
              key={c.name}
              className={c.featured ? "border-primary/50 glow-ember" : ""}
            >
              <h3 className="text-lg font-bold">{c.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-5 block rounded-md px-4 py-2.5 text-center font-mono text-xs font-semibold transition-opacity hover:opacity-90 ${
                    c.featured
                      ? "bg-gradient-ember text-primary-foreground"
                      : "border border-border text-foreground"
                  }`}
                >
                  {c.cta}
                </a>
              ) : (
                <p className="mt-5 rounded-md border border-dashed border-border px-4 py-2.5 text-center font-mono text-xs text-muted-foreground">
                  {c.cta}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Níveis" title="Reconhecimento por nível">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name}>
              <p className="label-mono">{t.name}</p>
              <p className="mt-2 text-2xl font-bold text-gradient-ember">{t.amount}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-primary">›</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Valores e benefícios são uma proposta inicial — ajuste antes de divulgar.
        </p>
      </Section>

      <Section eyebrow="Transparência" title="Para onde vai o dinheiro">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["Infraestrutura", "Builds, CI, hospedagem e distribuição dos binários."],
            ["Desenvolvimento", "Horas dedicadas ao compilador, às ferramentas e à documentação."],
            ["Comunidade", "Bolsas para contribuintes, eventos e material de aprendizado."],
          ].map(([title, text]) => (
            <Card key={title}>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
