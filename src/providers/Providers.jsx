import PropTypes from "prop-types";
import { StoreProvider } from "./StoreProvider";
import { SidebarProvider } from "./SidebarProvider";
import { AuthProvider } from "./AuthProvider";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <StoreProvider>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </StoreProvider>
      </AuthProvider>
    </>
  )
}

Providers.propTypes = {
    children: PropTypes.node
}

export default Providers;