import PropTypes from "prop-types";
import { useSidebar } from '@/providers/SidebarProvider'
import { motion } from 'framer-motion'
import Portals from './Portals';
import { navigationLinks } from '@/lib/constants';
import { Link } from 'react-router-dom';
import { Icons } from "./Icons";

const panelVariant = {
    hidden: {
        x: 2000,
        opacity: 0
    }, 
    show: {
        x: 0,
        opacity: 1

    }
}

const GuestPanelLink = ({ title, route, hasDropdown }) => {
    return (
        <li key={title}>
            <Link
                to={route}
                className="flex items-center text-lg font-medium"
            >
                {title}
                {hasDropdown ? (
                    <Icons.arrowRightS className="w-5 h-5 ml-1 inline-block" />
                ) : null}
            </Link>
        </li>
    )
}

GuestPanelLink.propTypes = {
    title: PropTypes.string,
    route: PropTypes.string,
    hasDropdown: PropTypes.bool
}

const GuestPanel = () => {
    const { isOpen } = useSidebar();

    return (
        <Portals elementID='panel-root'>
            <motion.div
                variants={panelVariant}
                initial="hidden"
                animate={isOpen ? "show" : "hidden"}
                exit="hidden"
                className="w-full h-full fixed top-0 left-0 bg-white z-[4000] pt-16 flex"
            >
                <ul className="w-full h-full flex flex-col items-center justify-center gap-y-8"> 
                    {navigationLinks.map(link => (
                        <GuestPanelLink 
                            key={link.title}
                            {...link}
                        />
                    ))}
                </ul>
            </motion.div>
        </Portals>
    )
}

export default GuestPanel