import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Shield } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SERVER_URL } from "../../lib/data";
import toast from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const err = false;

  const { mutate: login, isPending } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${SERVER_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      return data;
    },
    onSuccess: (data) => {
      // Handle successful login, e.g., store token, redirect, etc.
      if (data?.isAdmin) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/admission";
      }
    },
    onError: (error) => {
      // Handle login error, e.g., show error message
      toast.error(error.message || "Login failed. Please try again.");
    },
  });

  const handleLogin = (e) => {
    // Implement login logic here
    e.preventDefault();
    login();
  };

  return (
    <div className="min-h-screen bg-foreground flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl w-full max-w-sm p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center mx-auto mb-4">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-foreground"> Access</h1>
          <p className="text-muted-foreground text-sm mt-1">Visa Express</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter email"
            className={`w-full border-2 rounded-sm px-4 py-3 text-sm focus:outline-none transition-colors ${err ? "border-red-400 shake" : "border-border focus:border-primary"}`}
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
            className={`w-full border-2 rounded-sm px-4 py-3 text-sm focus:outline-none transition-colors ${err ? "border-red-400 shake" : "border-border focus:border-primary"}`}
          />
          {/* {err && (
            <p className="text-red-500 text-sm text-center">
              Incorrect password
            </p>
          )} */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary text-white font-bold py-3 hover:bg-primary/90 transition-colors"
          >
            {isPending ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
