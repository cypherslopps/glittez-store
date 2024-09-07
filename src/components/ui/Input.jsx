import PropTypes from "prop-types";
import { cn } from '@/lib/utils'
import React, { useState } from "react";
import { Icons } from "../Icons";
import { Button } from "./Button";

export const Input = ({ label, error, className, containerClassName, type, ...props }) => {
    const [isFloating, setIsFloating] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const togglePasswordType = () => {
        if(passwordType === "password")
        setPasswordType("text");
        else if(passwordType === "text")
        setPasswordType("password")
    }
    
    return (
        <div className={cn("flex flex-col gap-y-0.5", containerClassName)}>
            <div
                role="group"
                className={`flex flex-col border ${error ? "border-rose-500" : "border-gray-400/45"} rounded-lg p-2 relative`}
            >
                <label className={`absolute -translate-y-1/2 pointer-events-none text-[.9rem] sm:text-[.92rem] transition-all py-0 duration-300 ${props.disabled ? `${error ? "text-rose-500/60" : "text-black/50"} ` : `${error ? "text-rose-500" : "text-black"}`} ${isFloating || props.value ? "scale-[.91] -top-[2%] left-[0.3vw] font-semibold" : "top-1/2 left-[0.5vw]"} px-2 bg-white`}>{label}</label>
                <input 
                    type={type === "password" ? passwordType : type}
                    className={cn(`outline-none border-none ${type === "password" ? "pl-1.5 pr-7" : "px-1.5"} h-7 text-[.92rem] sm:text-[.94rem] disabled:opacity-60`, className)}
                    onFocus={() => setIsFloating(true)}
                    onBlur={() => props.value === "" ? setIsFloating(false) : setIsFloating(true)}
                    {...props}
                />

                {(type === "password") && (
                    <span onClick={togglePasswordType} className="absolute top-1/2 right-0.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    {passwordType === "text" ? (
                        <Icons.eye className="w-4 h-4" />
                    ) : (
                        <Icons.eyeClose className="w-4 h-4" />
                    )}
                    </span>
                )}
            </div>

            {error && (
                <span className="text-sm font-medium text-rose-500">{error}</span>
            )}
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    className: PropTypes.string,
    props: PropTypes.object,
    containerClassName: PropTypes.string,
}

export const FileInput = React.forwardRef(({ label, info, className, file, ...props }) => {
    const fileInputRef = React.useRef(null);
  
    return (
      <div className={cn("bg-gray-100/60 border border-gray-400/45 rounded-md h-20 text-gray-700", className)}>
        <input 
          type="file"
          ref={fileInputRef}
          className="hidden"
          {...props}
        />
        <Button 
          type="button"
          onClick={() => fileInputRef.current.click()}
          className={`w-full h-full ${file?.name ? "w-full justify-center text-[.8rem]" : "text-[.82rem]"} font-medium px-3`}
          size="none"
          variant="none"
        >
          {file?.name ? (
            <span>
              Selected
              <span>(1) file</span>
            </span>    
          ) : (
            <span>{label}</span>
          )}
        </Button>
        {info && <span className="text-[.84rem] sm:text-md md:text-sm leading-[1rem] text-gray-700 font-semibold">{info}</span>}
      </div>
    );
})
FileInput.propTypes = {
    file: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    info: PropTypes.string,
}
FileInput.displayName = "Input"

export const Select = ({ label, error, options, optionLabel="", className, containerClassName, ...props }) => {
    const [isFloating, setIsFloating] = useState(false);
    
    return (
        <div className={cn("flex flex-col gap-y-0.5", containerClassName)}>
            <div
                role="group"
                className={`flex flex-col border ${error ? "border-rose-500" : "border-gray-400/45"} rounded-lg p-2 relative`}
            >
                <label className={`absolute -translate-y-1/2 pointer-events-none text-[.92rem] transition-all py-0 duration-300 ${props.disabled ? `${error ? "text-rose-500/60" : "text-black/50"} ` : `${error ? "text-rose-500" : "text-black"} `} ${isFloating || props.value ? "scale-[.91] -top-[2%] left-[0.3vw] font-semibold" : "top-1/2 left-[0.5vw]"} px-2 bg-white`}>{label}</label>
                <select
                    className={cn("outline-none border-none px-1.5 h-7 bg-transparent w-full text-[.94rem]", className)}
                    onFocus={() => setIsFloating(true)}
                    onBlur={() => props.value === "" ? setIsFloating(false) : setIsFloating(true)}
                    {...props}
                >
                    {optionLabel ? <option value="">{optionLabel}</option> : null}
                    {options.length ? options.map(option => (
                        <option
                            key={option}
                            value={option?.toLowerCase()}
                        >
                            {option}
                        </option>
                    )) : null}
                </select> 
            </div>

            {error && (
                <span className="text-sm font-medium text-rose-500">{error}</span>
            )}
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.array,
    optionLabel: PropTypes.string,
    className: PropTypes.string,
    props: PropTypes.object,
    containerClassName: PropTypes.string,
}

export const Textarea = ({ label, error, className, containerClassName, type, ...props }) => {
    const [isFloating, setIsFloating] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const togglePasswordType = () => {
        if(passwordType === "password")
        setPasswordType("text");
        else if(passwordType === "text")
        setPasswordType("password")
    }
    
    return (
        <div className={cn("flex flex-col gap-y-0.5", containerClassName)}>
            <div
                role="group"
                className="flex flex-col border border-gray-400/45 rounded-lg p-2 relative"
            >
                <label className={`absolute px-0 -translate-y-1/2 pointer-events-none text-[.92rem] transition-all duration-300 ${isFloating ? "scale-[.91] -top-[2%] left-[0.3vw] font-semibold" : "top-[15%] left-[0.5vw]"} px-2 bg-white`}>{label}</label>
                <textarea 
                    type={type === "password" ? passwordType : type}
                    className={cn(`outline-none border-none ${type === "password" ? "pl-1.5 pr-7" : "px-1.5"} py-1 h-28 text-[.94rem]`, className)}
                    onFocus={() => setIsFloating(true)}
                    onBlur={() => props.value === "" ? setIsFloating(false) : setIsFloating(true)}
                    {...props}
                />

                {(type === "password") && (
                    <span onClick={togglePasswordType} className="absolute top-1/2 right-0.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    {passwordType === "text" ? (
                        <Icons.eye className="w-4 h-4" />
                    ) : (
                        <Icons.eyeClose className="w-4 h-4" />
                    )}
                    </span>
                )}
            </div>

            {error && (
                <span className="text-sm font-medium text-rose-500">{error}</span>
            )}
        </div>
    )
}

Textarea.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    className: PropTypes.string,
    props: PropTypes.object,
    containerClassName: PropTypes.string,
}