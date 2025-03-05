import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const HealthTips = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pregnant Woman");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const categories = [
    "Pregnant Woman",
    "Baby",
    "Kid",
    "Dry Cough",
    "Foot Care",
    "Diabetes",
  ];

  const content = {
    "Pregnant Woman": {
      subCategories: ["First Trimester", "Second Trimester", "Third Trimester"],
      details: {
        "First Trimester": {
          title: "First Trimester Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Second Trimester": {
          title: "Second Trimester Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Third Trimester": {
          title: "Third Trimester Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
    },
    Baby: {
      subCategories: ["Newborn Care", "Infant Nutrition", "Infant Development"],
      details: {
        "Newborn Care": {
          title: "Newborn Care Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Infant Nutrition": {
          title: "Infant Nutrition Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Infant Development": {
          title: "Infant Development Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
    },
    Kid: {
      subCategories: ["Nutrition", "Physical Activity", "Mental Health"],
      details: {
        Nutrition: {
          title: "Kid Nutrition Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Physical Activity": {
          title: "Physical Activity Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Mental Health": {
          title: "Mental Health Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
    },
    "Dry Cough": {
      subCategories: ["Home Remedies", "Medications", "When to See a Doctor"],
      details: {
        "Home Remedies": {
          title: "Dry Cough Home Remedies",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        Medications: {
          title: "Medications for Dry Cough",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "When to See a Doctor": {
          title: "When to See a Doctor for Dry Cough",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
    },
    "Foot Care": {
      subCategories: ["Foot Hygiene", "Common Foot Problems", "Foot Exercises"],
      details: {
        "Foot Hygiene": {
          title: "Foot Hygiene Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Common Foot Problems": {
          title: "Common Foot Problems and Solutions",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Foot Exercises": {
          title: "Foot Exercise Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
    },
    Diabetes: {
      subCategories: ["Diet Tips", "Exercise Tips", "Medication Management"],
      details: {
        "Diet Tips": {
          title: "Diabetes Diet Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Exercise Tips": {
          title: "Diabetes Exercise Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        "Medication Management": {
          title: "Diabetes Medication Management Tips",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
    },
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(content[category].subCategories[0]); // Set first subcategory by default
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const toggleDropdown = (category) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="bg-white font-[sans-serif] my-4">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
          Health Tips
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <div className="text-left mb-10">
            <h2 className="text-xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
              Categories
            </h2>
          </div>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index}>
                <div
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer p-3 rounded-lg hover:bg-gray-100 ${
                    selectedCategory === category ? "bg-gray-200" : ""
                  }`}
                >
                  {category}
                  <span
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent closing the dropdown when clicking the category
                      toggleDropdown(category);
                    }}
                    className="float-right text-xl"
                  >
                    {isDropdownOpen[category] ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </span>
                </div>

                {/* Dropdown Subcategories */}
                {isDropdownOpen[category] && (
                  <div className="mt-2 pl-6">
                    {content[category]?.subCategories.map(
                      (subCategory, index) => (
                        <div
                          key={index}
                          onClick={() => handleSubCategoryClick(subCategory)}
                          className={`cursor-pointer p-2 rounded-lg hover:bg-gray-100 ${
                            selectedSubCategory === subCategory
                              ? "bg-gray-200"
                              : ""
                          }`}
                        >
                          {subCategory}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          <div className="p-6">
            {/* Content for Selected Subcategory */}
            {selectedSubCategory && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {
                    content[selectedCategory]?.details[selectedSubCategory]
                      ?.title
                  }
                </h3>
                <p className="text-gray-400 text-sm">
                  {
                    content[selectedCategory]?.details[selectedSubCategory]
                      ?.body
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
