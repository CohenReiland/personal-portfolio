import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProfileScreen from "@/components/watch/ProfileScreen";
import GraduationScreen from "@/components/watch/GraduationScreen";

const screens = [
    {
        id: "profile",
        component: (props: any) => <ProfileScreen {...props} />,
    },
    {
        id: "graduation",
        component: () => <GraduationScreen />,
    }
];
type HeroWatchProps = {
    imageSrc: string;
};

export default function HeroWatch({ imageSrc, }: HeroWatchProps) {

    const [screenIndex, setScreenIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const totalScreens = screens.length;

    const handleUp = () => {
        setDirection(-1);
        setScreenIndex((prev) => prev === 0 ? totalScreens - 1 : prev - 1);
    };

    const handleDown = () => {
        setDirection(1);
        setScreenIndex((prev) => prev === totalScreens - 1 ? 0 : prev + 1);
    };

    return (
        <div className="relative w-[340px] h-[340px] flex items-center justify-center">

            {/* Top and Bottom Bands */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2
                  w-[140px] h-[90px]
                  bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-gray-700 dark:to-gray-900
                  rounded-b-xl
                  shadow-md z-0"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                  w-[140px] h-[90px]
                  bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-gray-700 dark:to-gray-900
                  rounded-t-xl
                  shadow-md z-0"
            />

            {/* Up Button */}
            <button
                onClick={handleUp}
                type="button"
                aria-label="Scroll Up"
                className="absolute left-[8px] top-[97px] rotate-[15deg]
                   w-7 h-14 rounded-md
                   bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-gray-600 dark:to-gray-700 border border-neutral-400 dark:border-gray-500
                   shadow-lg
                   active:translate-x-[2px] active:translate-y-[1px]"
            />

            {/* Down Button */}
            <button
                onClick={handleDown}
                type="button"
                aria-label="Scroll Down"
                className="absolute left-[10px] top-[200px] rotate-[-20deg]
                   w-7 h-14 rounded-md
                   bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-gray-600 dark:to-gray-700 border border-neutral-400 dark:border-gray-500
                   shadow-lg
                   active:translate-x-[2px] active:translate-y-[-1px]"
            />
            {/* Watch Case */}
            <div className="relative w-[300px] h-[300px] rounded-full
                                bg-gradient-to-br from-neutral-400 to-neutral-300 dark:from-gray-700 dark:to-gray-900
                            shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                {/* Watch Bezel */}
                <div className="absolute inset-4 rounded-full
                                bg-neutral-300 dark:bg-black ring-1 ring-black/10 dark:ring-white/20" >
                    {/* Up & Down Markers */}
                    <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-center gap-20 pointer-events-none">
                        <span className="text-[11px] tracking-widest text-neutral-600 dark:text-gray-300 rotate-[-75deg]">
                            UP
                        </span>
                        <span className="text-[11px] tracking-widest text-neutral-600 dark:text-gray-300 rotate-[65deg]">
                            DOWN
                        </span>
                    </div>

                    {/* Watch Screen */}
                    <div className="absolute inset-8 rounded-full overflow-hidden bg-neutral-100 dark:bg-gray-900">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={screens[screenIndex].id}
                                custom={direction}
                                initial={{ y: direction === 1 ? "100%" : "-100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: direction === 1 ? "-100%" : "100%", opacity: 0 }}
                                transition={{
                                    duration: 0.35,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0"
                            >
                                {screens[screenIndex].component({ imageSrc })}
                            </motion.div>
                        </AnimatePresence>
                        < div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    </div>
                </div>
            </div>


        </div >
    );
}