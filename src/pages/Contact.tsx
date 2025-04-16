import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center tech-title-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Contact Us
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cyber-card p-6"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-purple-400 mb-2">Phone</h2>
              <p className="text-lg text-purple-200">0789437958</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-purple-400 mb-2">Location</h2>
              <p className="text-lg text-purple-200">Tech Space ICT Class</p>
              <p className="text-purple-300/70">Coordinates: 6.821423, 79.93655</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-purple-400 mb-2">Social Media</h2>
              <a 
                href="https://www.facebook.com/profile.php?id=100079876332216" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-purple-300 hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
                </svg>
                Follow us on Facebook
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cyber-card p-6"
        >
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                className="form-input"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="cyber-card p-2 aspect-video"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.8825831944111!2d79.93655!3d6.821423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMTcuMSJOIDc5wrA1NicxMS42IkU!5e0!3m2!1sen!2slk!4v1639761234567!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
