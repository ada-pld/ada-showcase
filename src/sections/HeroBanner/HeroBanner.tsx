import style from '@/styles/Hero.module.css';
import { Button } from '@mantine/core';

import { circOut, easeIn, easeOut } from 'framer-motion';
import { useScroll, motion, useSpring, useTransform, easeInOut } from 'framer-motion';
import { useRef } from 'react';

const HeroBanner = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

    const title_opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0], { ease: easeOut });
    const subtitle_opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0], { ease: easeOut });

    const video_y = useTransform(scrollYProgress, [0.2, 1], [0, 700], { ease: easeOut });
    const video_x = useTransform(scrollYProgress, [0.35, 0.45], [0, -100], { ease: easeOut });
    const video_scale = useTransform(scrollYProgress, [0.1, 0.35], [1, 0.6], { ease: easeInOut });

    const button_x = useTransform(scrollYProgress, [0.35, 0.45], [50, -300], { ease: easeOut });
    
    const transition = useTransform(scrollYProgress, [0.90, 1], [0, 1], { ease: easeInOut });
    const transitionDisplay = useTransform(scrollYProgress, [0, 0.95, 1], ["none", "none", "block"]);

    return (
        <section ref={targetRef} className={style.section}>
            <div id={style.header}>
                <motion.h1 style={{opacity: title_opacity}}>ADA</motion.h1>
                <motion.h3 style={{opacity: subtitle_opacity}}>Your project manager and PLD generator</motion.h3>
            </div>
            <motion.div id={style.videoContainer} style={{ y: video_y, x: video_x, scale: video_scale }}>
                <div id={style.videoBackground}>
                    <motion.video height={"100%"} width={"100%"} src="/intro.mp4" muted autoPlay loop style={{ borderRadius: 10 }} />
                </div>
                <motion.div style={{ position: "absolute", top: "50%", bottom: "50%", right: button_x, zIndex: -10 }}>
                    <Button size='xl' onClick={() => console.log("test")}>Settings</Button>
                </motion.div>
            </motion.div>
            <motion.div style={{ height: "100%", width: "100%", backgroundColor: "black", position: 'absolute', top: 0, left: 0, zIndex: 10, opacity: transition, display: transitionDisplay }} />
        </section>
    );
}

export default HeroBanner;