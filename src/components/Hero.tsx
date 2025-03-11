import { Canvas } from "@react-three/fiber";
import ErrorBoundary from "./ErrorBoundary";
import Background from "./Background";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

const textOptions = [
    "Web Development",
    "AI-Powered Digital Marketing",
    "Graphics Design",
    "AI-Powered Chat Bots",
];

function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="h-screen relative w-full">
                <ErrorBoundary>
                    <Canvas className="absolute inset-0">
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Suspense fallback={null}>
                            <Background />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </ErrorBoundary>

                <div className="absolute inset-0 z-10 w-full flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center flex justify-center items-center h-screen px-6 md:px-12"
                    >
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
                                style={{ textShadow: "0 0 15px rgba(74, 222, 128, 0.8), 0 0 25px rgba(59, 130, 246, 0.6)" }}
                            >
                                Elevate Your Institute


                            </motion.h1>

                            {/* Animated Text Change */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-lg md:text-4xl text-gray-300 drop-shadow-md mt-4 "
                                style={{ textShadow: "0 0 10px rgba(209, 213, 219, 0.7)" }}
                            >

                                We are providing{" "}




                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={textOptions[index]}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-blue-400 font-semibold"
                                    >
                                        {textOptions[index]}
                                    </motion.span>
                                </AnimatePresence>

                            </motion.p>
                        </div>
                    </motion.div>
                    <a href={`#contact`}  className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-48 mx-auto lg:mt-[-170px] mt-[-250px] text-center">
                        Get In Touch
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero;
