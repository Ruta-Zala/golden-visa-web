import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { config } from "./config";
import { WagmiProvider } from "wagmi";
import { PriceProvider } from "./context/opnPriceContext";

const queryClient = new QueryClient();
function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <PriceProvider>
          <Router>
            <Routes />
          </Router>
        </PriceProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
