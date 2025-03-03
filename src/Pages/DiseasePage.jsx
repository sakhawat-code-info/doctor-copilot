import { useState } from "react";

const prescriptions = [
  {
    disease_name: "Dyspepsia",
    chief_complaints: ["Abdominal pain", "Nausea", "Vomiting", "GIT infection"],
    investigation: ["CBC", "X-ray", "Beds check"],
    advice: ["Stop taking unwanted food", "Bed rest"],
    treatment: [
      { medicine: "Syp: Entacid", generic_name: "Antacid suspension", dosage: "3/4 tsf 3 times daily" },
      { medicine: "Tab. Colicon 10mg", generic_name: "Dicycloverine Hydrochloride", dosage: "1 tablet 3 times daily" }
    ],
    next_visit: "7 days later"
  },
  {
    disease_name: "Typhoid Fever",
    chief_complaints: ["High fever", "Weakness", "Loss of appetite", "Abdominal pain"],
    investigation: ["CBC", "Widal test", "Blood culture"],
    advice: ["Drink plenty of fluids", "Take complete rest", "Eat soft diet"],
    treatment: [
      { medicine: "Cap: Cefixime 200mg", generic_name: "Cefixime", dosage: "1 capsule twice daily for 7 days" },
      { medicine: "Tab: Paracetamol 500mg", generic_name: "Paracetamol", dosage: "1 tablet every 6 hours as needed" }
    ],
    next_visit: "7 days later"
  }
];


const DiseasePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.disease_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div key={index} className="bg-white shadow-md p-6 rounded-xl border mb-6">
          <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-4">{prescription.disease_name}</h2>
          <p><strong>Chief Complaints:</strong> {prescription.chief_complaints.join(", ")}</p>
          <p><strong>Investigation:</strong> {prescription.investigation.join(", ")}</p>
          <p><strong>Advice:</strong> {prescription.advice.join(", ")}</p>
          <h3 className="font-semibold mt-3">Treatment:</h3>
          <ul className="list-disc pl-5">
            {prescription.treatment.map((treat, i) => (
              <li key={i}>
                <strong>{treat.medicine}</strong> ({treat.generic_name}) - {treat.dosage}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-semibold">Next Visit: {prescription.next_visit}</p>
        </div>
      ))}
    </div>
  );
};

export default DiseasePage;