import React, { useState, useEffect } from "react";

interface MetricItemProps {
  label: string;
  value: string;
}

// Updated MetricItem styling
const MetricItem: React.FC<MetricItemProps> = ({ label, value }) => (
  // Consistent item styling: light bg, rounded, padding
  <div className="flex flex-col flex-1 grow shrink-0 items-start p-3 bg-gray-50 rounded-lg border border-gray-200 basis-0 min-w-[150px]"> 
    {/* Increased label size */}
    <div className="text-base text-gray-600">{label}</div> 
    {/* Increased value size */}
    <div className="mt-1 text-2xl font-semibold text-gray-800">{value}</div> 
  </div>
);

const AdditionalMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricItemProps[]>([
    { label: "VO2 Max", value: "35.5 ml/kg/min" },
    { label: "Stride Length", value: "0.75 m" },
    { label: "Power Output", value: "185 W" },
    { label: "Elevation Gain", value: "45 m" },
  ]);

  // Simulation logic remains the same
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setMetrics(currentMetrics => currentMetrics.map(metric => {
        // Keep simulation logic as is
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
    // Use flex-1 for flexible width, adjust basis
    <div className="flex flex-col flex-1 basis-1/2 min-w-[300px]"> 
      {/* Consistent card styling: white bg, rounded-xl, shadow-md, padding */}
      <div className="flex flex-col grow p-6 w-full bg-white rounded-xl shadow-md h-full"> 
        {/* Increased title size and weight */}
        <div className="self-start text-lg font-medium text-gray-700"> 
          Additional Metrics
        </div>
        {/* Use grid for layout, adjust gap */}
        <div className="grid grid-cols-2 gap-4 mt-4 flex-grow"> 
          {metrics.map((metric, index) => (
            <MetricItem key={index} label={metric.label} value={metric.value} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalMetrics;
