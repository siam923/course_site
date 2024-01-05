import { cn } from "@/lib/utils";

const FooterWidget = ({ title, className = "", children }) => (
  <div className={cn(className, "flex flex-col space-y-4 justify-center")}>
    {title && <h5 className="text-white text-lg">{title}</h5>}
    {children}
  </div>
);

export default FooterWidget;
