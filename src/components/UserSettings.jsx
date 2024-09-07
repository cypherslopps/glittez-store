import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";
import { Icons } from "./Icons";
import { buttonVariants, Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

const UserSettings = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const settingsRef = useRef(null);
  const [isSettingsOpen, toggleIsSettingsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const doesUserExist = Object.values(user).length ? true : false;
  
  // useEffect(() => {
  //   window.addEventListener("click", clickOutside);

  //   return () => window.removeEventListener("click", clickOutside);
  // }, []);

  // const clickOutside = ({ target }) => {
  //   console.log(target, !target.contains(settingsRef.current));
  //   if (isSettingsOpen && !target.contains(settingsRef.current)) {
  //     toggleIsSettingsOpen(false);
  //   }
  // };
  // console.log(isSettingsOpen)

  const logout = async (e) => {
    e.preventDefault();

    try {
      setIsLoggingOut(true);
      await logoutUser();
      const path = pathname.includes("dashboard") ? "/admin/login" : "/";
      navigate(path);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <div className="relative" tabIndex={0}>
      {doesUserExist ? (
        <Button
          variant="ghost"
          size="ghost"
          onClick={() => toggleIsSettingsOpen(prev => !prev)}
        >
            <Icons.user className='w-6 h-6 text-gray-600/95' />
        </Button>
      ) : (
        <Link
          to="/user/login"
          className={cn(buttonVariants({ variant: "ghost", size: "ghost" }))}
        >
          <Icons.user className='w-6 h-6 text-gray-600/95' />
        </Link>
      )}

      {doesUserExist && (
        <div 
          className={`absolute left-1/2 -translate-x-1/2 w-36 px-3 py-2 bg-white border border-gray-400/45 z-40 rounded-md before:block before:absolute before:-top-[0.52rem] before:-z-20 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:border-t before:border-l before:border-gray-400/45 before:rotate-45 before:pointer-events-none transition-all duration-300 ${isSettingsOpen ? "-bottom-[7.2rem] opacity-1 pointer-events-auto" : "-bottom-28 opacity-0 pointer-events-none"}`}
          ref={settingsRef}
        > 
          <ul className="py-1.5 flex flex-col gap-y-[0.6rem]">
            <li className="flex">
              <Link 
                to="/orders"
                className="text-md font-medium hover:underline flex items-center gap-x-1.5 text-gray-700"
              >
                <Icons.receipt className="w-4 h-4 text-gray-600/90" />
                My Orders
              </Link>  
            </li>  

            <li className="flex">
              <Link 
                to="/orders"
                className="text-md font-medium hover:underline flex items-center gap-x-1.5 text-gray-700"
              >
                <Icons.user className="w-4 h-4 text-gray-600/90" />
                Profile
              </Link>  
            </li>  

            <li className="flex">
              <Button 
                variant="none"
                size="none"
                className="gap-x-1.5 w-full justify-start text-md font-medium text-gray-700"
                onClick={logout}
              >
                {isLoggingOut ? (
                  <Icons.loader className="w-4 h-4 text-gray-600/90" />
                ) : (
                  <Icons.logout className="w-4 h-4 text-gray-600/90" />
                )}
                Logout
              </Button>  
            </li>  
          </ul>          
        </div>
      )}
    </div>
  )
}

export default UserSettings