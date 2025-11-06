import { useState } from "react";
import { Search, X } from "lucide-react";

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  size: string;
  priceRange: string;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [search, setSearch] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const categories = [
    { value: "", label: "All Categories" },
    { value: "Signature Bouquet", label: "Signature Bouquet" },
    { value: "Customer Creations", label: "Customer Creations" },
    { value: "Beyond Bouquet", label: "Beyond Bouquet" },
  ];

  const sizes = [
    { value: "", label: "All Sizes" },
    { value: "Mini", label: "Mini" },
    { value: "Standard", label: "Standard" },
    { value: "Big", label: "Big" },
  ];

  const priceRanges = [
    { value: "", label: "All Prices" },
    { value: "250-500", label: "₱250 - ₱500" },
    { value: "501-1000", label: "₱501 - ₱1,000" },
    { value: "1001-2000", label: "₱1,001 - ₱2,000" },
  ];

  const handleSearchChange = (value: string) => {
    setSearch(value);
    applyFilters({ search: value });
  };

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
    applyFilters({ size: value });
  };

  const handlePriceRangeChange = (value: string) => {
    setSelectedPriceRange(value);
    applyFilters({ priceRange: value });
  };

  const applyFilters = (updates: Partial<FilterState>) => {
    onFilterChange({
      search: updates.search ?? search,
      size: updates.size ?? selectedSize,
      priceRange: updates.priceRange ?? selectedPriceRange,
    });
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedSize("");
    setSelectedPriceRange("");
    onFilterChange({
      search: "",
      size: "",
      priceRange: "",
    });
  };

  const hasActiveFilters =
    search || selectedSize || selectedPriceRange;

  return (
    <div className="mt-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by title or description..."
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
        />
      </div>

      {/* Dropdowns */}
      <div className="flex sm:flex-row gap-2 mb-4">
        {/* Size Dropdown */}
        <select
          value={selectedSize}
          onChange={(e) => handleSizeChange(e.target.value)}
          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent bg-white cursor-pointer"
        >
          {sizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>

        {/* Price Range Dropdown */}
        <select
          value={selectedPriceRange}
          onChange={(e) => handlePriceRangeChange(e.target.value)}
          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent bg-white cursor-pointer"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
            title="Clear all filters"
          >
            <X className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        )}
      </div>
    </div>
  );
}
