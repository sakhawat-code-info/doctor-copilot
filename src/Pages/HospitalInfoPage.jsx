const HospitalInfoPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
          Hospital Information
        </h2>
      </div>

      <section className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-2xl font-bold">Hospital Details</h2>
        <p className="mt-2">
          <strong>Name:</strong> HealthCare General Hospital
        </p>
        <p>
          <strong>Address:</strong> 1234 Health St, Wellness City
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> contact@healthcarehospital.com
        </p>
      </section>

      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold">Services Offered</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Emergency Care</li>
          <li>Outpatient Services</li>
          <li>Laboratory Tests</li>
          <li>Radiology</li>
          <li>General Surgery</li>
        </ul>
      </section>
    </div>
  );
};

export default HospitalInfoPage;
