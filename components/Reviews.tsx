"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Rahul Desai",
    role: "Academic Publisher, Mumbai",
    text: "Their bulk offset printing for textbooks is unmatched in quality and color consistency. Deliveries are always on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Marketing Director, Bengaluru",
    text: "Delivered premium brochures ahead of a tight schedule. The paper quality and finish exceeded expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Mehta",
    role: "Banking Operations, Delhi",
    text: "Consistently supplies secure bank ledgers and passbooks with flawless binding. Highly professional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Head of Marketing, Ahmedabad",
    text: "The monthly wall calendars were stunning with vibrant color reproduction and premium paper stock.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    role: "Procurement Head, Chennai",
    text: "Their zero-error policy and high-volume capacity for our nationwide distribution gives complete peace of mind.",
    rating: 5,
  },
  {
    id: 6,
    name: "Meera Reddy",
    role: "Creative Director, Hyderabad",
    text: "Extraordinary attention to detail on our high-end graphic novels. They truly understand color profiling.",
    rating: 5,
  },
  {
    id: 7,
    name: "Amit Kumar",
    role: "Financial Auditor, Pune",
    text: "Specialized printing meets all compliances. The numbering and barcoding are perfectly aligned.",
    rating: 4,
  },
  {
    id: 8,
    name: "Neha Singh",
    role: "School Principal, Jaipur",
    text: "The binding on our notebooks is durable, and the excellent print quality makes our institution look prestigious.",
    rating: 5,
  },
  {
    id: 9,
    name: "Karthik Krishnan",
    role: "E-commerce Founder, Kochi",
    text: "Their rapid turnaround time and inventory management solutions for warranty cards reduced our overheads.",
    rating: 5,
  },
  {
    id: 10,
    name: "Tanya Kapoor",
    role: "Event Organizer, Chandigarh",
    text: "The premium foil-stamped invitations were breathtaking. They executed a complex print job flawlessly.",
    rating: 5,
  }
];

export function Reviews() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % REVIEWS.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const visibleReviews = [
    REVIEWS[startIndex % REVIEWS.length],
    REVIEWS[(startIndex + 1) % REVIEWS.length],
    REVIEWS[(startIndex + 2) % REVIEWS.length],
  ];

  return (
    <section className="w-full bg-transparent py-16 px-4 sm:px-6 md:px-12 xl:px-24 relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-8 h-[1px] bg-amber-500/50"></span>
            <span className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase font-mono">
              Client Testimonials
            </span>
            <span className="w-8 h-[1px] bg-amber-500/50"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 tracking-tight"
          >
            Trusted by the Best
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light text-sm sm:text-base leading-relaxed"
          >
            Don&apos;t just take our word for it. Hear what industry leaders have to say about our premium printing services.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="relative min-h-[350px] w-full">
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full absolute inset-0"
            >
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow duration-300 min-h-[250px]"
                >
                  <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-50 rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed italic z-10 relative">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col border-t border-slate-50 pt-4 z-10 relative">
                    <span className="font-serif font-bold text-slate-900 text-base sm:text-lg">
                      {review.name}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1">
                      {review.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
