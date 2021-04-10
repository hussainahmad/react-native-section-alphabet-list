import { ISectionData } from "../AlphabetList/types"
import { ViewStyle } from "react-native";

export interface ListLetterIndexProps {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData[];
    indexLetterColor?: string;
    indexStyle?: ViewStyle;
}
