import MapTest from "./components/MapTest";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MapTest />
    </QueryClientProvider>
  );
}

export default App;
