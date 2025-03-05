import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FaPhoneAlt } from "react-icons/fa"; // Import call icon

const hospitals = [
  {
    id: 1,
    name: "HealthCare General Hospital",
    address: "Mirpur, Dhaka",
    phone: "(123) 456-7890",
    email: "contact@healthcarehospital.com",
    location: { lat: 23.8103, lng: 90.4125 }, // Mirpur Location
  },
  {
    id: 2,
    name: "City Medical Center",
    address: "Komlapur, Dhaka",
    phone: "(987) 654-3210",
    email: "info@citymedical.com",
    location: { lat: 23.7333, lng: 90.4167 }, // Komlapur Location
  },
  {
    id: 3,
    name: "Sunrise Hospital",
    address: "Uttara, Dhaka",
    phone: "(555) 123-4567",
    email: "support@sunrisehospital.com",
    location: { lat: 23.876, lng: 90.3792 }, // Uttara Location
  },
  {
    id: 4,
    name: "Rajbari Hospital",
    address: "Rajbari, Dhaka",
    phone: "(555) 123-4567",
    email: "support@sunrisehospital.com",
    location: { lat: 23.876, lng: 90.3792 }, // Uttara Location
  },
  {
    id: 5,
    name: "Rajbari Dental",
    address: "Rajbari, Dhaka",
    phone: "(555) 123-4567",
    email: "support@sunrisehospital.com",
    location: { lat: 23.876, lng: 90.3792 }, // Uttara Location
  },
];

const HospitalInfoPage = () => {
  const [searchLocation, setSearchLocation] = useState("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Vite env variable
  });

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.address.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search Input */}
      <div className="text-center mb-6">
        <input
          type="text"
          placeholder="Search by location (e.g., Rajbari)"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
      </div>

      {/* Hospital List */}
      {filteredHospitals.length > 0 ? (
        filteredHospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="bg-white p-6 rounded shadow-md mb-4"
          >
            <div className="grid grid-cols-3 gap-4 items-center">
              {/* Left - Hospital Info (বড় করা হয়েছে) */}
              <div className="col-span-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {hospital.name}
                </h2>
                <p className="text-gray-600 text-lg mt-1">{hospital.address}</p>
                <p className="text-gray-500 mt-1">{hospital.email}</p>
              </div>

              {/* Middle - Google Map */}
              <div className="h-48 w-full col-span-1">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={hospital.location}
                    zoom={15}
                  >
                    <Marker position={hospital.location} />
                  </GoogleMap>
                ) : (
                  <p>Loading Map...</p>
                )}
              </div>

              {/* Right - Contact (Emergency Contact Label যোগ করা হয়েছে) */}
              <div className="col-span-1 text-right">
                <p className="text-sm text-red-500 font-semibold">
                  Emergency Contact Number
                </p>
                <p className="text-xl font-bold text-gray-900 flex items-center justify-end">
                  <FaPhoneAlt className="mr-2 text-green-500" />{" "}
                  {hospital.phone}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No hospitals found in this location.
        </p>
      )}
    </div>
  );
};

export default HospitalInfoPage;
