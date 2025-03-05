const DietChartPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 relative inline-block after:absolute after:w-2/5 after:h-1 after:left-1/2 after:-translate-x-1/2 after:-bottom-4 after:bg-gradient-to-r from-pink-400 to-purple-500 after:rounded-full">
          Nourish Your Body
        </h2>
        <p className="mt-7 text-lg text-gray-600">
          Discover personalized diet plans for a healthier you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .529.511 1.073 1.239 2.447 1.939 3.965 2.003 1.48.064 2.87.293 4.086.81m-4 .415v5.163a3.001 3.001 0 003 3.002h3"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800">
              General Health
            </h2>
          </div>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <strong>Breakfast:</strong> Oatmeal, fruits, nuts
            </li>
            <li className="mb-2">
              <strong>Lunch:</strong> Grilled chicken, quinoa, veggies
            </li>
            <li className="mb-2">
              <strong>Snack:</strong> Greek yogurt, honey
            </li>
            <li>
              <strong>Dinner:</strong> Baked salmon, broccoli
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800">
              Weight Loss
            </h2>
          </div>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <strong>Breakfast:</strong> Eggs, spinach, avocado
            </li>
            <li className="mb-2">
              <strong>Lunch:</strong> Chicken salad, olive oil
            </li>
            <li className="mb-2">
              <strong>Snack:</strong> Almonds, boiled egg
            </li>
            <li>
              <strong>Dinner:</strong> Tofu stir-fry, veggies
            </li>
          </ul>
        </section>

        <section className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800">
              Diabetes-Friendly
            </h2>
          </div>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <strong>Breakfast:</strong> Whole-grain toast, avocado
            </li>
            <li className="mb-2">
              <strong>Lunch:</strong> Grilled fish, greens
            </li>
            <li className="mb-2">
              <strong>Snack:</strong> Carrot sticks, hummus
            </li>
            <li>
              <strong>Dinner:</strong> Baked chicken, quinoa
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DietChartPage;
