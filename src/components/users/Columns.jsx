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
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium"
            >
              Name
              <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
            </Button>
          )
        },
        cell: ({ row }) => {
            const user = row.original;
      
            return (
              <span>{user?.firstname} {user.lastname}</span>
            )
        },
    },
    {
        accessorKey: "email",
        header: () => {
          return (
            <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Email</span>
          )
        },
    },
    {
        accessorKey: "country",
        header: () => {
          return (
            <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">Country</span>
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
        accessorKey: "state",
        header: () => {
          return (
            <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">State</span>
          )
        },
    },
    {
        accessorKey: "city",
        header: () => {
          return (
            <span className="text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium">City</span>
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
        accessorKey: "updated_at",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-full uppercase text-gray-600/85 font-raleway font-medium"
            >
                Last Update
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