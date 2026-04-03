import { motion } from "framer-motion";
export const HeroIllustration = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      cx="250"
      cy="250"
      r="200"
      fill="#F8F9FA"
    />

    {/* Decorative dots */}
    <motion.circle
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      cx="100"
      cy="120"
      r="8"
      fill="#E51D27"
    />
    <motion.circle
      animate={{ y: [0, 15, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
        delay: 1,
      }}
      cx="400"
      cy="380"
      r="12"
      fill="#E51D27"
      opacity="0.4"
    />
    <motion.circle
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      cx="420"
      cy="150"
      r="6"
      fill="#1E293B"
    />

    {/* Main abstract composition representing study/growth */}
    {/* Book base */}
    <motion.path
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      d="M150 350 L250 400 L350 350 L250 300 Z"
      fill="#E2E8F0"
      stroke="#1E293B"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <motion.path
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      d="M150 330 L250 380 L350 330 L250 280 Z"
      fill="#CBD5E1"
      stroke="#1E293B"
      strokeWidth="4"
      strokeLinejoin="round"
    />

    {/* Target / Goal */}
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <circle
        cx="250"
        cy="210"
        r="70"
        fill="white"
        stroke="#1E293B"
        strokeWidth="4"
      />
      <circle cx="250" cy="210" r="45" fill="#E51D27" opacity="0.1" />
      <circle cx="250" cy="210" r="20" fill="#E51D27" />

      {/* Arrow hitting target */}
      <motion.path
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
        d="M160 300 L240 220"
        stroke="#1E293B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1.3 }}
        d="M220 220 L240 220 L240 240"
        fill="none"
        stroke="#1E293B"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.g>

    {/* Floating UI cards representing score/progress */}
    <motion.rect
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      x="290"
      y="100"
      width="120"
      height="50"
      rx="5"
      fill="white"
      stroke="#1E293B"
      strokeWidth="3"
    />
    <motion.path
      initial={{ width: 0 }}
      animate={{ width: 60 }}
      transition={{ duration: 0.5, delay: 1 }}
      d="M310 125 L370 125"
      stroke="#E51D27"
      strokeWidth="6"
      strokeLinecap="round"
    />

    <motion.rect
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      x="90"
      y="160"
      width="90"
      height="40"
      rx="5"
      fill="white"
      stroke="#1E293B"
      strokeWidth="3"
    />
    <motion.path
      initial={{ width: 0 }}
      animate={{ width: 40 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      d="M110 180 L150 180"
      stroke="#CBD5E1"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);
