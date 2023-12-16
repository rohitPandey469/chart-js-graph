import React from "react";
import MyChart from "./MyChart";

const Above = () => {
  return (
    <div
      style={{
        boxShadow: "1px 1px 1px gray",
        maxWidth: "540px",
        margin: "0 auto",
        padding: "1rem",
        border:"0.5px solid gray",
        borderRadius:"0.5rem"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "3%",
          borderBottom: "1px solid gray",
          paddingBottom: "0.7rem",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.2rem",
            border: "0.5px solid gray",
            borderRadius: "5px",
            height: "35px",
            width: "160px",
            paddingLeft:"0.5rem"
          }}
        >
          <p style={{ fontWeight: "550", color: "#4a4a4a", margin: "" }}>
            Online Store
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#4a4a4a"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.2rem",
            border: "0.5px solid gray",
            borderRadius: "5px",
            height: "35px",
            width: "160px",
            paddingLeft:"0.5rem"
          }}
        >
          <p style={{ fontWeight: "550", color: "#4a4a4a", margin: "" }}>
            This month
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#4a4a4a"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "-1.7rem",
          }}
        >
          <p style={{ fontWeight: "650", fontSize: "0.95rem" }}>Total sales</p>
          <p style={{ color: "#4a4a4a", fontSize: "1rem", fontWeight: "500" }}>
            This month
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "550", fontSize: "1.8rem" }}>$47,791.64</p>
          <p style={{ color: "#4a4a4a" }}>471 orders</p>
        </div>
        <div>
          <p className="dashed-underline">Total sales over time</p>
        </div>
      </div>
      <MyChart />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid gray",
          marginTop: "1rem",
          padding: "0.3rem",
          marginBottom: "-0.8rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "-0.75rem",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "0.95rem" }}>
            Total sales breakdown
          </p>
          <p style={{ color: "#4a4a4a" }}>This month</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "-1.2rem",
          }}
        >
          <p>Orders</p>
          <p>$48,411.53</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>Returns</p>
          <p>-$619.89</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderTop: "1px solid gray",
          marginBottom: "1rem",
          padding: "0 0.2rem",
        }}
      >
        <p style={{ marginTop: ".7rem" }}>Total sales</p>
        <p style={{ marginTop: ".7rem" }}>$47,791.64</p>
      </div>
    </div>
  );
};

export default Above;
