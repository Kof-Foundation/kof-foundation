import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/kof-logo.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/projetos", label: "Projetos" },
  { to: "/apoiar", label: "Apoiar" },
  { to: "/enviar-projeto", label: "Envie seu projeto" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kof" className="h-7 w-auto" />
          <span className="font-mono text-xs font-bold tracking-[0.28em]">
            THE KOF FOUNDATION
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-2 font-mono text-xs tracking-wide transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/apoiar"
            className="ml-2 rounded-md bg-gradient-ember px-4 py-2 font-mono text-xs font-semibold tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Doar
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="ml-auto rounded-md border border-border px-3 py-2 font-mono text-xs lg:hidden"
        >
          {open ? "fechar" : "menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-5 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-sm text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
