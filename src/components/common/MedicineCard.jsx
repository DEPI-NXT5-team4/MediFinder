import { Heart, ShoppingCart, Star } from "lucide-react";
import { favContext } from "../../context/favContext";
import { useContext } from "react";
const MedicineCard = ({ name, rating, price, image, id }) => {
    const { addToFav, removeFromFav, isFavored } = useContext(favContext);
    return (
        <div className="bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                />

                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1 sm:gap-2">
                    <button className="w-6 h-6 p-2 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                    >
                        <ShoppingCart className="text-muted-foreground w-8" />
                    </button>
                    <button className="w-6 h-6 p-2 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                        onClick={() => {
                            isFavored(id) ? removeFromFav(id) : addToFav({ id, name, rating, price, image });
                        }}>
                        <Heart className="text-muted-foreground w-8" fill={isFavored(id) ? "red" : ""} />
                    </button>
                </div>
            </div>

            <div className="p-3 sm:p-4">
                <h3 className="text-lg  sm:text-sm font-medium text-foreground mb-2 line-clamp-2">{name}</h3>

                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                        <Star fill={index < rating ? '#fcc900' : '#737373'} key={index} className={`w-4 ${index < rating ? 'text-yellow-400' : 'text-muted-foreground'}`} />
                    ))}
                </div>

                <p className="text-xs font-semibold text-foreground">{price} EGP</p>
            </div>
        </div>
    );
};

export default MedicineCard;