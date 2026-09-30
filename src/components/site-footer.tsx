import { Link } from "@tanstack/react-router";
import logo from "@/assets/kof-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kof" className="h-7 w-auto" />
              <span className="font-mono text-xs font-bold tracking-[0.28em]">
                THE KOF FOUNDATION
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A frente institucional do ecossistema Kof — uma linguagem, um compilador, vários
              mundos. Software livre sob GPLv3.
            </p>
            <p className="mt-6 font-mono text-xs italic text-muted-foreground">
              i'm always opensource — so the whole world can use me
            </p>
          </div>

          <div>
            <p className="label-mono">Fundação</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/projetos" className="hover:text-primary">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/apoiar" className="hover:text-primary">
                  Apoiar
                </Link>
              </li>
              <li>
                <Link to="/apoiadores" className="hover:text-primary">
                  Apoiadores
                </Link>
              </li>
              <li>
                <Link to="/enviar-projeto" className="hover:text-primary">
                  Envie seu projeto
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary">
                  Contato e parcerias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-mono">Ecossistema</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://koflang.github.io/"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  koflang.github.io
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/KofLang/Kof4j"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub · Kof4j
                </a>
              </li>
              <li>
                <Link to="/apoiar" className="hover:text-primary">
                  Doações e patrocínio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Kof Foundation · GPLv3
        </p>
      </div>
    </footer>
  );
}
