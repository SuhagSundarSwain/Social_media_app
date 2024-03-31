const LoadingSpinner = () => {
  // return <h1>Loading Posts......</h1>;
  return (
    <>
      <div class="d-flex justify-content-center">
        <div class="spinner-border spinner" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>{" "}
      <h1 style={{ color: "blue" }}>Loading Posts......</h1>
    </>
  );
};

export default LoadingSpinner;
