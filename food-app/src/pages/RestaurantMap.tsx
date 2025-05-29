import { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./restaurant.css"; // Import CSS
import MapView from "../components/MapView";

interface Restaurant {
  name: string;
  address: string;
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  user_ratings_total: number;
  price_level: number | string;
  photo_url: string;
}

const RestaurantMap: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://verygay.world:3001/find_restaurants")
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error("Unexpected data format:", data);
          return;
        }

        const updatedData = data.map((restaurant: any): Restaurant => ({
          name: restaurant.name,
          address: restaurant.vicinity,
          business_status: restaurant.business_status,
          geometry: restaurant.geometry,
          rating: restaurant.rating,
          user_ratings_total: restaurant.user_ratings_total,
          price_level: restaurant.price_level ?? "N/A",
          photo_url: restaurant.photos?.[0]?.photo_reference
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=YOUR_GOOGLE_API_KEY`
            : "/default-restaurant.jpg",
        }));

        setRestaurants(updatedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="top-nav-container">
        <TopNav />
      </div>

      <div className="container mt-4">
        <h2 className="mb-4 text-center">Nearby Restaurants</h2>

        {restaurants.length === 0 
        ? ( //put map component with hard-coded values here
        <> 
          <div className="text-center text-white">No restaurants found from API. Here are some common locations while we fix the bug:</div>
          <main className="map-container">
            <MapView />
          </main>
        </>
        ) 
        : ( //if the api works and its scraped values are returned
          <div className="row">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card restaurant-card">
                  <img src={restaurant.photo_url} alt={restaurant.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text text-muted">{restaurant.address}</p>
                    <p className="mb-1">
                      <strong>Rating:</strong> ⭐ {restaurant.rating} ({restaurant.user_ratings_total} reviews)
                    </p>
                    <p className="mb-1">
                      <strong>Price Level:</strong> {restaurant.price_level}
                    </p>
                    <p className={`status ${restaurant.business_status.toLowerCase()}`}>
                      <strong>Status:</strong> {restaurant.business_status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantMap;

