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
} from "lucide-react";

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
  createdAt: string;
}

// ── Helpers ──────────────────────────────────────────────────────────
const getUsers = (): User[] =>
  JSON.parse(localStorage.getItem("mahdi_ielts_users") || "[]");
const saveUsers = (u: User[]) =>
  localStorage.setItem("mahdi_ielts_users", JSON.stringify(u));
const getBanners = (): Banner[] =>
  JSON.parse(localStorage.getItem("mahdi_ielts_banners") || "[]");
const saveBanners = (b: Banner[]) =>
  localStorage.setItem("mahdi_ielts_banners", JSON.stringify(b));

const statusConfig = {
  pending: {
    label: "Pending",
    color: "bg-amber-100 text-amber-700",
    icon: Clock,
  },
  enrolled: {
    label: "Enrolled",
    color: "bg-blue-100 text-blue-700",
    icon: BookOpen,
  },
  completed: {
    label: "Completed",
    color: "bg-green-100 text-green-700",
    icon: CheckCircle2,
  },
  rejected: {
    label: "Rejected",
    color: "bg-red-100 text-red-700",
    icon: XCircle,
  },
};

// ── Users Tab ────────────────────────────────────────────────────────
function UsersTab() {
  const [users, setUsers] = useState<User[]>(getUsers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selected, setSelected] = useState<User | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<User["status"]>("pending");
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [sortField, setSortField] = useState<"appliedAt" | "fullName">(
    "appliedAt",
  );
  const [sortAsc, setSortAsc] = useState(false);

  const refresh = () => setUsers(getUsers());

  const filtered = users
    .filter(
      (u) =>
        (statusFilter === "all" || u.status === statusFilter) &&
        (u.fullName?.toLowerCase().includes(search.toLowerCase()) ||
          u.email?.toLowerCase().includes(search.toLowerCase()) ||
          u.course?.toLowerCase().includes(search.toLowerCase())),
    )
    .sort((a, b) => {
      const va = a[sortField] ?? "";
      const vb = b[sortField] ?? "";
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });

  const openUser = (u: User) => {
    setSelected(u);
    setEditNotes(u.notes);
    setEditStatus(u.status);
  };

  const saveUser = () => {
    if (!selected) return;
    const updated = users.map((u) =>
      u.id === selected.id ? { ...u, status: editStatus, notes: editNotes } : u,
    );
    saveUsers(updated);
    setUsers(updated);
    setSelected(null);
  };

  const deleteUser = (id: string) => {
    const updated = users.filter((u) => u.id !== id);
    saveUsers(updated);
    setUsers(updated);
    setConfirmDelete(null);
    setSelected(null);
  };

  const stats = {
    total: users.length,
    pending: users.filter((u) => u.status === "pending").length,
    enrolled: users.filter((u) => u.status === "enrolled").length,
    completed: users.filter((u) => u.status === "completed").length,
  };

  const toggleSort = (f: typeof sortField) => {
    if (sortField === f) setSortAsc(!sortAsc);
    else {
      setSortField(f);
      setSortAsc(true);
    }
  };

  // Add demo user if empty
  useEffect(() => {
    if (getUsers().length === 0) {
      const demo: User[] = [
        {
          id: "demo1",
          fullName: "Ahmed Khan",
          fatherName: "Rashid Khan",
          dob: "1998-05-12",
          nationality: "Pakistani",
          phone: "+92 300 1234567",
          email: "ahmed@example.com",
          whatsapp: "+92 300 1234567",
          currentBand: "5.5",
          targetBand: "7.0",
          course: "IELTS Academic",
          address: "Lahore, Pakistan",
          message: "Eager to start!",
          photo: "",
          status: "pending",
          appliedAt: new Date().toISOString(),
          notes: "",
        },
        {
          id: "demo2",
          fullName: "Sara Ali",
          fatherName: "Tariq Ali",
          dob: "2000-09-22",
          nationality: "Pakistani",
          phone: "+92 321 9876543",
          email: "sara@example.com",
          whatsapp: "",
          currentBand: "6.0",
          targetBand: "7.5",
          course: "Weekend Batch",
          address: "Karachi, Pakistan",
          message: "Need flexible schedule",
          photo: "",
          status: "enrolled",
          appliedAt: new Date(Date.now() - 86400000).toISOString(),
          notes: "Enrolled on 2025-01-15",
        },
      ];
      saveUsers(demo);
      setUsers(demo);
    }
  }, []);

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total Applications",
            val: stats.total,
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50",
          },
          {
            label: "Pending Review",
            val: stats.pending,
            icon: Clock,
            color: "text-amber-600",
            bg: "bg-amber-50",
          },
          {
            label: "Currently Enrolled",
            val: stats.enrolled,
            icon: BookOpen,
            color: "text-primary",
            bg: "bg-primary/10",
          },
          {
            label: "Completed",
            val: stats.completed,
            icon: GraduationCap,
            color: "text-green-600",
            bg: "bg-green-50",
          },
        ].map((s) => (
          <div
            key={s.label}
            className={`${s.bg} rounded-xl p-5 flex items-center gap-4`}
          >
            <div className={`${s.color}`}>
              <s.icon size={28} />
            </div>
            <div>
              <div className={`text-2xl font-black ${s.color}`}>{s.val}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email or course..."
            className="w-full pl-9 pr-4 py-2.5 border border-border rounded-sm text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-border rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white"
        >
          <option value="all">All Statuses</option>
          {Object.entries(statusConfig).map(([k, v]) => (
            <option key={k} value={k}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/40 border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                  Photo
                </th>
                <th
                  className="px-4 py-3 text-left cursor-pointer"
                  onClick={() => toggleSort("fullName")}
                >
                  <span className="flex items-center gap-1 font-semibold text-muted-foreground">
                    Name <ArrowUpDown size={13} />
                  </span>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                  Course
                </th>
                <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                  Band
                </th>
                <th
                  className="px-4 py-3 text-left cursor-pointer"
                  onClick={() => toggleSort("appliedAt")}
                >
                  <span className="flex items-center gap-1 font-semibold text-muted-foreground">
                    Applied <ArrowUpDown size={13} />
                  </span>
                </th>
                <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-12 text-center text-muted-foreground"
                  >
                    No applications found
                  </td>
                </tr>
              ) : (
                filtered.map((u, i) => {
                  const sc = statusConfig[u.status];
                  return (
                    <tr
                      key={u.id}
                      className={`border-b border-border/50 hover:bg-secondary/20 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/10"}`}
                    >
                      <td className="px-4 py-3">
                        {u.photo ? (
                          <img
                            src={u.photo}
                            alt={u.fullName}
                            className="w-10 h-10 rounded-full object-cover border-2 border-border"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-xs font-bold">
                            {(u.fullName || "?")[0]}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-foreground">
                          {u.fullName}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {u.email}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-foreground/70">
                        {u.course}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-muted-foreground">
                          {u.currentBand || "–"}
                        </span>
                        <span className="mx-1 text-muted-foreground">→</span>
                        <span className="font-bold text-primary">
                          {u.targetBand}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {u.appliedAt
                          ? new Date(u.appliedAt).toLocaleDateString()
                          : "–"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${sc.color}`}
                        >
                          <sc.icon size={12} /> {sc.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openUser(u)}
                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-blue-50 text-blue-600 transition-colors"
                            title="View/Edit"
                          >
                            <Eye size={15} />
                          </button>
                          <button
                            onClick={() => setConfirmDelete(u.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-red-50 text-red-500 transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* User detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-start justify-between p-6 border-b border-border">
                <div className="flex items-center gap-4">
                  {selected.photo ? (
                    <img
                      src={selected.photo}
                      alt={selected.fullName}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-2xl font-black text-muted-foreground">
                      {(selected.fullName || "?")[0]}
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl font-black text-foreground">
                      {selected.fullName}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {selected.email} · {selected.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-5">
                {/* Info grid */}
                {[
                  ["Father's Name", selected.fatherName],
                  ["Date of Birth", selected.dob],
                  ["Nationality", selected.nationality],
                  ["WhatsApp", selected.whatsapp || "—"],
                  ["Address", selected.address || "—"],
                  ["Course", selected.course],
                  ["Current Band", selected.currentBand || "None"],
                  ["Target Band", selected.targetBand],
                ].reduce((rows: React.ReactNode[], [k, v], i) => {
                  if (i % 2 === 0)
                    rows.push(
                      <div key={i} className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-muted-foreground">
                            {k}
                          </span>
                          <div className="font-semibold text-foreground">
                            {v as string}
                          </div>
                        </div>
                      </div>,
                    );
                  else {
                    const last = rows[rows.length - 1] as React.ReactElement;
                    rows[rows.length - 1] = (
                      <div key={i} className="grid grid-cols-2 gap-4">
                        {last.props.children}
                        <div>
                          <span className="text-xs text-muted-foreground">
                            {k}
                          </span>
                          <div className="font-semibold text-foreground">
                            {v as string}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return rows;
                }, [])}

                {selected.message && (
                  <div className="bg-secondary/40 rounded-lg p-4 text-sm text-foreground/70 italic">
                    "{selected.message}"
                  </div>
                )}

                {/* Edit status */}
                <div className="border-t pt-5">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Status
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) =>
                      setEditStatus(e.target.value as User["status"])
                    }
                    className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary"
                  >
                    {Object.entries(statusConfig).map(([k, v]) => (
                      <option key={k} value={k}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Admin Notes
                  </label>
                  <textarea
                    rows={3}
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Internal notes about this student..."
                    className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={saveUser}
                    className="flex-1 bg-primary text-white font-bold py-2.5 hover:bg-primary/90 transition-colors rounded-sm"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setConfirmDelete(selected.id)}
                    className="px-5 border border-red-300 text-red-500 font-semibold py-2.5 hover:bg-red-50 transition-colors rounded-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm delete */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
            >
              <Trash2 size={40} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Delete Application?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="flex-1 border border-border py-2.5 text-sm font-semibold rounded-sm hover:bg-secondary transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteUser(confirmDelete)}
                  className="flex-1 bg-red-500 text-white py-2.5 text-sm font-bold rounded-sm hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Banners Tab ──────────────────────────────────────────────────────
function BannersTab() {
  const [banners, setBanners] = useState<Banner[]>(getBanners);
  const [showForm, setShowForm] = useState(false);
  const [editBanner, setEditBanner] = useState<Banner | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    active: true,
    order: 1,
  });
  const fileRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [imageMode, setImageMode] = useState<"url" | "upload" | "camera">(
    "url",
  );

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  };

  const openCamera = async () => {
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      setCameraOpen(false);
      alert("Camera access denied.");
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
    setCameraOpen(false);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setForm((p) => ({ ...p, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const openEdit = (b: Banner) => {
    setEditBanner(b);
    setForm({
      title: b.title,
      description: b.description,
      image: b.image,
      active: b.active,
      order: b.order,
    });
    setShowForm(true);
  };

  const reset = () => {
    setShowForm(false);
    setEditBanner(null);
    setForm({
      title: "",
      description: "",
      image: "",
      active: true,
      order: banners.length + 1,
    });
    stopCamera();
    setCameraOpen(false);
  };

  const saveBanner = () => {
    let updated: Banner[];
    if (editBanner) {
      updated = banners.map((b) =>
        b.id === editBanner.id ? { ...b, ...form } : b,
      );
    } else {
      const newB: Banner = {
        id: Date.now().toString(),
        ...form,
        createdAt: new Date().toISOString(),
      };
      updated = [newB, ...banners];
    }
    saveBanners(updated);
    setBanners(updated);
    reset();
  };

  const deleteBanner = (id: string) => {
    const updated = banners.filter((b) => b.id !== id);
    saveBanners(updated);
    setBanners(updated);
    setConfirmDelete(null);
  };

  const toggleActive = (id: string) => {
    const updated = banners.map((b) =>
      b.id === id ? { ...b, active: !b.active } : b,
    );
    saveBanners(updated);
    setBanners(updated);
  };

  // Demo banners
  useEffect(() => {
    if (getBanners().length === 0) {
      const demo: Banner[] = [
        {
          id: "b1",
          title: "Achieve Band 9.0 This Year",
          description:
            "Join our premium IELTS Academic program and get expert coaching from certified trainers.",
          image: "",
          active: true,
          order: 1,
          createdAt: new Date().toISOString(),
        },
        {
          id: "b2",
          title: "Online Batch — Now Enrolling",
          description:
            "Study from anywhere in the world with our interactive live online sessions.",
          image: "",
          active: true,
          order: 2,
          createdAt: new Date().toISOString(),
        },
      ];
      saveBanners(demo);
      setBanners(demo);
    }
  }, []);

  const set =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({
        ...p,
        [k]:
          e.target.type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : e.target.value,
      }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Banner Management
          </h2>
          <p className="text-sm text-muted-foreground">
            {banners.length} banners · {banners.filter((b) => b.active).length}{" "}
            active
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
        {banners.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground bg-white rounded-xl border border-border">
            <ImageIcon size={40} className="mx-auto mb-3 opacity-40" />
            No banners yet. Add your first banner.
          </div>
        ) : (
          banners
            .sort((a, b) => a.order - b.order)
            .map((b) => (
              <motion.div
                key={b.id}
                layout
                className="bg-white rounded-xl border border-border shadow-sm overflow-hidden"
              >
                <div className="flex items-start gap-0">
                  {/* Image preview */}
                  <div className="w-40 h-28 bg-secondary/50 shrink-0 flex items-center justify-center overflow-hidden">
                    {b.image ? (
                      <img
                        src={b.image}
                        alt={b.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon
                        size={32}
                        className="text-muted-foreground/40"
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                          Order #{b.order}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded ${b.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
                        >
                          {b.active ? "Active" : "Inactive"}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground">{b.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {b.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => toggleActive(b.id)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title={b.active ? "Deactivate" : "Activate"}
                      >
                        {b.active ? (
                          <ToggleRight size={28} className="text-green-500" />
                        ) : (
                          <ToggleLeft size={28} />
                        )}
                      </button>
                      <button
                        onClick={() => openEdit(b)}
                        className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => setConfirmDelete(b.id)}
                        className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
        )}
      </div>

      {/* Banner form modal */}
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
              className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="text-lg font-bold">
                  {editBanner ? "Edit Banner" : "Add New Banner"}
                </h3>
                <button
                  onClick={reset}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    Banner Title *
                  </label>
                  <input
                    value={form.title}
                    onChange={set("title")}
                    required
                    placeholder="e.g. Achieve Band 9.0 This Year"
                    className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">
                    Description *
                  </label>
                  <textarea
                    rows={3}
                    value={form.description}
                    onChange={set("description")}
                    required
                    placeholder="Banner subtitle/description..."
                    className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                {/* Image section */}
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Banner Image
                  </label>
                  <div className="flex gap-2 mb-3">
                    {(["url", "upload", "camera"] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setImageMode(m)}
                        className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors capitalize ${imageMode === m ? "bg-primary text-white border-primary" : "border-border text-muted-foreground hover:border-primary"}`}
                      >
                        {m === "url"
                          ? "URL"
                          : m === "upload"
                            ? "Upload"
                            : "Camera"}
                      </button>
                    ))}
                  </div>
                  {imageMode === "url" && (
                    <input
                      value={form.image}
                      onChange={set("image")}
                      placeholder="https://..."
                      className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    />
                  )}
                  {imageMode === "upload" && (
                    <div>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFile}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileRef.current?.click()}
                        className="w-full border-2 border-dashed border-border rounded-sm py-6 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        Click to choose image file
                      </button>
                    </div>
                  )}
                  {imageMode === "camera" && (
                    <div className="space-y-3">
                      {!cameraOpen && !form.image && (
                        <button
                          type="button"
                          onClick={openCamera}
                          className="flex items-center gap-2 bg-foreground text-white px-5 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors rounded-sm"
                        >
                          <Camera size={16} /> Open Camera
                        </button>
                      )}
                      {cameraOpen && (
                        <div className="space-y-3">
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={captureFrame}
                            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 text-sm font-bold hover:bg-primary/90 transition-colors rounded-sm"
                          >
                            <Camera size={16} /> Capture
                          </button>
                        </div>
                      )}
                      {form.image && imageMode === "camera" && (
                        <div className="space-y-2">
                          <img
                            src={form.image}
                            className="w-full rounded-lg"
                            alt="captured"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setForm((p) => ({ ...p, image: "" }));
                              openCamera();
                            }}
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                          >
                            <RotateCcw size={14} /> Retake
                          </button>
                        </div>
                      )}
                      <canvas ref={canvasRef} className="hidden" />
                    </div>
                  )}
                  {form.image && imageMode !== "camera" && (
                    <img
                      src={form.image}
                      alt="preview"
                      className="mt-3 w-full max-h-40 object-cover rounded-lg border border-border"
                    />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5">
                      Display Order
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={form.order}
                      onChange={set("order")}
                      className="w-full border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="flex items-end pb-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.active}
                        onChange={set("active")}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm font-semibold">
                        Active (visible on site)
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={reset}
                    className="flex-1 border border-border py-2.5 text-sm font-semibold rounded-sm hover:bg-secondary transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveBanner}
                    disabled={!form.title || !form.description}
                    className="flex-1 bg-primary text-white font-bold py-2.5 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {editBanner ? "Update Banner" : "Add Banner"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirm delete */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
            >
              <Trash2 size={40} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Delete Banner?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmDelete(null)}
                  className="flex-1 border border-border py-2.5 text-sm font-semibold rounded-sm hover:bg-secondary transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteBanner(confirmDelete)}
                  className="flex-1 bg-red-500 text-white py-2.5 text-sm font-bold rounded-sm hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Dashboard ───────────────────────────────────────────────────
export default function AdminDashboard() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("admin_auth") === "1",
  );
  const [tab, setTab] = useState<"users" | "banners">("users");

  if (!authed) return <Login onLogin={() => setAuthed(true)} />;

  const tabs = [
    { key: "users" as const, label: "Applications", icon: Users },
    { key: "banners" as const, label: "Banners", icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      {/* Top bar */}
      <header className="bg-foreground text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-sm">
            <BookOpen size={20} />
          </div>
          <div>
            <span className="font-black text-lg">
              Mahdi <span className="text-primary">IELTS</span>
            </span>
            <span className="ml-3 text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded">
              Admin
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← View Site
          </a>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin_auth");
              setAuthed(false);
            }}
            className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Tab nav */}
        <div className="flex gap-1 bg-white rounded-xl border border-border p-1 w-fit mb-8 shadow-sm">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${tab === t.key ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tab === "users" ? <UsersTab /> : <BannersTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
