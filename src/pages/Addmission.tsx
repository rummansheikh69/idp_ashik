import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  Camera,
  X,
  CheckCircle2,
  RotateCcw,
  Send,
  User2,
  BookOpen,
  FlipHorizontal,
  Loader,
  Upload,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import toast from "react-hot-toast";

export default function Admission() {
  const SERVER_URL = "http://localhost:4000";

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [documentBase64, setDocumentBase64] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  // Updated state to match the image fields
  const [form, setForm] = useState({
    admissionDate: new Date().toISOString().split("T")[0],
    fullName: "",
    dob: "",
    contact: "",
    family_contact: "",
    address: "",
    // Educational
    inst1: "",
    level1: "",
    dept1: "",
    gpa1: "",
    scale1: "",
    year1: "",

    inst2: "",
    level2: "",
    dept2: "",
    gpa2: "",
    scale2: "",
    year2: "",
    // Course
    courseName: "",
    noOfService: "",
    startingDate: "",
    regularFee: "",
    discount: "",
    subAgentFee: "",
    balanceFee: "",
    // Payment
    payDate1: "",
    payTaka1: "",
    payDate2: "",
    payTaka2: "",
    payDate3: "",
    payTaka3: "",
    memoNo: "",
    paymentType: "",
    receivedBy: "",
    admissionOfficer: "",
    subAgentName: "",

    //ielts
    surname: "",
    givenName: "",
    testDate: "",
    testLocation: "",
    testType: "",
    registrationDate: "",
    amount: "",
    providerName: "",
    passportNo: "",
    passportIssueDate: "",
    passportExpiryDate: "",
    emailId: "",
    password: "",
  });

  const [file, setFile] = useState<File | null>(null);

  // Handler for the Document Upload (Supporting files)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // 1. Set the file object for the UI (to show the name)
    setFile(selectedFile);

    // 2. Convert to Base64 for the backend
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setDocumentBase64(reader.result as string);
      setFileName(selectedFile.name);
    };
  };

  // In your handleSubmit, clear the Base64 too if they remove it
  const removeFile = () => {
    setFile(null);
    setDocumentBase64(null);
  };
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: any) => {
      // This points to your future Node.js backend route
      return axios.post(`${SERVER_URL}/api/user/admission`, formData);
    },
    onSuccess: () => {
      toast.success("Admission form submitted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    onError: (error) => {
      console.error("Submission Error:", error);
      toast.error("Something went wrong!");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate important fields if necessary
    // if (!photo) {
    //   toast.error("Please capture a candidate photo");
    //   return;
    // }

    // Construct the final payload
    const payload = {
      ...form,
      photo: photo, // Candidate Photo (Base64)
      document: documentBase64, // Supporting Doc (Base64)
      documentName: fileName, // Useful for the backend
    };

    mutate(payload);
  };

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
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 py-12 px-4 pt-20">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl border border-slate-200 overflow-hidden">
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

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Section: Personal Info */}
            <div className="border border-slate-900">
              <div className="bg-slate-100 p-2 text-center font-bold border-b border-slate-900">
                PERSONAL INFORMATION
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-900">
                <div className="bg-white p-3 col-span-2">
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
                  <label className="text-xs font-bold block">
                    Date of Birth
                  </label>
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
                <div className="bg-white p-3">
                  <label className="text-xs font-bold block">
                    Family Contact No
                  </label>
                  <input
                    type="tel"
                    onChange={set("family_contact")}
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

            {/* Section: Educational Information */}
            <div className="border border-slate-900 mt-6">
              <div className="bg-slate-100 p-2 text-center font-bold border-b border-slate-900 uppercase text-sm tracking-wide">
                Educational Information
              </div>

              {/* Table Header for Desktop */}
              <div className="hidden md:grid grid-cols-5 bg-slate-200 border-b border-slate-900 text-[10px] font-black uppercase">
                <div className="p-2 border-r border-slate-900">
                  Institution Name
                </div>
                <div className="p-2 border-r border-slate-900">Level</div>
                <div className="p-2 border-r border-slate-900">Department</div>
                <div className="p-2 border-r border-slate-900">GPA/CGPA</div>
                <div className="p-2">Passing Year</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 bg-white border-b border-slate-900">
                <div className="p-1 border-r border-slate-900">
                  <input
                    type="text"
                    placeholder="Institution 1"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("inst1")}
                  />
                </div>
                <div className="p-1 border-r border-slate-900">
                  <input
                    type="text"
                    placeholder="e.g. HSC"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("level1")}
                  />
                </div>
                <div className="p-1 border-r border-slate-900">
                  <input
                    type="text"
                    placeholder="Science/Arts"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("dept1")}
                  />
                </div>
                <div className="p-1 border-r border-slate-900 flex items-center gap-1">
                  <input
                    type="text"
                    className="w-1/2 text-sm outline-none"
                    placeholder="0.00"
                    onChange={set("gpa1")}
                  />
                  <span className="text-[10px]">Out Of</span>
                  <input
                    type="text"
                    className="w-1/4 text-sm outline-none"
                    onChange={set("scale1")}
                    placeholder="5"
                  />
                </div>
                <div className="p-1">
                  <input
                    type="text"
                    placeholder="2022"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("year1")}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-5 bg-white">
                <div className="p-1 border-r border-slate-900">
                  <input
                    type="text"
                    placeholder="Institution 2"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("inst2")}
                  />
                </div>
                <div className="p-1 border-r border-slate-900">
                  <input
                    type="text"
                    placeholder="e.g. Bachelor"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("level2")}
                  />
                </div>
                <div className="p-1 border-r border-slate-900">
                  <input
                    type="text"
                    placeholder="BBA/CSE"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("dept2")}
                  />
                </div>
                <div className="p-1 border-r border-slate-900 flex items-center gap-1">
                  <input
                    type="text"
                    className="w-1/2 text-sm outline-none"
                    placeholder="0.00"
                    onChange={set("gpa2")}
                  />
                  <span className="text-[10px]">Out Of</span>
                  <input
                    type="text"
                    className="w-1/4 text-sm outline-none"
                    onChange={set("scale2")}
                    placeholder="4"
                  />
                </div>
                <div className="p-1">
                  <input
                    type="text"
                    placeholder="2024"
                    className="w-full text-sm outline-none px-1"
                    onChange={set("year2")}
                  />
                </div>
              </div>
            </div>

            {/* Section: Course / Service Information */}
            <div className="border border-slate-900 mt-6">
              <div className="bg-slate-100 p-2 text-center font-bold border-b border-slate-900 uppercase text-sm tracking-wide">
                Course / Service Information
              </div>

              {/* Row 1: Course Name, No of Service, Starting Date */}
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-900">
                <div className="p-2 border-r border-slate-900 md:col-span-2 flex items-center">
                  <label className="text-[12px] font-bold w-32 uppercase">
                    Course/Service Name:
                  </label>
                  <input
                    type="text"
                    className="flex-1 outline-none text-sm font-semibold"
                    onChange={set("courseName")}
                  />
                </div>
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-24 uppercase">
                    No Of Service:
                  </label>
                  <input
                    type="number"
                    onChange={set("noOfService")}
                    className="w-full outline-none text-sm"
                  />
                </div>
                <div className="p-2 flex items-center">
                  <label className="text-[12px] font-bold w-24 uppercase">
                    Starting Date:
                  </label>
                  <input
                    type="date"
                    className="w-full outline-none text-sm"
                    onChange={set("startingDate")}
                  />
                </div>
              </div>

              {/* Row 2: Fees and Discounts */}
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-slate-900 bg-slate-50/50">
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-24 uppercase">
                    Regular Fee:
                  </label>
                  <input
                    type="text"
                    placeholder="Taka"
                    className="w-full outline-none text-sm"
                    onChange={set("regularFee")}
                  />
                </div>
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-24 uppercase">
                    Discount %:
                  </label>
                  <input
                    type="text"
                    placeholder="0%"
                    onChange={set("discount")}
                    className="w-full outline-none text-sm"
                  />
                </div>
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-24 uppercase">
                    Sub Agent Fee:
                  </label>
                  <input
                    type="text"
                    onChange={set("subAgentFee")}
                    className="w-full outline-none text-sm"
                  />
                </div>
                <div className="p-2 flex items-center">
                  <label className="text-[12px] font-bold w-24 uppercase">
                    Balance Fee:
                  </label>
                  <input
                    type="text"
                    onChange={set("balanceFee")}
                    className="w-full outline-none text-sm font-bold text-red-600"
                  />
                </div>
              </div>

              {/* Row 3: Payment Installments (1st, 2nd, 3rd) */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-900">
                <div className=" border-r border-slate-900 flex  gap-1">
                  <div className=" w-full p-2">
                    <div className="flex justify-between w-full">
                      <label className="text-[11px] font-black">
                        1st PAYMENT DATE
                      </label>{" "}
                    </div>
                    <input
                      type="date"
                      onChange={set("payDate1")}
                      className="w-full outline-none text-xs"
                    />
                  </div>
                  <div className="p-2 flex items-center w-full border-l border-slate-900">
                    <label className="text-[12px] font-bold  uppercase pr-2">
                      TAKA:
                    </label>
                    <input
                      type="text"
                      onChange={set("payTaka1")}
                      className="w-full outline-none text-sm font-bold text-red-600"
                    />
                  </div>
                </div>

                <div className=" border-r border-slate-900 flex  gap-1">
                  <div className=" w-full p-2">
                    <div className="flex justify-between w-full">
                      <label className="text-[11px] font-black">
                        2nd PAYMENT DATE
                      </label>{" "}
                    </div>
                    <input
                      type="date"
                      onChange={set("payDate2")}
                      className="w-full outline-none text-xs"
                    />
                  </div>

                  <div className="p-2 flex items-center w-full border-l border-slate-900">
                    <label className="text-[12px] font-bold  uppercase pr-2">
                      TAKA:
                    </label>
                    <input
                      type="text"
                      onChange={set("payTaka2")}
                      className="w-full outline-none text-sm font-bold text-red-600"
                    />
                  </div>
                </div>

                <div className=" border-r border-slate-900 flex  gap-1">
                  <div className=" w-full p-2">
                    <div className="flex justify-between w-full">
                      <label className="text-[11px] font-black">
                        3rd PAYMENT DATE
                      </label>{" "}
                    </div>
                    <input
                      type="date"
                      onChange={set("payDate3")}
                      className="w-full outline-none text-xs"
                    />
                  </div>
                  <div className="p-2 flex items-center w-full border-l border-slate-900">
                    <label className="text-[12px] font-bold  uppercase pr-2">
                      TAKA:
                    </label>
                    <input
                      type="text"
                      onChange={set("payTaka3")}
                      className="w-full outline-none text-sm font-bold text-red-600"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Admin Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-900">
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-20 uppercase">
                    Memo No:
                  </label>
                  <input
                    type="text"
                    onChange={set("memoNo")}
                    className="flex-1 outline-none text-sm"
                  />
                </div>
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-28 uppercase">
                    Type Of Payment:
                  </label>
                  <input
                    type="text"
                    onChange={set("paymentType")}
                    className="flex-1 outline-none text-sm"
                  />
                </div>
                <div className="p-2 flex items-center">
                  <label className="text-[12px] font-bold w-32 uppercase">
                    Payment Received By:
                  </label>
                  <input
                    type="text"
                    onChange={set("receivedBy")}
                    className="flex-1 outline-none text-sm"
                  />
                </div>
              </div>

              {/* Row 5: Officers */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-max pr-2 uppercase">
                    Admissions Officer:
                  </label>
                  <input
                    type="text"
                    onChange={set("admissionOfficer")}
                    className="flex-1 outline-none text-sm"
                  />
                </div>
                <div className="p-2 flex items-center">
                  <label className="text-[12px] font-bold w-max pr-2 uppercase">
                    Sub Agent Name:
                  </label>
                  <input
                    type="text"
                    onChange={set("subAgentName")}
                    className="flex-1 outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Section: IELTS Registration (Matching Bottom of Image) */}
            <div className="border border-slate-900 mt-6">
              <div className="bg-slate-100 p-2 text-center font-bold border-b border-slate-900 uppercase text-sm tracking-wide">
                IELTS Registration Information
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-900">
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-max pr-2">
                    SURNAME:
                  </label>
                  <input
                    type="text"
                    className="flex-1 outline-none text-sm"
                    onChange={set("surname")}
                  />
                </div>
                <div className="p-2 flex items-center">
                  <label className="text-[12px] font-bold w-max pr-2">
                    GIVEN NAME:
                  </label>
                  <input
                    type="text"
                    className="flex-1 outline-none text-sm"
                    onChange={set("givenName")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-900">
                <div className="p-2 border-r border-slate-900">
                  <label className="text-[10px] font-bold block">
                    TEST DATE:
                  </label>
                  <input
                    type="date"
                    className="w-full outline-none text-sm"
                    onChange={set("testDate")}
                  />
                </div>
                <div className="p-2 border-r border-slate-900">
                  <label className="text-[10px] font-bold block">
                    TEST LOCATION:
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none text-sm"
                    onChange={set("testLocation")}
                  />
                </div>
                <div className="p-2">
                  <label className="text-[10px] font-bold block">
                    TEST TYPE:
                  </label>
                  <input
                    type="text"
                    placeholder="CD / PB"
                    className="w-full outline-none text-sm"
                    onChange={set("testType")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-900">
                <div className="p-2 border-r border-slate-900">
                  <label className="text-[10px] font-bold block">
                    REGISTRATION DATE:
                  </label>
                  <input
                    type="date"
                    className="w-full outline-none text-sm"
                    onChange={set("registrationDate")}
                  />
                </div>
                <div className="p-2 border-r border-slate-900">
                  <label className="text-[10px] font-bold block">AMOUNT:</label>
                  <input
                    type="number"
                    className="w-full outline-none text-sm"
                    onChange={set("amount")}
                  />
                </div>
                <div className="p-2">
                  <label className="text-[10px] font-bold block">
                    PROVIDER NAME:
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none text-sm"
                    onChange={set("providerName")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-2 border-r border-slate-900">
                  <label className="text-[10px] font-bold block">
                    PASSPORT NO:
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none text-sm"
                    onChange={set("passportNo")}
                  />
                </div>
                <div className="p-2 border-r border-slate-900">
                  <label className="text-[10px] font-bold block">
                    ISSUE DATE:
                  </label>
                  <input
                    type="date"
                    onChange={set("passportIssueDate")}
                    className="w-full outline-none text-sm"
                  />
                </div>
                <div className="p-2">
                  <label className="text-[10px] font-bold block">
                    EXPIRY DATE:
                  </label>
                  <input
                    type="date"
                    onChange={set("passportExpiryDate")}
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-900">
                <div className="p-2 border-r border-slate-900 flex items-center">
                  <label className="text-[12px] font-bold w-max pr-2">
                    EMAIL ID:
                  </label>
                  <input
                    type="text"
                    className="flex-1 outline-none text-sm"
                    onChange={set("emailId")}
                  />
                </div>
                <div className="p-2 flex items-center">
                  <label className="text-[12px] font-bold w-max pr-2">
                    PASSWORD:
                  </label>
                  <input
                    type="text"
                    className="flex-1 outline-none text-sm"
                    onChange={set("password")}
                  />
                </div>
              </div>
            </div>

            {/* Section: Documents (Passport/Certificates) */}
            <div className="border border-slate-900 mt-6">
              <div className="bg-slate-100 p-2 text-center font-bold border-b border-slate-900 uppercase text-sm tracking-wide">
                Documents (Passport/Certificates)
              </div>

              <div className="p-6 bg-white flex flex-col items-center">
                <label
                  htmlFor="file-upload"
                  className="w-full max-w-md cursor-pointer group"
                >
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-6 group-hover:border-slate-900 group-hover:bg-slate-50 transition-all">
                    <div className="p-3 bg-slate-100 rounded-full group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      {/* Ensure you have 'Upload' imported from 'lucide-react' or your icon library */}
                      <Upload size={24} />
                    </div>
                    <p className="mt-3 text-sm font-bold text-slate-700 uppercase tracking-tight">
                      {file ? file.name : "Click to upload document"}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase">
                      PDF, EXCEL, or PNG (Max 5MB)
                    </p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>

                {file && (
                  <button
                    type="button"
                    onClick={removeFile}
                    className="mt-2 text-[10px] font-bold text-red-600 hover:underline uppercase"
                  >
                    Remove File
                  </button>
                )}
              </div>
            </div>

            <button
              disabled={isPending}
              className="w-full bg-slate-900 text-white h-14 cursor-pointer font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              {isPending ? (
                <Loader size={16} className="animate-spin" />
              ) : (
                <div className=" flex items-center gap-2">
                  <Send size={18} /> SUBMIT REGISTRATION
                </div>
              )}
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
              <p className="text-white/60 mt-4">
                Align your face to the center
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <canvas ref={canvasRef} className="hidden" />
      </div>
      <Footer />
    </>
  );
}
