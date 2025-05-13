import React from "react";
import {
  Bone as Drone,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Consumer Drones", href: "#" },
        { name: "Professional Drones", href: "#" },
        { name: "Industrial Solutions", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Software", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Community Forums", href: "#" },
        { name: "Training", href: "#" },
        { name: "Warranty", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/VishnuV09741442" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jai-sri-shankara-vishnu-vardhan-keta-1b9070364/",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Vishnujaisri123",
    },
  ];

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center space-x-2 mb-6 text-primary-400"
              whileHover={{ scale: 1.05 }}
            >
              <Drone size={28} />
              <span className="text-xl font-bold tracking-wider">Dronyx</span>
            </motion.a>

            <p className="text-dark-300 mb-6 max-w-md">
              Dronyx pioneers the future of flight with advanced drones crafted
              for creators, innovators, and industries, setting new standards in
              aerial technology across the globe
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-dark-800 border border-dark-700 rounded-l-lg px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white rounded-r-lg px-3 transition duration-200">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-dark-800 hover:bg-primary-500 text-dark-300 hover:text-white p-2 rounded-full transition-colors duration-200"
                    whileHover={{ y: -3 }}
                    aria-label={social.name}
                  >
                    <SocialIcon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800 text-dark-400 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {currentYear} Dronyx Technologies. Crafted & Managed by Vishnu Vardhan | All Rights Reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
