import { useState } from "react";

const DoctorListPage = () => {
  // State for managing search, doctor list, selected specialization, and modal visibility
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      patients: 20,
      comments: "Great experience!",
      available: ["Friday", "Saturday", "Sunday"],
      startTime: "7.00 pm",
      endTime: "10.00 pm",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialization: "Neurologist",
      patients: 30,
      comments: "Very knowledgeable!",
      available: ["Friday", "Saturday", "Sunday"],
      startTime: "10.00 am",
      endTime: "1.00 pm",
    },
    {
      id: 3,
      name: "Dr. Alice Brown",
      specialization: "Dermatologist",
      patients: 15,
      comments: "Highly recommended!",
      available: ["Friday", "Saturday", "Sunday"],
      startTime: "9.00 am",
      endTime: "12.00 pm",
    },
    {
      id: 4,
      name: "Dr. Mark Green",
      specialization: "Orthopedic",
      patients: 50,
      comments: "Excellent care!",
      available: ["Friday", "Saturday", "Sunday"],
      startTime: "3.00 pm",
      endTime: "6.00 pm",
    },
    {
      id: 5,
      name: "Dr. David Lee",
      specialization: "Cardiologist",
      available: ["Friday", "Saturday", "Sunday"],
      patients: 25,
      comments: "Very helpful!",
      startTime: "7.00 pm",
      endTime: "10.00 pm",
    },
    {
      id: 6,
      name: "Dr. Sarah Kim",
      specialization: "Neurologist",
      patients: 35,
      comments: "Amazing doctor!",
      available: ["Friday", "Saturday", "Sunday"],
      startTime: "8.00 am",
      endTime: "11.00 am",
    },
    {
      id: 7,
      name: "Dr. Emily White",
      specialization: "Dermatologist",
      patients: 18,
      comments: "Excellent results!",
      available: ["Friday", "Saturday", "Sunday"],
      startTime: "9.00 am",
      endTime: "12.00 pm",
    },
    {
      id: 8,
      name: "Dr. Robert Black",
      specialization: "Orthopedic",
      patients: 45,
      comments: "Highly skilled!",
      available: ["Friday", "Saturday", "Sunday"],
      startTime: "1.00 pm",
      endTime: "4.00 pm",
    },
  ]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State for selected doctor

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const generateTimeSlots = (startTime, endTime) => {
    const timeSlots = [];
    let currentTime = startTime;

    while (currentTime <= endTime) {
      timeSlots.push(currentTime);
      const [hours, minutes] = currentTime.split(":");
      let nextMinutes = parseInt(minutes, 10) + 30;
      let nextHours = parseInt(hours, 10);

      if (nextMinutes >= 60) {
        nextHours++;
        nextMinutes -= 60;
      }

      currentTime = `${String(nextHours).padStart(2, "0")}:${String(
        nextMinutes
      ).padStart(2, "0")}`;
    }

    return timeSlots;
  };

  // Function to handle search input changes
  const handleSearchChange = (e) => setSearch(e.target.value);

  // Function to handle specialization click
  const handleSpecializationClick = (specialization) => {
    setSelectedSpecialization(specialization);
    setSearch(""); // Clear search when a specialization is selected
  };

  // Function to handle booking appointment
  const shoWBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setModalOpen(true); // মডাল ওপেন করবে
  };
  const handleBookAppointment = () => {
    console.log("Booking Details:", {
      // doctor: doctor.name, // এখানে selectedDoctor.name ছিল, যেটা সেট হওয়ার আগেই এক্সেস করা হচ্ছিল
      day: selectedDay,
      time: selectedTime,
      date: selectedDate,
    }); // মডাল ওপেন করবে
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
    <div>
      <div className="text-center my-10">
        <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
          Top Doctors at BD
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row mt-10">
        {/* Left Sidebar with doctor types */}
        <div className="lg:w-1/4 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Doctor Types</h2>
          <ul>
            {[
              "All Doctors",
              "Cardiologist",
              "Neurologist",
              "Dermatologist",
              "Orthopedic",
            ].map((specialization) => (
              <li
                key={specialization}
                className={`cursor-pointer mb-3 hover:text-blue-600 ${
                  selectedSpecialization === specialization
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
                onClick={() =>
                  handleSpecializationClick(
                    specialization === "All Doctors" ? null : specialization
                  )
                }
              >
                {specialization}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 px-6">
          {/* Search bar at the top */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for doctors..."
              value={search}
              onChange={handleSearchChange}
              className="p-3 w-full border rounded-lg shadow-md focus:outline-none"
            />
          </div>

          {/* Grid layout to display doctors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.specialization}</p>
                <div className="mt-3 flex space-x-2">
                  {(doctor.available || []).map((day) => (
                    <span
                      key={day}
                      className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs"
                    >
                      {day.substring(0, 3)}
                    </span>
                  ))}
                </div>
                <p className="text-sm mt-3">
                  <strong>{doctor.patients} Patients</strong>
                </p>
                <p className="text-sm mt-2">
                  <strong>Patient Comments:</strong> {doctor.comments}
                </p>
                <p className="text-sm mt-2">
                  <strong>Consultation Time:</strong> {doctor.startTime} -{" "}
                  {doctor.endTime}
                </p>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
                  onClick={() => shoWBookAppointment(doctor)}
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Booking Appointment */}
        {modalOpen && selectedDoctor && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-1/3">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Book Appointment
              </h2>
              <p>
                <strong>Doctor:</strong> {selectedDoctor.name}
              </p>
              <p>
                <strong>Degree:</strong> {selectedDoctor.degree}
              </p>
              <p>
                <strong>Specialization:</strong> {selectedDoctor.specialization}
              </p>
              <p>
                <strong>Chamber Location:</strong>{" "}
                {selectedDoctor.chamberLocation}
              </p>

              {/* Available Days (Selectable) */}

              <div className="flex items-center">
                <h1 className="mr-10 mt-10">
                  <strong>Available days</strong>
                </h1>
                <div className="mb-4 mt-10">
                  {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Day:
                </label> */}
                  <div className="flex space-x-3">
                    {selectedDoctor.available.map((day) => (
                      <label
                        key={day}
                        className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          selectedDay === day
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100"
                        }`}
                      >
                        <input
                          type="radio"
                          name="availableDay"
                          value={day}
                          checked={selectedDay === day}
                          onChange={() => setSelectedDay(day)}
                          className="hidden"
                        />
                        {day.substring(0, 3)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="mt-4">
                  <label htmlFor="appointmentDate">Select Date:</label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="appointmentTime">Select Time:</label>
                  <input
                    type="time"
                    id="appointmentTime"
                    name="appointmentTime"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                  onClick={() => {
                    // console.log({
                    //   doctor: selectedDoctor.name,
                    //   degree: selectedDoctor.degree,
                    //   chamberLocation: selectedDoctor.chamberLocation,
                    //   availableDays: Array.from(
                    //     document.querySelector("#appointmentDays")
                    //       .selectedOptions
                    //   ).map((option) => option.value),
                    //   appointmentTime:
                    //     document.querySelector("#appointmentTime").value,
                    //   appointmentDate:
                    //     document.querySelector("#appointmentDate").value,
                    // });
                    setModalOpen(false);
                    handleBookAppointment();
                  }}
                >
                  Book
                </button>
                <button
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorListPage;
