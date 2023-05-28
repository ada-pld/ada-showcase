import { ActionIcon, useMantineTheme } from "@mantine/core";

import { MotionValue, motion } from "framer-motion";

import { BsCheck2 } from "react-icons/bs";

interface Props {
    scale?: MotionValue<number>;
    style?: React.CSSProperties & {
        x?: MotionValue<number>;
        y?: MotionValue<number>;
        rotateZ?: MotionValue<number>;
    };
}

const FinishedStatus: React.FC<Props> = ({ scale, style }) => {
    const theme = useMantineTheme();

    return (
        <motion.div style={{scale: scale, ...style}}>
            <ActionIcon variant={"light"} color={"green"} size={56}>
                <BsCheck2 size={45} color={theme.colors.green[6]} />
            </ActionIcon>
        </motion.div>
    );
}

export default FinishedStatus;