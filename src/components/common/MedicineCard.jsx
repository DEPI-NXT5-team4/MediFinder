import { Heart, ShoppingCart, Star } from "lucide-react";
import { useFav } from "../../context/useFav";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MedicineCard = ({ name, rating, price, image, id }) => {
    const { user, addToFav, removeFromFav, isFavored, addToCart } = useFav();
    const navigate = useNavigate();

    const handleAddToFav = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        isFavored(id) ? removeFromFav(id) : addToFav({ id, name, rating, price, image });
    };

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        addToCart({ id, name, rating, price, image });
    };

    return (
        <div className="bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="relative">
                 <Link to={`/medicine/${id}`}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                />
</Link>
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1 sm:gap-2">
                    <button 
                        className="w-6 h-6 p-2 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                        onClick={handleAddToCart}
                        title={user ? "Add to cart" : "Login to add to cart"}
                    >
                        <ShoppingCart className="text-muted-foreground w-4 h-4" />
                    </button>
                    <button 
                        className="w-6 h-6 p-2 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                        onClick={handleAddToFav}
                        title={user ? "Add to favorites" : "Login to add to favorites"}
                    >
                        <Heart 
                            className="text-muted-foreground w-4 h-4" 
                            fill={isFavored(id) ? "red" : ""} 
                        />
                    </button>
                </div>
            </div>

            <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-sm font-medium text-foreground mb-2 line-clamp-2">{name}</h3>

                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                        <Star 
                            fill={index < rating ? '#fcc900' : '#737373'} 
                            key={index} 
                            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-muted-foreground'}`} 
                        />
                    ))}
                </div>

                <p className="text-xs font-semibold text-foreground">{price} EGP</p>
                <Link
                 to={`/compare?id=${id}`}
                 className="block mt-2 text-xs text-blue-700 underline hover:text-blue-900"
                >
                 Compare Prices
                </Link>

            </div>
        </div>
    );
};

export default MedicineCard;