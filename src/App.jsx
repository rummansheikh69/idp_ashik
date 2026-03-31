import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/home";
import DirectorPage from "./pages/about/director";
import EnglishCountriesPage from "./pages/language-courses/english";
import EuropeanCountriesPage from "./pages/language-courses/european";
import OtherCountriesPage from "./pages/language-courses/other";
import BranchesPage from "./pages/branches";
import ApplyPage from "./pages/apply";
import ContactPage from "./pages/contact";
import NotFound from "./pages/not-found";

import { useEffect } from "react";
import ScrollToTop from "./components/home/ScrollToTop";
import ScrollToHash from "./components/home/ScrollToHash";

// Pages

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/about/director" component={DirectorPage} />
      <Route
        path="/language-courses/english"
        component={EnglishCountriesPage}
      />
      <Route
        path="/language-courses/european"
        component={EuropeanCountriesPage}
      />
      <Route path="/language-courses/other" component={OtherCountriesPage} />
      <Route path="/branches" component={BranchesPage} />
      <Route path="/apply" component={ApplyPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <ScrollToHash />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
