import React from "react";
import MyChart from "./MyChart";

const Above = () => {
  return (
    <div
      style={{
        boxShadow: "1px 1px 1px gray",
        maxWidth: "540px",
        margin: "0 auto",
        padding: "1rem 0",
        border: "0.5px solid gray",
        borderRadius: "0.5rem",
      }}
    >
      <div

        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "0.5rem",
          padding:" 0 1rem",
          borderBottom:"0.5px solid #9a9a9a"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg
            style={{ marginRight: "0.5rem",width:"2.1rem" }}
            viewBox="0 0 512 512"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 512 512"
          >
            <path
              d="M381.7 225.9c0-97.6-52.5-130.8-101.6-138.2 0-.5.1-1 .1-1.6 0-12.3-10.9-22.1-24.2-22.1-13.3 0-23.8 9.8-23.8 22.1 0 .6 0 1.1.1 1.6-49.2 7.5-102 40.8-102 138.4 0 113.8-28.3 126-66.3 158h384c-37.8-32.1-66.3-44.4-66.3-158.2zM256.2 448c26.8 0 48.8-19.9 51.7-43H204.5c2.8 23.1 24.9 43 51.7 43z"
              fill="#6a6a6a"
            ></path>
          </svg>
            <p
              style={{
                backgroundColor: "#dcd7d7",
                padding: "0.7rem 0.8rem",
                borderRadius: "50%",
                color: "rgb(110 106 106)",
              }}
            >
              RB
            </p>
            <p style={{ color: "#4a4a4a", marginLeft: "0.1rem",fontSize:"1.1rem",fontWeight:"500" }}>Ram Bansal</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "3%",
          padding:"0 1rem",
          borderBottom: "1px solid gray",
          paddingBottom: "0.3rem",
          paddingTop:"0.3rem",
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
            height: "40px",
            width: "200px",
            paddingLeft: "0.5rem",
          }}
        >
          <p style={{ fontWeight: "600", color: "#000", margin: "" }}>
            Online Store
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#4a4a4a"
            style={{marginTop:"0.3rem"}}
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
            height: "40px",
            width: "200px",
            paddingLeft: "0.5rem",
          }}
        >
          <p style={{ fontWeight: "600", color: "#000", margin: "" }}>
            This month
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#4a4a4a"
            style={{marginTop:"0.3rem"}}

          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0",padding:"0 1rem" }}>
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
      <div style={{padding:"0 1rem"}}>
      <MyChart />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid gray",
          marginTop: "1rem",
          padding: "0.3rem",
          marginBottom: "-0.8rem",
          padding:"0 1rem",
          paddingBottom:"0.7rem"
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
          padding: "0 1rem",
        }}
      >
        <p style={{ marginTop: ".7rem" }}>Total sales</p>
        <p style={{ marginTop: ".7rem" }}>$47,791.64</p>
      </div>
    </div>
  );
};

export default Above;
