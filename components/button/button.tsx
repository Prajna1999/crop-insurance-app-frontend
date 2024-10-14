import React from "react"
interface ButtonProps {
    title: string;
    disabled: boolean;
    children?: React.ReactNode
}
export default function Button({ title, disabled, children }: ButtonProps) {

    return (
        <button
            disabled={disabled}
            className="w-full bg-white text-green-600 py-3 px-6 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:bg-green-50 transition duration-300"
        >
            <span>{title}</span>
            {children}
        </button>
    )
}