import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUploadCloud,FiBriefcase, FiBook, FiLayers, FiBookOpen, FiUsers,FiClock, FiMonitor, FiDollarSign,FiUpload, FiFile, FiCheckCircle, FiX ,FiMail,FiPhone, FiCalendar, FiMapPin,FiUser} from 'react-icons/fi';
import Select from 'react-select';

const TeacherForm = () => {
  const currentDate = new Date('2025-02-13T06:00:08Z');
  const currentUser = 'huzaifa8883';

  const [currentStep, setCurrentStep] = useState(1);
  const [isFocused, setIsFocused] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    profilePicture: null,
    bio: '',
    submissionDate: currentDate.toISOString(),
    submittedBy: currentUser,

    // Educational Background
    qualification: '',
    university: '',
    graduationYear: '',
    specialization: '',
    certificates: [],
    
    // Professional Information
    experience: '',
    subjects: [],
    teachingLevel: [],
    previousInstitutions: [],
    references: [],
    
    // Teaching Preferences
    availableTimings: [],
    preferredMode: [], // Online, Physical, Both
    expectedSalary: '',
    teachingMethodology: '',
    
    // Documents
    documents: [],
    cnicFront: null,
    cnicBack: null,
    lastDegree: null,
    
    // Additional Information
    languages: [],
    skills: [],
    achievements: []
  });
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const inputClasses = "mt-2 block w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 focus:outline-none font-medium text-gray-700";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-1";
  const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: '0.75rem',
      borderColor: state.isFocused ? '#8b5cf6' : '#e5e7eb',
      boxShadow: state.isFocused ? '0 0 0 2px rgba(139, 92, 246, 0.2)' : 'none',
      '&:hover': {
        borderColor: '#8b5cf6',
      },
      padding: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(8px)',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected 
        ? '#8b5cf6' 
        : state.isFocused 
          ? '#f3f4f6' 
          : 'transparent',
      color: state.isSelected ? 'white' : '#374151',
      '&:hover': {
        backgroundColor: state.isSelected ? '#8b5cf6' : '#f3f4f6',
      },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#f3f4f6',
      borderRadius: '0.5rem',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: '#374151',
      fontWeight: 500,
    }),
    multiValueRemove: (base) => ({
      ...base,
      '&:hover': {
        backgroundColor: '#ef4444',
        color: 'white',
      },
    }),
  };
  const timingOptions = [
    { value: 'morning', label: '🌅 Morning (8 AM - 12 PM)' },
    { value: 'afternoon', label: '☀️ Afternoon (12 PM - 4 PM)' },
    { value: 'evening', label: '🌆 Evening (4 PM - 8 PM)' },
    { value: 'night', label: '🌙 Night (8 PM - 12 AM)' },
  ];

  const modeOptions = [
    { value: 'online', label: '💻 Online' },
    { value: 'physical', label: '🏫 Physical' },
    { value: 'both', label: '🔄 Both' },
  ];
  
  const steps = [
    { id: 1, title: 'Personal Information' },
    { id: 2, title: 'Educational Background' },
    { id: 3, title: 'Professional Details' },
    { id: 4, title: 'Teaching Preferences' },
    { id: 5, title: 'Documents Upload' }
  ];

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English',
    'Computer Science', 'History', 'Geography', 'Economics', 'Arts'
  ];

  const teachingLevels = [
    'Primary (1-5)',
    'Middle (6-8)',
    'Secondary (9-10)',
    'Higher Secondary (11-12)',
    'Undergraduate',
    'Graduate'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e, field) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (field === 'certificates' || field === 'documents') {
        // Handle multiple files
        const fileArray = Array.from(files);
        setFormData(prev => ({
          ...prev,
          [field]: [...(prev[field] || []), ...fileArray]
        }));
      } else {
        // Handle single file
        setFormData(prev => ({
          ...prev,
          [field]: files[0]
        }));
      }
    }
  };

  const handleMultiSelect = (e, field) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      try {
        const formDataToSubmit = new FormData();
        
        // Append basic form data
        Object.keys(formData).forEach(key => {
          if (key !== 'documents' && key !== 'certificates' && 
              key !== 'cnicFront' && key !== 'cnicBack' && 
              key !== 'lastDegree' && key !== 'profilePicture') {
            formDataToSubmit.append(key, 
              Array.isArray(formData[key]) 
                ? JSON.stringify(formData[key]) 
                : formData[key]
            );
          }
        });

        // Append files
        if (formData.profilePicture) {
          formDataToSubmit.append('profilePicture', formData.profilePicture);
        }
        
        if (formData.cnicFront) {
          formDataToSubmit.append('cnicFront', formData.cnicFront);
        }
        
        if (formData.cnicBack) {
          formDataToSubmit.append('cnicBack', formData.cnicBack);
        }
        
        if (formData.lastDegree) {
          formDataToSubmit.append('lastDegree', formData.lastDegree);
        }

        // Append multiple files
        formData.certificates?.forEach((file, index) => {
          formDataToSubmit.append(`certificates[${index}]`, file);
        });

        formData.documents?.forEach((file, index) => {
          formDataToSubmit.append(`documents[${index}]`, file);
        });

        // Add submission metadata
        formDataToSubmit.append('submissionDate', currentDate.toISOString());
        formDataToSubmit.append('submittedBy', currentUser);

        // Here you would typically make an API call to submit the form
        console.log('Form Data to submit:', formDataToSubmit);
        // const response = await fetch('/api/submit-teacher-form', {
        //   method: 'POST',
        //   body: formDataToSubmit
        // });
        // const result = await response.json();
        // console.log('Submission result:', result);

        // Reset form after successful submission
        // setFormData({...initialFormState});
        // setCurrentStep(1);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error appropriately
      }
    }
  };

  const DocumentsUploadStep = ({ handleFileUpload }) => {
    const [files, setFiles] = useState({
      cnicFront: null,
      cnicBack: null,
      lastDegree: null,
      documents: []
    });
  
    const [dragActive, setDragActive] = useState({
      cnicFront: false,
      cnicBack: false,
      lastDegree: false,
      documents: false
    });
  
    const handleDrag = (e, field, active) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(prev => ({ ...prev, [field]: active }));
    };
  
    const handleDrop = (e, field) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(prev => ({ ...prev, [field]: false }));
      
      const droppedFiles = Array.from(e.dataTransfer.files);
      if (field === 'documents') {
        setFiles(prev => ({ ...prev, [field]: [...prev[field], ...droppedFiles] }));
        handleFileUpload({ target: { files: droppedFiles } }, field);
      } else {
        setFiles(prev => ({ ...prev, [field]: droppedFiles[0] }));
        handleFileUpload({ target: { files: [droppedFiles[0]] } }, field);
      }
    };
  
    const removeFile = (field, index) => {
      if (field === 'documents') {
        setFiles(prev => ({
          ...prev,
          documents: prev.documents.filter((_, i) => i !== index)
        }));
      } else {
        setFiles(prev => ({ ...prev, [field]: null }));
      }
    };
  
    const UploadBox = ({ field, label, accept, multiple = false }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
        <div
          className={`relative border-2 border-dashed rounded-xl p-6 transition-all duration-200 
            ${dragActive[field] ? 'border-violet-500 bg-violet-50/50' : 'border-gray-300 hover:border-violet-400'}
            ${files[field] ? 'bg-green-50/50' : 'bg-white/50'} backdrop-blur-sm`}
          onDragEnter={e => handleDrag(e, field, true)}
          onDragLeave={e => handleDrag(e, field, false)}
          onDragOver={e => handleDrag(e, field, true)}
          onDrop={e => handleDrop(e, field)}
        >
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={e => {
              setFiles(prev => ({
                ...prev,
                [field]: multiple ? Array.from(e.target.files) : e.target.files[0]
              }));
              handleFileUpload(e, field);
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          
          <div className="text-center">
            <motion.div
              animate={{ scale: dragActive[field] ? 1.1 : 1 }}
              className="mx-auto"
            >
              {files[field] ? (
                <FiCheckCircle className="mx-auto h-8 w-8 text-green-500" />
              ) : (
                <FiUpload className="mx-auto h-8 w-8 text-violet-500" />
              )}
            </motion.div>
            
            <p className="mt-2 text-sm text-gray-600">
              {files[field] ? (
                multiple ? (
                  `${files[field].length} files selected`
                ) : (
                  files[field].name
                )
              ) : (
                <>
                  <span className="text-violet-600 font-medium">Click to upload</span> or drag and drop
                </>
              )}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {accept === 'image/*' ? 'PNG, JPG up to 5MB' : 'PDF, PNG, JPG up to 10MB'}
            </p>
          </div>
        </div>
  
        {/* File Preview */}
        {files[field] && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2"
          >
            {multiple ? (
              <div className="space-y-2">
                {files[field].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white/80 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <FiFile className="text-violet-500" />
                      <span className="text-sm text-gray-600 truncate">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(field, index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiX />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-between p-2 bg-white/80 rounded-lg">
                <div className="flex items-center space-x-2">
                  <FiFile className="text-violet-500" />
                  <span className="text-sm text-gray-600 truncate">{files[field].name}</span>
                </div>
                <button
                  onClick={() => removeFile(field)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiX />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    );
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg rounded-2xl shadow-xl space-y-8"
      >
        <div className="border-b border-gray-200 pb-6">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Documents Upload
          </motion.h3>
          <p className="mt-2 text-gray-600">Please upload all required documents in the specified format</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UploadBox
            field="cnicFront"
            label="CNIC Front"
            accept="image/*"
          />
          <UploadBox
            field="cnicBack"
            label="CNIC Back"
            accept="image/*"
          />
          <UploadBox
            field="lastDegree"
            label="Last Degree"
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <UploadBox
            field="documents"
            label="Additional Documents"
            accept=".pdf,.jpg,.jpeg,.png"
            multiple
          />
        </div>
      </motion.div>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Submission Info */}
      <div className="mb-4 text-sm text-gray-600">
        <p>Submission Date: {currentDate.toLocaleString()}</p>
       
      </div>

      {/* Progress Steps */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Steps Container */}
        <div className="flex justify-between items-center relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              {/* Step Circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`
                  relative flex items-center justify-center w-12 h-12 rounded-full
                  shadow-lg transform transition-all duration-300 ease-in-out
                  ${currentStep >= step.id 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700' 
                    : 'bg-white text-gray-500 border-2 border-gray-200'}
                  ${currentStep === step.id ? 'scale-110' : ''}
                `}
              >
                {currentStep > step.id ? (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                ) : (
                  <span className="text-lg font-semibold">{step.id}</span>
                )}
                
                {/* Pulsing Effect for Current Step */}
                {currentStep === step.id && (
                  <div className="absolute w-full h-full rounded-full animate-ping opacity-20 bg-blue-500" />
                )}
              </motion.div>

              {/* Step Title */}
              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className={`
                  mt-4 text-sm font-medium tracking-wide
                  ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'}
                `}
              >
                {step.title}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Progress Lines */}
        <div className="absolute top-6 left-0 w-full z-0">
          <div className="h-1 flex items-center justify-between">
            {steps.map((step, index) => (
              index < steps.length - 1 && (
                <motion.div
                  key={step.id}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`
                    flex-1 h-1 mx-2 rounded
                    ${currentStep > step.id 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                      : 'bg-gray-200'}
                  `}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        {/* Step 1 - Personal Information */}
        {currentStep === 1 && (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg rounded-2xl shadow-xl"
      >
        {/* Header Section */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Personal Information
          </h3>
          <p className="text-gray-600">Tell us about yourself and make your profile stand out</p>
        </motion.div>
  
        {/* Main Form Content */}
        <div className="space-y-10">
          {/* Profile Picture Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex-shrink-0 relative group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-44 h-44 rounded-full overflow-hidden ring-4 ring-violet-100 shadow-xl"
              >
                {formData.profilePicture ? (
                  <img
                    src={URL.createObjectURL(formData.profilePicture)}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center">
                    <FiUser className="w-16 h-16 text-violet-300" />
                  </div>
                )}
              </motion.div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'profilePicture')}
                className="hidden"
                id="profile-upload"
              />
              <motion.label
                htmlFor="profile-upload"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-2 right-2 p-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.label>
            </div>
  
            {/* Name and Email Section */}
            <div className="flex-grow space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="form-group">
                  <label className={labelClasses}>
                    <FiUser className="text-violet-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="Enter your full name"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="form-group">
                  <label className={labelClasses}>
                    <FiMail className="text-violet-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
  
          {/* Contact and Personal Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="form-group">
              <label className={labelClasses}>
                <FiPhone className="text-violet-500" />
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={inputClasses}
                  placeholder="+1 (234) 567-8900"
                />
              </div>
            </motion.div>
  
            <motion.div whileHover={{ scale: 1.02 }} className="form-group">
              <label className={labelClasses}>
                <FiCalendar className="text-violet-500" />
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className={inputClasses}
              />
            </motion.div>
  
            <motion.div whileHover={{ scale: 1.02 }} className="form-group">
              <label className={labelClasses}>
                <FiUser className="text-violet-500" />
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </motion.div>
  
            <motion.div whileHover={{ scale: 1.02 }} className="form-group">
              <label className={labelClasses}>
                <FiMapPin className="text-violet-500" />
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="Enter your address"
              />
            </motion.div>
          </motion.div>
  
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="form-group"
          >
            <label className={labelClasses}>
              <FiBook className="text-violet-500" />
              Bio
            </label>
            <textarea
              name="bio"
              rows={4}
              value={formData.bio}
              onChange={handleInputChange}
              className={`${inputClasses} resize-none`}
              placeholder="Tell us about your teaching experience, interests, and what makes you unique..."
            />
            <p className="mt-2 text-sm text-gray-500">
              Share your teaching philosophy and what makes you stand out as an educator
            </p>
          </motion.div>
        </div>
      </motion.div>
        )}

        {/* Step 2 - Educational Background */}
        {currentStep === 2 && (
         <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="max-w-4xl mx-auto p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl space-y-8"
       >
         <div className="border-b border-gray-200 pb-4">
           <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
             Educational Background
           </h3>
           <p className="mt-2 text-gray-600">Please provide your educational details below</p>
         </div>
   
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <motion.div {...fadeInUp}>
             <label className={labelClasses}>
               Highest Qualification *
             </label>
             <input
               type="text"
               name="qualification"
               required
               value={formData.qualification}
               onChange={handleInputChange}
               className={inputClasses}
               placeholder="e.g., Bachelor's in Computer Science"
             />
           </motion.div>
   
           <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
             <label className={labelClasses}>
               University/Institution *
             </label>
             <input
               type="text"
               name="university"
               required
               value={formData.university}
               onChange={handleInputChange}
               className={inputClasses}
               placeholder="e.g., Stanford University"
             />
           </motion.div>
   
           <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
             <label className={labelClasses}>
               Graduation Year *
             </label>
             <input
               type="number"
               name="graduationYear"
               required
               value={formData.graduationYear}
               onChange={handleInputChange}
               className={inputClasses}
               placeholder="YYYY"
               min="1900"
               max="2099"
             />
           </motion.div>
   
           <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
             <label className={labelClasses}>
               Specialization
             </label>
             <input
               type="text"
               name="specialization"
               value={formData.specialization}
               onChange={handleInputChange}
               className={inputClasses}
               placeholder="e.g., Artificial Intelligence"
             />
           </motion.div>
         </div>
   
         <motion.div 
           {...fadeInUp} 
           transition={{ delay: 0.4 }}
           className="mt-8"
         >
           <label className={labelClasses}>
             Certificates & Achievements
           </label>
           <div className="mt-2 flex justify-center px-6 py-8 border-2 border-dashed border-violet-200 rounded-xl bg-violet-50/30 hover:bg-violet-50/50 transition-colors duration-200">
             <div className="text-center">
               <FiUploadCloud className="mx-auto h-12 w-12 text-violet-500" />
               <div className="mt-4">
                 <label htmlFor="certificates" className="cursor-pointer">
                   <span className="inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                     Choose Files
                   </span>
                   <input
                     id="certificates"
                     name="certificates"
                     type="file"
                     multiple
                     className="sr-only"
                     onChange={(e) => handleFileUpload(e, 'certificates')}
                   />
                 </label>
                 <p className="mt-2 text-sm text-gray-500">
                   or drag and drop your files here
                 </p>
               </div>
               <p className="mt-1 text-xs text-gray-400">
                 Supported formats: PNG, JPG, PDF (Max 10MB each)
               </p>
             </div>
           </div>
         </motion.div>
       </motion.div>
        )}

        {/* Step 3 - Professional Details */}
        {currentStep === 3 && (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl space-y-8"
      >
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Professional Details
          </h3>
          <p className="mt-2 text-gray-600">Share your professional experience and expertise</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className={labelClasses}>
              <FiBriefcase className="text-violet-500" />
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              required
              value={formData.experience}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="Enter years of experience"
              min="0"
              max="50"
            />
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className={labelClasses}>
              <FiBook className="text-violet-500" />
              Subjects
            </label>
            <Select
              isMulti
              name="subjects"
              options={subjects.map(subject => ({ value: subject, label: subject }))}
              value={formData.subjects.map(subject => ({ value: subject, label: subject }))}
              onChange={(selected) => setFormData({
                ...formData,
                subjects: selected ? selected.map(option => option.value) : []
              })}
              styles={customSelectStyles}
              placeholder="Select subjects..."
            />
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className={labelClasses}>
              <FiLayers className="text-violet-500" />
              Teaching Levels
            </label>
            <Select
              isMulti
              name="teachingLevel"
              options={teachingLevels.map(level => ({ value: level, label: level }))}
              value={formData.teachingLevel.map(level => ({ value: level, label: level }))}
              onChange={(selected) => setFormData({
                ...formData,
                teachingLevel: selected ? selected.map(option => option.value) : []
              })}
              styles={customSelectStyles}
              placeholder="Select teaching levels..."
            />
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className={labelClasses}>
              <FiBookOpen className="text-violet-500" />
              Previous Institutions
            </label>
            <input
              type="text"
              name="previousInstitutions"
              value={formData.previousInstitutions.join(', ')}
              onChange={(e) => setFormData({
                ...formData,
                previousInstitutions: e.target.value.split(',').map(item => item.trim())
              })}
              className={inputClasses}
              placeholder="Enter institutions separated by commas"
            />
          </motion.div>
        </div>
  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className={labelClasses}>
            <FiUsers className="text-violet-500" />
            Professional References
          </label>
          <textarea
            name="references"
            rows={4}
            value={formData.references.join('\n')}
            onChange={(e) => setFormData({
              ...formData,
              references: e.target.value.split('\n').filter(ref => ref.trim())
            })}
            className={`${inputClasses} resize-none`}
            placeholder="Enter each reference on a new line&#10;Example:&#10;Dr. John Doe - Professor at XYZ University&#10;Jane Smith - Department Head at ABC College"
          />
        </motion.div>
      </motion.div>
        )}

        {/* Step 4 - Teaching Preferences */}
        {currentStep === 4 && (
           <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg rounded-2xl shadow-xl space-y-8"
         >
           <div className="border-b border-gray-200 pb-6">
             <motion.h3 
               className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
             >
               Teaching Preferences
             </motion.h3>
             <p className="mt-2 text-gray-600">Configure your teaching schedule and preferences</p>
           </div>
     
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
             >
               <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                 <FiClock className="text-violet-500" />
                 Available Timings
               </label>
               <Select
                 isMulti
                 options={timingOptions}
                 styles={customSelectStyles}
                 value={timingOptions.filter(option => 
                   formData.availableTimings.includes(option.value)
                 )}
                 onChange={(selected) => {
                   handleInputChange({
                     target: {
                       name: 'availableTimings',
                       value: selected.map(item => item.value)
                     }
                   });
                 }}
                 placeholder="Select available times..."
               />
             </motion.div>
     
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
             >
               <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                 <FiMonitor className="text-violet-500" />
                 Preferred Mode
               </label>
               <Select
                 isMulti
                 options={modeOptions}
                 styles={customSelectStyles}
                 value={modeOptions.filter(option =>
                   formData.preferredMode.includes(option.value)
                 )}
                 onChange={(selected) => {
                   handleInputChange({
                     target: {
                       name: 'preferredMode',
                       value: selected.map(item => item.value)
                     }
                   });
                 }}
                 placeholder="Select teaching mode..."
               />
             </motion.div>
     
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
             >
               <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                 <FiDollarSign className="text-violet-500" />
                 Expected Salary (PKR)
               </label>
               <div className="relative">
                 <input
                   type="number"
                   name="expectedSalary"
                   value={formData.expectedSalary}
                   onChange={handleInputChange}
                   className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 focus:outline-none"
                   placeholder="Enter amount in PKR"
                 />
                 <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                   PKR
                 </span>
               </div>
             </motion.div>
     
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="md:col-span-2"
             >
               <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                 <FiBookOpen className="text-violet-500" />
                 Teaching Methodology
               </label>
               <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-[1.01]' : ''}`}>
                 <textarea
                   name="teachingMethodology"
                   value={formData.teachingMethodology}
                   onChange={handleInputChange}
                   onFocus={() => setIsFocused(true)}
                   onBlur={() => setIsFocused(false)}
                   className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 focus:outline-none resize-none"
                   placeholder="Describe your teaching approach, methods, and techniques you use to ensure effective learning..."
                   rows={4}
                 />
               </div>
               <p className="mt-2 text-xs text-gray-500">
                 Tip: Include your teaching philosophy, assessment methods, and how you handle different learning styles
               </p>
             </motion.div>
           </div>
         </motion.div>
        )}

        {/* Step 5 - Documents Upload */}
        {currentStep === 5 && (
        <DocumentsUploadStep handleFileUpload={handleFileUpload} />
      )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              currentStep === 1 ? 'ml-auto' : ''
            }`}
          >
            {currentStep === steps.length ? 'Submit' : 'Next'}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default TeacherForm;