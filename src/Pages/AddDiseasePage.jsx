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
    <div className="mt-10 p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
          Add Disease
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block font-semibold">Disease Name</label>
        <input
          type="text"
          name="disease_name"
          placeholder="Enter Disease Name"
          value={disease.disease_name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <label className="block font-semibold">Chief Complaints</label>
        <input
          type="text"
          name="chief_complaints"
          placeholder="Comma separated values"
          value={disease.chief_complaints}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <label className="block font-semibold">Investigation</label>
        <input
          type="text"
          name="investigation"
          placeholder="Comma separated values"
          value={disease.investigation}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <label className="block font-semibold">Advice</label>
        <input
          type="text"
          name="advice"
          placeholder="Comma separated values"
          value={disease.advice}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <label className="block font-semibold">Treatment</label>
        <input
          type="text"
          name="treatment"
          placeholder="Comma separated values"
          value={disease.treatment}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <label className="block font-semibold">Next Visit</label>
        <input
          type="text"
          name="next_visit"
          placeholder="Enter Next Visit Date"
          value={disease.next_visit}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDiseasePage;
