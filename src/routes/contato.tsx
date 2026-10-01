import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e parcerias · The Kof Foundation" },
      {
        name: "description",
        content:
          "Fale com a The Kof Foundation sobre patrocínio corporativo, parcerias técnicas e adoção do Kof na sua empresa.",
      },
      { property: "og:title", content: "Contato e parcerias · The Kof Foundation" },
      {
        property: "og:description",
        content: "Patrocínio corporativo, parcerias técnicas e adoção do Kof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

const channels = [
  {
    title: "Parcerias e patrocínio",
    text: "Sua empresa usa ou quer usar Kof em produção? Conversamos sobre suporte, roadmap e visibilidade.",
    href: "https://github.com/KofLang/Kof4j/discussions",
    label: "Abrir uma conversa no GitHub",
  },
  {
    title: "Questões técnicas",
    text: "Bugs, gaps de compilação e pedidos de recurso vão direto para o repositório do compilador.",
    href: "https://github.com/KofLang/Kof4j/issues/new",
    label: "Abrir uma issue",
  },
  {
    title: "Imprensa e comunidade",
    text: "Quer escrever sobre o Kof, dar uma palestra ou organizar um encontro? Adoramos.",
    href: "https://github.com/KofLang",
    label: "Perfil da organização",
  },
];

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Vamos construir junto</>}
        description="A fundação é a porta de entrada comercial do Kof. Fale com a gente sobre patrocínio, adoção corporativa ou colaboração técnica."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-mono text-xs text-primary hover:underline"
              >
                {c.label} →
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-dashed border-border p-6">
          <p className="label-mono">E-mail</p>
          <a
            href="mailto:koflang@bsdmail.com"
            className="mt-2 inline-block font-mono text-lg font-semibold text-primary hover:underline"
          >
            koflang@bsdmail.com
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Para patrocínio, parcerias, imprensa ou qualquer assunto institucional da fundação.
          </p>
        </div>
      </Section>
    </>
  );
}
