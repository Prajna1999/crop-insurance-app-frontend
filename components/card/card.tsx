import React from "react";
import { CrosshairIcon, Icon } from "lucide-react";
interface CardProps {
    icon: any;
    title: string;
    value: string;
    action?: string;
}
export default function Card({ icon, title, value, action }: CardProps) {

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-2">
                <CrosshairIcon size={24} className="text-green-600" />
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {action}
                </span>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-2xl font-bold text-green-700">{value}</p>
            </div>
        </div>
    )

}