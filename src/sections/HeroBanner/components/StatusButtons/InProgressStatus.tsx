import { ActionIcon, useMantineTheme } from "@mantine/core";

import { MotionValue, motion } from "framer-motion";

import { BsClock } from "react-icons/bs";

interface Props {
    scale?: MotionValue<number>;
    style?: React.CSSProperties & {
        x?: MotionValue<number>;
        y?: MotionValue<number>;
        rotateZ?: MotionValue<number>;
    };
}

const InProgressStatus: React.FC<Props> = ({ scale, style }) => {
    const theme = useMantineTheme();

    return (
        <motion.div style={{scale, ...style}}>
            <ActionIcon variant={"light"} color={"yellow"} size={52} style={{...style}} >
                <BsClock size={30} color={theme.colors.yellow[6]} />
            </ActionIcon>
        </motion.div>
    );
}

export default InProgressStatus;