const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="text-center py-16">
      <p className="text-red-500 mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorState;
