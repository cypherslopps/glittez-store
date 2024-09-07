import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { Icons } from "../Icons";
import { Link } from "react-router-dom";
import axios from "axios";

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
        accessorKey: "product",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-semibold"
            >
              Product
              <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
            </Button>
          )
        },
        cell: ({ row }) => {
          const product = row.original;

          return (
            <div className="flex items-center gap-x-2.5 w-[22rem]">
              <figure className="w-36 h-24">
                <img 
                  src={`${product.sku[0].image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </figure>

              <p className="font-normal text-md max-w-52">{product?.name} sfdsfds sfds fdsfds fsfa</p>
            </div>
          )
        }
    },
    {
      accessorKey: "slug",
      header: ({ column }) => {
        return (
          <Button
            variant="transparent"
            size="none"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium"
          >
            Slug
            <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const product = row.original;

        return (
          <span className="block w-32">{product.slug}</span>
        )
      }
  },
    {
        accessorKey: "variation",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium"
            >
              Variation
              <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
            </Button>
          )
        },
        cell: ({ row }) => {
          const product = row.original;

          return (
            <span className="text-lg">{product.sku.length}</span>
          )
        }
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
              <span className="font-semibold font-nunito text-md">${product?.sku[0]?.price}</span>
            )
        },
    },
    {
        accessorKey: "stock",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium"
            >
              Stock
              <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
            </Button>
          )
        },
        cell: ({ row }) => {
          const product = row.original;
    
          return (
            <span className="font-semibold font-nunito text-md">{product?.sku[0]?.quantity}</span>
          )
      },
    },
    {
      accessorKey: "action",
      header: () => {
        return (
          <span className="text-[.78rem] uppercase text-gray-600/85 font-raleway font-medium">Action</span>
        )
      },
      cell: ({ row }) => {
        const product = row.original;

        const deleteCategory = async () => {
          try {
            const request = await axios.delete(`/product/${product.slug}/delete`);
            const response = request.data;
            console.log(response);
            window.location.reload();
          } catch (err) {
            console.log(err);
          }
        } 

        return (
          <div className="flex gap-x-4">
            <Button
              variant="transparent"
              size="none"
              title={`Delete ${product.slug}`}
              onClick={deleteCategory}
              className="gap-x-1 font-medium hover:text-rose-500 transition-colors duration-150 group"
            >
              <Icons.trash className="w-5 h-5 text-gray-600 -mt-0.5 group-hover:text-rose-500 transition-colors duration-150" />
              Delete
              <span className="sr-only">Delete {product.name} Category</span>
            </Button>

            <Link 
              to={`/dashboard/products/${product?.slug}/edit`}
              title={`Edit ${product.slug}`}
              className="flex items-center gap-x-1.5 font-medium hover:underline"
            >
              <Icons.link className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors duration-150" />
              Edit
              <span className="sr-only">Edit Link</span>
            </Link>

            <Link 
              to={`/dashboard/products/${product.slug}`}
              title={`Edit ${product.slug}`}
              className="flex items-center gap-x-1.5 font-medium hover:underline"
            >
              View
              <span className="sr-only">View</span>
            </Link>
          </div>
        )
      },
    },
];