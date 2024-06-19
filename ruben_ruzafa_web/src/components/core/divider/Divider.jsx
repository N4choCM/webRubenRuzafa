import "./Divider.css";
import { AppStateContext } from "../../../state/AppProvider";
import { useContext } from "react";

const Divider = () => {
  const appStateContext = useContext(AppStateContext);
  return (
    <hr className={`mt-4 ${appStateContext.state.isDarkMode ? "text-white" : ""}`}/>
  );
};

export default Divider;
