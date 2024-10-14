"use client"
import Button from "@/components/button/button";
import Card from "@/components/card/card";
import { AlertCircle, BarChart2, CreditCard, Sprout } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 p-6">
            <div className="max-w-md mx-auto space-y-6">
                <header className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">Farmer Dashboard</h1>
                    <button className="text-green-800 bg-white rounded-full p-2">
                        <AlertCircle size={24} />
                    </button>
                </header>

                <div className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Welcome back, Farmer!</h2>
                    <p className="text-sm text-gray-600">Here's your farm's overview.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Card
                        icon={CreditCard}
                        title="Active Loan"
                        value="₹50,000"
                        action="View"


                    />
                    <Card
                        icon={Sprout}
                        title="Insured Crop"
                        value="Wheat"
                        action="Manage"

                    />

                    <Card
                        icon={BarChart2}
                        title="Yield Forecast"
                        value="12 q/ha"
                        action="Details"

                    />
                    <Card
                        icon={AlertCircle}
                        title="Weather Alert"
                        value="Rain"
                        action="See More"

                    />


                    {/* card come here */}
                </div>
                <Button title="Apply for Loan/Insurance" disabled={false} />
            </div>
        </div>
    )
}