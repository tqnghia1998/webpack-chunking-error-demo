import React from "react";

const Button = React.lazy(() => import("./components/Button"));

const App = () => (
  <div>
    <React.Suspense fallback={<div />}>
      <Button />
    </React.Suspense>
  </div>
);

export default App;
