import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import BillCard from "../components/ui/BillCard";
import { ThemeContext } from "../context/ThemeContext";

const Bills = () => {
  const bills = useLoaderData();
  const { theme } = useContext(ThemeContext);

  // states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("none");
  const [page, setPage] = useState(1);

  const billsPerPage = 8;

  let result = bills
    .filter((bill) => bill.title?.toLowerCase().includes(search.toLowerCase()))
    .filter((bill) =>
      category === "all"
        ? true
        : bill.category?.toLowerCase() === category.toLowerCase()
    )
    .filter((bill) => (maxPrice ? bill.amount <= Number(maxPrice) : true));

  if (sort === "low") result.sort((a, b) => a.amount - b.amount);
  if (sort === "high") result.sort((a, b) => b.amount - a.amount);
  if (sort === "date")
    result.sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.ceil(result.length / billsPerPage);
  const startIndex = (page - 1) * billsPerPage;
  const paginatedBills = result.slice(startIndex, startIndex + billsPerPage);

  const bg = theme === "dark" ? "#1F2225" : "#FFFFFF";
  const text = theme === "dark" ? "#FFFFFF" : "#000000";
  return (
    <div className="pt-20 p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Bills</h1>

      {/* SEARCH + FILTERS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search bills..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="border px-3 py-2 rounded"
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="border px-2 py-2 rounded"
          style={{ backgroundColor: bg }}
        >
          <option value="all">All Categories</option>
          <option value="electricity">Electricity</option>
          <option value="water">Water</option>
          <option value="gas">Gas</option>
          <option value="internet">Internet</option>
        </select>

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
            setPage(1);
          }}
          className="border px-3 py-2 rounded"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-2 py-2 rounded"
          style={{ backgroundColor: bg }}
        >
          <option value="none">Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="date">Newest</option>
        </select>
      </div>

      {/* LISTING */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {paginatedBills.length > 0 ? (
          paginatedBills.map((bill) => <BillCard key={bill._id} bill={bill} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No bills found
          </p>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="border px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages).keys()].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n + 1)}
              className={`border px-3 py-1 rounded ${
                page === n + 1 ? "bg-primary text-white" : ""
              }`}
            >
              {n + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="border px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Bills;
