import { ArrowUpRight, ChartCandlestick, Clock, FileSpreadsheet, Store, Landmark, type LucideIcon } from 'lucide-react';
import { LINKS, SECTIONS } from '../config';
import { useI18n } from '../i18n';
import { highlight, Reveal, SectionHeader } from './ui';

const ICONS: Record<string, LucideIcon> = {
  history: ChartCandlestick,
  import: FileSpreadsheet,
  rates: Landmark,
  jobs: Clock,
};

const CODE = `<?php
namespace Acme\\MyBroker;

use OhMyShares\\Plugin\\BasePlugin;
use OhMyShares\\Plugin\\ReportImporterInterface;
use OhMyShares\\Plugin\\Dtos\\{ImportResult, ReportFormat, Trade};
use OhMyShares\\Plugin\\Enums\\{AssetType, TradeType};

class Plugin extends BasePlugin implements ReportImporterInterface
{
    public function reportFormats(): array
    {
        return [new ReportFormat('mybroker', 'My Broker', 'Monthly report', ['csv'])];
    }

    public function parseReport(string $format, string $filePath): ImportResult
    {
        $result = new ImportResult;
        foreach (readRows($filePath) as $row) {
            $trade = new Trade;
            $trade->type = TradeType::Buy;
            $trade->ticker = $row['ticker'];
            $trade->assetType = AssetType::Shares;
            $trade->shares = $row['qty'];
            $trade->cost = $row['price'];
            $trade->sum = $row['price'] * $row['qty'];
            $trade->currency = $row['currency'];
            $trade->timestamp = $row['timestamp'];
            $trade->txn = $row['id']; // duplicates skipped
            $result->trades[] = $trade;
        }
        return $result;
    }
}`;

const PHP_RULES: Array<[RegExp, 'k' | 's' | 'c' | 'n' | 'f' | 'p']> = [
  [/\/\/.*$/, 'c'],
  [/'[^']*'/, 's'],
  [/<\?php/, 'p'],
  [/\b(namespace|use|class|extends|implements|public|function|return|new|foreach|as|array|string)\b/, 'k'],
  [/\$[a-zA-Z_]+/, 'n'],
  [/\b[A-Z][A-Za-z]+(?=::|\b)/, 'f'],
];

export function Plugins() {
  const { t } = useI18n();

  return (
    <section id={SECTIONS.plugins} className="border-t border-white/[0.06] bg-linear-to-b from-white/[0.015] to-transparent py-24 sm:py-32">
      <div className="container-page grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader center={false} eyebrow={t.plugins.eyebrow} title={t.plugins.title} lead={t.plugins.lead} />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.plugins.caps.map((cap, i) => {
              const Icon = ICONS[cap.id];
              return (
                <Reveal key={cap.id} delay={i * 80} className="card p-5">
                  <Icon className="size-5 text-brand-300" />
                  <h3 className="mt-3 font-semibold text-white">{cap.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{cap.text}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="card mt-4 flex flex-col gap-4 border-brand-500/20 bg-brand-500/[0.06] p-5 sm:flex-row sm:items-center">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <Store className="size-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">{t.plugins.storeTitle}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">{t.plugins.storeText}</p>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.pluginSdk} target="_blank" rel="noreferrer" className="btn btn-primary">
              {t.plugins.sdkCta}
              <ArrowUpRight className="size-4" />
            </a>
            <a href={LINKS.pluginStore} target="_blank" rel="noreferrer" className="btn btn-ghost">
              {t.plugins.storeCta}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <Reveal delay={150} className="lg:sticky lg:top-24">
          <div className="card overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="size-2.5 rounded-full bg-rose-400/70" />
              <span className="size-2.5 rounded-full bg-amber-300/70" />
              <span className="size-2.5 rounded-full bg-brand-400/70" />
              <span className="ms-3 font-mono text-xs text-zinc-500">src/Plugin.php</span>
            </div>
            <pre dir="ltr" className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-zinc-300">
              <code>{highlight(CODE, PHP_RULES)}</code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
