import RestuarantCard, { withOpenResLabel } from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmerUI";
import { Link } from "react-router";
import { RESTAURANT_API } from "../utils/constants";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  const [filteredRes, setFilteredRes] = useState([]);

  const IsOpenResLabel = withOpenResLabel(RestuarantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    //optional chainig
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  //shimmer UI
  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    // bodycontent
    <div className="w-[80vw] h-[100vh] my-5 mx-auto">
      <div className="font-['Poppins',_sans-serif]  ">
        <p className="text-[40px]  pt-[10px]">What's on your mind?</p>

        {/* mindcard */}
        <div className="flex flex-row h-[260px] gap-[10px] shadow-[rgba(222,186,244,0.25)_0px_54px_55px,rgba(222,186,244,0.25)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px] border border-[#c6a8ed] p-[20px] m-[10px] box-border">
          <img
            className="h-[200px] w-[200px] transition-transform duration-300 ease-out hover:cursor-pointer hover:scale-110"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
            alt="Biryani"
          />
          <img
            className="h-[200px] w-[200px] transition-transform duration-300 ease-out hover:cursor-pointer hover:scale-110"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
            alt="Pizzas"
          />
          <img
            className="h-[200px] w-[200px] transition-transform duration-300 ease-out hover:cursor-pointer hover:scale-110"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png"
            alt="Burger"
          />
          <img
            className="h-[200px] w-[200px] transition-transform duration-300 ease-out hover:cursor-pointer hover:scale-110"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png"
            alt="North Indian"
          />
          <img
            className="h-[200px] w-[200px] transition-transform duration-300 ease-out hover:cursor-pointer hover:scale-110"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png"
            alt="Chinese"
          />
          <img
            className="h-[200px] w-[200px] transition-transform duration-300 ease-out hover:cursor-pointer hover:scale-110"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png"
            alt="Rolls"
          />
          <img
            className="h-[200px] w-[200px] transition-transform duration-300 ease-out hover:cursor-pointer hover:scale-110"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate%20icecream.png"
            alt="Chocolate Icecream"
          />
        </div>
      </div>

      {/* topres */}
      <div className="w-[80vw] my-5 text-[36px] flex gap-5 items-center border-b-2 border-black ">
        <p className="text-[40px] font-['Poppins',_sans-serif]  ">
          Handpicked Restaurants for Every Craving
        </p>
        <svg
          className="w-[70px] h-[70px]"
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 -24.48 122.88 122.88"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ enableBackground: "new 0 0 122.88 73.91" }}
          xmlSpace="preserve"
        >
          <style type="text/css">
            {`
                        .st0 {
                            fill-rule: evenodd;
                            clip-rule: evenodd;
                        }
                    `}
          </style>
          <g>
            <path
              className="st0"
              d="M97.31,36.95c0,9.92-3.49,18.39-10.48,25.38c-7,7-15.46,10.5-25.38,10.5c-9.88,0-18.34-3.49-25.35-10.5 c-7-6.99-10.52-15.46-10.52-25.38c0-9.89,3.51-18.32,10.52-25.34c7.03-7,15.48-10.52,25.35-10.52c9.92,0,18.38,3.51,25.38,10.52 C93.81,18.63,97.31,27.06,97.31,36.95L97.31,36.95L97.31,36.95L97.31,36.95z M16.37,30.34c3.15-2.15,4.73-4.96,4.46-11.39V2.42 c-0.03-2.31-4.22-2.59-4.43,0l-0.16,13.41c-0.01,2.51-3.78,2.59-3.77,0l0.16-13.87c-0.05-2.48-4.05-2.73-4.1,0 c0,3.85-0.16,10.02-0.16,13.87c0.2,2.43-3.3,2.75-3.21,0L5.32,2.05C5.23,0.18,3.17-0.49,1.77,0.39C0.28,1.34,0.58,3.25,0.52,4.86 L0,20.68c0.08,4.6,1.29,8.34,4.89,9.93c0.55,0.24,1.31,0.43,2.19,0.56L5.84,69.75c-0.07,2.29,1.8,4.16,3.99,4.16h0.5 c2.47,0,4.56-2.11,4.49-4.68l-1.09-38.07C14.88,30.98,15.83,30.71,16.37,30.34L16.37,30.34z M106.74,68.59l-0.06-34.65 c-12.15-7.02-8.28-34.07,3.88-33.92c14.78,0.17,16.53,30.48,3.82,33.81l0.94,34.9C115.5,75.33,106.75,75.94,106.74,68.59 L106.74,68.59z M82.33,36.92c0,5.78-2.03,10.71-6.12,14.8c-4.08,4.07-9.01,6.12-14.79,6.12c-5.74,0-10.67-2.05-14.75-6.12 c-4.08-4.09-6.12-9.02-6.12-14.8c0-5.74,2.04-10.67,6.12-14.74c4.09-4.07,9.01-6.12,14.75-6.12C73.03,16.07,82.33,25.3,82.33,36.92 L82.33,36.92L82.33,36.92z M87.22,36.92c0-7.1-2.5-13.17-7.53-18.2s-11.12-7.53-18.27-7.53c-7.13,0-13.2,2.5-18.2,7.53 c-5.03,5.03-7.56,11.1-7.56,18.2c0,7.12,2.53,13.19,7.56,18.24c5,5.04,11.07,7.57,18.2,7.57c7.14,0,13.23-2.53,18.27-7.57 C84.71,50.1,87.22,44.03,87.22,36.92L87.22,36.92L87.22,36.92L87.22,36.92z"
            />
          </g>
        </svg>
      </div>

      <div className="flex justify-between items-center w-full pb-[50px]">
        <div className="flex items-center gap-[10px]">
          <button
            className="px-5 py-2 bg-[#cfbce6] text-[#492e6b] border-none rounded-[10px] cursor-pointer text-[20px] shadow-[rgba(201,182,220,0.3)_0px_19px_38px,rgba(0,0,0,0.22)_0px_15px_12px]"
            onClick={() => {
              console.log("button");
              const filteredList = listOfRes.filter(
                (restaurants) => restaurants.info.avgRating > 4.5
              );
              setFilteredRes(filteredList);
            }}
          >
            {" "}
            Top rated restauarants{" "}
          </button>

          <button
            className="px-5 py-2 bg-[#cfbce6] text-[#492e6b] border-none rounded-[10px] cursor-pointer text-[20px] shadow-[rgba(201,182,220,0.3)_0px_19px_38px,rgba(0,0,0,0.22)_0px_15px_12px]"
            onClick={() => {
              const fastDeliveryList = listOfRes.filter(
                (restaurants) => restaurants.info.sla.deliveryTime < 30
              );
              setFilteredRes(fastDeliveryList);
            }}
          >
            {" "}
            Fast Delivery{" "}
          </button>
        </div>

        <div className="flex items-center h-[40px] w-[320px] bg-white rounded-[25px]   ">
          <div className="relative w-[400px]">
            <input
              type="text"
              className="w-full pr-[35px] pl-[10px] py-[5px] border border-black rounded-[5px] focus:outline-none focus:border-[#492e6b]"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="absolute right-[10px] top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
              onClick={() => {
                console.log(searchText);

                // Filter the list of restaurants based on the search text
                const filteredRes = listOfRes.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );

                // Update the restaurant list with the filtered results
                setFilteredRes(filteredRes);
              }}
            >
              <img
                src="https://www.svgrepo.com/show/7109/search.svg"
                alt="search icon"
                className="w-[20px] h-[20px] cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>

      {/* rescontainer */}
      <div className="h-[500px] gap-[20px] flex flex-wrap flex-row justify-evenly">
        {filteredRes.map((restaurant) => (
          <Link
            className="custom-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <IsOpenResLabel resData={restaurant} />
            ) : (
              <RestuarantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
