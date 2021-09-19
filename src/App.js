import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from "react-query";

import DataSetsContextProvider from "./components/DataSetsContextProvider";
import MapsContextProvider from "./components/MapsContextProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <MapsContextProvider>
      <QueryClientProvider client={queryClient}>
        <DataSetsContextProvider>
          <Home />
        </DataSetsContextProvider>
      </QueryClientProvider>
    </MapsContextProvider>
  );
}

export default App;
