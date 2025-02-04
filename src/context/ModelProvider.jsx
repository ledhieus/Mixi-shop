/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ModelContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useModelContext = () => {
  return useContext(ModelContext);
};

const ModelProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [content, setContent] = useState();
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  return (
    <ModelContext.Provider value={{ setIsShowing, setContent }}>
      {children}
      {isShowing && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/70 "
            onClick={() => setIsShowing(false)}
          >
            <p onClick={(e) => e.stopPropagation()}>{content}</p>
          </div>
        </div>
      )}
    </ModelContext.Provider>
  );
};
export default ModelProvider;
