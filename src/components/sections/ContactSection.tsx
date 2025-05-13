import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, Check } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a backend
    console.log("Form submitted:", formState);
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "",
      });
    }, 3000);
  };

  return (
    <Section id="contact" className="bg-white dark:bg-dark-900 py-24">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Ready to Elevate with{" "}
            <span className="text-primary-500 dark:text-primary-400">
              Dronyx?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-dark-300 text-lg">
            Discover how Dronyx can transform your aerial operations with
            cutting-edge drone solutions designed for precision, power, and
            performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 rounded-2xl relative overflow-hidden h-full">
              {/* Animated background elements */}
              <div className="absolute top-20 left-10 w-40 h-40 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full blur-3xl" />
              <div className="absolute top-10 right-20 w-20 h-20 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-primary-500/10 dark:bg-primary-500/20 p-3 rounded-lg mr-4">
                      <MapPin
                        className="text-primary-500 dark:text-primary-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 dark:text-white mb-1">
                        Location
                      </h4>
                      <p className="text-dark-600 dark:text-dark-300">
                        1-61,sriram nagar,vadapalli,EG dist
                        <br />
                        Andhra pradesh, india - 533237
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary-500/10 dark:bg-secondary-500/20 p-3 rounded-lg mr-4">
                      <Phone
                        className="text-secondary-500 dark:text-secondary-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 dark:text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-dark-600 dark:text-dark-300">
                        +91 8555085539
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent-500/10 dark:bg-accent-500/20 p-3 rounded-lg mr-4">
                      <Mail
                        className="text-accent-500 dark:text-accent-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-900 dark:text-white mb-1">
                        Email
                      </h4>
                      <p className="text-dark-600 dark:text-dark-300">
                        vishnuketa999@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/40 dark:bg-dark-800/40 backdrop-blur-md rounded-xl">
                  <h4 className="font-bold text-dark-900 dark:text-white mb-3">
                    Office Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-dark-600 dark:text-dark-300">
                    <div>
                      <p className="font-medium">Monday - Friday:</p>
                      <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday:</p>
                      <p>10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 relative z-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full py-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-success-500/20 p-4 rounded-full mb-6">
                      <Check size={48} className="text-success-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 text-center max-w-md">
                      Thank you for connecting with Dronyx. Our team will be in
                      touch shortly to assist you.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors duration-200"
                          placeholder="vishnu keta"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors duration-200"
                          placeholder=" vishnu@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors duration-200"
                        placeholder="+91 1234567891"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                      >
                        Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formState.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors duration-200"
                        required
                      >
                        <option value="">Select your interest</option>
                        <option value="consumer">Consumer Drones</option>
                        <option value="professional">
                          Professional Drones
                        </option>
                        <option value="industrial">
                          Industrial Applications
                        </option>
                        <option value="custom">Custom Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 transition-colors duration-200"
                        placeholder="Tell us about your needs..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full justify-center"
                      size="lg"
                      icon={<Send size={18} />}
                      iconPosition="right"
                    >
                      Send Message
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
