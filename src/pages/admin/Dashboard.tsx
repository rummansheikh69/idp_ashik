import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Image as ImageIcon,
  Search,
  Plus,
  Trash2,
  Edit2,
  X,
  CheckCircle2,
  Clock,
  XCircle,
  BookOpen,
  ChevronDown,
  Eye,
  ToggleLeft,
  ToggleRight,
  ArrowUpDown,
  Shield,
  BarChart2,
  TrendingUp,
  GraduationCap,
  LogOut,
  Camera,
  RotateCcw,
  ClipboardPenLine,
  BookImage,
  Loader2,
  LogOutIcon,
  Loader,
  Lock,
} from "lucide-react";
import { Navbar } from "../../components/layout/Navbar";
import { Redirect } from "wouter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SERVER_URL } from "../../lib/data";
import { toast } from "react-hot-toast";

// ── Types ────────────────────────────────────────────────────────────
interface User {
  id: string;
  fullName: string;
  fatherName: string;
  dob: string;
  nationality: string;
  phone: string;
  email: string;
  whatsapp: string;
  currentBand: string;
  targetBand: string;
  course: string;
  address: string;
  message: string;
  photo: string;
  status: "pending" | "enrolled" | "completed" | "rejected";
  appliedAt: string;
  notes: string;
}

interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  active: boolean;
  order: number;
  tag: string;
  createdAt: string;
}

