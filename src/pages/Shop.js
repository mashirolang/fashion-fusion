import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactSlider from "react-slider";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ChevronRight as ChevronNext,
} from "lucide-react";

function Shop() {
  let { type } = useParams();

  const [menItems, setMenItems] = useState([]);
  const [items, setItems] = useState([]);
  const [womenItems, setWomenItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    category: [],
    price: { min: 0, max: 2000 },
    size: "",
    brand: [],
  });

  const [dropdownVisible, setDropdownVisible] = useState({
    category: true,
    price: true,
    size: true,
    brand: true,
  });

  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const menResponses = await fetch(
          "https://fashion-fusion-api-ng16.onrender.com/api/men"
        ).then((x) => x.json());
        const womenResponses = await fetch(
          "https://fashion-fusion-api-ng16.onrender.com/api/women"
        ).then((x) => x.json());

        const menSeperated = [];
        const womenSeperated = [];

        const categories = ["Tops", "Bottoms", "Underwear", "Accessories"];
        const brands = ["H&M", "Bench", "Oxgn", "Penshoppe", "Uniqlo"];

        const getRandomBrand = () =>
          brands[Math.floor(Math.random() * brands.length)];

        // Assuming menResponses and womenResponses are arrays of arrays
        for (let col = 0; col < menResponses[0].length; col++) {
          for (let row = 0; row < menResponses.length; row++) {
            const item = {
              ...menResponses[row][col],
              category: categories[row],
              brand: getRandomBrand(),
            };
            menSeperated.push(item);
          }
        }

        for (let col = 0; col < womenResponses[0].length; col++) {
          for (let row = 0; row < womenResponses.length; row++) {
            const item = {
              ...womenResponses[row][col],
              category: categories[row],
              brand: getRandomBrand(),
            };
            womenSeperated.push(item);
          }
        }

        setMenItems(menSeperated);
        setWomenItems(womenSeperated);

        if (type == "men") {
          setItems(menSeperated);
        } else if (type == "women") {
          setItems(womenSeperated);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDropdownToggle = (dropdown) => {
    setDropdownVisible({
      ...dropdownVisible,
      [dropdown]: !dropdownVisible[dropdown],
    });
  };

  const handleCheckboxChange = (filter, value) => {
    setFilters((prevFilters) => {
      const currentFilterValues = prevFilters[filter];
      if (currentFilterValues.includes(value)) {
        return {
          ...prevFilters,
          [filter]: currentFilterValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prevFilters,
          [filter]: [...currentFilterValues, value],
        };
      }
    });
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSliderChange = (values) => {
    setPriceRange({ min: values[0], max: values[1] });
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  const applyPriceFilter = () => {
    setFilters({
      ...filters,
      price: priceRange,
    });
  };

  const filteredItems = items.filter((item) => {
    return (
      (filters.category.length
        ? filters.category.includes(item.category)
        : true) &&
      filters.price.min <= parseFloat(item.price.replace("PHP", "")) &&
      parseFloat(item.price.replace("PHP", "")) <= filters.price.max &&
      (filters.brand.length ? filters.brand.includes(item.brand) : true)
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  console.log(items);

  return (
    <div className="pt-20 w-11/12 mx-auto">
      <div>
        <p>
          Home {"> "} {type == "men" && "Men"} {type == "women" && "Women"}
        </p>
      </div>
      <div className="mb-6">
        <p className="text-xl my-1 font-semibold">
          {type == "men" && "Men"} {type == "women" && "Women"}
        </p>
        <p className="text-sm">
          {type == "men" &&
            "Shopping for men's clothes has never been easier! Dive into our online store today and explore our diverse range of men's clothing and accessories tailored for every style. From timeless basics to modern trends, our quality pieces are designed to enhance your wardrobe!"}
          {type == "women" &&
            "Welcome to our haven for women's fashion! Discover the latest trends and timeless styles in our curated collection of women's clothing and accessories. Explore chic tops, stylish dresses, and more to add a touch of glamour to your closet. Shop now and express your unique style with our quality, fashion-forward pieces!"}
        </p>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 pr-4">
          <div>
            <div className="mb-4 border-b-[1px] border-gray-700 py-2">
              <p className="font-semibold">Shop By</p>
            </div>
            <div className="mb-4 border-b-[1px] border-gray-300 py-2">
              <div
                onClick={() => handleDropdownToggle("category")}
                className="cursor-pointer text-sm flex justify-between items-center"
              >
                <span>Category</span>
                {dropdownVisible.category ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
              {dropdownVisible.category && (
                <div className="mt-2">
                  {["Tops", "Bottoms", "Underwear", "Accessories"].map(
                    (cat) => (
                      <div key={cat}>
                        <input
                          type="checkbox"
                          id={cat}
                          name="category"
                          value={cat}
                          onChange={() => handleCheckboxChange("category", cat)}
                          checked={filters.category.includes(cat)}
                        />
                        <label htmlFor={cat} className="ml-2 text-sm">
                          {cat}
                        </label>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="mb-4 border-b-[1px] border-gray-300 py-2">
              <div
                onClick={() => handleDropdownToggle("price")}
                className="cursor-pointer text-sm flex justify-between items-center"
              >
                <span>Price</span>
                {dropdownVisible.price ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
              {dropdownVisible.price && (
                <div className="mt-2 flex flex-col">
                  <ReactSlider
                    className="horizontal-slider mb-2"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    thumbActiveClassName="example-track-1"
                    value={[priceRange.min, priceRange.max]}
                    min={0}
                    max={2000}
                    onChange={handleSliderChange}
                  />
                  <div className="flex flex-row">
                    <div className="flex items-center mb-2">
                      <p className="text-sm pr-2">₱ </p>
                      <input
                        type="number"
                        id="minPrice"
                        name="min"
                        value={priceRange.min}
                        onChange={handlePriceRangeChange}
                        className="border px-1 w-16"
                        min="0"
                        max="2000"
                      />
                    </div>
                    <p className="text-sm px-2">-</p>
                    <div className="flex items-center mb-2">
                      <input
                        type="number"
                        id="maxPrice"
                        name="max"
                        value={priceRange.max}
                        onChange={handlePriceRangeChange}
                        className="border px-1 w-16"
                        min="0"
                        max="2000"
                      />
                    </div>
                  </div>
                  <button
                    onClick={applyPriceFilter}
                    className="bg-white text-black px-4 py-1 mt-1 border-black border-[1px] hover:bg-black hover:text-white text-sm"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
            <div className="mb-4 border-b-[1px] border-gray-300 py-2">
              <div
                onClick={() => handleDropdownToggle("size")}
                className="cursor-pointer text-sm flex justify-between items-center"
              >
                <span>Size</span>
                {dropdownVisible.size ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
              {dropdownVisible.size && (
                <div className="mt-2">
                  {["S", "M", "L"].map((size) => (
                    <div key={size}>
                      <input
                        type="radio"
                        id={size}
                        name="size"
                        value={size}
                        onChange={handleFilterChange}
                        checked={filters.size === size}
                      />
                      <label htmlFor={size} className="ml-2 text-sm">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mb-4 border-b-[1px] border-gray-300 py-2">
              <div
                onClick={() => handleDropdownToggle("brand")}
                className="cursor-pointer text-sm flex justify-between items-center"
              >
                <span>Brand</span>
                {dropdownVisible.brand ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
              {dropdownVisible.brand && (
                <div className="mt-2">
                  {["H&M", "Bench", "Oxgn", "Penshoppe", "Uniqlo"].map(
                    (brand) => (
                      <div key={brand}>
                        <input
                          type="checkbox"
                          id={brand}
                          name="brand"
                          value={brand}
                          onChange={() => handleCheckboxChange("brand", brand)}
                          checked={filters.brand.includes(brand)}
                        />
                        <label htmlFor={brand} className="ml-2 text-sm">
                          {brand}
                        </label>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex flex-row justify-between items-center border-[1px] border-gray-300 py-4 px-3 mb-4 text-sm">
            <div>
              <p className="text-gray-500">
                Items {(currentPage - 1) * itemsPerPage + 1}-
                {Math.min(currentPage * itemsPerPage, filteredItems.length)} of{" "}
                {filteredItems.length}
              </p>
            </div>

            <div>
              <label htmlFor="sorter" className="text-gray-500 mr-2">
                Sort By
              </label>
              <select id="sorter" className="p-1 border-[1px] border-gray-300">
                <option value="position" selected="selected">
                  Latest Arrival
                </option>
                <option value="price_high_to_low"> Price High To Low</option>
                <option value="price_low_to_high"> Price Low To High</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {paginatedItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 overflow-hidden"
              >
                <Link
                  to={`/details/${item.details.replace(
                    "https://shop.bench.com.ph/",
                    ""
                  )}`}
                >
                  <div className="relative overflow-hidden cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full transition-transform duration-300 transform-gpu hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 m-auto max-w-[150%] max-h-[150%] transform-gpu"
                      />
                    </div>
                  </div>
                </Link>
                <Link
                  to={`/details/${item.details.replace(
                    "https://shop.bench.com.ph/",
                    ""
                  )}`}
                >
                  <p className="font-semibold truncate mt-2 hover:text-red-500 cursor-pointer">
                    {item.name}
                  </p>
                </Link>
                <div className="flex flex-row gap-1">
                  <p className="text-gray-600 text-sm">{item.price}</p>
                  <p className="text-red-600 text-xs line-through">
                    {item.oldPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 items-center">
            <button
              onClick={handlePreviousPage}
              className={`px-4 py-2 mx-1 border ${
                currentPage === 1 ? "bg-gray-300" : "bg-white"
              }`}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </button>
            {Array.from({ length: Math.min(totalPages, 3) }, (_, index) => (
              <button
                key={Math.max(1, currentPage - 1) + index}
                onClick={() =>
                  handlePageChange(Math.max(1, currentPage - 1) + index)
                }
                className={`px-4 py-2 mx-1 border ${
                  currentPage === Math.max(1, currentPage - 1) + index
                    ? "bg-gray-300"
                    : "bg-white"
                }`}
              >
                {Math.max(1, currentPage - 1) + index}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className={`px-4 py-2 mx-1 border ${
                currentPage === totalPages ? "bg-gray-300" : "bg-white"
              }`}
              disabled={currentPage === totalPages}
            >
              <ChevronNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
