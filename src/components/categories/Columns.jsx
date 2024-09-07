import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { Icons } from "../Icons";
import { Link } from "react-router-dom";
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
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="transparent"
              size="none"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="gap-x-1 text-[.78rem] w-max uppercase text-gray-600/85 font-raleway font-medium"
            >
              Name
              <Icons.arrowUpDown className="h-[.8rem] w-[.8rem]" />
            </Button>
          )
        },
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
              <span className="text-center">{product?.slug}</span>
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
          const category = row.original;

          const deleteCategory = async () => {
            try {
              await axios.delete(`/categories/${category.slug}/delete`);
              toast(`${category.name} deleted successfully`);
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
                title={`Delete ${category.slug}`}
                onClick={deleteCategory}
                className="gap-x-1 font-medium hover:text-rose-500 transition-colors duration-150 group"
              >
                <Icons.trash className="w-5 h-5 text-gray-600 -mt-0.5 group-hover:text-rose-500 transition-colors duration-150" />
                Delete
                <span className="sr-only">Delete {category.name} Category</span>
              </Button>

              <Link 
                to={`/dashboard/categories/${category?.slug}/edit`}
                title={`Edit ${category.slug}`}
                className="flex items-center gap-x-1.5 font-medium hover:underline"
              >
                <Icons.link className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors duration-150" />
                Edit
                <span className="sr-only">Edit Link</span>
              </Link>
            </div>
          )
        },
    },
];