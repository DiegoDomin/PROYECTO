import  { useState } from "react";

const PageDisplay = ({ page,page2 }) => {
  const [pages] = useState(1);

  if (pages === 1 &&page) {
    return page;
  } else if (pages === 2 && page2) {
    return page2;
  }

  // Si ninguna condición se cumple, puedes devolver algo por defecto o null
};

export default PageDisplay;
