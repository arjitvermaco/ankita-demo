import React, { useEffect, useState } from "react";

export default function AsyncDemo() {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // function fetchJoke(){

  // }
  useEffect(() => {
    fetchJoke();
  }, []);
  const fetchJoke = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    if (!response.ok) {
      setIsLoading(false);
      setError("Failed to make API call!!");
    } else {
      const data = await response.json();
      setJoke(data.joke);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h1>Lets hear a joke!!</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error : {error}</p>}
      {!isLoading && !error && (
        <>
          <p>{joke}</p>
          <button
            onClick={() => {
              fetchJoke();
            }}
          >
            Get Another Joke
          </button>
        </>
      )}
    </div>
  );
}
