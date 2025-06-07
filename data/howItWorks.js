import { 
  UserPlus, 
  FileEdit, 
  ShieldCheck, 
  Mic, 
  BarChart3, 
  BriefcaseBusiness 
} from "lucide-react";
import { motion } from "framer-motion";

export const howItWorks = [
  {
    title: "Step 1: Create Your Profile",
    description: "Share your industry, skills, and experience for personalized AI recommendations.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 2: Build Your Resume & Cover Letter",
    description: "Use AI to craft ATS-optimized resumes and compelling cover letters.",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 3: Check ATS Score & Improve",
    description: "Upload your resume and get instant ATS feedback for better job success.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 4: Prepare for Mock Interviews",
    description: "Practice with AI-powered mock interviews tailored to your job role.",
    icon: <Mic className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 5: Explore Industry Insights",
    description: "Stay updated with the latest trends, salary insights, and career paths.",
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 6: Upload Resume & Find Jobs",
    description: "Get job recommendations based on your skills and resume data.",
    icon: <BriefcaseBusiness className="w-8 h-8 text-primary" />,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const AnimatedHowItWorks = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-xl shadow-lg" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">How It Works</h2>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {howItWorks.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
            className="flex items-start gap-4 p-5 bg-white shadow-md rounded-lg transition-all"
          >
            <div className="p-3 bg-primary/10 rounded-lg">{step.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
