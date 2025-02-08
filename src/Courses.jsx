import React, { useState, useEffect,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiBook, FiUser, FiMapPin, FiClock, FiCalendar, FiUserPlus, FiAward, FiPlay, FiTrendingUp, FiGrid,FiUsers,FiBookOpen,FiGlobe,FiFilter,  FiBarChart, FiX, FiRefreshCw,FiDollarSign, FiStar, FiVideo,FiDownload, FiArrowRight ,FiCheck } from "react-icons/fi";
import { RiSearchLine, RiNotificationLine, RiCloseLine, RiMenuLine, RiChatSmileLine,RiChatQuoteLine } from "react-icons/ri";
// import { motion, AnimatePresence } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaChalkboard,FaBookOpen,FaLinkedin,FaTwitter,FaEnvelope ,FaCalendarAlt,FaClock,FaUser } from 'react-icons/fa';
import { BsLightningCharge, BsStars,BsPeopleFill, BsBookFill, } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Constantimport { useNavigate } from "react-router-dom";

const CURRENT_USER = "huzaifa8883";
const CURRENT_DATE = "2025-02-03 01:51:27";
const currentTime = "2025-02-03 03:19:16";
const getLevelColor = (level) => {
  const colors = {
    'Beginner': '#22c55e',    // green-500
    'Intermediate': '#3b82f6', // blue-500
    'Advanced': '#8b5cf6',    // purple-500
    'Expert': '#ef4444'       // red-500
  };
  return colors[level] || '#6b7280'; // gray-500 as default
};
  const currentUser = "huzaifa8883";
  const filterOptions = {
    category: [
      { value: "", label: "All Categories" },
      { value: "Programming", label: "Programming" },
      { value: "Data Science", label: "Data Science" },
      { value: "Design", label: "Design" },
      { value: "Business", label: "Business" },
      { value: "Marketing", label: "Marketing" },
      { value: "Photography", label: "Photography" },
      { value: "Music", label: "Music" }
    ],
    level: [
      { value: "", label: "All Levels" },
      { value: "Beginner", label: "Beginner" },
      { value: "Intermediate", label: "Intermediate" },
      { value: "Advanced", label: "Advanced" },
      { value: "Expert", label: "Expert" }
    ],
     city : [
      { value: "", label: "All Locations" },
     
      { value: "Online", label: "Online" },
      { value: "Abbottabad", label: "Abbottabad" },
      { value: "Adezai", label: "Adezai" },
      { value: "Ahmadpur East", label: "Ahmadpur East" },
      { value: "Aijazabad", label: "Aijazabad" },
      { value: "Akora Khattak", label: "Akora Khattak" },
      { value: "Alipur", label: "Alipur" },
      { value: "Arifwala", label: "Arifwala" },
      { value: "Attock", label: "Attock" },
      { value: "Bahawalnagar", label: "Bahawalnagar" },
      { value: "Bahawalpur", label: "Bahawalpur" },
      { value: "Bannu", label: "Bannu" },
      { value: "Bhalwal", label: "Bhalwal" },
      { value: "Bhakkar", label: "Bhakkar" },
      { value: "Bhimber", label: "Bhimber" },
      { value: "Buner", label: "Buner" },
      { value: "Chakdara", label: "Chakdara" },
      { value: "Chakwal", label: "Chakwal" },
      { value: "Chiniot", label: "Chiniot" },
      { value: "Dadu", label: "Dadu" },
      { value: "Dera Ghazi Khan", label: "Dera Ghazi Khan" },
      { value: "Dera Ismail Khan", label: "Dera Ismail Khan" },
      { value: "Dera Murad Jamali", label: "Dera Murad Jamali" },
      { value: "Faisalabad", label: "Faisalabad" },
      { value: "Gawadar", label: "Gawadar" },
      { value: "Gilgit", label: "Gilgit" },
      { value: "Gujranwala", label: "Gujranwala" },
      { value: "Gujrat", label: "Gujrat" },
      { value: "Gujar Khan", label: "Gujar Khan" },
      { value: "Hala", label: "Hala" },
      { value: "Hangu", label: "Hangu" },
      { value: "Haripur", label: "Haripur" },
      { value: "Hyderabad", label: "Hyderabad" },
      { value: "Islamabad", label: "Islamabad" },
      { value: "Jacobabad", label: "Jacobabad" },
      { value: "Jaffarabad", label: "Jaffarabad" },
      { value: "Jhang", label: "Jhang" },
      { value: "Jhelum", label: "Jhelum" },
      { value: "Karachi", label: "Karachi" },
      { value: "Karak", label: "Karak" },
      { value: "Karakoram", label: "Karakoram" },
      { value: "Khanewal", label: "Khanewal" },
      { value: "Khanpur", label: "Khanpur" },
      { value: "Khairpur", label: "Khairpur" },
      { value: "Khushab", label: "Khushab" },
      { value: "Kotli", label: "Kotli" },
      { value: "Lakki Marwat", label: "Lakki Marwat" },
      { value: "Lahore", label: "Lahore" },
      { value: "Lasbela", label: "Lasbela" },
      { value: "Larkana", label: "Larkana" },
      { value: "Mandi Bahauddin", label: "Mandi Bahauddin" },
      { value: "Mansehra", label: "Mansehra" },
      { value: "Mardan", label: "Mardan" },
      { value: "Malakand", label: "Malakand" },
      { value: "Multan", label: "Multan" },
      { value: "Murree", label: "Murree" },
      { value: "Nawabshah", label: "Nawabshah" },
      { value: "Narowal", label: "Narowal" },
      { value: "Nowshera", label: "Nowshera" },
      { value: "Okara", label: "Okara" },
      { value: "Panjgur", label: "Panjgur" },
      { value: "Parachinar", label: "Parachinar" },
      { value: "Pakpattan", label: "Pakpattan" },
      { value: "Peshawar", label: "Peshawar" },
      { value: "Quetta", label: "Quetta" },
      { value: "Rajanpur", label: "Rajanpur" },
      { value: "Rawalpindi", label: "Rawalpindi" },
      { value: "Saddar", label: "Saddar" },
      { value: "Sahiwal", label: "Sahiwal" },
      { value: "Sargodha", label: "Sargodha" },
      { value: "Shikarpur", label: "Shikarpur" },
      { value: "Sheikhupura", label: "Sheikhupura" },
      { value: "Skardu", label: "Skardu" },
      { value: "Sibi", label: "Sibi" },
      { value: "Sialkot", label: "Sialkot" },
      { value: "Sukkur", label: "Sukkur" },
      { value: "Swabi", label: "Swabi" },
      { value: "Swat", label: "Swat" },
      { value: "Tando Adam", label: "Tando Adam" },
      { value: "Tando Allahyar", label: "Tando Allahyar" },
      { value: "Tank", label: "Tank" },
      { value: "Turbat", label: "Turbat" },
      { value: "Umerkot", label: "Umerkot" },
      { value: "Wazirabad", label: "Wazirabad" },
      { value: "Zhob", label: "Zhob" },
      { value: "Ziarat", label: "Ziarat" }
    ],
    
    ageGroup: [
      { value: "", label: "All Age Groups" },
      { value: "Kids", label: "Kids (7-12)" },
      { value: "Teens", label: "Teens (13-17)" },
      { value: "Young Adults", label: "Young Adults (18-25)" },
      { value: "Adults", label: "Adults (26+)" }
    ],
    duration: [
      { value: "", label: "Any Duration" },
      { value: "0-1 Month", label: "0-1 Month" },
      { value: "1-3 Months", label: "1-3 Months" },
      { value: "3-6 Months", label: "3-6 Months" },
      { value: "6+ Months", label: "6+ Months" }
    ],
    price: [
      { value: "", label: "Any Price" },
      { value: "Free", label: "Free" },
      { value: "Under $50", label: "Under $50" },
      { value: "$50-$100", label: "$50-$100" },
      { value: "$100-$200", label: "$100-$200" },
      { value: "$200+", label: "$200+" }
    ],
     schedule : [
      { value: "", label: "Any Schedule" },
      { value: "Weekdays", label: "Weekdays (10:00 AM - 12:00 PM)" },
      { value: "Weekends", label: "Weekends (2:00 PM - 4:00 PM)" },
      { value: "Evening", label: "Evening (6:00 PM - 8:00 PM)" },
      { value: "Self-Paced", label: "Self-Paced (Study at Your Own Time)" }
    ],
    
  };

