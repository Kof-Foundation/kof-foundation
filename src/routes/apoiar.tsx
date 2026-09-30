import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, ExternalLink, QrCode } from "lucide-react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Card, PageHero, Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

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
  component: Apoiar,
});

const channels = [
  {
    name: "GitHub Sponsors",
    description:
      "Apoio recorrente mensal, direto na plataforma onde o código vive. Ideal para desenvolvedores.",
    href: "https://github.com/sponsors/KofLang",
    cta: "Apoiar pelo GitHub Sponsors",
    featured: true,
  },
  {
    name: "Ko-fi",
    description:
      "Uma doação única, do tamanho de um café. Sem cadastro e sem compromisso.",
    href: "https://ko-fi.com/kof4j",
    cta: "Apoiar pelo Ko-fi",
    featured: false,
  },
];

const pixKey = "51.839.682/0001-61";

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
  const [showPix, setShowPix] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyPixKey() {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 2500);
    } catch {
      setCopyStatus("error");
    }
  }

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
                <Button asChild variant="outline" className="mt-5 w-full font-mono text-xs">
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.cta}
                    <ExternalLink aria-hidden="true" />
                  </a>
                </Button>
              ) : (
                <p className="mt-5 rounded-md border border-dashed border-border px-4 py-2.5 text-center font-mono text-xs text-muted-foreground">
                  {c.cta}
                </p>
              )}
            </Card>
          ))}

          <Card className={showPix ? "border-primary/50" : ""}>
            <h3 className="text-lg font-bold">Pix</h3>
            <p className="mt-3 min-h-20 text-sm leading-relaxed text-muted-foreground">
              Para quem está no Brasil: transferência direta, sem taxa de intermediário.
            </p>
            <Button
              type="button"
              variant={showPix ? "secondary" : "outline"}
              className="mt-5 w-full font-mono text-xs"
              aria-expanded={showPix}
              aria-controls="pix-details"
              onClick={() => {
                setShowPix((current) => !current);
                setCopyStatus("idle");
              }}
            >
              <QrCode aria-hidden="true" />
              {showPix ? "Ocultar Pix" : "Ver QR Code e chave"}
            </Button>
          </Card>
        </div>

        {showPix && (
          <div
            id="pix-details"
            className="mt-6 grid gap-6 border-y border-border bg-surface px-5 py-7 sm:grid-cols-[auto_1fr] sm:items-center sm:px-8"
          >
            <div className="mx-auto rounded-md bg-foreground p-3 sm:mx-0">
              <QRCodeSVG
                value={pixKey}
                size={184}
                level="H"
                bgColor="var(--foreground)"
                fgColor="var(--background)"
                title="QR Code da chave Pix CNPJ"
              />
            </div>
            <div>
              <p className="label-mono">Chave Pix · CNPJ</p>
              <p className="mt-2 break-all font-mono text-xl font-bold text-foreground">{pixKey}</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Escaneie o código ou copie a chave e cole no aplicativo do seu banco.
              </p>
              <Button type="button" className="mt-5" onClick={copyPixKey}>
                {copyStatus === "copied" ? (
                  <Check aria-hidden="true" />
                ) : (
                  <Copy aria-hidden="true" />
                )}
                {copyStatus === "copied" ? "Chave copiada" : "Copiar chave Pix"}
              </Button>
              {copyStatus === "error" && (
                <p role="status" className="mt-3 text-sm text-muted-foreground">
                  Não foi possível copiar automaticamente. Selecione a chave acima para copiar.
                </p>
              )}
            </div>
          </div>
        )}
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
