import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";

const WordBox = () => {
    const state = useSelector((state: RootState) => state.word);

    return (
        <div className="col-3 alert alert-dark" role="alert">
            {state}
        </div>
    )
};

export default WordBox;