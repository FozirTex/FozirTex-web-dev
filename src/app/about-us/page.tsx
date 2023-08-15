// "use client" // determines it's a client component (server component by default)

// import { useEffect } from "react"

export default async function AboutUs() { // add async in between "default" & "function" to activate await
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // useEffect(() => {}, [])
    // throw Error("Bazinga"); // set to make error for invoke error.tsx
    return <h1>About Us BANG!!! Take Ministry of Education down!</h1>
}