import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (className, options) => {
  useEffect(() => {
    ScrollReveal().reveal(className, options);
  }, [className, options]);
};

export default useScrollReveal;
