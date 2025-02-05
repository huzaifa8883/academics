import React, { useState, useEffect } from "react";
import { RiSearchLine, RiNotificationLine, RiCloseLine, RiMenuLine, RiChatSmileLine,RiChatQuoteLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaChalkboard,FaBookOpen,FaLinkedin,FaTwitter,FaEnvelope ,FaCalendarAlt,FaClock,FaUser} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const categories = [
  { title: "Mathematics", description: "Master numbers and equations.", icon: "🧮" },
  { title: "Science", description: "Discover the wonders of the universe.", icon: "🔬" },
  { title: "Literature", description: "Dive into the world of stories.", icon: "📚" },
  { title: "History", description: "Explore the past and its impact on the present.", icon: "🏛️" },
  { title: "Art", description: "Express creativity through various mediums.", icon: "🎨" },
  { title: "Music", description: "Understand the language of sound.", icon: "🎵" },
];
const teachers = [
  { name: "John Doe", subject: "Mathematics", image: "https://media.istockphoto.com/id/1336324740/photo/having-fun-at-a-garden-party.jpg?s=612x612&w=0&k=20&c=r5iNGwCyH-6ENsCVz7FuyDEJ-Pnokaz-af84Qa28-6E=" },
  { name: "Jane Smith", subject: "Science", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4D8S678Eknda5bH9rwRovirTWlrvH8AD0g&s" },
  { name: "Alice Johnson", subject: "Literature", image: "https://directenglish.com.sa/wp-content/uploads/2017/03/random-person.jpg" },
  { name: "Michael Brown", subject: "History", image: "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg" },
  { name: "Emily Davis", subject: "Art", image: "https://img.freepik.com/free-photo/handsome-man-home_144627-9257.jpg" },
  { name: "Daniel Wilson", subject: "Physics", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56tW1Fj5O0RGgRDgrnaEpeabb4rCfNYr7cBEcvqE2CksaVQ0tTsrbG295m1XH0HCzVjg&usqp=CAU" },
];

// Placeholder components
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Notification = ({ message, type }) => (
  <div className={`fixed top-4 right-4 p-4 rounded-lg ${type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
    {message}
  </div>
);

const Tooltip = () => <div></div>;

// Updated Section Components
const PromotionBanner = ({ setShowLoginModal }) => (
  <section className="py-20 fonting bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Section Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up">
      Unlock Exclusive Learning Opportunities
    </h2>

    {/* Section Subheading */}
    <p className="text-lg md:text-2xl mb-8 text-gray-300 animate-fade-in-up delay-100">
      Sign up today and get access to premium courses and resources.
    </p>

    {/* Sign Up Button */}
    <motion.button
      onClick={() => setShowLoginModal(true)}
      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-bold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Sign Up Now
    </motion.button>
  </div>
</section>
);

const StatsSection = () => (
  <section className="py-20 fonting bg-gradient-to-br from-gray-800 to-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-white mb-4 animate-fade-in-up">
        Our Impact
      </h2>
      <p className="text-xl text-gray-300 animate-fade-in-up delay-100">
        Transforming lives through education and innovation
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { number: 100000, label: "Students Enrolled", icon: FaUserGraduate },
        { number: 5000, label: "Expert Teachers", icon: FaChalkboardTeacher },
        { number: 10000, label: "Classes Conducted", icon: FaChalkboard },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative bg-gray-700 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

          {/* Stat Icon */}
          <stat.icon className="text-yellow-500 text-6xl mb-6 mx-auto" />

          {/* Stat Number */}
          <CountUp
            end={stat.number}
            duration={2.5}
            separator=","
            className="text-5xl font-bold text-yellow-500"
          />

          {/* Stat Label */}
          <p className="text-xl text-gray-300 mt-4">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);

const CategorySection = () => (
<section className="py-20 fonting bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-purple-900 mb-4 animate-fade-in-up">
        Explore Categories
      </h2>
      <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
        Discover a wide range of topics to enhance your skills and knowledge
      </p>
    </div>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

          {/* Category Icon */}
          <div className="text-6xl mb-6 text-purple-600">
            {category.icon}
          </div>

          {/* Category Title */}
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            {category.title}
          </h3>

          {/* Category Description */}
          <p className="text-gray-600 leading-relaxed">
            {category.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);

const TeachersSection = () => (
  <section className="py-20 fonting bg-gradient-to-r from-purple-50 via-blue-50 to-teal-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-indigo-900 mb-4">Meet Our Teachers</h2>
        <p className="text-xl text-gray-600">Passionate educators dedicated to your child's success</p>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden"
          >
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500"></div>

            {/* Teacher Image */}
            <img 
              src={teacher.image} 
              alt={teacher.name} 
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-purple-100 object-cover"
            />

            {/* Teacher Name */}
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">{teacher.name}</h3>

            {/* Teacher Subject */}
            <p className="text-lg text-blue-600 font-medium mb-4">{teacher.subject}</p>

            {/* Optional: Teacher Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {teacher.description || "Passionate about inspiring young minds and fostering creativity."}
            </p>

            {/* Social Links (Optional) */}
            <div className="mt-6 flex justify-center space-x-4">
              <a href={teacher.social?.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href={teacher.social?.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href={teacher.social?.email} className="text-gray-400 hover:text-red-500 transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);



const ParentResources = () => (
<section className="py-20 fonting bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-purple-900 mb-4 animate-fade-in-up">
        Parent Resources
      </h2>
      <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
        Empowering parents with tools and knowledge for their child's success
      </p>
    </div>

    {/* Resources Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        { title: "How to Support Your Child's Learning", link: "#", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiYn0Vs9yBPyJosLjMwDfmJD6UUoQtPU6aQ&s" },
        { title: "Tips for Effective Online Learning", link: "#", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPEL_TtKr4dCMc-4RDBkHXJHmMZ4cb_o5rw&s" },
        { title: "Understanding Your Child's Progress", link: "#", image: "https://c4.wallpaperflare.com/wallpaper/1018/272/852/children-school-desk-laptop-wallpaper-preview.jpg" },
        { title: "Creating a Positive Learning Environment", link: "#", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnClDQ4KO3PtnkDuZSfxUNsJBtrkBACkJmMg&s" },
        { title: "Balancing Screen Time and Play", link: "#", image: "https://www.shutterstock.com/image-photo/kid-reading-book-child-school-600nw-2477317791.jpg" },
        { title: "Engaging Educational Activities", link: "#", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IG6O0ggBLzqQs_ih1sz3CYVpvoS8IDX2SA&s" },
      ].map((resource, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

          {/* Resource Image */}
          <div className="relative overflow-hidden rounded-t-3xl">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Resource Title */}
          <h3 className="relative text-2xl font-bold text-purple-900 mb-4 mt-6">
            {resource.title}
          </h3>

          {/* Learn More Link */}
          <a
            href={resource.link}
            className="relative inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-lg transition-colors duration-300"
          >
            Learn More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>

);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* About Us */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
        <p className="text-gray-400 leading-relaxed">
          We are committed to providing high-quality education for children worldwide, empowering their future with knowledge and skills.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-blue-400 transition-colors">Courses</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Teachers</a></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Resources</a></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
        <p className="text-gray-400">📧 support@example.com</p>
        <p className="text-gray-400">📞 +123 456 7890</p>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} YourCompany. All rights reserved.
    </div>
  </div>
</footer>

);

const FeaturedCourseCard = ({ course }) => (
  <motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-white p-8 fonting rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
>
  {/* Course Image */}
  <motion.div
    className="relative overflow-hidden rounded-t-3xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
  </motion.div>

  {/* Course Title */}
  <div className="flex items-center mt-6 mb-4">
    <FaBookOpen className="text-indigo-500 text-3xl mr-3" />
    <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
  </div>

  {/* Course Description */}
  <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>

  {/* Course Details */}
  <div className="text-gray-600 mb-6 space-y-2">
    <p className="flex items-center">
      <FaClock className="text-indigo-500 mr-2" />
      <strong>Duration:</strong> {course.duration}
    </p>
    <p className="flex items-center">
      <FaUser className="text-indigo-500 mr-2" />
      <strong>Instructor:</strong> {course.instructor}
    </p>
  </div>

  {/* Enroll Button */}
  <motion.button
    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
    whileHover={{ scale: 1.05 }}
  >
    Enroll Now
  </motion.button>
</motion.div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const enhancedSubjects = [
    {
      id: 1,
      name: "Mathematics",
      trendingCourses: [
        { id: 1, title: "Algebra Basics", description: "Learn the fundamentals of algebra.", image: "https://wallup.net/wp-content/uploads/2019/09/903430-physics-equation-mathematics-math-formula-poster-science-text-typography-1-748x468.jpg", duration: "4 weeks", instructor: "John Doe" },
        { id: 2, title: "Geometry Mastery", description: "Master geometric concepts.", image: "https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-background-of-podium-in-3d-with-mathematics-and-physics-theme-image_3712585.jpg", duration: "6 weeks", instructor: "Jane Smith" },
        { id: 3, title: "Calculus Introduction", description: "Get started with calculus.", image: "https://mrwallpaper.com/images/thumbnail/mathematics-formulas-with-calculator-n7ja0il1i2k1pya4.jpg", duration: "8 weeks", instructor: "Emily Johnson" },
      ],
    },
    {
      id: 2,
      name: "Science",
      trendingCourses: [
        { id: 1, title: "Physics Fundamentals", description: "Understand the basics of physics.", image: "https://via.placeholder.com/400", duration: "5 weeks", instructor: "Albert Newton" },
        { id: 2, title: "Chemistry Essentials", description: "Learn essential chemistry concepts.", image: "https://via.placeholder.com/400", duration: "7 weeks", instructor: "Marie Curie" },
        { id: 3, title: "Biology Insights", description: "Explore the world of biology.", image: "https://via.placeholder.com/400", duration: "6 weeks", instructor: "Charles Darwin" },
      ],
    },
    {
      id: 3,
      name: "Literature",
      trendingCourses: [
        { id: 1, title: "Classic Literature", description: "Dive into classic literary works.", image: "https://via.placeholder.com/400", duration: "10 weeks", instructor: "William Shakespeare" },
        { id: 2, title: "Modern Fiction", description: "Explore contemporary fiction.", image: "https://via.placeholder.com/400", duration: "8 weeks", instructor: "George Orwell" },
        { id: 3, title: "Poetry Analysis", description: "Analyze famous poems.", image: "https://via.placeholder.com/400", duration: "6 weeks", instructor: "Emily Dickinson" },
      ],
    },
    {
      id: 4,
      name: "History",
      trendingCourses: [
        { id: 1, title: "Ancient Civilizations", description: "Learn about ancient cultures.", image: "https://via.placeholder.com/400", duration: "12 weeks", instructor: "Howard Carter" },
        { id: 2, title: "World Wars", description: "Understand the impact of world wars.", image: "https://via.placeholder.com/400", duration: "10 weeks", instructor: "Winston Churchill" },
        { id: 3, title: "Modern History", description: "Study recent historical events.", image: "https://via.placeholder.com/400", duration: "8 weeks", instructor: "Niall Ferguson" },
      ],
    },
    {
      id: 5,
      name: "Art",
      trendingCourses: [
        { id: 1, title: "Art History", description: "Explore the history of art.", image: "https://via.placeholder.com/400", duration: "9 weeks", instructor: "Leonardo da Vinci" },
        { id: 2, title: "Drawing Techniques", description: "Learn various drawing techniques.", image: "https://via.placeholder.com/400", duration: "6 weeks", instructor: "Vincent van Gogh" },
        { id: 3, title: "Digital Art", description: "Create art using digital tools.", image: "https://via.placeholder.com/400", duration: "8 weeks", instructor: "Andy Warhol" },
      ],
    },
  ];
  

  // Enhanced Navbar Component
  const EnhancedNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
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

  // Enhanced Hero Section Component
  const EnhancedHeroSection = () => (
    <div className="py-20 relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://www.eui.eu/Content-Types-Assets/Web-Unit/Conferring-ceremony-2023.xa86ef5cb.jpg?crop=1920,1080,0,153')" }}>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
  
    {/* Content */}
    <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-shadow-lg"
      >
        Transform Your Child's Future Through Interactive Learning
      </motion.h1>
  
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl mb-12 leading-relaxed"
      >
        Join thousands of students worldwide in live online classes taught by expert instructors
      </motion.p>
  
      {/* Search Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="bg-white bg-opacity-90 rounded-lg p-4 md:p-6 shadow-xl max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-blue-400 transition-all"
          >
            <option value="">Select Subject</option>
            {enhancedSubjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
  
          <select
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
            className="w-full p-3 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-blue-400 transition-all"
          >
            <option value="">Select Age Group</option>
            <option value="4-6">4-6 years</option>
            <option value="7-9">7-9 years</option>
            <option value="10-12">10-12 years</option>
            <option value="13-15">13-15 years</option>
            <option value="16+">16+ years</option>
          </select>
  
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center">
            <RiSearchLine className="mr-2" />
            Find Classes
          </button>
        </div>
      </motion.div>
  
      {/* Stats */}
      <div className="mt-16 text-black grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {[
          { number: 100000, label: "Students" },
          { number: 5000, label: "Teachers" },
          { number: 10000, label: "Classes" },
          { number: 50, label: "Countries" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.2, ease: "easeOut" }}
            className="text-center p-4 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
          >
            <CountUp end={stat.number} duration={2.5} separator="," className="text-3xl font-bold" />
            <p className="text-md">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );

  // Featured Classes Component
  const FeaturedClasses = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className="py-16 bg-gray-50 fonting">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Featured Classes</h2>
      <Slider {...settings}>
        {enhancedSubjects[0].trendingCourses.map((course) => (
          <div key={course.id} className="px-3">
            <FeaturedCourseCard course={course} />
          </div>
        ))}
      </Slider>
    </div>
  </section>
    );
  };

  // Testimonials Section Component
  const testimonials = [
    {
      text: "The personalized learning approach has made a remarkable difference in my child's academic performance. The progress tracking tools are invaluable!",
      author: "Sarah Johnson",
      role: "Parent of 2",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5
    },
    {
      text: "Exceptional platform! The interactive lessons keep my kids engaged, and the progress reports help me understand their learning journey better.",
      author: "Michael Chen",
      role: "Parent of 3",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5
    },
    {
      text: "The quality of education and support is outstanding. My children have shown significant improvement in their critical thinking skills.",
      author: "Emma Thompson",
      role: "Parent & Educator",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5
    },
    {
      text: "What sets this platform apart is the comprehensive curriculum and the excellent support system. It's been a game-changer for our family!",
      author: "David Wilson",
      role: "Single Parent",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5
    },
    {
      text: "The flexibility of online learning combined with quality content has made education enjoyable for my kids. Highly recommended!",
      author: "Lisa Martinez",
      role: "Working Parent",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5
    },
    {
      text: "I'm impressed by how engaging the lessons are. My children actually look forward to their study time now!",
      author: "James Anderson",
      role: "Parent of 2",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5
    }
  ];
  const TestimonialsSection = () => (
<section className="py-20 fonting bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-50">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
    <h2 className="text-6xl font-extrabold text-center text-gray-900 tracking-wide mb-6">
      What Parents Say
    </h2>
    <p className="text-lg text-center text-gray-600 leading-relaxed mb-16">
      Trusted by thousands of parents worldwide
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Sleek Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Quote Icon */}
          <RiChatQuoteLine className="text-purple-500 h-10 w-10 mb-5 opacity-80" />

          {/* Testimonial Text */}
          <p className="text-gray-800 mb-6 leading-relaxed text-lg italic">
            "{testimonial.text}"
          </p>

          {/* Author Details */}
          <div className="flex items-center">
            <img 
              src={testimonial.image} 
              alt={testimonial.author} 
              className="w-14 h-14 rounded-full ring-4 ring-purple-200 object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-xl text-gray-900">{testimonial.author}</h4>
              <p className="text-purple-600 font-medium">{testimonial.role}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="absolute bottom-5 right-5 flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
  // Call to Action Component
  const CallToAction = () => (
<section className="py-20 fonting bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white text-center">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
    <h2 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-xl">
      Start Your Child's Learning Journey Today
    </h2>
    <p className="text-lg md:text-xl mb-10 opacity-90">
      Get <span className="font-bold text-yellow-300">50% off</span> on your first class when you sign up now
    </p>
    <button
      onClick={() => setShowLoginModal(true)}
      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
    >
      Get Started Now
    </button>
  </div>
</section>



  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {isLoading && <LoadingSpinner />}
      <AnimatePresence>
        {showNotification && <Notification message="Success! Your action was completed." type="success" />}
      </AnimatePresence>

      <EnhancedNavbar />
      <EnhancedHeroSection />
      <PromotionBanner setShowLoginModal={setShowLoginModal} />
      <StatsSection />
      <CategorySection />
      <FeaturedClasses />
      <TeachersSection />
      {/* <UpcomingWebinars /> */}
      <ParentResources />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
      <Tooltip id="tooltip" />
    </div>
  );
}

export default App;