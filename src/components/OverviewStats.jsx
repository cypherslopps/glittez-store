import { useState } from 'react'
import { Button } from './ui/Button';
import { Icons } from './Icons';
import { Skeleton } from './ui/Skeleton';

const OverviewStats = () => {
    const [isLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("day"); 
    const status = "success";

    return (
        <div className='space-y-2 mt-7'>
            <div className='flex items-center justify-between'>
                <h3 className="font-semibold text-gray-700/95 text-[1.05rem]">Overview performance</h3>

                <div className='bg-gray-200/30 rounded-lg p-0.5 border border-gray-300/45'>
                    {["day", "week", "month", "year"].map(d => (
                        <Button 
                            key={d}
                            variant="none"
                            size="none"
                            className={`${activeTab === d ? "bg-white font-bold border border-gray-300/80" : "bg-transparent text-gray-700"} py-1 px-3.5 rounded-lg capitalize duration-0 text-[.82rem]`}
                            onClick={() => setActiveTab(d)}
                        >
                            {d}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="border border-gray-200 p-4 rounded-md shadow-md shadow-black/5 grid grid-cols-2">
                <blockquote className='flex items-center justify-between border-b border-r border-gray-200 pb-5 pr-5'>
                    <div className='flex flex-col gap-y-3'>
                        <h5 className='text-md font-medium text-gray-700'>Total Views</h5>
                        {isLoading ? (
                            <Skeleton className="w-full h-12" />
                        ) : (
                            <h1 className='text-5xl font-extrabold -mt-3.5'>5.094</h1>
                        )}
                        <p className='text-sm text-gray-700/90'>From last 732 (last 7 days)</p>
                    </div>

                    {isLoading ? (
                        <Skeleton className="w-16 h-7" />
                    ) : (
                        <div className={`w-max border ${status === "success" ? "bg-emerald-200/30 border-emerald-500/90 text-emerald-600" : "bg-red-300/80 border-red-500 text-red-600"} rounded-md flex items-center gap-x-0.5 py-0.5 px-1.5 font-medium font-nunito text-md`}>
                            <Icons.arrowUp className='w-4 h-4 -ml-0.5 -mt-0.5' />
                            432
                        </div>
                    )}
                </blockquote>

                <blockquote className='flex items-center justify-between border-b border-gray-200 pl-5'>
                    <div className='flex flex-col gap-y-3'>
                        <h5 className='text-md font-medium text-gray-700'>Total Views</h5>
                        {isLoading ? (
                            <Skeleton className="w-full h-12" />
                        ) : (
                            <h1 className='text-5xl font-extrabold -mt-3.5'>5.094</h1>
                        )}
                        <p className='text-sm text-gray-700/90'>From last 732 (last 7 days)</p>
                    </div>

                    {isLoading ? (
                        <Skeleton className="w-16 h-7" />
                    ) : (
                        <div className={`w-max border ${status === "success" ? "bg-emerald-200/30 border-emerald-500/90 text-emerald-600" : "bg-red-300/80 border-red-500 text-red-600"} rounded-md flex items-center gap-x-0.5 py-0.5 px-1.5 font-medium font-nunito text-md`}>
                            <Icons.arrowUp className='w-4 h-4 -ml-0.5 -mt-0.5' />
                            432
                        </div>
                    )}
                </blockquote>

                <blockquote className='flex items-center justify-between border-r border-gray-200 pr-5 pt-5'>
                    <div className='flex flex-col gap-y-3'>
                        <h5 className='text-md font-medium text-gray-700'>Total Views</h5>
                        {isLoading ? (
                            <Skeleton className="w-full h-12" />
                        ) : (
                            <h1 className='text-5xl font-extrabold -mt-3.5'>5.094</h1>
                        )}
                        <p className='text-sm text-gray-700/90'>From last 732 (last 7 days)</p>
                    </div>

                    {isLoading ? (
                        <Skeleton className="w-16 h-7" />
                    ) : (
                        <div className={`w-max border ${status === "success" ? "bg-emerald-200/30 border-emerald-500/90 text-emerald-600" : "bg-red-300/80 border-red-500 text-red-600"} rounded-md flex items-center gap-x-0.5 py-0.5 px-1.5 font-medium font-nunito text-md`}>
                            <Icons.arrowUp className='w-4 h-4 -ml-0.5 -mt-0.5' />
                            432
                        </div>
                    )}
                </blockquote>

                <blockquote className='flex items-center justify-between pt-5 pl-5'>
                    <div className='flex flex-col gap-y-3'>
                        <h5 className='text-md font-medium text-gray-700'>Total Views</h5>
                        {isLoading ? (
                            <Skeleton className="w-full h-12" />
                        ) : (
                            <h1 className='text-5xl font-extrabold -mt-3.5'>5.094</h1>
                        )}
                        <p className='text-sm text-gray-700/90'>From last 732 (last 7 days)</p>
                    </div>

                    {isLoading ? (
                        <Skeleton className="w-16 h-7" />
                    ) : (
                        <div className={`w-max border ${status === "success" ? "bg-emerald-200/40 border-emerald-400/60 text-emerald-600" : "bg-red-300/80 border-red-500 text-red-600"} rounded-md flex items-center gap-x-0.5 py-0.5 px-1.5 font-medium font-nunito text-md`}>
                            <Icons.arrowUp className='w-4 h-4 -ml-0.5 -mt-0.5' />
                            432
                        </div>
                    )}
                </blockquote>
            </div>
        </div>
    )
}

export default OverviewStats