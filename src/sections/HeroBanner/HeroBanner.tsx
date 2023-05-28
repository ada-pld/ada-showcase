import { useRef } from 'react';
import style from '@/styles/Hero.module.css';

import { useScroll, motion, easeOut, useTransform, easeInOut } from 'framer-motion';

import FinishedStatus from './components/StatusButtons/FinishedStatus';
import InProgressStatus from './components/StatusButtons/InProgressStatus';
import NotStartedStatus from './components/StatusButtons/NotStartedStatus';

import Lottie from 'react-lottie-player'
import CalendarAnimation from "@/assets/lottieFiles/calendar.json";
import DocAnimation from "@/assets/lottieFiles/document.json";

const HeroBanner = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

    // Titles
    const title_opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0], { ease: easeOut });
    const subtitle_opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0], { ease: easeOut });

    // Video position and scale
    const video_y = useTransform(scrollYProgress, [0.20, 1], [0, 1025]);
    const video_x = useTransform(scrollYProgress, [0.35, 0.45, 0.90, 1], [0, -150, -150, 0], { ease: easeInOut });
    const video_scale = useTransform(scrollYProgress, [0.1, 0.35], [1, 0.6], { ease: easeInOut });

    // Text
    const textBlock_X = useTransform(scrollYProgress, [0.35, 0.45, 0.90, 1], [50, -600, -600, 50], { ease: easeInOut });
    const textBlock1_opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.60], [1, 1, 0.2]);
    const textBlock2_opacity = useTransform(scrollYProgress, [0.60, 0.63, 0.77, 0.80], [0.2, 1, 1, 0.2]);
    const textBlock3_opacity = useTransform(scrollYProgress, [0.80, 0.83, 0.87, 1], [0.2, 1, 1, 0.2]);

    // Video layers
    const layer1_opacity = useTransform(scrollYProgress, [0.45, 0.65, 0.70], [1, 1, 0]);
    const layer2_opacity = useTransform(scrollYProgress, [0.60, 0.65, 0.85, 0.90], [0, 1, 1, 0]);
    const layer3_opacity = useTransform(scrollYProgress, [0.80, 0.85, 0.95, 1], [0, 1, 1, 0]);
    
    // Final transition
    const transition = useTransform(scrollYProgress, [0.90, 1], [0, 1]);
    const transitionDisplay = useTransform(scrollYProgress, [0, 0.90, 1], ["none", "none", "block"]);

    // Status buttons y
    const statusButton1_y = useTransform(scrollYProgress, [0.35, 0.45, 0.60], [-20, 100, -20], { ease: easeOut });
    const statusButton2_y = useTransform(scrollYProgress, [0.39, 0.45, 0.64], [-20, 100, -20], { ease: easeOut });
    const statusButton3_y = useTransform(scrollYProgress, [0.37, 0.45, 0.62], [-20, 100, -20], { ease: easeOut });

    // Status buttons x
    const statusButton1_x = useTransform(scrollYProgress, [0.35, 0.45, 0.60], [0, -100, 0], { ease: easeOut });
    const statusButton2_x = useTransform(scrollYProgress, [0.39, 0.45, 0.64], [0, -50, 0], { ease: easeOut });
    const statusButton3_x = useTransform(scrollYProgress, [0.37, 0.45, 0.62], [0, 150, 0], { ease: easeOut });

    // Status buttons rotate
    const statusButton1_rotate = useTransform(scrollYProgress, [0.35, 0.45, 0.60], [0, 20, 0]);
    const statusButton2_rotate = useTransform(scrollYProgress, [0.35, 0.45, 0.60], [0, 10, 0]);
    const statusButton3_rotate = useTransform(scrollYProgress, [0.35, 0.45, 0.60], [0, -20, 0]);

    // Status buttons scale
    const statusButton1_scale = useTransform(scrollYProgress, [0.40, 0.45, 0.5], [1, 1.2, 1]);
    const statusButton2_scale = useTransform(scrollYProgress, [0.40, 0.45, 0.5], [1, 1, 1]);
    const statusButton3_scale = useTransform(scrollYProgress, [0.40, 0.45, 0.5], [1, 1.1, 1]);

    // Calendar position and rotation
    const calendar_y = useTransform(scrollYProgress, [0.6, 0.70, 0.85], [20, -125, 20], { ease: easeOut });
    const calendar_x = useTransform(scrollYProgress, [0.6, 0.7, 0.85], [0, -60, 0], { ease: easeOut });
    const calendar_rotate = useTransform(scrollYProgress, [0.6, 0.7, 0.85], [10, -20, 10]);
    const calendar_scale = useTransform(scrollYProgress, [0.60, 0.7, 0.85], [1, 1.3, 1]);

    // Document position and rotation
    const document_y = useTransform(scrollYProgress, [0.8, 0.9, 1], [-100, -140, -100], { ease: easeOut });
    const document_x = useTransform(scrollYProgress, [0.8, 0.9, 1], [-20, -225, -20], { ease: easeOut });
    const document_scale = useTransform(scrollYProgress, [0.8, 0.9, 1], [1, 2, 1]);
    const document_rotate = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, -10, 0]);

    return (
        <section ref={targetRef} className={style.section}>
            <div id={style.header}>
                <motion.h1 style={{opacity: title_opacity}}>ADA</motion.h1>
                <motion.h3 style={{opacity: subtitle_opacity}}>Your project manager and PLD generator</motion.h3>
            </div>
            <motion.div
                id={style.videoContainer}
                style={{ y: video_y, x: video_x, scale: video_scale }}
                initial={{ opacity: 0, y: 130 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut }}
            >
                <FinishedStatus style={{position: "absolute", left: "10%", bottom: 0, y: statusButton1_y, x: statusButton1_x, rotateZ: statusButton1_rotate}} scale={statusButton1_scale} />
                <InProgressStatus style={{position: "absolute", left: "50%", right: "50%", bottom: 10, y: statusButton2_y, x: statusButton2_x, rotateZ: statusButton2_rotate}} scale={statusButton2_scale} />
                <NotStartedStatus style={{position: "absolute", right: "10%", bottom: 0, y: statusButton3_y, x: statusButton3_x, rotateZ: statusButton3_rotate}} scale={statusButton3_scale} />
                <motion.div style={{position: "absolute", left: "50%", right: "50%", top: 0, y: calendar_y, x: calendar_x, rotateZ: calendar_rotate, scale: calendar_scale}}>
                    <Lottie
                        loop
                        animationData={CalendarAnimation}
                        play
                        style={{ width: 150, height: 150 }}
                    />
                </motion.div>
                <motion.div style={{position: "absolute", top: "50%", bottom: "50%", left: 0, y: document_y, x: document_x, scale: document_scale, rotateZ: document_rotate}}>
                    <Lottie
                        loop
                        animationData={DocAnimation}
                        play
                        style={{ width: 150, height: 150 }}
                    />
                </motion.div>
                <div id={style.videoBackground}>
                    <motion.video id={style.video} style={{zIndex: 6, opacity: layer1_opacity}} height={"100%"} width={"100%"} src="/videos/cards.mp4" muted autoPlay loop/>
                    <motion.video id={style.video} style={{zIndex: 7, opacity: layer2_opacity}} height={"100%"} width={"100%"} src="/videos/meetings.mp4" muted autoPlay loop/>
                    <motion.video id={style.video} style={{zIndex: 8, opacity: layer3_opacity}} height={"100%"} width={"100%"} src="/videos/pld.mp4" muted autoPlay loop/>
                </div>
                <motion.div id={style.textBlock} style={{ right: textBlock_X }}>
                    <motion.div style={{opacity: textBlock1_opacity }}>
                        <motion.h1 className={style.textBlockTitle}>Tasks and progress</motion.h1>
                        <motion.h3 className={style.textBlockSubTitle}>Each team member can administrate their cards</motion.h3>
                    </motion.div>
                    <motion.div style={{opacity: textBlock2_opacity }}>
                        <motion.h1 className={style.textBlockTitle}>Meetings</motion.h1>
                        <motion.h3 className={style.textBlockSubTitle}>Create and manage meetings</motion.h3>
                    </motion.div>
                    <motion.div style={{opacity: textBlock3_opacity }}>
                        <motion.h1 className={style.textBlockTitle}>PLD</motion.h1>
                        <motion.h3 className={style.textBlockSubTitle}>Generate PLD with custom generators</motion.h3>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div style={{ height: "100%", width: "100%", backgroundColor: "black", position: 'absolute', top: 0, left: 0, zIndex: 10, opacity: transition, display: transitionDisplay }} />
        </section>
    );
}

export default HeroBanner;