// Sample Data
const courses = [
  {
    id: 1,
    name: "Web Development Masterclass",
    description: "Learn modern web development with React, Node.js, and MongoDB",
    category: "Programming",
    level: "Intermediate",
    city: "Online",
    duration: "12 weeks",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson",
      title: "Senior Developer"
    },
    price: 499,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    enrolledStudents: 1234
  },
  {
    id: 2,
    name: "Data Science Fundamentals",
    description: "Master data analysis, Python, and machine learning basics",
    category: "Data Science",
    level: "Beginner",
    city: "Online",
    duration: "10 weeks",
    instructor: {
      name: "Michael Chen",
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen",
      title: "Data Scientist"
    },
    price: 599,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    enrolledStudents: 892
  },
  {
    id: 3,
    name: "UI/UX Design Workshop",
    description: "Create beautiful and functional user interfaces",
    category: "Design",
    level: "Advanced",
    city: "Online",
    duration: "8 weeks",
    instructor: {
      name: "Emma Davis",
      avatar: "https://ui-avatars.com/api/?name=Emma+Davis",
      title: "UX Designer"
    },
    price: 399,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    enrolledStudents: 567
  },
  {
    id: 4,
    name: "Web Development Masterclass",
    description: "Learn modern web development with React, Node.js, and MongoDB",
    category: "Programming",
    level: "Intermediate",
    city: "Online",
    duration: "12 weeks",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson",
      title: "Senior Developer"
    },
    price: 499,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    enrolledStudents: 1234
  },
  {
    id: 5,
    name: "Data Science Fundamentals",
    description: "Master data analysis, Python, and machine learning basics",
    category: "Data Science",
    level: "Beginner",
    city: "Online",
    duration: "10 weeks",
    instructor: {
      name: "Michael Chen",
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen",
      title: "Data Scientist"
    },
    price: 599,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    enrolledStudents: 892
  },
  {
    id: 6,
    name: "UI/UX Design Workshop",
    description: "Create beautiful and functional user interfaces",
    category: "Design",
    level: "Advanced",
    city: "Online",
    duration: "8 weeks",
    instructor: {
      name: "Emma Davis",
      avatar: "https://ui-avatars.com/api/?name=Emma+Davis",
      title: "UX Designer"
    },
    price: 399,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    enrolledStudents: 567
  },
  {
    id: 1,
    name: "Web Development Masterclass",
    description: "Learn modern web development with React, Node.js, and MongoDB",
    category: "Programming",
    level: "Intermediate",
    city: "Online",
    duration: "12 weeks",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson",
      title: "Senior Developer"
    },
    price: 499,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    enrolledStudents: 1234
  },
  {
    id: 2,
    name: "Data Science Fundamentals",
    description: "Master data analysis, Python, and machine learning basics",
    category: "Data Science",
    level: "Beginner",
    city: "Online",
    duration: "10 weeks",
    instructor: {
      name: "Michael Chen",
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen",
      title: "Data Scientist"
    },
    price: 599,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    enrolledStudents: 892
  },
  {
    id: 3,
    name: "UI/UX Design Workshop",
    description: "Create beautiful and functional user interfaces",
    category: "Design",
    level: "Advanced",
    city: "Online",
    duration: "8 weeks",
    instructor: {
      name: "Emma Davis",
      avatar: "https://ui-avatars.com/api/?name=Emma+Davis",
      title: "UX Designer"
    },
    price: 399,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    enrolledStudents: 567
  }
];

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
      const navigate = useNavigate();
    
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gradient-to-r from-blue-800 to-indigo-900 backdrop-blur-md shadow-lg" : "bg-gradient-to-r from-blue-800 to-indigo-900 backdrop-blur-md"}`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center h-20">
           {/* Logo */}
           <div className="flex items-center">
             <img src="https://reves-wp.b-cdn.net/wp-content/uploads/2022/04/Reves-Logo.svg" alt="Logo" className="h-12" />
           </div>
     
           {/* Desktop Menu */}
           <div className="hidden md:flex items-center space-x-8">
             {["Home","Courses", "Academies", "Resources", "About"].map((item) => (
               <a
                 key={item}
                 onClick={() => navigate(`/${item.toLowerCase()}`)}
                 className="text-white hover:text-blue-200 transition-colors font-semibold text-lg"
               >
                 {item}
               </a>
             ))}
     
             {/* Search Button */}
             <button
               onClick={() => setShowSearch(!showSearch)}
               className="text-white hover:text-blue-200 transition-colors"
             >
               <RiSearchLine className="h-6 w-6" />
             </button>
     
             {/* Notification Button */}
             <div className="relative">
               <button className="text-white hover:text-blue-200 transition-colors">
                 <RiNotificationLine className="h-6 w-6" />
               </button>
               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                 3
               </span>
             </div>
     
             {/* Get Started Button */}
             <button
               onClick={() => setShowLoginModal(true)}
               className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
             >
               Get Started
             </button>
           </div>
     
           {/* Mobile Menu Toggle */}
           <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             {isMenuOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenuLine className="h-6 w-6" />}
           </button>
         </div>
     
         {/* Mobile Menu */}
         <AnimatePresence>
           {isMenuOpen && (
             <motion.div
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: "auto" }}
               exit={{ opacity: 0, height: 0 }}
               className="md:hidden bg-gradient-to-r from-blue-800 to-indigo-900 backdrop-blur-md border-t border-blue-700"
             >
               <div className="flex flex-col space-y-4 p-4">
                 {["Courses", "Teachers", "Resources", "About"].map((item) => (
                   <a
                     key={item}
                     href={`#${item.toLowerCase()}`}
                     className="text-white hover:text-blue-200 font-medium text-lg"
                   >
                     {item}
                   </a>
                 ))}
                 <button
                   onClick={() => setShowLoginModal(true)}
                   className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl"
                 >
                   Get Started
                 </button>
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     
       {/* Search Overlay */}
       <AnimatePresence>
         {showSearch && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
           >
             <div className="bg-white p-6 rounded-lg w-full max-w-2xl mx-4 shadow-2xl">
               <div className="flex items-center">
                 <RiSearchLine className="text-gray-400 mr-3 h-6 w-6" />
                 <input
                   type="text"
                   placeholder="Search courses, teachers, or topics..."
                   className="flex-1 outline-none text-lg"
                   autoFocus
                 />
                 <button onClick={() => setShowSearch(false)} className="text-gray-400 hover:text-gray-600">
                   <RiCloseLine className="h-6 w-6" />
                 </button>
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </nav>
  );
};

