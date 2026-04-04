import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
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
import Ielts from "./pages/Ielts";
import Pte from "./pages/Pte";
import Gallery from "./pages/Gallery";
import { Toaster as Toasters } from "react-hot-toast";
import "swiper/css";
import "swiper/css/navigation";
import Addmission from "./pages/Addmission";
import { SERVER_URL } from "./lib/data";
import { Loader2 } from "lucide-react";
import Login from "./pages/admin/Login";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch(`${SERVER_URL}/api/auth/me`, {
          // CRITICAL: This tells the browser to send the 'jwt' cookie
          // to the server so the 'protectRoute' middleware can find it.
          credentials: "include",
        });
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error);
        }
        console.log("Auth user is here:", data);
        return data;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

    retry: false,
  });

  if (isLoading) {
    <div className=" w-full h-screen flex items-center justify-center">
      <Loader2 className="animate-spin size-5" />
    </div>;
  }

  return (
    <TooltipProvider>
      <WouterRouter>
        <ScrollToTop />
        <ScrollToHash />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/ielts" component={Ielts} />
          <Route path="/pte" component={Pte} />
          <Route path="/gallery" component={Gallery} />
          <Route
            path="/login"
            component={() => (authUser ? <Redirect to="/" /> : <Login />)}
          />

          <Route
            path="/admission"
            component={() =>
              authUser ? <Addmission /> : <Redirect to="/login" />
            }
          />
          <Route path="/about/director" component={DirectorPage} />
          <Route
            path="/language-courses/english"
            component={EnglishCountriesPage}
          />
          <Route
            path="/language-courses/european"
            component={EuropeanCountriesPage}
          />
          <Route
            path="/language-courses/other"
            component={OtherCountriesPage}
          />
          <Route path="/branches" component={BranchesPage} />
          <Route path="/apply" component={ApplyPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </WouterRouter>
      <Toaster />
      <Toasters position="bottom-center" reverseOrder={false} />
    </TooltipProvider>
  );
}

export default App;
