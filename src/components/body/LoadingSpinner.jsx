const LoadingSpinner = () => {
  // return <h1>Loading Posts......</h1>;
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>{" "}
      <h1 style={{ color: "blue" }}>Loading Posts......</h1>
    </>
  );
};

export default LoadingSpinner;
