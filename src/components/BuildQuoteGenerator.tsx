import React, { useState } from "react";

interface Quote {
  text: string;
  author: string;
}

const BuildQuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const getQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data: Quote[] = await response.json();
    console.log(data, "DDDDDDDD");
    const randomNum = Math.floor(Math.random() * data.length);
    setQuote(data[randomNum]);
  };

  return (
    <div
      style={{
        background: "green",
        textAlign: "center",
        padding: "100px",
        gap: "2rem",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "50px",
        }}
      >
        Hello Quotes
      </h2>
      {quote && (
        <div style={{ gap: "1rem" }}>
          <p
            style={{
              marginBottom: "30px",
              color: "white",
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Quotes Message : {quote.text}
          </p>
          <p
            style={{
              marginBottom: "30px",
              color: "white",
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Author Name : {quote.author}
          </p>
        </div>
      )}
      <button
        style={{
          background: "black",
          color: "white",
          padding: "20px",
          width: "200px",
          borderRadius: "10px",
        }}
        onClick={getQuotes}
      >
        Get Quotes
      </button>
    </div>
  );
};

export default BuildQuoteGenerator;