// ── Users Tab ────────────────────────────────────────────────────────
function UsersTab() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [showPassword, setShowPassword] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", password: "", email: "" });

  // 1. Fetch Users Query
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${SERVER_URL}/api/user/users`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
  });

  // 2. Add User Mutation
  const { mutate: addUser, isPending: isAdding } = useMutation({
    mutationFn: async (newUser: typeof form) => {
      const res = await fetch(`${SERVER_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to add user");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User added successfully");
      reset();
    },
    onError: (err: any) => toast.error(err.message),
  });

  // 3. Delete User Mutation
  const { mutate: removeUser } = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${SERVER_URL}/api/user/users/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Delete failed");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User deleted");
      setConfirmDelete(null);
    },
    onError: () => toast.error("Could not delete user"),
  });

  const filtered = users.filter(
    (u: any) =>
      u.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()),
  );

  const reset = () => {
    setForm({ name: "", password: "", email: "" });
    setShowForm(false);
  };

  return (
    <div>
      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-9 pr-4 py-2.5 border border-border rounded-sm text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 hover:bg-primary/90 transition-colors text-sm"
        >
          <Plus size={16} /> Add User
        </button>
      </div>

      {/* Add User Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={reset}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">New Admission Officer</h3>
                <X className="cursor-pointer" onClick={reset} />
              </div>
              <form
                className="p-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  addUser(form);
                }}
              >
                <input
                  placeholder="Full Name"
                  className="w-full border p-3 rounded-sm text-sm"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border p-3 rounded-sm text-sm"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border p-3 rounded-sm text-sm"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
                <button
                  disabled={isAdding}
                  className="w-full bg-primary text-white font-bold py-3 hover:bg-primary/90 flex justify-center"
                >
                  {isAdding ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Users Table */}
      <div className="bg-white rounded-xl border overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/40 border-b">
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} className="py-10 text-center">
                  <Loader2 className="animate-spin mx-auto" />
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="py-10 text-center text-muted-foreground"
                >
                  No users found
                </td>
              </tr>
            ) : (
              filtered.map((u: any) => (
                <tr key={u._id} className="border-b hover:bg-secondary/10">
                  <td className="px-4 py-3 font-medium">{u.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setConfirmDelete(u._id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
              <Trash2 size={40} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Confirm Delete</h3>
              <p className="text-sm text-muted-foreground mb-6">
                This will remove this user's access permanently.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="flex-1 border py-2 rounded-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => removeUser(confirmDelete)}
                  className="flex-1 bg-red-500 text-white font-bold py-2 rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Banners Tab ──────────────────────────────────────────────────────
function BannersTab() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editBanner, setEditBanner] = useState<any | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [imageMode, setImageMode] = useState<"url" | "upload" | "camera">(
    "url",
  );
  const [cameraOpen, setCameraOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    tag: "",
  });

  const fileRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // --- API QUERIES ---

  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await fetch(`${SERVER_URL}/api/user/banners`);
      if (!res.ok) throw new Error("Failed to fetch banners");
      return res.json();
    },
  });

  const { mutate: saveBanner, isPending: isSaving } = useMutation({
    mutationFn: async (payload: typeof form) => {
      const method = editBanner ? "PUT" : "POST";
      const url = editBanner
        ? `${SERVER_URL}/api/user/banner/${editBanner._id}`
        : `${SERVER_URL}/api/user/banner`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Operation failed");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      toast.success(editBanner ? "Banner updated!" : "Banner created!");
      reset();
    },
    onError: (err: any) => toast.error(err.message),
  });

  const { mutate: removeBanner } = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${SERVER_URL}/api/user/banner/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Delete failed");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      toast.success("Banner removed");
      setConfirmDelete(null);
    },
  });

  // --- HELPERS ---

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraOpen(false);
  };

  const openCamera = async () => {
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      setCameraOpen(false);
      toast.error("Camera access denied.");
    }
  };

  const captureFrame = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const v = videoRef.current;
    const c = canvasRef.current;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    c.getContext("2d")?.drawImage(v, 0, 0);
    setForm((p) => ({ ...p, image: c.toDataURL("image/jpeg", 0.85) }));
    stopCamera();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((p) => ({ ...p, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const openEdit = (b: any) => {
    setEditBanner(b);
    setForm({
      title: b.title,
      description: b.description,
      image: b.image,
      tag: b.tag,
    });
    setShowForm(true);
  };

  const reset = () => {
    setShowForm(false);
    setEditBanner(null);
    setForm({ title: "", description: "", image: "", tag: "" });
    stopCamera();
  };

  const updateField = (k: string) => (e: any) => {
    setForm((p) => ({ ...p, [k]: e.target.value }));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Banner Management
          </h2>
          <p className="text-sm text-muted-foreground">
            {banners.length} Active Banners
          </p>
        </div>
        <button
          onClick={() => {
            reset();
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 hover:bg-primary/90 transition-colors text-sm"
        >
          <Plus size={16} /> Add Banner
        </button>
      </div>

      {/* Banner list */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-20">
            <Loader2 className="animate-spin mx-auto text-primary" />
          </div>
        ) : banners.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground bg-white rounded-xl border">
            <ImageIcon size={40} className="mx-auto mb-3 opacity-40" />
            No banners found.
          </div>
        ) : (
          banners.map((b: any) => (
            <motion.div
              key={b._id}
              layout
              className="bg-white rounded-xl border shadow-sm overflow-hidden flex gap-0"
            >
              <div className="w-40 h-28 bg-secondary/50 shrink-0 overflow-hidden">
                {b.image ? (
                  <img src={b.image} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon
                    size={32}
                    className="m-auto text-muted-foreground/40 mt-8"
                  />
                )}
              </div>
              <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded uppercase">
                    {b.tag}
                  </span>
                  <h3 className="font-bold text-foreground mt-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {b.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEdit(b)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-blue-50 text-blue-600"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => setConfirmDelete(b._id)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={reset}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">
                  {editBanner ? "Edit Banner" : "New Banner"}
                </h3>
                <X className="cursor-pointer" onClick={reset} />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Tag (e.g. Popular)
                  </label>
                  <input
                    value={form.tag}
                    onChange={updateField("tag")}
                    className="w-full border p-3 rounded-sm text-sm"
                    placeholder="Banner tag"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Title *
                  </label>
                  <input
                    value={form.title}
                    onChange={updateField("title")}
                    className="w-full border p-3 rounded-sm text-sm"
                    placeholder="Banner title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Description *
                  </label>
                  <textarea
                    value={form.description}
                    onChange={updateField("description")}
                    className="w-full border p-3 rounded-sm text-sm"
                    rows={2}
                    placeholder="Brief details"
                    required
                  />
                </div>

                {/* Image Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Banner Image
                  </label>
                  <div className="flex gap-2 mb-3">
                    {["url", "upload", "camera"].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setImageMode(mode as any)}
                        className={`px-4 py-1 text-xs rounded-full border ${imageMode === mode ? "bg-primary text-white" : "text-muted-foreground"}`}
                      >
                        {mode.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {imageMode === "url" && (
                    <input
                      value={form.image}
                      onChange={updateField("image")}
                      placeholder="https://..."
                      className="w-full border p-3 rounded-sm text-sm"
                    />
                  )}

                  {imageMode === "upload" && (
                    <div
                      onClick={() => fileRef.current?.click()}
                      className="border-2 border-dashed rounded-sm py-6 text-center text-sm cursor-pointer hover:border-primary"
                    >
                      <input
                        type="file"
                        ref={fileRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFile}
                      />
                      Click to upload image
                    </div>
                  )}

                  {imageMode === "camera" && (
                    <div className="space-y-3">
                      {!cameraOpen && !form.image && (
                        <button
                          type="button"
                          onClick={openCamera}
                          className="bg-black text-white px-4 py-2 text-sm rounded-sm"
                        >
                          Open Camera
                        </button>
                      )}
                      {cameraOpen && (
                        <div>
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full rounded-lg mb-2"
                          />
                          <button
                            type="button"
                            onClick={captureFrame}
                            className="bg-primary text-white px-4 py-2 text-sm rounded-sm"
                          >
                            Capture
                          </button>
                        </div>
                      )}
                      {form.image && (
                        <button
                          type="button"
                          onClick={() => {
                            setForm((p) => ({ ...p, image: "" }));
                            openCamera();
                          }}
                          className="text-xs text-muted-foreground flex items-center gap-1 mt-2"
                        >
                          <RotateCcw size={12} /> Retake
                        </button>
                      )}
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                  )}

                  {form.image && (
                    <img
                      src={form.image}
                      className="mt-4 w-full h-40 object-cover rounded-lg border"
                      alt="Preview"
                    />
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={reset}
                    className="flex-1 border py-3 text-sm font-semibold rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => saveBanner(form)}
                    disabled={isSaving || !form.title || !form.image}
                    className="flex-1 bg-primary text-white font-bold py-3 rounded-sm flex justify-center disabled:opacity-50"
                  >
                    {isSaving ? (
                      <Loader2 className="animate-spin" />
                    ) : editBanner ? (
                      "Update Banner"
                    ) : (
                      "Add Banner"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
              <Trash2 size={40} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Delete?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                This banner and its Cloudinary image will be deleted.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="flex-1 border py-2.5 rounded-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => removeBanner(confirmDelete)}
                  className="flex-1 bg-red-500 text-white font-bold py-2.5 rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryTab() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<any | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [imageMode, setImageMode] = useState<"url" | "upload" | "camera">(
    "url",
  );
  const [cameraOpen, setCameraOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const fileRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // --- API QUERIES ---

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await fetch(`${SERVER_URL}/api/user/gallery`);
      if (!res.ok) throw new Error("Failed to fetch gallery items");
      return res.json();
    },
  });

  const { mutate: saveItem, isPending: isSaving } = useMutation({
    mutationFn: async (payload: typeof form) => {
      const method = editItem ? "PUT" : "POST";
      const url = editItem
        ? `${SERVER_URL}/api/user/gallery/${editItem._id}`
        : `${SERVER_URL}/api/user/gallery`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Operation failed");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast.success(editItem ? "Gallery item updated!" : "Gallery item added!");
      reset();
    },
    onError: (err: any) => toast.error(err.message),
  });

  const { mutate: removeItem } = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${SERVER_URL}/api/user/gallery/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Delete failed");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast.success("Item removed from gallery");
      setConfirmDelete(null);
    },
  });

  // --- HELPERS ---

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraOpen(false);
  };

  const openCamera = async () => {
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      setCameraOpen(false);
      toast.error("Camera access denied.");
    }
  };

  const captureFrame = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const v = videoRef.current;
    const c = canvasRef.current;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    c.getContext("2d")?.drawImage(v, 0, 0);
    setForm((p) => ({ ...p, image: c.toDataURL("image/jpeg", 0.85) }));
    stopCamera();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((p) => ({ ...p, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const openEdit = (item: any) => {
    setEditItem(item);
    setForm({
      title: item.title,
      description: item.description,
      image: item.image,
    });
    setShowForm(true);
  };

  const reset = () => {
    setShowForm(false);
    setEditItem(null);
    setForm({ title: "", description: "", image: "" });
    stopCamera();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Gallery Management
          </h2>
          <p className="text-sm text-muted-foreground">
            {items.length} Total Items
          </p>
        </div>
        <button
          onClick={() => {
            reset();
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 hover:bg-primary/90 transition-colors text-sm"
        >
          <Plus size={16} /> Add to Gallery
        </button>
      </div>

      {/* Gallery list */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-20">
            <Loader2 className="animate-spin mx-auto text-primary" />
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground bg-white rounded-xl border">
            <ImageIcon size={40} className="mx-auto mb-3 opacity-40" />
            Gallery is empty.
          </div>
        ) : (
          items.map((item: any) => (
            <motion.div
              key={item._id}
              layout
              className="bg-white rounded-xl border shadow-sm overflow-hidden flex gap-0"
            >
              <div className="w-40 h-28 bg-secondary/50 shrink-0 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageIcon
                    size={32}
                    className="m-auto text-muted-foreground/40 mt-8"
                  />
                )}
              </div>
              <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEdit(item)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-blue-50 text-blue-600"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => setConfirmDelete(item._id)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={reset}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">
                  {editItem ? "Edit Gallery Item" : "New Gallery Item"}
                </h3>
                <X className="cursor-pointer" onClick={reset} />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Title *
                  </label>
                  <input
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full border p-3 rounded-sm text-sm"
                    placeholder="Item title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full border p-3 rounded-sm text-sm"
                    rows={2}
                    placeholder="Item description"
                  />
                </div>

                {/* Image Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Image Source
                  </label>
                  <div className="flex gap-2 mb-3">
                    {["url", "upload", "camera"].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setImageMode(mode as any)}
                        className={`px-4 py-1 text-xs rounded-full border ${imageMode === mode ? "bg-primary text-white" : "text-muted-foreground"}`}
                      >
                        {mode.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {imageMode === "url" && (
                    <input
                      value={form.image}
                      onChange={(e) =>
                        setForm({ ...form, image: e.target.value })
                      }
                      placeholder="https://..."
                      className="w-full border p-3 rounded-sm text-sm"
                    />
                  )}

                  {imageMode === "upload" && (
                    <div
                      onClick={() => fileRef.current?.click()}
                      className="border-2 border-dashed rounded-sm py-6 text-center text-sm cursor-pointer hover:border-primary"
                    >
                      <input
                        type="file"
                        ref={fileRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFile}
                      />
                      Click to upload image
                    </div>
                  )}

                  {imageMode === "camera" && (
                    <div className="space-y-3">
                      {!cameraOpen && !form.image && (
                        <button
                          type="button"
                          onClick={openCamera}
                          className="bg-black text-white px-4 py-2 text-sm rounded-sm"
                        >
                          Open Camera
                        </button>
                      )}
                      {cameraOpen && (
                        <div>
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full rounded-lg mb-2"
                          />
                          <button
                            type="button"
                            onClick={captureFrame}
                            className="bg-primary text-white px-4 py-2 text-sm rounded-sm"
                          >
                            Capture
                          </button>
                        </div>
                      )}
                      {form.image && (
                        <button
                          type="button"
                          onClick={() => {
                            setForm((p) => ({ ...p, image: "" }));
                            openCamera();
                          }}
                          className="text-xs text-muted-foreground flex items-center gap-1 mt-2"
                        >
                          <RotateCcw size={12} /> Retake
                        </button>
                      )}
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                  )}

                  {form.image && (
                    <img
                      src={form.image}
                      className="mt-4 w-full h-44 object-cover rounded-lg border"
                      alt="Preview"
                    />
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={reset}
                    className="flex-1 border py-3 text-sm font-semibold rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => saveItem(form)}
                    disabled={isSaving || !form.title || !form.image}
                    className="flex-1 bg-primary text-white font-bold py-3 rounded-sm flex justify-center disabled:opacity-50"
                  >
                    {isSaving ? (
                      <Loader2 className="animate-spin" />
                    ) : editItem ? (
                      "Update Item"
                    ) : (
                      "Add to Gallery"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
              <Trash2 size={40} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Delete Item?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                This will remove the item from your gallery and Cloudinary.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="flex-1 border py-2.5 rounded-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => removeItem(confirmDelete)}
                  className="flex-1 bg-red-500 text-white font-bold py-2.5 rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PasswordTab() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const { mutate: changePassword, isPending: isChangingPassword } = useMutation(
    {
      mutationFn: async () => {
        const res = await fetch(`${SERVER_URL}/api/auth/change-password`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Operation failed");
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["authUser"] });
      },
      onError: (err: any) => toast.error(err.message),
    },
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Change Password</h2>
          <p className="text-sm text-muted-foreground">
            Change your account password here.
          </p>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="New Password"
          className="w-full md:w-1/2 border p-3 rounded-sm text-sm"
          value={form.newPassword}
          onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Confirm New Password"
          className=" w-full md:w-1/2 border p-3 rounded-sm text-sm mt-5"
          value={form.confirmNewPassword}
          onChange={(e) =>
            setForm({ ...form, confirmNewPassword: e.target.value })
          }
          required
        />
      </div>

      {form.confirmNewPassword.length > 2 &&
        form.newPassword !== form.confirmNewPassword && (
          <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
        )}

      <button
        disabled={
          form.confirmNewPassword.length < 6 ||
          form.newPassword.length < 6 ||
          form.confirmNewPassword !== form.newPassword
        }
        onClick={() => changePassword()}
        className="bg-black text-white font-bold py-2.5 px-6 rounded-sm mt-5 cursor-pointer"
      >
        {isChangingPassword ? (
          <Loader2 className="animate-spin" />
        ) : (
          "Change Password"
        )}
      </button>
    </div>
  );
}

// ── Main Dashboard ───────────────────────────────────────────────────
export default function AdminDashboard() {
  const [tab, setTab] = useState<"users" | "banners">("users");

  const tabs = [
    { key: "users" as const, label: "Users", icon: Users },
    { key: "banners" as const, label: "Banners", icon: ImageIcon },
    { key: "gallery" as const, label: "Gallery", icon: BookImage },
    { key: "password" as const, label: "Password", icon: Lock },
    { key: "admission" as const, label: "Admission", icon: ClipboardPenLine },
  ];

  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${SERVER_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Operation failed");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (err: any) => toast.error(err.message),
  });

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      {/* Top bar */}
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 pt-24">
        <div className=" flex items-center md:justify-between gap-4 mb-8">
          {/* Tab nav */}
          <div className="flex flex-wrap gap-1 bg-white rounded-xl border border-border p-1 w-fit  shadow-sm ">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center grow gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${tab === t.key ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                <t.icon size={16} /> {t.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => logout()}
            className=" w-12 h-10 flex items-center justify-center bg-white rounded-lg border border-border shadow-sm cursor-pointer"
          >
            {isLoggingOut ? (
              <Loader2
                className="animate-spin text-muted-foreground"
                size={16}
              />
            ) : (
              <LogOutIcon size={17} />
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tab === "users" && <UsersTab />}
            {tab === "banners" && <BannersTab />}
            {tab === "gallery" && <GalleryTab />}
            {tab === "admission" && <Redirect to="/admission" />}
            {tab === "password" && <PasswordTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
