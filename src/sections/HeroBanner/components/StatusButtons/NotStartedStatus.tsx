import { ActionIcon, useMantineTheme } from "@mantine/core";

import { MotionValue, motion } from "framer-motion";

import { HiXMark } from "react-icons/hi2";

interface Props {
    scale?: MotionValue<number>;
    style?: React.CSSProperties & {
        x?: MotionValue<number>;
        y?: MotionValue<number>;
        rotateZ?: MotionValue<number>;
    };
}

const NotStartedStatus: React.FC<Props> = ({ scale, style }) => {
    const theme = useMantineTheme();

    return (
        <motion.div style={{scale, ...style}}>
            <ActionIcon variant={"light"} color={"red"} size={68} style={{...style}} >
                <HiXMark size={55} color={theme.colors.red[6]} />
            </ActionIcon>
        </motion.div>
    );
}

export default NotStartedStatus;