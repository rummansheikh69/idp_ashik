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
  FlipHorizontal,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Admission() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Updated state to match the image fields
  const [form, setForm] = useState({
    admissionDate: new Date().toISOString().split("T")[0],
    fullName: "",
    dob: "",
    contact: "",
    familyContact: "",
    address: "",
    // Educational
    inst1: "",
    level1: "",
    dept1: "",
    gpa1: "",
    year1: "",
    // Course
    courseName: "",
    startingDate: "",
    regularFee: "",
    email: "",
  });

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  };

  const openCamera = async () => {
    stopCamera();
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facingMode, width: 640, height: 480 },
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      alert("Camera error: " + err);
    }
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  // Re-run camera when facingMode changes
  useEffect(() => {
    if (cameraOpen) openCamera();
  }, [facingMode]);

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const v = videoRef.current;
    const c = canvasRef.current;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    const ctx = c.getContext("2d");
    if (ctx) {
      // Fix mirror for the actual saved image if using front camera
      if (facingMode === "user") {
        ctx.translate(c.width, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(v, 0, 0);
    }
    setPhoto(c.toDataURL("image/jpeg", 0.85));
    stopCamera();
    setCameraOpen(false);
  };

  const set = (key: string) => (e: any) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  // ... (Keep your handleSubmit logic, just update template params to match new form keys)

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-slate-200 overflow-hidden">
        {/* Form Header */}
        <div className="bg-slate-900 text-white p-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-widest">
              Admission Form
            </h1>
            <p className="text-slate-400 text-sm">
              Please fill all details accurately
            </p>
          </div>
          <div
            className="relative group cursor-pointer"
            onClick={() => !photo && openCamera()}
          >
            {photo ? (
              <div className="relative">
                <img
                  src={photo}
                  className="w-24 h-32 object-cover border-2 border-white shadow-md"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhoto(null);
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                >
                  <X size={12} />
                </button>
              </div>
            ) : (
              <div className="w-24 h-32 border-2 border-dashed border-slate-500 flex flex-col items-center justify-center text-slate-500 hover:border-primary transition-colors">
                <Camera size={24} />
                <span className="text-[10px] mt-2">PHOTO</span>
              </div>
            )}
          </div>
        </div>

        <form className="p-8 space-y-6">
          {/* Section: Personal Info */}
          <div className="border border-slate-900">
            <div className="bg-slate-100 p-2 text-center font-bold border-b border-slate-900">
              PERSONAL INFORMATION
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-900">
              <div className="bg-white p-3">
                <label className="text-xs font-bold block">
                  Admission Date
                </label>
                <input
                  type="date"
                  value={form.admissionDate}
                  onChange={set("admissionDate")}
                  className="w-full outline-none"
                />
              </div>
              <div className="bg-white p-3">
                <label className="text-xs font-bold block">
                  Candidate Full Name
                </label>
                <input
                  type="text"
                  onChange={set("fullName")}
                  className="w-full outline-none"
                />
              </div>
              <div className="bg-white p-3">
                <label className="text-xs font-bold block">Date of Birth</label>
                <input
                  type="date"
                  onChange={set("dob")}
                  className="w-full outline-none"
                />
              </div>
              <div className="bg-white p-3">
                <label className="text-xs font-bold block">Contact No</label>
                <input
                  type="tel"
                  onChange={set("contact")}
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="bg-white p-3 border-t border-slate-900">
              <label className="text-xs font-bold block">Full Address</label>
              <input
                type="text"
                onChange={set("address")}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* ... Add Educational & Course Sections following the same table-like grid pattern ... */}

          <button className="w-full bg-slate-900 text-white py-4 font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
            <Send size={18} /> SUBMIT REGISTRATION
          </button>
        </form>
      </div>

      {/* Improved Camera Modal */}
      <AnimatePresence>
        {cameraOpen && (
          <motion.div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-md aspect-[3/4] bg-slate-900 rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                style={{
                  transform: facingMode === "user" ? "scaleX(-1)" : "none",
                }} // Mirror fix
              />

              {/* Controls */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-8">
                <button
                  onClick={toggleCamera}
                  className="p-4 bg-white/20 rounded-full text-white backdrop-blur-md"
                >
                  <FlipHorizontal size={24} />
                </button>
                <button
                  onClick={capturePhoto}
                  className="w-20 h-20 bg-white rounded-full border-4 border-slate-400 shadow-xl"
                />
                <button
                  onClick={() => {
                    stopCamera();
                    setCameraOpen(false);
                  }}
                  className="p-4 bg-white/20 rounded-full text-white backdrop-blur-md"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <p className="text-white/60 mt-4">Align your face to the center</p>
          </motion.div>
        )}
      </AnimatePresence>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
