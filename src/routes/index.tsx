import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/kof-logo.png";
import mascot from "@/assets/kof-mascot.png";
import { Card, Section } from "@/components/page-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Kof Foundation — Uma linguagem. Um compilador. Vários mundos." },
      {
        name: "description",
        content:
          "A fundação que sustenta a linguagem Kof e seu ecossistema: projetos, filosofia, doações da comunidade e parcerias.",
      },
      {
        property: "og:title",
        content: "The Kof Foundation — Uma linguagem. Um compilador. Vários mundos.",
      },
      {
        property: "og:description",
        content:
          "A fundação que sustenta a linguagem Kof e seu ecossistema: projetos, filosofia, doações e parcerias.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://koflang.github.io/kof.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://koflang.github.io/kof.png" },
    ],
  }),
  component: Home,
});

const principles = [
  ["01", "Menos código, mesma capacidade"],
  ["02", "Tipagem forte"],
  ["03", "Intenção acima de cerimônia"],
  ["04", "Um frontend, múltiplos backends"],
  ["05", "Direto ao alvo"],
  ["06", "Interoperabilidade"],
  ["07", "Nenhuma mágica desnecessária"],
  ["08", "Ferramentas importam"],
];

const numbers = [
  ["4", "alvos de compilação", "JVM, nativo, script e web"],
  ["1", "IR única", "backend-agnóstica, do lexer ao ELF"],
  ["GPLv3", "software livre", "seu programa continua seu"],
];

function Home() {
  return (
    <>
      <section className="grid-backdrop relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="label-mono">Fundação · Ecossistema Kof</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Uma linguagem.
              <br />
              Um compilador.
              <br />
              <span className="text-gradient-ember">Vários mundos.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A The Kof Foundation é a frente institucional por trás do Kof — linguagem moderna,
              estaticamente tipada, compilada para JVM, nativo, script e web. Sustentamos o
              compilador, as ferramentas e as pessoas que constroem em cima deles.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/apoiar"
                className="rounded-md bg-gradient-ember px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Apoiar a fundação
              </Link>
              <Link
                to="/projetos"
                className="rounded-md border border-border px-6 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
              >
                Ver projetos
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-ember opacity-15 blur-3xl" />
            <img src={logo} alt="Logo do Kof" className="relative w-48 sm:w-64" />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {numbers.map(([big, label, sub]) => (
            <Card key={label}>
              <p className="text-gradient-ember font-mono text-4xl font-bold">{big}</p>
              <p className="mt-3 font-semibold">{label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Missão" title="Por que uma fundação">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <p className="font-mono text-xs text-primary">sustentar</p>
            <h3 className="mt-3 text-lg font-semibold">Manter o compilador vivo</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Infraestrutura, releases, testes e documentação custam tempo. A fundação garante que o
              Kof continue evoluindo em ritmo próprio, sem depender de um único mantenedor.
            </p>
          </Card>
          <Card>
            <p className="font-mono text-xs text-primary">acelerar</p>
            <h3 className="mt-3 text-lg font-semibold">Impulsionar inovação</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Novos backends, ferramentas e experimentos de linguagem nascem aqui — e viram projetos
              abertos que qualquer pessoa pode usar.
            </p>
          </Card>
          <Card>
            <p className="font-mono text-xs text-primary">conectar</p>
            <h3 className="mt-3 text-lg font-semibold">Aproximar comunidade e empresas</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Uma frente comercial clara para patrocínios, parcerias e adoção corporativa, sem
              fechar o código.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Filosofia" title="O “paradigma” da intenção">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Kof é <strong className="text-foreground">orientado a intenção</strong>: o código
              expressa <em>o que</em> quer, e a plataforma — linguagem, compilador, runtime e stdlib
              — decide <em>como</em>, por alvo e por convenção.
            </p>
            <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-surface p-5 font-mono text-sm text-primary">
              {`intenção → Kof → compilador → backend`}
            </pre>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Você escreve <code className="font-mono text-primary">spawn task()</code> e não{" "}
              <code className="font-mono">Thread</code>;{" "}
              <code className="font-mono text-primary">app.get("/users/:id")</code> e não um
              contêiner de servlets;{" "}
              <code className="font-mono text-primary">json.decode&lt;User&gt;(body)</code> e não um
              parser manual. Quando um alvo não consegue cumprir a intenção, ele avisa em tempo de
              compilação — nunca em silêncio.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map(([n, text]) => (
              <div
                key={n}
                className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="font-mono text-xs text-primary">{n}</span>
                <p className="mt-2 text-sm leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Arquitetura" title="Do fonte ao alvo">
        <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-6 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {`Source (.kf)
  ↓ Lexer
  ↓ Parser
  ↓ AST
  ↓ Sistema de tipos
  ↓ Análise semântica
  ↓ Kof IR (backend-agnóstica)
  ├── JVM Backend (ASM)                      → .class
  ├── Native Backend (x86_64/riscv64/aarch64) → ELF
  └── JS Backend (GraalJS)                    → ES Modules`}
        </pre>
      </Section>

      <Section eyebrow="Mascote" title="Uma civeta que come café">
        <div className="grid items-center gap-10 rounded-lg border border-border bg-card p-8 md:grid-cols-[1fr_1.2fr]">
          <img src={mascot} alt="Mascote do Kof, uma civeta" className="mx-auto w-56" />
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              O mascote do Kof é uma <strong className="text-foreground">civeta</strong> — também
              chamada de gato-de-almíscar, o felino que come café. Nada mais adequado para uma
              linguagem que se pronuncia <em className="text-primary">coffe</em>.
            </p>
            <p className="mt-4 font-mono text-xs italic leading-relaxed text-muted-foreground">
              i'm always opensource / so the whole world can use me / so i can build a better world
              / and draw with all my Koffies
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="glow-ember rounded-xl border border-primary/30 bg-surface p-10 text-center">
          <p className="label-mono">Comunidade</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Construa com a gente
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Doações, patrocínio corporativo ou seu próprio projeto feito em Kof — todo apoio empurra
            o ecossistema para frente.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/apoiar"
              className="rounded-md bg-gradient-ember px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Fazer uma doação
            </Link>
            <Link
              to="/enviar-projeto"
              className="rounded-md border border-border px-6 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
            >
              Envie seu projeto
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