// NavLink Component
const NavLink = ({ href, children }) => (

  <a
    href={href}
    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

// Hero Section
const Hero = () => (
    <div className="relative fonting min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img
        src="https://c0.wallpaperflare.com/preview/980/37/200/training-course-learning-and-development-online.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>

    {/* Main Content */}
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute -left-16 -top-16">
              <BsStars className="text-4xl text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -right-16 -top-8">
              <BsLightningCharge className="text-3xl text-blue-400 animate-bounce" />
            </div>
            <IoSchoolOutline className="text-6xl text-white opacity-80" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Empower Your Future with
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Professional Education
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
        >
          Join thousands of learners worldwide and transform your career with our expert-led courses
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { icon: FiAward, text: "Certified Courses" },
            { icon: FiUserPlus, text: "Expert Instructors" },
            { icon: FiTrendingUp, text: "Career Growth" },
            { icon: FiGrid, text: "Interactive Learning" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
            >
              <feature.icon className="text-2xl text-blue-400 mb-2 mx-auto" />
              <p className="text-white text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg shadow-blue-600/30">
            <FiBook className="text-white text-xl group-hover:rotate-12 transition-transform" />
            <span className="text-white font-semibold">Browse Courses</span>
          </button>
          
          <button className="group px-8 py-4 bg-indigo-500 hover:bg-indigo-600 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 hover:ring-2 hover:ring-indigo-400/50">
  <FiPlay className="text-white text-xl group-hover:scale-110 transition-transform" />
  <span className="text-white font-semibold">Watch Demo</span>
</button>
        </motion.div>

        {/* Stats */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="mt-12 container mx-auto"
>
  {/* Stats Grid */}
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
    {/* Students Card */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group shadow-lg shadow-blue-900/30"
    >
      <div className="flex items-center justify-between mb-4">
        <BsPeopleFill className="text-3xl text-blue-400 group-hover:text-blue-300 transition-colors" />
        <FiUsers className="text-2xl text-blue-400/50 group-hover:text-blue-300 transition-colors" />
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 text-transparent bg-clip-text mb-2">10K+</div>
      <div className="text-sm text-blue-300">Active Students</div>
    </motion.div>

    {/* Courses Card */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 bg-gradient-to-br from-gray-900 via-purple-900 to-purple-800 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group shadow-lg shadow-purple-900/30"
    >
      <div className="flex items-center justify-between mb-4">
        <BsBookFill className="text-3xl text-purple-400 group-hover:text-purple-300 transition-colors" />
        <FiBookOpen className="text-2xl text-purple-400/50 group-hover:text-purple-300 transition-colors" />
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 text-transparent bg-clip-text mb-2">200+</div>
      <div className="text-sm text-purple-300">Online Courses</div>
    </motion.div>

    {/* Countries Card */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 bg-gradient-to-br from-gray-900 via-indigo-900 to-indigo-800 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group shadow-lg shadow-indigo-900/30"
    >
      <div className="flex items-center justify-between mb-4">
        <FiGlobe className="text-3xl text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        <FiGlobe className="text-2xl text-indigo-400/50 group-hover:text-indigo-300 transition-colors" />
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-indigo-100 text-transparent bg-clip-text mb-2">1000+</div>
      <div className="text-sm text-indigo-300">Academics</div>
    </motion.div>

    {/* Time Card */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 bg-gradient-to-br from-gray-900 via-cyan-900 to-cyan-800 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg shadow-cyan-900/30"
    >
      <div className="flex items-center justify-between mb-4">
        <FiClock className="text-3xl text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        <FiCalendar className="text-2xl text-cyan-400/50 group-hover:text-cyan-300 transition-colors" />
      </div>
      <div className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 text-transparent bg-clip-text mb-2">2025-02-03</div>
      <div className="text-sm text-cyan-300">02:29:39 UTC</div>
    </motion.div>

    {/* User Card */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="col-span-1 bg-gradient-to-br from-gray-900 via-teal-900 to-teal-800 backdrop-blur-md rounded-2xl p-6 border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300 group shadow-lg shadow-teal-900/30"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold">
            H
          </span>
        </div>
        <FiUsers className="text-2xl text-teal-400/50 group-hover:text-teal-300 transition-colors" />
      </div>
      <div className="text-lg font-bold bg-gradient-to-r from-teal-300 to-teal-100 text-transparent bg-clip-text mb-2 truncate">
        huzaifa8883
      </div>
      <div className="text-sm text-teal-300">Active User</div>
    </motion.div>
  </div>

  {/* Enhanced animation line */}
  <div className="max-w-6xl mx-auto mt-8 px-4">
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, delay: 1.5 }}
      className="h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
    />
  </div>
</motion.div>
      </motion.div>
    </div>

    {/* Bottom Wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>
);

// Course Card Component
const CourseCard = ({ course }) => (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ 
    y: -5,
    scale: 1.02,
    transition: { duration: 0.2 }
  }}
  className="bg-gradient-to-b from-white via-gray-50 to-gray-100/50 rounded-3xl fonting
    shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)]
    transform transition-all duration-300 overflow-hidden border border-gray-200/50
    backdrop-blur-sm"
>
  {/* Enhanced Image Section */}
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-t 
      from-black/90 via-black/50 to-transparent z-10 
      group-hover:from-black/95 transition-all duration-300" />
    <img 
      src={course.image}
      alt={course.name}
      className="w-full h-64 object-cover transform group-hover:scale-110 
        transition-transform duration-700 ease-in-out"
    />

    {/* Top Badge Row */}
    <div className="absolute top-4 left-0 right-0 px-4 z-20 flex justify-between items-center">
      {/* Level Badge */}
      <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2 
        rounded-2xl shadow-lg border border-white/20">
        <div className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: getLevelColor(course.level) }} />
        <span className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 
          text-transparent bg-clip-text">
          {course.level}
        </span>
      </div>

      {/* Price Tag */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
        px-6 py-2 rounded-2xl font-bold shadow-lg flex items-center space-x-2
        border border-blue-400/20">
        <span className="text-xs text-blue-200 uppercase">USD</span>
        <span className="text-lg">${course.price}</span>
      </div>
    </div>

    {/* Academy Badge */}
    <div className="absolute top-20 left-4 z-20">
      <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-md 
        px-4 py-2 rounded-2xl border border-white/10">
        <FiBookOpen className="text-blue-300" />
        <span className="text-sm font-medium text-white">
          {course.academy || 'Tech Academy'}
        </span>
      </div>
    </div>

    {/* Course Info Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-blue-200 
          transition-colors duration-300">
          {course.name}
        </h3>
        
        <div className="flex flex-wrap gap-4">
          {/* Location */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md 
            px-3 py-1.5 rounded-xl border border-white/10">
            <FiMapPin className="text-blue-300" />
            <span className="text-sm font-medium text-white">
              {course.location || 'Online'}
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md 
            px-3 py-1.5 rounded-xl border border-white/10">
            <FiClock className="text-blue-300" />
            <span className="text-sm font-medium text-white">{course.duration}</span>
          </div>

          {/* Students */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md 
            px-3 py-1.5 rounded-xl border border-white/10">
            <FiUsers className="text-blue-300" />
            <span className="text-sm font-medium text-white">
              {course.enrolledStudents} students
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Content Section */}
  <div className="p-6 space-y-6">
    {/* Enhanced Category Tags */}
    <div className="flex flex-wrap gap-2">
      {course.categories?.map((category, index) => (
        <span key={index} className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 
          text-blue-700 rounded-xl text-sm font-medium border border-blue-100/80
          hover:shadow-md transition-shadow duration-200">
          {category}
        </span>
      ))}
    </div>

    {/* Description with Gradient Background */}
    <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-2xl border border-gray-100">
      <p className="text-gray-600 text-sm leading-relaxed">
        {course.description}
      </p>
    </div>

    {/* Enhanced Features Grid */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { icon: FiVideo, text: `${course.totalLessons} lessons`, color: 'text-purple-500' },
        { icon: FiDownload, text: 'Downloadable', color: 'text-green-500' },
        { icon: FiAward, text: 'Certificate', color: 'text-yellow-500' },
        { icon: FiClock, text: 'Lifetime access', color: 'text-blue-500' }
      ].map((feature, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 rounded-xl
          bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
          <feature.icon className={`text-lg ${feature.color}`} />
          <span className="text-sm font-medium text-gray-700">{feature.text}</span>
        </div>
      ))}
    </div>

    {/* Enhanced Instructor Section */}
    <div className="border-t border-gray-100 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white 
                shadow-[0_3px_10px_rgb(0,0,0,0.08)] group-hover:scale-110 transition-transform duration-200"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full
              border-2 border-white shadow-sm flex items-center justify-center">
              <FiCheck className="text-white text-xs" />
            </div>
          </div>
          <div>
            <p className="text-base font-bold text-gray-800 hover:text-blue-600 
              transition-colors duration-200">
              {course.instructor.name}
            </p>
            <p className="text-sm text-gray-500">{course.instructor.title}</p>
          </div>
        </div>

        {/* Enhanced Rating */}
        <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-xl
          border border-yellow-100">
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar key={star} className={`text-yellow-400 ${
                star <= Math.floor(course.rating) ? 'fill-current' : ''
              }`} />
            ))}
          </div>
          <span className="text-sm font-bold text-yellow-700">
            {course.rating || '4.5'}
          </span>
        </div>
      </div>
    </div>

    {/* Enhanced Action Button */}
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 
        hover:from-blue-700 hover:via-blue-800 hover:to-indigo-900 
        text-white font-bold py-4 rounded-2xl shadow-lg 
        hover:shadow-blue-500/25 transition-all duration-200
        flex items-center justify-center space-x-2 group"
    >
      <span className="text-lg">Enroll Now</span>
      <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-200" />
    </motion.button>
  </div>
</motion.div>
)
const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      level: "",
      city: "",
      ageGroup: "",
      duration: "",
      price: "",
      schedule: ""
    });
  };
