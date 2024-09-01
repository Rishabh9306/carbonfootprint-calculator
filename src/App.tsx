import React, { useState } from 'react';

interface CoalMiningCompany {
  name: string;
  annualCoalProduction: number;
  fuelType: string;
  fuelConsumption: number;
  employeeCount: number;
  electricityConsumption: number;
  waterConsumption: number;
  wasteGeneration: number;
}

const carbonFootprintFactors = {
  coalProductionFactor: 1.04,
  fuelConsumptionFactor: {
    diesel: 2.64,
    petrol: 2.35,
    gas: 1.85,
  },
  employeeCountFactor: 0.45,
  electricityConsumptionFactor: 0.62,
  waterConsumptionFactor: 0.02,
  wasteGenerationFactor: 0.12,
};

const CarbonFootprintCalculator = () => {
  const [company, setCompany] = useState<CoalMiningCompany>({
    name: '',
    annualCoalProduction: 0,
    fuelType: 'diesel',
    fuelConsumption: 0,
    employeeCount: 0,
    electricityConsumption: 0,
    waterConsumption: 0,
    wasteGeneration: 0,
  });

  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const calculateCarbonFootprint = () => {
    const coalProductionEmissions = company.annualCoalProduction * carbonFootprintFactors.coalProductionFactor;
    const fuelConsumptionEmissions = company.fuelConsumption * carbonFootprintFactors.fuelConsumptionFactor[company.fuelType];
    const employeeCountEmissions = company.employeeCount * carbonFootprintFactors.employeeCountFactor;
    const electricityConsumptionEmissions = company.electricityConsumption * carbonFootprintFactors.electricityConsumptionFactor;
    const waterConsumptionEmissions = company.waterConsumption * carbonFootprintFactors.waterConsumptionFactor;
    const wasteGenerationEmissions = company.wasteGeneration * carbonFootprintFactors.wasteGenerationFactor;

    const totalEmissions = coalProductionEmissions + fuelConsumptionEmissions + employeeCountEmissions + electricityConsumptionEmissions + waterConsumptionEmissions + wasteGenerationEmissions;

    setCarbonFootprint(totalEmissions);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setCompany((prevCompany) => ({ ...prevCompany, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Carbon Footprint Calculator for Coal Mining Companies</h1>

      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="name">
            Company Name
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            type="text"
            id="name"
            name="name"
            value={company.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="annualCoalProduction">
            Annual Coal Production (tons)
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            type="number"
            id="annualCoalProduction"
            name="annualCoalProduction"
            value={company.annualCoalProduction}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="fuelType">
            Fuel Type
          </label>
          <select
            className="p-2 border border-gray-300 rounded-md"
            id="fuelType"
            name="fuelType"
            value={company.fuelType}
            onChange={handleInputChange}
          >
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="gas">Gas</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="fuelConsumption">
            Fuel Consumption (liters)
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            type="number"
            id="fuelConsumption"
            name="fuelConsumption"
            value={company.fuelConsumption}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="employeeCount">
            Employee Count
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            type="number"
            id="employeeCount"
            name="employeeCount"
            value={company.employeeCount}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="electricityConsumption">
            Electricity Consumption (kWh)
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            type="number"
            id="electricityConsumption"
            name="electricityConsumption"
            value={company.electricityConsumption}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="waterConsumption">
            Water Consumption (liters)
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            type="number"
            id="waterConsumption"
            name="waterConsumption"
            value={company.waterConsumption}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2" htmlFor="wasteGeneration">
            Waste Generation (tons)
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            type="number"
            id="wasteGeneration"
            name="wasteGeneration"
            value={company.wasteGeneration}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          type="button"
          onClick={calculateCarbonFootprint}
        >
          Calculate Carbon Footprint
        </button>
      </form>

      {carbonFootprint > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Carbon Footprint Results</h2>
          <p className="text-lg font-medium mb-2">
            Your company's carbon footprint is approximately {carbonFootprint} tons CO2e per year.
          </p>

          <h3 className="text-lg font-bold mb-2">Ways to Reduce Your Carbon Footprint:</h3>
          <ul className="space-y-2">
            <li className="text-lg font-medium">
              Implement energy-efficient lighting and equipment in your facilities.
            </li>
            <li className="text-lg font-medium">
              Increase the use of renewable energy sources, such as solar or wind power.
            </li>
            <li className="text-lg font-medium">
              Implement waste reduction and recycling programs.
            </li>
            <li className="text-lg font-medium">
              Encourage employees to carpool, use public transportation, or drive electric or hybrid vehicles.
            </li>
            <li className="text-lg font-medium">
              Consider offsetting your carbon emissions by investing in carbon offset projects.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;