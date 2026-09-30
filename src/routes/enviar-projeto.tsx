import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/page-shell";

export const Route = createFileRoute("/enviar-projeto")({
  head: () => ({
    meta: [
      { title: "Envie seu projeto · The Kof Foundation" },
      {
        name: "description",
        content:
          "Construiu algo com Kof? Envie seu projeto para ser divulgado na vitrine da The Kof Foundation.",
      },
      { property: "og:title", content: "Envie seu projeto · The Kof Foundation" },
      {
        property: "og:description",
        content: "Divulgue seu projeto feito em Kof na vitrine da fundação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnviarProjeto,
});

const inputClass =
  "mt-2 w-full rounded-md border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function EnviarProjeto() {
  const [form, setForm] = useState({
    nome: "",
    autor: "",
    link: "",
    descricao: "",
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const issueUrl = () => {
    const body = [
      `**Projeto:** ${form.nome}`,
      `**Autor:** ${form.autor}`,
      `**Link:** ${form.link}`,
      "",
      form.descricao,
      "",
      "_Enviado pela vitrine da The Kof Foundation._",
    ].join("\n");

    return `https://github.com/KofLang/Kof4j/issues/new?title=${encodeURIComponent(
      `[Vitrine] ${form.nome || "Novo projeto"}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const ready = form.nome.trim() && form.link.trim();

  return (
    <>
      <PageHero
        eyebrow="Vitrine aberta"
        title={
          <>
            Envie seu projeto feito em{" "}
            <span className="text-gradient-ember">Kof</span>
          </>
        }
        description="Biblioteca, ferramenta, jogo, experimento ou app em produção — se roda em Kof, cabe na vitrine. Preencha os campos e revise o envio no GitHub antes de confirmar."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <form
            className="rounded-xl border border-border bg-card p-8"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(issueUrl(), "_blank", "noopener,noreferrer");
            }}
          >
            <label className="block">
              <span className="label-mono">Nome do projeto</span>
              <input
                required
                value={form.nome}
                onChange={set("nome")}
                placeholder="kof-http"
                className={inputClass}
              />
            </label>

            <label className="mt-6 block">
              <span className="label-mono">Autor ou organização</span>
              <input
                value={form.autor}
                onChange={set("autor")}
                placeholder="@seu-usuario"
                className={inputClass}
              />
            </label>

            <label className="mt-6 block">
              <span className="label-mono">Link (repositório ou site)</span>
              <input
                required
                type="url"
                value={form.link}
                onChange={set("link")}
                placeholder="https://github.com/..."
                className={inputClass}
              />
            </label>

            <label className="mt-6 block">
              <span className="label-mono">O que ele faz</span>
              <textarea
                rows={5}
                value={form.descricao}
                onChange={set("descricao")}
                placeholder="Em duas ou três frases: o problema que resolve e qual alvo do Kof ele usa."
                className={inputClass}
              />
            </label>

            <button
              type="submit"
              disabled={!ready}
              className="mt-8 w-full rounded-md bg-gradient-ember px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Revisar envio no GitHub
            </button>
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
              abre uma issue pré-preenchida — você confirma lá
            </p>
          </form>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="label-mono">Critérios</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">›</span> Usa Kof de forma real, nem que seja em parte</li>
                <li className="flex gap-2"><span className="text-primary">›</span> Tem link público que qualquer pessoa consegue abrir</li>
                <li className="flex gap-2"><span className="text-primary">›</span> Descrição clara do que faz</li>
                <li className="flex gap-2"><span className="text-primary">›</span> Código aberto ou produto com página pública</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="label-mono">O que você ganha</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">›</span> Espaço na vitrine da fundação</li>
                <li className="flex gap-2"><span className="text-primary">›</span> Divulgação nos canais do Kof</li>
                <li className="flex gap-2"><span className="text-primary">›</span> Feedback técnico de quem escreve o compilador</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
