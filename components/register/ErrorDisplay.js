const ErrorDisplay = ({ errors }) => {
  // Function to format and display each error message
  const renderErrorMessage = (fieldErrors) => {
    return Object.entries(fieldErrors).map(([fieldName, errorDetails]) => (
      <div key={fieldName}>
        <strong>{fieldName}:</strong> {errorDetails.message}
      </div>
    ));
  };

  return (
    <div className="my-4 p-4 bg-red-100 border border-red-400 text-red-700">
      <h4 className="font-bold">Please correct the following errors:</h4>
      {Object.entries(errors).map(([sectionName, fieldErrors]) => (
        <div key={sectionName}>
          <h5 className="font-semibold">{sectionName}</h5>
          {renderErrorMessage(fieldErrors)}
        </div>
      ))}
    </div>
  );
};

export default ErrorDisplay;
