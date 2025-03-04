import { useState } from "react";

const prescriptions = [
  {
    disease_name: "Dyspepsia",
    chief_complaints: ["Abdominal pain", "Nausea", "Vomiting", "GIT infection"],
    investigation: ["CBC", "X-ray", "Beds check"],
    advice: ["Stop taking unwanted food", "Bed rest"],
    treatment: [
      {
        medicine: "Syp: Entacid",
        generic_name: "Antacid suspension",
        dosage: "3/4 tsf 3 times daily",
      },
      {
        medicine: "Tab. Colicon 10mg",
        generic_name: "Dicycloverine Hydrochloride",
        dosage: "1 tablet 3 times daily",
      },
    ],
    next_visit: "7 days later",
  },
  {
    disease_name: "Typhoid Fever",
    chief_complaints: [
      "High fever",
      "Weakness",
      "Loss of appetite",
      "Abdominal pain",
    ],
    investigation: ["CBC", "Widal test", "Blood culture"],
    advice: ["Drink plenty of fluids", "Take complete rest", "Eat soft diet"],
    treatment: [
      {
        medicine: "Cap: Cefixime 200mg",
        generic_name: "Cefixime",
        dosage: "1 capsule twice daily for 7 days",
      },
      {
        medicine: "Tab: Paracetamol 500mg",
        generic_name: "Paracetamol",
        dosage: "1 tablet every 6 hours as needed",
      },
    ],
    next_visit: "7 days later",
  },
];

const DiseasePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const filteredPrescriptions = prescriptions.filter((prescription) =>
    prescription.disease_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (prescription) => {
    setSelectedPrescription(prescription);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPrescription(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search disease..."
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPrescriptions.map((prescription, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-6 rounded-xl border mb-6 cursor-pointer"
          onClick={() => openModal(prescription)}
        >
          <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-4">
            {prescription.disease_name}
          </h2>
          <p>
            <strong>Chief Complaints:</strong>{" "}
            {prescription.chief_complaints.join(", ")}
          </p>
          <p>
            <strong>Investigation:</strong>{" "}
            {prescription.investigation.join(", ")}
          </p>
          <p>
            <strong>Advice:</strong> {prescription.advice.join(", ")}
          </p>
          <h3 className="font-semibold mt-3">Treatment:</h3>
          <ul className="list-disc pl-5">
            {prescription.treatment.map((treat, i) => (
              <li key={i}>
                <strong>{treat.medicine}</strong> ({treat.generic_name}) -{" "}
                {treat.dosage}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-semibold">
            Next Visit: {prescription.next_visit}
          </p>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && selectedPrescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-xl w-full">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {selectedPrescription.disease_name}
            </h2>
            <p>
              <strong>Chief Complaints:</strong>{" "}
              {selectedPrescription.chief_complaints.join(", ")}
            </p>
            <p>
              <strong>Investigation:</strong>{" "}
              {selectedPrescription.investigation.join(", ")}
            </p>
            <p>
              <strong>Advice:</strong> {selectedPrescription.advice.join(", ")}
            </p>
            <h3 className="font-semibold mt-3">Treatment:</h3>
            <ul className="list-disc pl-5">
              {selectedPrescription.treatment.map((treat, i) => (
                <li key={i}>
                  <strong>{treat.medicine}</strong> ({treat.generic_name}) -{" "}
                  {treat.dosage}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-semibold">
              Next Visit: {selectedPrescription.next_visit}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseasePage;
