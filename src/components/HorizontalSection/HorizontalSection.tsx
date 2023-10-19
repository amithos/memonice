import { ReactNode, useEffect} from "react";
import "./style.scss";

interface IHorizontalSectionProps {
  className: string;
  children: ReactNode;
}

export const HorizontalSection = ({className, children}: IHorizontalSectionProps) => {
  


  return <section className={`horizontal-section ${className}`}>
    {children}
  </section>
};


//connect to state and get viewport parameters;
