import { useState } from "react";

const AddDiseasePage = () => {
  const [disease, setDisease] = useState({
    disease_name: "",
    chief_complaints: "",
    investigation: "",
    advice: "",
    treatment: "",
    next_visit: "",
  });

  const handleChange = (e) => {
    setDisease({ ...disease, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(disease);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Disease</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="disease_name"
          placeholder="Disease Name"
          value={disease.disease_name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="chief_complaints"
          placeholder="Chief Complaints (comma separated)"
          value={disease.chief_complaints}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="investigation"
          placeholder="Investigation (comma separated)"
          value={disease.investigation}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="advice"
          placeholder="Advice (comma separated)"
          value={disease.advice}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="treatment"
          placeholder="Treatment (comma separated)"
          value={disease.treatment}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="next_visit"
          placeholder="Next Visit"
          value={disease.next_visit}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDiseasePage;
