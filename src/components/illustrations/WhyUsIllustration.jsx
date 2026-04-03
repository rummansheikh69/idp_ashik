import React from "react";
import { motion } from "framer-motion";

export const WhyUsIllustration = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle */}
    <motion.circle cx="250" cy="250" r="250" fill="#F8F9FA" />

    {/* Grid Lines */}
    <g stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" opacity="0.5">
      {[...Array(5)].map((_, i) => (
        <motion.line
          key={i}
          x1="100"
          y1={i * 100}
          x2="100"
          y2={i * 100 + 500}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.line key={i + 5} x1={i * 100} y1="0" x2={i * 100} y2="500" />
      ))}
    </g>

    {/* Growth Line Path */}
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M100 380 L180 300 L260 320 L380 180"
      stroke="#E51D27"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Data Points on the Line */}
    {[...Array(4)].map((_, i) => (
      <motion.circle
        key={i}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        cx={i === 0 ? 100 : i === 1 ? 180 : i === 2 ? 260 : 380}
        cy={i === 0 ? 380 : i === 1 ? 300 : i === 2 ? 320 : 180}
        r={i === 3 ? 12 : 8}
        fill={i === 3 ? "#E51D27" : "white"}
        stroke="#E51D27"
        strokeWidth={i === 3 ? undefined : 4}
      />
    ))}

    {/* Graduation Cap Section */}
    <g transform="translate(320, 90)">
      <motion.path
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5 }}
        d="M60 0 L120 30 L60 60 L0 30 Z"
        fill="#1E293B"
      />
      <motion.path
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.7 }}
        d="M20 40 L20 70 C20 80 60 90 60 90 C60 90 100 80 100 70 L100 40"
        fill="none"
        stroke="#1E293B"
        strokeWidth="6"
      />
      {/* Tassel */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.9 }}
        d="M110 35 L110 75"
        stroke="#E51D27"
        strokeWidth="4"
      />
    </g>

    {/* Decorative Document Block */}
    <motion.rect
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      x="80"
      y="140"
      width="80"
      height="80"
      rx="10"
      fill="white"
      stroke="#CBD5E1"
      strokeWidth="2"
    />
    <motion.path
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      d="M100 170 H140 M100 190 H130"
      stroke="#1E293B"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Success Checkmark Block */}
    <motion.rect
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
      x="180"
      y="80"
      width="100"
      height="100"
      rx="10"
      fill="white"
      stroke="#CBD5E1"
      strokeWidth="2"
    />
    <motion.circle
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9 }}
      cx="230"
      cy="130"
      r="20"
      fill="#E51D27"
      opacity="0.1"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.0 }}
      d="M220 130 L228 138 L240 122"
      fill="none"
      stroke="#E51D27"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
