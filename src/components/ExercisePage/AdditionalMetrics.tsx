import React, { useState, useEffect } from "react";

interface MetricItemProps {
  label: string;
  value: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ label, value }) => (
  <div className="flex flex-col flex-1 grow shrink-0 items-start py-4 pr-14 pl-4 bg-gray-700 rounded-xl basis-0 w-fit max-md:pr-5">
    <div className="text-sm leading-none text-gray-400">{label}</div>
    <div className="text-2xl font-bold leading-none text-white">{value}</div>
  </div>
);

const AdditionalMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricItemProps[]>([
    { label: "VO2 Max", value: "35.5 ml/kg/min" },
    { label: "Stride Length", value: "0.75 m" },
    { label: "Power Output", value: "185 W" },
    { label: "Elevation Gain", value: "45 m" },
  ]);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setMetrics(currentMetrics => currentMetrics.map(metric => {
        switch (metric.label) {
          case "VO2 Max":
            const vo2 = (parseFloat(metric.value) + (Math.random() * 0.4 - 0.2)).toFixed(1);
            return { ...metric, value: `${vo2} ml/kg/min` };
          case "Stride Length":
            const stride = (parseFloat(metric.value) + (Math.random() * 0.1 - 0.05)).toFixed(2);
            return { ...metric, value: `${stride} m` };
          case "Power Output":
            const power = Math.round(parseFloat(metric.value) + (Math.random() * 10 - 5));
            return { ...metric, value: `${power} W` };
          case "Elevation Gain":
            const elevation = Math.round(parseFloat(metric.value) + (Math.random() * 2 - 1));
            return { ...metric, value: `${elevation} m` };
          default:
            return metric;
        }
      }));
    }, 500); 

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-6 pt-6 pb-36 mx-auto w-full bg-gray-800 rounded-2xl border border-gray-700 border-solid max-md:px-5 max-md:pb-24 max-md:mt-6 max-md:max-w-full">
        <div className="self-start text-base text-gray-200">
          Additional Metrics
        </div>
        <div className="flex flex-wrap gap-4 mt-4 max-md:max-w-full">
          {metrics.map((metric, index) => (
            <MetricItem key={index} label={metric.label} value={metric.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalMetrics;