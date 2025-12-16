const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="text-center py-16">
      <p className="text-red-500 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="
            mt-4 px-5 py-2
            bg-green-600 text-white
            rounded
            hover:bg-green-700
            transition
          "
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorState;
