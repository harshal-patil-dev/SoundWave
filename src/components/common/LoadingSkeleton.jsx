function LoadingSkeleton({ type = "card", count = 1 }) {
  return (
    <div className={`skeleton-container ${type}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-item" key={index}></div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;