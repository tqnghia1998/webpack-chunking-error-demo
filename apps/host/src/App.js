import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const RemoteApp = React.lazy(() => import("remote/RemoteApp"));

const App = () => (
  <div>
    <h1>This is Host App</h1>
    <h2>Below is Remote App Content</h2>
    <ErrorBoundary>
      <React.Suspense fallback="Loading Remote App">
        <RemoteApp />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default App;
