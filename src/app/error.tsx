"use client"

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
    return (
        <div>
            <h1>Error</h1>
            <p>Something went wrong! (Could be TypeError or some coding errors)</p>
            <button onClick={reset}>Click to retry</button>
        </div>
    );
}