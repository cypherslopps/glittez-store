import PropTypes from "prop-types";
import { useEffect, useRef, useState } from 'react'
import { createPortal } from "react-dom";

const Portals = ({ elementID, children }) => {
    const portalRef = useRef();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        portalRef.current = document.getElementById(`${elementID}`);
        setMounted(true);
    }, [mounted, elementID]);


    return ((mounted && portalRef.current) ? createPortal(
        <>{children}</>,
        portalRef.current
    ) : null)
}

Portals.propTypes = {
    elementID: PropTypes.string,
    children: PropTypes.node
}

export default Portals;