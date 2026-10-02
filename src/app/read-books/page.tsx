
"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { read } from "fs";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Label,
  type BarShapeProps,
  type LabelProps,
} from "recharts";

const ReadBooks = () => {
    const {readBooks} = useContext(BooksContext);



  // Chart data
  const data = readBooks.map((book:IBook,index:number) => {
  return {
    name:book.bookName,
    uv:book.totalPages,
    pv:index + 1,
    amt:index + 1
  }
})
  

  

    const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "black",
  ];

  // Custom shape path
  const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    return `
      M${x},${y + height}
      C${x + width / 3},${y + height}
      ${x + width / 2},${y + height / 3}
      ${x + width / 2},${y}

      C${x + width / 2},${y + height / 3}
      ${x + (2 * width) / 3},${y + height}
      ${x + width},${y + height}

      Z
    `;
  };

  // Custom bar
  const TriangleBar = (props: BarShapeProps) => {
    const {
      x,
      y,
      width,
      height,
      index,
    } = props;

    const color =
      colors[(index ?? 0) % colors.length];

    return (
      <path
        d={getPath(
          Number(x),
          Number(y),
          Number(width),
          Number(height)
        )}
        fill={color}
        stroke={color}
        strokeWidth={props.isActive ? 5 : 0}
      />
    );
  };

  // Custom label
  const CustomColorLabel = (
    props: LabelProps
  ) => {
    const fill =
      colors[(props.index ?? 0) % colors.length];

    return (
      <Label
        {...props}
        fill={fill}
      />
    );
  };

  return (
    <div className="container mx-auto my-10 px-4">

      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">
          Read Books
        </h1>

        <p className="mt-2 text-gray-500">
          Your reading statistics
        </p>
      </div>

      {/* Chart */}
      <div className="w-full overflow-x-auto rounded-2xl bg-base-100 p-5 shadow-lg">

        {readBooks.length > 0 ? 
            <BarChart
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "500px",
            margin: "0 auto",
          }}
          responsive
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid />

          <XAxis dataKey="name" />

          <YAxis width="auto" />

          <Tooltip
            cursor={{
              fillOpacity: 0.1,
            }}
          />

          <Bar
            dataKey="uv"
            shape={TriangleBar}
            activeBar
          >
            <LabelList
              dataKey="uv"
              content={CustomColorLabel}
              position="top"
            />
          </Bar>
        </BarChart>
        : <p className="text-center font-bold text-4xl">No Read  books read yet.</p>
    }

      </div>
    </div>
  );
};

export default ReadBooks;

