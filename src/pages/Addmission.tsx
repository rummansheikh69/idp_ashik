import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  CheckCircle2,
  RotateCcw,
  Send,
  User2,
  BookOpen,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import emailjs from "@emailjs/browser";

const COURSES = [
  "IELTS Academic",
  "IELTS General Training",
  "Online Batch",
  "Weekend Batch",
  "1-on-1 Coaching",
  "Mock Test Series",
];

const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";

export default function Addmission() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    nationality: "",
    phone: "",
    email: "",
    whatsapp: "",
    currentBand: "",
    targetBand: "",
    course: "",
    address: "",
    message: "",
  });

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  const openCamera = async () => {
    setCameraError("");
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 640, height: 480 },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch {
      setCameraError(
        "Camera access denied. Please allow camera permission and try again.",
      );
      setCameraOpen(false);
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const v = videoRef.current;
    const c = canvasRef.current;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    c.getContext("2d")?.drawImage(v, 0, 0);
    setPhoto(c.toDataURL("image/jpeg", 0.85));
    stopCamera();
    setCameraOpen(false);
  };

  const retake = () => {
    setPhoto(null);
    openCamera();
  };

  const set =
    (key: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photo) {
      alert("Please take your photo before submitting.");
      return;
    }
    setSubmitting(true);

    // Store in localStorage for admin
    const users = JSON.parse(localStorage.getItem("mahdi_ielts_users") || "[]");
    const newUser = {
      id: Date.now().toString(),
      ...form,
      photo,
      status: "pending",
      appliedAt: new Date().toISOString(),
      notes: "",
    };
    localStorage.setItem(
      "mahdi_ielts_users",
      JSON.stringify([newUser, ...users]),
    );

    // Send email if EmailJS is configured
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            full_name: form.fullName,
            father_name: form.fatherName,
            dob: form.dob,
            nationality: form.nationality,
            phone: form.phone,
            email: form.email,
            whatsapp: form.whatsapp,
            current_band: form.currentBand,
            target_band: form.targetBand,
            course: form.course,
            address: form.address,
            message: form.message,
          },
          PUBLIC_KEY,
        );
      } catch {
        // silent — submission still saved locally
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4 pt-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center max-w-lg"
          >
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={52} className="text-green-500" />
            </div>
            <h1 className="text-3xl font-black text-foreground mb-3">
              Application Submitted!
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you,{" "}
              <span className="text-primary font-bold">{form.fullName}</span>!
              Our team will review your application and contact you within 24–48
              hours.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="inline-block bg-primary text-white font-bold px-10 py-4 hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const inputCls =
    "w-full border border-border rounded-sm px-4 py-3 text-sm text-foreground bg-white focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground";
  const labelCls = "block text-sm font-semibold text-foreground mb-1.5";

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Navbar />

      {/* Header */}
      <div className="bg-foreground text-white pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/building-sketch.png')] bg-cover bg-bottom opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-white font-semibold text-sm mb-6">
            <BookOpen size={16} /> Addmission Form
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Addmission at <span className="text-white">Visa Express</span>
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-14 w-full">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Photo capture */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Your Photo
            </h2>

            <div className="flex flex-col items-center gap-5">
              {/* Placeholder / Photo */}
              <div className="relative">
                {photo ? (
                  <img
                    src={photo}
                    alt="Your photo"
                    className="w-36 h-36 rounded-full object-cover border-4 border-primary shadow-lg"
                  />
                ) : (
                  <div className="w-36 h-36 rounded-full bg-secondary/60 border-4 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                    <User2 size={40} strokeWidth={1.5} />
                    <span className="text-xs mt-2">No photo</span>
                  </div>
                )}
              </div>

              {cameraError && (
                <p className="text-sm text-red-500 text-center">
                  {cameraError}
                </p>
              )}

              <div className="flex gap-3">
                {photo ? (
                  <button
                    type="button"
                    onClick={retake}
                    className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-sm text-sm font-semibold hover:bg-secondary transition-colors"
                  >
                    <RotateCcw size={16} /> Retake Photo
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={openCamera}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    <Camera size={18} /> Open Camera
                  </button>
                )}
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Camera access is required. Your photo will be used for your
                student ID.
              </p>
            </div>

            {/* Camera modal */}
            <AnimatePresence>
              {cameraOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="bg-foreground rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl"
                  >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                      <span className="text-white font-bold flex items-center gap-2">
                        <Camera size={18} className="text-primary" /> Take Your
                        Photo
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          stopCamera();
                          setCameraOpen(false);
                        }}
                        className="text-white/60 hover:text-white"
                      >
                        <X size={22} />
                      </button>
                    </div>
                    <div className="relative bg-black">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-72 object-cover"
                      />
                      {/* Face guide oval */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-40 h-52 rounded-full border-2 border-white/40 border-dashed" />
                      </div>
                    </div>
                    <div className="px-6 py-5 text-center">
                      <p className="text-white/50 text-sm mb-4">
                        Position your face in the oval and click capture
                      </p>
                      <button
                        type="button"
                        onClick={capturePhoto}
                        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto shadow-lg hover:bg-primary/90 transition-colors"
                      >
                        <Camera size={28} />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <canvas ref={canvasRef} className="hidden" />
          </div>

          {/* Personal Info */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Full Name *</label>
                <input
                  required
                  value={form.fullName}
                  onChange={set("fullName")}
                  placeholder="As per passport"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Father's Name *</label>
                <input
                  required
                  value={form.fatherName}
                  onChange={set("fatherName")}
                  placeholder="Father's full name"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Date of Birth *</label>
                <input
                  required
                  type="date"
                  value={form.dob}
                  onChange={set("dob")}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Nationality *</label>
                <input
                  required
                  value={form.nationality}
                  onChange={set("nationality")}
                  placeholder="e.g. Pakistani"
                  className={inputCls}
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Phone Number *</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+92 300 0000000"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>WhatsApp Number</label>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                  placeholder="If different from above"
                  className={inputCls}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Email Address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="your@email.com"
                  className={inputCls}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Home Address</label>
                <input
                  value={form.address}
                  onChange={set("address")}
                  placeholder="Street, City, Country"
                  className={inputCls}
                />
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              IELTS & Course Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Current IELTS Band (if any)</label>
                <input
                  value={form.currentBand}
                  onChange={set("currentBand")}
                  placeholder="e.g. 6.0 or None"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Target Band *</label>
                <input
                  required
                  value={form.targetBand}
                  onChange={set("targetBand")}
                  placeholder="e.g. 7.5"
                  className={inputCls}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Course Interested In *</label>
                <select
                  required
                  value={form.course}
                  onChange={set("course")}
                  className={inputCls}
                >
                  <option value="">Select a course...</option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls}>Additional Message</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Any questions, requirements, or special considerations..."
                  className={inputCls + " resize-none"}
                />
              </div>
            </div>
          </div>

          {/* Declaration */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-sm text-foreground/70 leading-relaxed">
            By submitting this application, I confirm that all information
            provided is accurate and complete. I understand that Mahdi IELTS
            will contact me to discuss my application and course availability.
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 text-lg hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} /> Submit Application
              </>
            )}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
