import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TestPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    console.log('TestPage mounted');
    setMounted(true);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('TestPage unmounted');
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-tertiary rounded-lg p-6 shadow-lg">
          <h1 className="text-4xl font-bold text-[#4dba87] mb-4">
            Test Page
          </h1>
          
          <div className="space-y-4">
            <div className="bg-black/20 p-4 rounded">
              <h2 className="text-xl text-white mb-2">Component Status</h2>
              <p className="text-gray-300">
                Mounted: <span className="text-[#4dba87]">{mounted ? 'Yes' : 'No'}</span>
              </p>
            </div>

            <div className="bg-black/20 p-4 rounded">
              <h2 className="text-xl text-white mb-2">Viewport Dimensions</h2>
              <p className="text-gray-300">
                Width: <span className="text-[#4dba87]">{dimensions.width}px</span><br />
                Height: <span className="text-[#4dba87]">{dimensions.height}px</span>
              </p>
            </div>

            <div className="bg-black/20 p-4 rounded">
              <h2 className="text-xl text-white mb-2">Environment Info</h2>
              <p className="text-gray-300">
                Mode: <span className="text-[#4dba87]">{import.meta.env.MODE}</span><br />
                Base URL: <span className="text-[#4dba87]">{import.meta.env.BASE_URL}</span>
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#4dba87] p-4 rounded text-center cursor-pointer"
              onClick={() => console.log('Animation and event handling test')}
            >
              Click me to test interactivity
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestPage;