import { Button } from "semantic-ui-react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h3 style={{ color: "red" }}>Something went wrong!</h3>
      <div>
        Error : <pre>{error.message}</pre>
      </div>
      <Button
        basic
        color="red"
        content="Try again"
        onClick={resetErrorBoundary}
      />
    </div>
  );
}

export default ErrorFallback;
