import { motion } from 'framer-motion';
import { useState } from 'react';
import Fireworks from '../components/Fireworks';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    grade: '',
    school: '',
    dateOfBirth: '',
    parentName: '',
    contactNumber: '',
    email: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showFireworks, setShowFireworks] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxdutuRdcaMO0W5wMvvV6_mG4r-Ddd57dQJCHVJTcbzEfFVT5pPuPWtwHiEd4MYtsAA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response) {
        setSubmitStatus('success');
        setShowFireworks(true);
        setFormData({
          fullName: '',
          grade: '',
          school: '',
          dateOfBirth: '',
          parentName: '',
          contactNumber: '',
          email: '',
          address: ''
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {showFireworks && <Fireworks onComplete={() => setShowFireworks(false)} />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="cyber-card p-8 relative overflow-hidden"
      >
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center tech-title-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Join TECH SPACE
        </motion.h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold space-title-gradient mb-6">Student Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", type: "text", name: "fullName" },
                { label: "Grade", type: "select", name: "grade", options: [6, 7, 8, 9, 10, 11] },
                { label: "School", type: "text", name: "school" },
                { label: "Date of Birth", type: "date", name: "dateOfBirth" }
              ].map((field) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <label className="block text-base font-medium text-purple-300 mb-2">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select Grade</option>
                      {field.options?.map(grade => (
                        <option key={grade} value={grade} className="bg-gray-900">
                          Grade {grade}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="form-input"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold space-title-gradient mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Parent/Guardian Name", type: "text", name: "parentName", span: 1 },
                { label: "Contact Number", type: "tel", name: "contactNumber", span: 1 },
                { label: "Email", type: "email", name: "email", span: 2 },
                { label: "Address", type: "textarea", name: "address", span: 2 }
              ].map((field) => (
                <motion.div
                  key={field.label}
                  className={`md:col-span-${field.span}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <label className="block text-base font-medium text-purple-300 mb-2">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={3}
                      className="form-input"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="form-input"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-purple-500/20 border border-purple-500 rounded-lg text-purple-200"
            >
              Registration submitted successfully!
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200"
            >
              There was an error submitting the form. Please try again.
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg cyber-gradient text-white font-medium disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Registration;
