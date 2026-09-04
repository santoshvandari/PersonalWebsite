type SectionLabelProps = {
  number: string;
  label: string;
};

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 border-b border-line pb-3 type-label text-muted">
      <span className="text-accent">{number}</span>
      <span>/</span>
      <span>{label}</span>
    </div>
  );
}
