import React, { useState } from "react"
import { User, Lock, LogIn } from "lucide-react"
import Button from "../button/button";

export default function LoginForm({ onLogin }: { onLogin?: (credentials: any) => void }) {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (onLogin) {
            onLogin(credentials);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 flex flex-col justify-center p-6">
            <h1 className="text-3xl font-bold text-white text-center mb-8">Farmer Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <User className="absolute top-3 left-3 text-green-600" size={20} />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-full bg-white text-green-800 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="relative">
                    <Lock className="absolute top-3 left-3 text-green-600" size={20} />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-full bg-white text-green-800 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <Button title="Login" disabled={false}>
                    <LogIn size={24} />
                </Button>
            </form>
        </div>
    );
}