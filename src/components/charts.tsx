import type { ReactNode } from 'react';

export interface Segment {
  value: number;
  color: string;
}

export function Donut({ segments, size = 120, stroke = 14, children }: { segments: Segment[]; size?: number; stroke?: number; children?: ReactNode }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const gap = 2;
  let offset = 0;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgb(255 255 255 / 0.05)" strokeWidth={stroke} />
        {segments.map((segment, index) => {
          const length = (segment.value / total) * circumference;
          const dash = `${Math.max(length - gap, 0)} ${circumference}`;
          const circle = (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={stroke}
              strokeDasharray={dash}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          );
          offset += length;
          return circle;
        })}
      </svg>
      {children && <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>}
    </div>
  );
}

function toPath(values: number[], width: number, height: number, min: number, max: number): string {
  const step = width / (values.length - 1);
  const scale = (v: number) => height - ((v - min) / (max - min)) * height;
  return values
    .map((v, i) => {
      const x = i * step;
      const y = scale(v);
      if (i === 0) {
        return `M${x.toFixed(1)},${y.toFixed(1)}`;
      }
      const px = (i - 1) * step;
      const py = scale(values[i - 1]);
      const cx = (px + x) / 2;
      return `C${cx.toFixed(1)},${py.toFixed(1)} ${cx.toFixed(1)},${y.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function AreaChart({
  values,
  baseline,
  width = 560,
  height = 180,
  id,
}: {
  values: number[];
  baseline?: number[];
  width?: number;
  height?: number;
  id: string;
}) {
  const all = baseline ? [...values, ...baseline] : values;
  const min = Math.min(...all) * 0.94;
  const max = Math.max(...all) * 1.03;
  const line = toPath(values, width, height, min, max);
  const area = `${line} L${width},${height} L0,${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#35ba94" stopOpacity="0.35" />
          <stop offset="1" stopColor="#35ba94" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={width} y1={height * f} y2={height * f} stroke="rgb(255 255 255 / 0.05)" strokeDasharray="4 6" />
      ))}
      <path d={area} fill={`url(#${id}-fill)`} />
      {baseline && (
        <path d={toPath(baseline, width, height, min, max)} fill="none" stroke="rgb(161 161 170 / 0.5)" strokeWidth="1.5" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
      )}
      <path
        d={line}
        fill="none"
        stroke="#47c9a3"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="1200"
        className="animate-draw"
      />
    </svg>
  );
}

export function Bars({ groups, colors, height = 120 }: { groups: { label: string; values: number[] }[]; colors: string[]; height?: number }) {
  const max = Math.max(...groups.map((g) => g.values.reduce((a, b) => a + b, 0)));

  return (
    <div className="flex items-end justify-between gap-3" style={{ height: height + 24 }}>
      {groups.map((group) => {
        const total = group.values.reduce((a, b) => a + b, 0);
        return (
          <div key={group.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full max-w-9 flex-col-reverse overflow-hidden rounded-md" style={{ height: (total / max) * height }}>
              {group.values.map((v, i) => (
                <div key={i} style={{ height: `${(v / total) * 100}%`, background: colors[i] }} />
              ))}
            </div>
            <span className="text-[11px] text-zinc-500 tabular-nums">{group.label}</span>
          </div>
        );
      })}
    </div>
  );
}
