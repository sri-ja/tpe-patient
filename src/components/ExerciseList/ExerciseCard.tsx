import React from "react";

interface ExerciseCardProps {
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  icon: string; // Add the icon prop
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  description,
  duration,
  imageUrl, // Keep imageUrl prop for now, but don't use it
  icon, // Destructure icon
}) => {

  const renderIcon = (iconName: string, imageUrl: string) => {
    if (imageUrl) {
      return <img src={imageUrl} alt="Exercise" className="w-16 h-16 rounded-lg object-cover" />;
    }
    return <div className="text-4xl p-4 bg-gray-200 rounded-lg">{iconName}</div>;
  };

  return (
    // Update card styling: background, padding, rounded corners, shadow
    <div className="flex flex-col items-center p-6 text-center rounded-2xl bg-amber-50 shadow-md hover:shadow-lg transition-shadow duration-200">
      {/* Render the icon placeholder */}
      <div className="mb-4">
        {renderIcon(icon, imageUrl)}
      </div>
      {/* Update text styling */}
      <div className="text-xl font-semibold text-gray-800 mb-1">
        {title}
      </div>
      <div className="text-md text-teal-700 mb-2 h-8"> {/* Fixed height for alignment */}
        {description}
      </div>
      <div className="text-md text-gray-600 mb-4 h-5"> {/* Fixed height for alignment */}
        {duration}
      </div>
      {/* Update button styling and text */}
      <button className="px-6 py-2 font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition-colors duration-200 shadow-sm">
        Let's recover!
      </button>
    </div> // Correct closing tag for the main card div
  );
};

export default ExerciseCard;
