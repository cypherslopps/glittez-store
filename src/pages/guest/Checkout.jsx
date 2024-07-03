import { BreadCrumbs, CartCheckoutCollection, SEO } from "@/components"
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import useForm from "@/hooks/useForm";
import { useState } from "react"
import { Link } from "react-router-dom";


const Checkout = () => {
    const checkoutList = ["information", "payment"]
    const [activeCheckout, setActiveCheckout] = useState("information");
    const { data: customerInfo, errors: customerInfoErrors, handleChange: handleCustormInfoChange } = useForm({
        email: ""
    });
    const { data: shippingData, errors: shippingDataErrors, handleChange: shippingDataChange  } = useForm({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        zipCode: "",
        shippingMethod: "",
        country: "",
        state: "",
        city: "",
    });

    return (
        <>
            <SEO 
                title="Checkout"
                description="Checkout cart items"
            />

            <BreadCrumbs />

            <main className="grid grid-cols-2 items-center gap-x-1">
                {/* Checkout form */}
                <section className="space-y-5">
                    <header className="-space-y-0.5">
                        <h1 className="text-3xl font-extrabold">Checkout</h1>
                        <ul className="flex items-center gap-x-1">
                            {checkoutList.map((list, idx) => (
                                <li 
                                    key={list}
                                    className={`flex items-center gap-x-1 ${list === activeCheckout ? "font-semibold" : "text-gray-800/70"} capitalize text-[.94rem]`}
                                >
                                    {list}
                                    {(idx) !== (checkoutList.length - 1) ? (
                                        <Icons.arrowRightS 
                                        strokeWidth={1} 
                                        className='w-4 h-4 text-gray-600' 
                                        />
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </header>

                    <form className="space-y-5">
                        <div className="space-y-2.5">
                            <div className="flex items-center justify-between">
                                <h4 className="text-[.95rem] font-semibold text-gray-700">Customer Information</h4>

                                <p className="text-sm text-gray-700">
                                    Have an account? {" "}
                                    <Link 
                                        to="/login"
                                        className="font-semibold text-black underline"
                                    >
                                        Log in
                                    </Link>
                                </p>
                            </div>
                            <Input 
                                type="email"
                                name="email"
                                label="Email"
                                value={customerInfo.email}
                                onChange={handleCustormInfoChange}
                                error={customerInfoErrors.email}
                            />
                        </div>

                        <div className="space-y-2.5">
                            <h4 className="text-[.95rem] font-semibold text-gray-700">Shipping Address</h4>

                            <div className="grid grid-cols-2 gap-x-2 gap-y-[0.7rem]">
                                <Input 
                                    type="text"
                                    name="firstName"
                                    label="First name"
                                    value={shippingData.firstName}
                                    onChange={shippingDataChange}
                                    error={shippingDataErrors.firstName}
                                />

                                <Input 
                                    type="text"
                                    name="lastName"
                                    label="Last name"
                                    value={shippingData.lastName}
                                    onChange={shippingDataChange}
                                    error={shippingDataErrors.lastName}
                                />

                                <Input 
                                    type="phone"
                                    name="phone"
                                    label="Phone"
                                    value={shippingData.phone}
                                    onChange={shippingDataChange}
                                    error={shippingDataErrors.phone}
                                    containerClassName="col-span-full"
                                />

                                <Input 
                                    type="text"
                                    name="address"
                                    label="Address"
                                    value={shippingData.address}
                                    onChange={shippingDataChange}
                                    error={shippingDataErrors.address}
                                    containerClassName="col-span-full"
                                />

                                <Select 
                                    type="text"
                                    name="country"
                                    label="Country"
                                    options={["USA", "Belgium"]}
                                    value={shippingData.country}
                                    onChange={shippingDataChange}
                                    error={shippingDataErrors.country}
                                />

                                <Select 
                                    name="state"
                                    label="State"
                                    options={["GG", "Nagi"]}
                                    value={shippingData.state}
                                    onChange={shippingDataChange}
                                    error={shippingDataErrors.state}
                                />

                                <Select 
                                    name="city"
                                    label="City"
                                    options={["GG", "Nagi"]}
                                    value={shippingData.city}
                                    onChange={shippingDataChange}
                                    shoperror={shippingDataErrors.city}
                                />

                                <Input 
                                    type="number"
                                    name="zipCode"
                                    label="ZIP Code"
                                    value={shippingData.zipCode}
                                    onChange={shippingDataChange}
                                    error={shippingDataErrors.zipCode}
                                />
                            </div>
                        </div>

                        <div className="space-y-2.5">
                             <h4 className="text-[.95rem] font-semibold text-gray-700">Shipping Method</h4>

                           <div className="border border-gray-400/45 divide-y divide-gray-400/45 py-4 px-4 rounded-md space-y-4">
                                <label 
                                    htmlFor="home_delivery"
                                    className="flex items-center gap-x-[0.55rem] hover:cursor-pointer transition-all duration-150"
                                >
                                    <input 
                                        type="radio"
                                        name="shippingMethod"
                                        value={shippingData.shippingMethod}
                                        className="w-5 h-5 transition-all duration-150"
                                        onChange={shippingDataChange}
                                        id="home_delivery"
                                    />

                                    <div className="flex flex-col -space-y-0.5">
                                        <p className="text-sm font-semibold">Home delivery</p>
                                        <span className="text-[.82rem] text-gray-700/80">Takes 3-5 business days</span>
                                    </div>
                                </label>

                                <label 
                                    htmlFor="instore_pickup"
                                    className="flex items-center gap-x-[0.55rem] hover:cursor-pointer transition-all duration-150 pt-4"
                                >
                                    <input 
                                        type="radio"
                                        name="shippingMethod"
                                        value={shippingData.shippingMethod}
                                        className="w-5 h-5 transition-all duration-150"
                                        onChange={shippingDataChange}
                                        id="instore_pickup"
                                    />

                                    <div className="flex flex-col -space-y-0.5">
                                        <p className="text-sm font-semibold">In-store pickup</p>
                                        <span className="text-[.82rem] text-gray-700/80">Pick from store location</span>
                                    </div>
                                </label>
                           </div>
                        </div>

                        <Button
                            className="w-full h-max py-2.5 bg-black hover:bg-black/95"
                        >
                            Continue to payment
                        </Button>
                    </form>
                </section>

                <section className="w-10/12 mx-auto">
                    <CartCheckoutCollection />
                </section>
            </main>
        </>
    )
}

export default Checkout