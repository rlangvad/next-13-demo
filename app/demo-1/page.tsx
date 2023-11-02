import React from "react";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

const DemoPage = () => {
  return (
    <div className="mt-32 flex w-full flex-col">
      <h2>Data fetched on client</h2>
      <ClientComponent />

      <h2 className="mt-12">Data rendered on server</h2>
      <React.Suspense fallback={<p>Loading...</p>}>
        <ServerComponent />
      </React.Suspense>
    </div>
  );
};

export default DemoPage;
