export default function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 p-4 text-center bg-white/5 backdrop-glass animate-scaleIn">
      <div className="text-2xl font-bold text-indigo-300 drop-shadow">{value}</div>
      <div className="text-xs text-white/70 mt-1 tracking-wide uppercase">{label}</div>
    </div>
  );
}
