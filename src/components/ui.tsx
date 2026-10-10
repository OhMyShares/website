import { useEffect, useRef, useState, type ElementType, type ReactNode, type SVGProps } from 'react';
import { Check, Copy } from 'lucide-react';

export function Logo({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="oms-logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2b2b2b" />
          <stop offset="1" stopColor="#161a19" />
        </linearGradient>
      </defs>
      <rect x="0.75" y="0.75" width="70.5" height="70.5" rx="8.1" fill="url(#oms-logo-bg)" stroke="rgb(255 255 255 / 0.12)" strokeWidth="1.5" />
      <path d="m12.2 54.2 16.8-16.9 11.2 11.2 23.8-26.7-3.9-3.9-19.9 22.2-11.2-11.2-21 21.1z" fill="#35ba94" />
    </svg>
  );
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = true,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
}

export function CopyButton({ text, labels }: { text: string; labels: { copy: string; copied: string } }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
    >
      {copied ? <Check className="size-3.5 text-brand-400" /> : <Copy className="size-3.5" />}
      {copied ? labels.copied : labels.copy}
    </button>
  );
}

const TOKEN_CLASS: Record<string, string> = {
  k: 'text-sky-300',
  s: 'text-brand-300',
  c: 'text-zinc-500',
  n: 'text-amber-300',
  f: 'text-violet-300',
  p: 'text-zinc-500',
};

export function highlight(source: string, rules: Array<[RegExp, keyof typeof TOKEN_CLASS]>): ReactNode[] {
  return source.split('\n').map((line, lineIndex) => {
    const parts: ReactNode[] = [];
    let rest = line;
    let key = 0;
    while (rest.length) {
      let best: { index: number; length: number; cls: string } | null = null;
      for (const [regex, cls] of rules) {
        const match = new RegExp(regex.source, regex.flags.replace('g', '')).exec(rest);
        if (match && (best === null || match.index < best.index)) {
          best = { index: match.index, length: match[0].length, cls: TOKEN_CLASS[cls] };
        }
      }
      if (!best || best.length === 0) {
        parts.push(rest);
        break;
      }
      if (best.index > 0) {
        parts.push(rest.slice(0, best.index));
      }
      parts.push(
        <span key={key++} className={best.cls}>
          {rest.slice(best.index, best.index + best.length)}
        </span>,
      );
      rest = rest.slice(best.index + best.length);
    }
    return (
      <span key={lineIndex} className="block min-h-[1.5em]">
        {parts}
      </span>
    );
  });
}

export function useGithubStars(apiUrl: string): number | null {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(apiUrl, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { stargazers_count?: number } | null) => {
        if (typeof data?.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [apiUrl]);

  return stars;
}

export function formatCount(value: number): string {
  return value >= 1000 ? `${(value / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(value);
}
