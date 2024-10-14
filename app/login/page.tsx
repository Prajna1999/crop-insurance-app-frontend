"use client"
import LoginForm from "@/components/login-form/login-form";
export default function LoginPage() {
    const handleLogin = (credentials: any) => {
        // handle credential logic
        console.log("Login attempted with:", credentials)
    };
    return <LoginForm onLogin={handleLogin} />
}