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
        accessorKey: "code",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium"
            >
              Code
              <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
            </Button>
          )
        },
    },
    {
      accessorKey: "image",
      header: () => {
        return (
          <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Image</span>
        )
      },
      cell: ({ row }) => {
        const product = row.original;
  
        return (
          <figure className="w-12 h-8">
            <img 
              src={product.image}
              alt={product.code}
              className="w-full h-full object"
            />
          </figure>
        )
      },
    },
    {
      accessorKey: "quantity",
      header: () => {
        return (
          <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Quantity</span>
        )
      },
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="transparent"
            size="none"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="gap-x-1 text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium"
          >
            Price
            <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const product = row.original;
  
        return (
          <span>${product.price}</span>
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