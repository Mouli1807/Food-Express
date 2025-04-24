
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    

  
    return (
    <div >
        {/* header */}
        <div className=" w-full text-center bg-gray-70 shadow-lg p-4  mx-auto cursor-pointer ">
            <div className=" flex justify-between cursor-pointer " onClick={setShowIndex} >
            <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-xl transition-transform duration-300m">⬇️</span>
            </div>
            
      
        </div>
          {/* accordian body */}    
          { showItems && <ItemList items={data.itemCards} />}
      
    </div>
    );
};

export default RestaurantCategory;