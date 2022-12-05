import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

// typed dispatch hook
export const useAppDispatch: () => AppDispatch = useDispatch;
// typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
