import { BreadCrumbs, CartCheckoutCollection, SEO } from "@/components"
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/Button";
import { FileInput, Input, Select } from "@/components/ui/Input";
import useForm from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { useStore } from "@/providers/StoreProvider";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";


const Checkout = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const checkoutList = ["information", "payment"]
    const { totalAmount } = useStore();
    const [activeCheckout, setActiveCheckout] = useState("information");
    const doesUserExist = Object.values(user).length ? true : false;
    const [image, setImage] = useState(null);
    const { data: shippingData, errors: shippingDataErrors, handleChange: shippingDataChange  } = useForm({
        phone: "",
        address: "",
        zipCode: "",
        shippingMethod: false,
        country: "",
        state: "",
        city: "",
    });

    const submitShippingInfo = async (e) => {
        e.preventDefault();

        try {
            console.log(shippingData)

            try {
                setActiveCheckout("payload");
            } catch (err) {
                console.log(err);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <SEO 
                title="Checkout"
                description="Checkout cart items"
            />

            <BreadCrumbs />

            <main className="grid grid-cols-2 gap-x-4">
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

                    {activeCheckout === "information" ? (
                        <form 
                            onClick={submitShippingInfo}
                            className="space-y-5"
                        >
                            <div className="space-y-2.5">
                                <h4 className="text-[.95rem] font-semibold text-gray-700">Shipping Address</h4>

                                <div className="grid grid-cols-2 gap-x-2 gap-y-[0.7rem]">
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

                            {doesUserExist ? (
                                <Button
                                    className="w-full h-max py-2.5"
                                >
                                    Continue to payment
                                </Button>
                            ) : (
                                <Button 
                                    type="button"
                                    className="w-full h-max py-2.5"
                                    onClick={() => navigate("/user/login")}
                                >
                                    Log in
                                </Button>
                            )}
                        </form>
                    ) : (
                        <div className="pt-2 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-base font-medium">Total Amount to pay: <strong className="font-nunito">${totalAmount}</strong></h3>
                                <Link
                                    to="https://pay.c14.money?targetAmount=100&targetAssetId=38ee0010-ca62-41da-822e-ff8a9bfa0914&quoteAmountLock=true&targetAssetIdLock=true"
                                    target="_blank"
                                    className={cn(buttonVariants({ variant: "orange", size: "md" }), "rounded-lg w-56 h-11 font-semibold")}
                                >
                                    Make Payment
                                </Link>
                            </div>

                            <form className="space-y-1.5">
                                <h3 className="text-[1.05rem] font-semibold">Receipt</h3>

                                <div className="space-y-2">
                                    <FileInput 
                                        name="image"
                                        file={image}
                                        onChange={e => setImage(e.target.files[0])}
                                        label="Upload Transaction Receipt"
                                        className="col-span-full"
                                    />
                                    <Button
                                        className="h-11 w-56 text-md"
                                    >
                                        Submit Receipt
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}
                </section>

                <section className="bg-gray-50/90 border border-gray-200/80 rounded-lg p-5">
                    <CartCheckoutCollection />
                </section>
            </main>
        </>
    )
}

export default Checkout