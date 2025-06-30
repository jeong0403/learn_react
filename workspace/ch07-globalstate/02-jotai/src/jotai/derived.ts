import { countAtom } from "@/jotai/atoms";
import { atom } from "jotai";

// countatom에서 파생된, 기존 값을 두 배하는 atom
export const doubleCountAtom = atom((get) => get(countAtom) * 2);
export const dualDoubleCountAtom = atom((get) => get(doubleCountAtom) * 2);