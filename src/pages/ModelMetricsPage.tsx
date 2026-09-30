import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const ModelMetricsPage: React.FC = () => {
  const [truePositive, setTruePositive] = useState(42);
  const [falsePositive, setFalsePositive] = useState(8);
  const [falseNegative, setFalseNegative] = useState(10);
  const [trueNegative, setTrueNegative] = useState(40);

  const metrics = useMemo(() => {
    const total = truePositive + falsePositive + falseNegative + trueNegative;
    const precision = truePositive + falsePositive > 0 ? truePositive / (truePositive + falsePositive) : 0;
    const recall = truePositive + falseNegative > 0 ? truePositive / (truePositive + falseNegative) : 0;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
    const accuracy = total > 0 ? (truePositive + trueNegative) / total : 0;

    return { precision, recall, f1, accuracy, total };
  }, [truePositive, falsePositive, falseNegative, trueNegative]);

  const updateValue = (setter: (value: number) => void, value: string) => {
    setter(Math.max(0, Number(value) || 0));
  };

  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <Link to="/tools" className="text-sm text-gray-400 underline-animate">All tools</Link>
          <p className="mt-8 mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">Free data science utility</p>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Classification metrics calculator</h1>
          <p className="text-lg leading-relaxed text-gray-400">
            Enter a confusion matrix to calculate precision, recall, F1 score, and accuracy. Useful for checking whether a model is making the kind of errors your project can actually tolerate.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="glass-bw rounded-lg border border-white/15 p-6 sm:p-8">
            <h2 className="mb-2 text-2xl font-bold text-white">Confusion matrix</h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">Use whole-number counts from your validation or test set.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <MetricInput label="True positives" value={truePositive} onChange={(value) => updateValue(setTruePositive, value)} />
              <MetricInput label="False positives" value={falsePositive} onChange={(value) => updateValue(setFalsePositive, value)} />
              <MetricInput label="False negatives" value={falseNegative} onChange={(value) => updateValue(setFalseNegative, value)} />
              <MetricInput label="True negatives" value={trueNegative} onChange={(value) => updateValue(setTrueNegative, value)} />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-center text-sm">
              <div className="rounded-md border border-white/10 bg-white/5 p-4 text-gray-300">Predicted positive<br /><strong className="text-white">{truePositive + falsePositive}</strong></div>
              <div className="rounded-md border border-white/10 bg-white/5 p-4 text-gray-300">Predicted negative<br /><strong className="text-white">{falseNegative + trueNegative}</strong></div>
            </div>
          </section>

          <section className="glass-bw rounded-lg border border-white/15 p-6 sm:p-8">
            <h2 className="mb-2 text-2xl font-bold text-white">Results</h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">Values update as you edit the matrix.</p>
            <div className="space-y-3">
              <MetricResult label="Precision" value={metrics.precision} detail="Of predicted positives, how many were correct?" />
              <MetricResult label="Recall" value={metrics.recall} detail="Of actual positives, how many were found?" />
              <MetricResult label="F1 score" value={metrics.f1} detail="A balance between precision and recall." />
              <MetricResult label="Accuracy" value={metrics.accuracy} detail="How often was the prediction correct overall?" />
            </div>
            <p className="mt-8 border-t border-white/10 pt-5 text-sm text-gray-500">Total observations: {metrics.total}</p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
          <Link to="/projects/community-support-risk-explorer" className="underline-animate">See how I evaluate a real model</Link>
          <Link to="/contact" className="underline-animate">Need help interpreting model results?</Link>
        </div>
      </div>
    </section>
  );
};

const MetricInput = ({ label, value, onChange }: { label: string; value: number; onChange: (value: string) => void }) => (
  <label className="block text-sm text-gray-300">
    <span className="mb-2 block">{label}</span>
    <input
      type="number"
      min="0"
      step="1"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/60 focus:ring-2 focus:ring-white/20"
    />
  </label>
);

const MetricResult = ({ label, value, detail }: { label: string; value: number; detail: string }) => (
  <div className="border-b border-white/10 pb-3">
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-semibold text-white">{label}</h3>
      <span className="text-2xl font-bold text-white">{(value * 100).toFixed(1)}%</span>
    </div>
    <p className="mt-1 text-xs leading-relaxed text-gray-500">{detail}</p>
  </div>
);

export default ModelMetricsPage;
