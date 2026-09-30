import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import b7cloudDragon from "@/assets/b7cloud-dragon.svg";
import { Card, PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/apoiadores")({
  head: () => ({
    meta: [
      { title: "Apoiadores · The Kof Foundation" },
      {
        name: "description",
        content:
          "Empresas e pessoas que sustentam a The Kof Foundation: infraestrutura, doações e patrocínio para manter o ecossistema Kof livre.",
      },
      { property: "og:title", content: "Apoiadores · The Kof Foundation" },
      {
        property: "og:description",
        content:
          "Quem apoia o Kof: parcerias e patrocínios que mantêm a linguagem e suas ferramentas em evolução.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Apoiadores,
});

const supporters = [
  {
    name: "b7cloud",
    tagline: "Soluções em Cloud",
    description:
      "Infraestrutura em cloud escalável e segura para todos os portes — hospedagem, servidores dedicados, banco de dados e apps gerenciados. Apoia a fundação provendo recursos para o ecossistema Kof.",
    href: "https://b7cloud.com.br/",
    linkLabel: "b7cloud.com.br",
    logo: "https://b7cloud.com.br/favico.svg",
    art: b7cloudDragon,
    featured: true,
  },
];

function Apoiadores() {
  return (
    <>
      <PageHero
        eyebrow="Apoiadores"
        title={
          <>
            Quem mantém o <span className="text-gradient-ember">Kof de pé</span>
          </>
        }
        description="A fundação existe graças a empresas e pessoas que acreditam em software livre. Aqui ficam registradas as parcerias que sustentam a linguagem, o compilador e suas ferramentas."
      />

      <Section eyebrow="Parceiros" title="Empresas que apoiam">
        {supporters.map((s) => (
          <Card
            key={s.name}
            className={`overflow-hidden p-0 ${s.featured ? "border-primary/50 glow-ember" : ""}`}
          >
            <div className="grid items-center gap-6 p-6 sm:grid-cols-[1.35fr_1fr] sm:gap-8 sm:p-8">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border bg-background p-2">
                    <img
                      src={s.logo}
                      alt={`Logo da ${s.name}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{s.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{s.tagline}</p>
                  </div>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-gradient-ember px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {s.linkLabel}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-ember opacity-15 blur-3xl" />
                <img
                  src={s.art}
                  alt={`Ilustração da ${s.name}`}
                  className="relative w-48 max-w-full sm:w-60"
                />
              </div>
            </div>
          </Card>
        ))}
      </Section>

      <Section>
        <div className="glow-ember rounded-xl border border-primary/30 bg-surface p-10 text-center">
          <p className="label-mono">Sua marca aqui</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Apoie a fundação</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Empresas que patrocinam o Kof aparecem nesta página e no README dos projetos. Fale com a
            gente ou faça uma doação.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/apoiar"
              className="rounded-md bg-gradient-ember px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quero apoiar
            </Link>
            <Link
              to="/contato"
              className="rounded-md border border-border px-6 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
            >
              Falar sobre patrocínio
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
