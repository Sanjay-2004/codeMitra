import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const columns = [
  {
    accessorKey: "rank",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rank
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rank = row.getValue("rank");
      return <div className="text-left font-medium">{rank}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-white text-left">Name</div>,
    cell: ({ row }) => {
      const name = row.getValue("name");
      return <div className="text-left">{name}</div>;
    },
  },
  {
    accessorKey: "contests",
    header: () => <div className="text-white text-left">Contests</div>,
    cell: ({ row }) => {
      const contests = row.getValue("contests");
      return <div className="text-left">{contests}</div>;
    },
  },
  {
    accessorKey: "leetcode",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          LC Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const lcRating = row.getValue("leetcode");
      return <div className="text-left ms-10">{lcRating}</div>;
    },
  },
  {
    accessorKey: "codechef",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CC Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const ccRating = row.getValue("codechef");
      return <div className="text-left ms-10">{ccRating}</div>;
    },
  },
  {
    accessorKey: "codeforces",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CF Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const cfRating = row.getValue("codeforces");
      return <div className="text-left ms-10">{cfRating}</div>;
    },
  },
];
