import { Link } from "react-router-dom";
import { Icons } from "../Icons";
import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import axios from "@/lib/axios";
import { toast } from "sonner";

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
              className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium"
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
          <span className="text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium">Image</span>
        )
      },
      cell: ({ row }) => {
        const product = row.original;
  
        return (
          <figure className="w-10/12 h-12">
            <img 
              src={product.image}
              alt={product.code}
              className="w-full h-full object-cover"
            />
          </figure>
        )
      },
    },
    {
      accessorKey: "quantity",
      header: () => {
        return (
          <span className="text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium">Quantity</span>
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
            className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium"
          >
            Price
            <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const product = row.original;
  
        return (
          <span className="font-nunito">${product.price}</span>
        )
      },
    },
    {
        accessorKey: "old_price",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium"
            >
              Old Price
              <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
            </Button>
          )
        },
        cell: ({ row }) => {
            const sku = row.original;
      
            return (
              <>
                {sku.old_price ? (
                  <span className="font-nunito">${sku?.old_price}</span>
                ) : (
                  <span className="font-bold text-lg text-center">-</span>
                )}
              </>
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
        cell: ({ row }) => {
          const sku = row.original;
  
          const deleteCategory = async () => {
            try {
              const request = await axios.delete(`/skus/${sku.code}/delete`);
              const { message } = request.data;
              
              toast(message);

              
            } catch (err) {
              toast("An error occured while deleting product SKU");
            }
          } 
          
          return (
            <div className="flex gap-x-4">
              <Button
                variant="transparent"
                size="none"
                title={`Delete ${sku.slug}`}
                onClick={deleteCategory}
                className="gap-x-1 font-medium hover:text-rose-500 transition-colors duration-150 group"
              >
                <Icons.trash className="w-5 h-5 text-gray-600 -mt-0.5 group-hover:text-rose-500 transition-colors duration-150" />
                Delete
                <span className="sr-only">Delete {sku.code}</span>
              </Button>
  
              <Link 
                to={`/dashboard/products/skus/${sku.product_id}/${sku?.code}/edit`}
                title={`Edit ${sku.code}`}
                className="flex items-center gap-x-1.5 font-medium hover:underline"
              >
                <Icons.link className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors duration-150" />
                Edit
                <span className="sr-only">Edit SKU</span>
              </Link>
            </div>
          )
        },
    },
];