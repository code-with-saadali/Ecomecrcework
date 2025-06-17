// components/FeaturesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { FiTruck, FiHeadphones, FiCreditCard, FiShoppingCart } from 'react-icons/fi';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on everything,',
    },
    {
      icon: <FiHeadphones className="w-8 h-8" />,
      title: 'Customer Support',
      description: 'Always here to assist you.',
    },
    {
      icon: <FiCreditCard className="w-8 h-8" />,
      title: 'Secure Payment',
      description: 'Fast, safe, and secure payments.',
    },
    {
      icon: <FiShoppingCart className="w-8 h-8" />,
      title: 'Seamless Shopping',
      description: 'Smooth, easy, and convenient.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 px-5 bg-[#EDEBE5] relative">
       {/* Premium CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 -top-14"
        >
          <button className='bg-black uppercase text-white px-14 py-4 rounded-xl'>Shop now</button>
        </motion.div>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 text-indigo-600 bg-indigo-50 p-3 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;