import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactSlider from "react-slider";
import { ChevronDown, ChevronRight } from "lucide-react";
import { menApis, womenApis } from "../constants";

const items = [
  {
    id: 1,
    name: "H&M Shirt",
    price: 19.99,
    size: "M",
    brand: "H&M",
    category: "Tops",
    image:
      "//lp2.hm.com/hmgoepprod?set=source[/19/10/19108b8f7717f2afbeb05c645a5fe6640b961445.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
  },
];

function Shop() {
  let { type } = useParams();

  const [menItems, setMenItems] = useState([]);
  const [womenItems, setWomenItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    category: [],
    price: { min: 0, max: 2000 },
    size: "",
    brand: [],
  });

  const [dropdownVisible, setDropdownVisible] = useState({
    category: false,
    price: false,
    size: false,
    brand: false,
  });

  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const menResponses = await Promise.all(
          menApis.map((api) => fetch(api).then((res) => res.json()))
        );
        const womenResponses = await Promise.all(
          womenApis.map((api) => fetch(api).then((res) => res.json()))
        );
        setMenItems(
          menResponses.flatMap((response) =>
            response.contents ? response.contents : []
          )
        );
        setWomenItems(
          womenResponses.flatMap((response) =>
            response.contents ? response.contents : []
          )
        );
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
      filters.price.min <= item.price &&
      item.price <= filters.price.max &&
      (filters.size ? item.size === filters.size : true) &&
      (filters.brand.length ? filters.brand.includes(item.brand) : true)
    );
  });

  return (
    <div className="pt-20 w-11/12 mx-auto">
      <div>
        <p>Home {"> "} Men</p>
      </div>
      <div className="mb-6">
        <p className="text-xl my-1 font-semibold">Men</p>
        <p className="text-sm">
          Shopping for men's clothes has never been easier! Dive into our online
          store today and explore our diverse range of men's clothing and
          accessories tailored for every style. From timeless basics to modern
          trends, our quality pieces are designed to enhance your wardrobe!
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
                    <p className="text-xl px-2">-</p>
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
              <p className="text-gray-500">Items 1-12 of 200</p>
            </div>

            <div>
              <label for="sorter" className="text-gray-500 mr-2">
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
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 p-4 overflow-hidden"
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
                      className="absolute inset-0 m-auto max-w-none max-h-none transform-gpu"
                    />
                  </div>
                </div>
                <p className="font-semibold truncate">{item.name}</p>
                <p className="text-gray-600 text-sm">
                  ₱ {item.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
