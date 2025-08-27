import { ErrorBoundary } from "react-error-boundary";
import { useErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }: { error: any }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetBoundary}>Try again</button>
    </div>
  );
}

function AppErrorBoundary(props: any) {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      {props?.children}
    </ErrorBoundary>
  );
}

export default AppErrorBoundary;