// Search and Filter Component
const SearchFilters = ({ filters, setFilters }) => {

  const [activeCategory, setActiveCategory] = useState(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (activeCategory && selectRef.current) {
      selectRef.current.focus(); // Automatically opens dropdown
    }
  }, [activeCategory]);
return (
  <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  className="bg-white rounded-3xl fonting shadow-2xl p-8 mb-8 mt-12"
>
  {/* Enhanced Header with Time and User Info */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100">
    <div className="flex items-center space-x-4 mb-4 md:mb-0">
      <div className="p-3 bg-blue-50 rounded-2xl">
        <FiFilter className="text-2xl text-blue-600" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Search Filters</h2>
        <p className="text-gray-500 text-sm mt-1">Find your perfect match</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-4">
      {/* User Info */}
      <div className="flex items-center bg-gray-50 rounded-xl px-4 py-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
          {currentUser[0].toUpperCase()}
        </div>
        <span className="ml-3 text-gray-700 font-medium">{currentUser}</span>
      </div>

      {/* Time */}
      <div className="flex items-center bg-gray-50 rounded-xl px-4 py-2">
        <FiClock className="text-gray-400" />
        <span className="ml-2 text-gray-600 text-sm">{currentTime}</span>
      </div>

      {/* Reset Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={resetFilters}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 
          rounded-xl text-gray-700 font-medium transition-all duration-200"
      >
        <FiRefreshCw className="text-blue-500" />
        <span>Reset</span>
      </motion.button>
    </div>
  </div>

  {/* Main Search Bar */}
  <div className="mb-8">
    <div className="relative">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <FiSearch className="text-xl text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search courses, instructors, or keywords..."
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl
          focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
          text-gray-700 placeholder-gray-400 transition-all duration-200"
      />
    </div>
  </div>

  {/* Filter Categories */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
    {Object.keys(filterOptions).map((category, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`p-4 rounded-2xl cursor-pointer transition-all duration-200
           ${activeCategory === category 
            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
        onClick={() => setActiveCategory(category)}
      >
        <div className="flex items-center space-x-3">
          <FiFilter className={`text-xl ${activeCategory === category ? 'text-white' : 'text-blue-500'}`} />
          <span className="font-medium">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Filter Options Above */}
  {activeCategory && (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mb-8"
      >
        <SelectField
          label={activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          icon={FiFilter}
          value={filters[activeCategory]}
          onChange={(e) => setFilters({ ...filters, [activeCategory]: e.target.value })}
          options={filterOptions[activeCategory]}
        />
      </motion.div>
    </AnimatePresence>
  )}

  {/* Active Filters */}
  <AnimatePresence>
    {Object.entries(filters).some(([_, value]) => value) && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100"
      >
        {Object.entries(filters).map(([key, value]) =>
          value ? (
            <motion.span
              key={key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-50 
                text-blue-600 rounded-xl text-sm font-medium"
            >
              <span>{value}</span>
              <button
                onClick={() => setFilters({ ...filters, [key]: "" })}
                className="hover:text-blue-800"
              >
                <FiX className="text-xs" />
              </button>
            </motion.span>
          ) : null
        )}
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

)}
const SelectField = ({ icon: Icon, value, onChange, options }) => {
  const selectRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(true);


  useEffect(() => {
    if (activeCategory && selectRef.current) {
      selectRef.current.focus(); 
      selectRef.current.size = options.length; // Show all options
    }
  }, [activeCategory, options]);
  return (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
      bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300">
      <Icon className="text-lg text-indigo-400" />
    </div>
    <select
      value={value}
      ref={selectRef}
      onChange={onChange}
      className="w-full pl-16 pr-10 py-4 bg-[#1e1b4b]/50 border-2 border-indigo-500/20 rounded-xl
        focus:bg-[#1e1b4b]/70 focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/20
        text-gray-200 appearance-none cursor-pointer transition-all duration-300
        hover:border-indigo-500/30 shadow-inner shadow-black/10"
        onFocus={() => setActiveCategory(true)} // Keep it open
        onBlur={() => setActiveCategory(false)} // Close on blur
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
      bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300 pointer-events-none">
      <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 20 20">
        <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" stroke="currentColor" fill="none"/>
      </svg>
    </div>
  </div>
)}

const filterCategories = [
  { name: 'All', icon: FiGrid },
  { name: 'Popular', icon: FiTrendingUp },
  { name: 'Newest', icon: FiClock },
  { name: 'Featured', icon: FiStar }
];
const SelectArrow = () => (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
    <svg
      className="w-4 h-4 text-gray-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
)

// Main App Component
const Courses = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    level: "",
    city: "",
    ageGroup: "",
    duration: "",
    price: "",
    schedule: ""
  });

  // Filter courses based on search criteria
  const filteredCourses = courses.filter(course => {
    return (
      (filters.search === "" || 
        course.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.description.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.category === "" || course.category === filters.category) &&
      (filters.level === "" || course.level === filters.level)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-12 -mt-20 relative z-10">
        <SearchFilters filters={filters} setFilters={setFilters} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduLearn Pro</h3>
              <p className="text-gray-400">Transforming lives through education</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Courses</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@edulearn.pro</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <FiUser className="text-xl" />
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EduLearn Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add these styles to your CSS file or use a styling solution like Tailwind CSS
const styles = `
  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #3B82F6, #8B5CF6);
  }

  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full
      transform hover:scale-105 transition-all duration-300 shadow-md
      flex items-center justify-center;
  }

  .btn-secondary {
    @apply bg-white/10 hover:bg-white/20 text-gray-800 px-6 py-2 rounded-full
      backdrop-blur-sm transform hover:scale-105 transition-all duration-300
      shadow-md flex items-center justify-center border border-gray-200;
  }
`;

export default Courses;