import { useState } from 'react';

const AmbulanceNearMePage = () => {
  const [location, setLocation] = useState('');
  const [ambulances, setAmbulances] = useState([]);

  const handleSearch = () => {
    // Fetch ambulance data based on location (this could be a real API request)
    // For now, let's simulate it with mock data:
    const mockData = [
      { id: 1, name: 'City Ambulance', phone: '123-456-7890', distance: '2 km' },
      { id: 2, name: 'Emergency Response', phone: '987-654-3210', distance: '5 km' },
      { id: 3, name: 'Quick Help Ambulance', phone: '555-666-7777', distance: '3 km' },
    ];

    setAmbulances(mockData); // In a real case, you'd filter based on `location`
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Find Ambulance Near You</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </div>

      {ambulances.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold">Nearby Ambulances</h2>
          <ul className="mt-2">
            {ambulances.map((ambulance) => (
              <li key={ambulance.id} className="bg-white p-4 rounded shadow-md mb-4">
                <h3 className="font-semibold">{ambulance.name}</h3>
                <p><strong>Phone:</strong> {ambulance.phone}</p>
                <p><strong>Distance:</strong> {ambulance.distance}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AmbulanceNearMePage;
