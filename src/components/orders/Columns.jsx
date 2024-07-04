import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { Icons } from "../Icons";

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          ),
          enableSorting: false,
          enableHiding: false,
    },
    {
        accessorKey: "order",
        header: () => {
          return (
            <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Order</span>
          )
        },
    },
    {
      accessorKey: "customer",
      header: ({ column }) => {
        return (
          <Button
            variant="transparent"
            size="none"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="gap-x-1 text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium"
          >
            Customer
            <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
          </Button>
        )
      },
      cell: ({ row }) => {
          const product = row.original;
    
          return (
            <span>{product?.firstname} {product?.lastname}</span>
          )
      },
  },
  {
    accessorKey: "payment",
    header: () => {
      return (
        <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Payment</span>
      )
    },
    cell: ({ row }) => {
        const product = row.original;
        let statusStyle = "";
        let dotStyle = "";

        if (product.status === "success") {
          statusStyle = "bg-emerald-200/40 border-emerald-400/60 text-emerald-600";
          dotStyle = "bg-emerald-600";
        } else if(product.status === "pending") {
          statusStyle = "bg-orange-200/40 border-orange-400/60 text-orange-600"
          dotStyle = "bg-orange-600";
        } else if (product.status === "failed") {
          statusStyle = "bg-red-200/40 border-red-400/60 text-red-600"
          dotStyle = "bg-red-600";
        }
  
        return (
          <div className={`flex items-center py-0.5 px-1.5 text-sm rounded-md capitalize ${statusStyle}`}>
            <span className={`w-3 h-3 ${dotStyle}`} />
            {product?.status}
          </div>
        )
    },
  },
  {
    accessorKey: "amount",
    header: () => {
      return (
        <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Amount</span>
      )
    },
    cell: ({ row }) => {
        const product = row.original;
  
        return (
          <span>${product.amount}</span>
        )
    },
  },
  {
    accessorKey: "delivery",
    header: () => {
      return (
        <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Delivery</span>
      )
    },
    cell: ({ row }) => {
        const product = row.original;
  
        return (
          <span>${product.delivery}</span>
        )
    },
  },
  {
    accessorKey: "items",
    header: () => {
      return (
        <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Items</span>
      )
    },
    cell: ({ row }) => {
        const product = row.original;
  
        return (
          <span>${product.items}</span>
        )
    },
  },
  {
      accessorKey: "created",
      header: ({ column }) => {
        return (
          <Button
            variant="transparent"
            size="none"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="gap-x-1 text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium"
          >
            Created
            <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
          </Button>
        )
      },
      cell: ({ row }) => {
          const product = row.original;
    
          return (
            <span>${product?.price}</span>
          )
      },
  },
  {
      accessorKey: "action",
      header: () => {
        return (
          <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Action</span>
        )
      },
      cell: () => {
          return (
            <Button>
              Delete
            </Button>
          )
      },
  },
];