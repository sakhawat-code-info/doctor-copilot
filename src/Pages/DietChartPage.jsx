

const DietChartPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Diet Chart</h1>

      <section className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-2xl font-bold">General Health Diet</h2>
        <ul className="mt-2 list-disc pl-5">
          <li><strong>Breakfast:</strong> Oatmeal with fruits and nuts</li>
          <li><strong>Lunch:</strong> Grilled chicken with quinoa and vegetables</li>
          <li><strong>Snack:</strong> Greek yogurt with honey</li>
          <li><strong>Dinner:</strong> Baked salmon with steamed broccoli</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-2xl font-bold">Weight Loss Diet</h2>
        <ul className="mt-2 list-disc pl-5">
          <li><strong>Breakfast:</strong> Scrambled eggs with spinach and avocado</li>
          <li><strong>Lunch:</strong> Grilled chicken salad with olive oil dressing</li>
          <li><strong>Snack:</strong> Almonds and a boiled egg</li>
          <li><strong>Dinner:</strong> Stir-fried tofu with vegetables</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold">Diabetes-Friendly Diet</h2>
        <ul className="mt-2 list-disc pl-5">
          <li><strong>Breakfast:</strong> Whole-grain toast with avocado</li>
          <li><strong>Lunch:</strong> Grilled fish with leafy greens</li>
          <li><strong>Snack:</strong> Carrot sticks with hummus</li>
          <li><strong>Dinner:</strong> Baked chicken with a side of quinoa</li>
        </ul>
      </section>
    </div>
  );
};

export default DietChartPage;
