import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { config } from "./config";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();
function App() {
  return (
    <WagmiProvider config={config}>

      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>

    </WagmiProvider >
  );
}

export default App;
