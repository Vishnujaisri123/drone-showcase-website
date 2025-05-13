import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Shield, Zap, Award } from "lucide-react";

// Dummy Section component (replace with your actual Section component)
const Section = ({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={className}>
    {children}
  </section>
);

const stats = [
  {
    label: "Flight Time",
    value: "35min",
    icon: Activity,
    color: "text-primary-500",
  },
  { label: "Range", value: "10km", icon: Zap, color: "text-secondary-500" },
  { label: "Safety", value: "99.8%", icon: Shield, color: "text-accent-500" },
  { label: "Quality", value: "4K HDR", icon: Award, color: "text-success-500" },
];

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <Section
      id="about"
      className="bg-white dark:bg-dark-900 overflow-hidden py-24"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Breaking Limits of{" "}
            <span className="text-primary-500 dark:text-primary-400">
              Dronyx Innovation
            </span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-dark-600 dark:text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Forged from the spirit of the Phoenix, Dronyx pioneers the future of
            drone innovation — engineering powerful, intelligent flight systems
            that soar above expectations.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div ref={sectionRef} className="lg:w-1/2 relative">
            <motion.div
              className="relative z-10 rounded-xl overflow-hidden shadow-xl"
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Drone in flight"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            <motion.div
              className="absolute top-1/4 -right-8 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-xl z-20"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Drone camera close-up"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-primary-500 dark:bg-primary-600 rounded-full opacity-20 z-0" />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary-500 dark:bg-secondary-600 rounded-full opacity-20 z-0" />
          </div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-6">
              The Next Generation of <br />
              <span className="text-secondary-500 dark:text-secondary-400">
                Autonomous Flight
              </span>
            </h3>

            <p className="text-dark-600 dark:text-dark-300 mb-8">
              Our drones are designed with precision and performance in mind.
              Each component is meticulously engineered to work in perfect
              harmony, creating an aerial platform that excels in every
              environment. From photography to industrial inspections, our
              technology delivers results that exceed expectations.
            </p>

            <p className="text-dark-600 dark:text-dark-300 mb-8">
              Equipped with advanced AI systems, our drones can navigate complex
              environments, avoid obstacles, and follow subjects with
              unparalleled accuracy. The intuitive control systems make flight
              accessible to users of all skill levels, while still offering the
              depth of control professionals demand.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col p-4 rounded-lg bg-gray-50 dark:bg-dark-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className={`${stat.color} mb-2`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-sm text-dark-500 dark:text-dark-400">
                      {stat.label}
                    </span>
                    <span className="text-2xl font-bold text-dark-900 dark:text-white">
                      {stat.value}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
