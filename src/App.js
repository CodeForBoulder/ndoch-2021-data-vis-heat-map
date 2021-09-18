import MapTest from "./components/MapTest";
import { QueryClient, QueryClientProvider } from "react-query";

import MapsContextProvider from "./components/MapsContextProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <MapsContextProvider>
      <QueryClientProvider client={queryClient}>
        <MapTest />
      </QueryClientProvider>
    </MapsContextProvider>
  );
}

export default App;
