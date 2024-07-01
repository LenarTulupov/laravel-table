import Checkbox from "@/Components/Checkbox"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import { useSearchContext } from "@/Contexts/SearchContext"
import { useState } from "react"

const SignIn = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <div>
            <div>
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextInput 
                    id="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <InputLabel
                    htmlFor="password"
                >Password</InputLabel>
                <TextInput 
                    id="password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <Checkbox id="checkbox" />
                <InputLabel htmlFor="checkbox">Forgot your password?</InputLabel>
            </div>
            Log in
        </div>
    )
}

export default SignIn