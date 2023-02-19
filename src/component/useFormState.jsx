import React, { useState } from "react";
import { useBetween } from "use-between";


const useFormState = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return {
    isExpanded, setIsExpanded
  };
};

const useSharedFormState = () => useBetween(useFormState);

export default useSharedFormState