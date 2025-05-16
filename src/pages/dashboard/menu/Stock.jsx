import React from "react";
import Navbar from "../../../components/Navbar";
import { ChartSpline } from "lucide-react";

const Stock = () => {
    return (
        <div className="flex flex-col h-full">
        <Navbar itemName="Stock" itemIcon={<ChartSpline className="w-5 h-5" />} />
        <div className="flex-1 overflow-auto">
            <div className="p-4">
            <h1 className="text-xl mb-10 font-semibold">Stock</h1>
            <p className="text-xl text-gray-600">Design not provided</p>
            </div>
        </div>
        </div>
    );
 }

 export default Stock;
