import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import FeedbackImage from "../assets/feedback.jpg"; // Ensure the image exists

const FeedBack = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
        padding: "20px",
      }}
    >
      {/* Section Heading */}
      <Typography sx={{ fontSize: 35, fontWeight: 800, textAlign: "center" }}>
        Contact Us!
      </Typography>
      <Typography sx={{ color: "#666", marginBottom: 3, textAlign: "center" }}>
        We'd love to hear from you. Reach out with any questions or feedback!
      </Typography>

      {/* Main Content Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9f9f9",
          flexWrap: "wrap",
          width: "80%",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left Side - Image */}
        <div style={{ flex: 1, minWidth: "300px", paddingRight: "20px" }}>
          <img
            src={FeedbackImage}
            alt="Feedback"
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              height: "100%", // Ensures consistency
            }}
          />
        </div>

        {/* Right Side - Form */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 700, marginBottom: 2 }}>
            Share Your Feedback
          </Typography>

          <form>
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <TextField fullWidth label="First Name" variant="outlined" />
              <TextField fullWidth label="Last Name" variant="outlined" />
            </div>

            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              type="tel"
              sx={{ marginBottom: 2 }}
            />

            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: 2 }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: "10px", fontSize: "16px", fontWeight: "600" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
