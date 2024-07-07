import PropTypes from "prop-types";
import { Toaster } from "@/components";
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
            <Toaster />
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