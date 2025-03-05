import { useState } from "react";

const DoctorListPage = () => {
  // State for managing search, doctor list, and selected specialization
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      patients: 20,
      comments: "Great experience!",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialization: "Neurologist",
      patients: 30,
      comments: "Very knowledgeable!",
    },
    {
      id: 3,
      name: "Dr. Alice Brown",
      specialization: "Dermatologist",
      patients: 15,
      comments: "Highly recommended!",
    },
    {
      id: 4,
      name: "Dr. Mark Green",
      specialization: "Orthopedic",
      patients: 50,
      comments: "Excellent care!",
    },
    {
      id: 5,
      name: "Dr. David Lee",
      specialization: "Cardiologist",
      patients: 25,
      comments: "Very helpful!",
    },
    {
      id: 6,
      name: "Dr. Sarah Kim",
      specialization: "Neurologist",
      patients: 35,
      comments: "Amazing doctor!",
    },
    {
      id: 7,
      name: "Dr. Emily White",
      specialization: "Dermatologist",
      patients: 18,
      comments: "Excellent results!",
    },
    {
      id: 8,
      name: "Dr. Robert Black",
      specialization: "Orthopedic",
      patients: 45,
      comments: "Highly skilled!",
    },
  ]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  // Function to handle search input changes
  const handleSearchChange = (e) => setSearch(e.target.value);

  // Function to handle specialization click
  const handleSpecializationClick = (specialization) => {
    setSelectedSpecialization(specialization);
    setSearch(""); // Clear search when a specialization is selected
  };

  // Filtered doctors based on search and specialization
  const filteredDoctors = doctors.filter((doctor) => {
    const searchMatch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase());

    const specializationMatch =
      !selectedSpecialization ||
      doctor.specialization === selectedSpecialization;

    return searchMatch && specializationMatch;
  });

  return (
    <div className="flex mt-10">
      {/* Left Sidebar with doctor types */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Doctor Types</h2>
        <ul>
          <li
            className={`cursor-pointer mb-2 hover:text-blue-600 ${
              selectedSpecialization === null
                ? "text-blue-600 font-semibold"
                : ""
            }`}
            onClick={() => handleSpecializationClick(null)}
          >
            All Doctors
          </li>
          <li
            className={`cursor-pointer mb-2 hover:text-blue-600 ${
              selectedSpecialization === "Cardiologist"
                ? "text-blue-600 font-semibold"
                : ""
            }`}
            onClick={() => handleSpecializationClick("Cardiologist")}
          >
            Cardiologist
          </li>
          <li
            className={`cursor-pointer mb-2 hover:text-blue-600 ${
              selectedSpecialization === "Neurologist"
                ? "text-blue-600 font-semibold"
                : ""
            }`}
            onClick={() => handleSpecializationClick("Neurologist")}
          >
            Neurologist
          </li>
          <li
            className={`cursor-pointer mb-2 hover:text-blue-600 ${
              selectedSpecialization === "Dermatologist"
                ? "text-blue-600 font-semibold"
                : ""
            }`}
            onClick={() => handleSpecializationClick("Dermatologist")}
          >
            Dermatologist
          </li>
          <li
            className={`cursor-pointer mb-2 hover:text-blue-600 ${
              selectedSpecialization === "Orthopedic"
                ? "text-blue-600 font-semibold"
                : ""
            }`}
            onClick={() => handleSpecializationClick("Orthopedic")}
          >
            Orthopedic
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 px-4">
        {/* Search bar at the top */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for doctors..."
            value={search}
            onChange={handleSearchChange}
            className="p-2 w-full border rounded"
          />
        </div>

        {/* Grid layout to display doctors */}
        <div className="grid grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-500">{doctor.specialization}</p>
              <p className="text-sm mt-2">
                <strong>{doctor.patients} Patients</strong>
              </p>
              <p className="text-sm mt-2">
                <strong>Patient Comments:</strong> {doctor.comments}
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorListPage;
