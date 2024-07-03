import PropTypes from "prop-types";
import { Button } from "./ui/Button";
import { Icons } from "./Icons";
import { useSidebar } from "@/providers/SidebarProvider";
import { cn } from "@/lib/utils";

const Hamburger = ({ className }) => {
  const { toggleSidebar, isOpen } = useSidebar();
  
  return (
    <Button
        variant="transparent"
        size="none"
        className={cn("shrink-none p-1.5 hover:bg-primary-500/15 rounded-lg transition-colors duration-300 md:hidden", className)}
        onClick={toggleSidebar}
    >
        {isOpen ? (
            <Icons.barLeft className="w-6 h-6 md:w-5 md:h-5" />
        ) : (
            <Icons.barJustify className="w-6 h-6 md:w-5 md:h-5" />
        )}
    </Button>
  )
}
Hamburger.propTypes = {
  className: PropTypes.string
}

export default Hamburger