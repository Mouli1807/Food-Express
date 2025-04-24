import { useState } from "react";
import { useParams } from "react-router";
import {useRestuarantMenu} from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestuarantCategory";
import Shimmer from "./shimmerUI";


const RestuarantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestuarantMenu(resId);

    const [showIndex , setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    
    console.log(itemCards);

    const categories = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);
  
    return (
    <div className=" text-center w-[80vh] h-[80vh] my-[10px] mx-auto p-[20px] bg-white  ">
        <h1 className="font-bold text-[50px] m-4 ">{name}</h1>
        <p className="text-2xl " >{cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.length > 0 ? (
                categories.map((category, index) => (
                    <RestaurantCategory 
                    key={category?.card?.card.title}
                    data={category?.card?.card} 
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}

                    // showItems={index === showIndex ? true : false} 
                    // setShowIndex={()=> setShowIndex(index)}    
                    />

                ))
            ) : (
                <p>No categories found.</p> 
            )}
            
    </div>
 

  );
};

export default RestuarantMenu;