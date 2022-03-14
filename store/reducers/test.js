import produce from "immer";
import {TEST} from "../types";

const initialState = {
  test:[]
}

export const test = produce(
    (draft, action) => {
        switch (action.type) {
            case TEST:
            default:
                break
        }
    },
    initialState
)


