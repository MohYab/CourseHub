import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import { RegisterDialog } from "./RegisterForm";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            StudentPortal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Hem
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Kurser
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  Nyheter
                </Link>
              </li>
            </ul>
            <div className="ms-auto">
              <Button
                onClick={() => setRegisterDialogOpen(true)}
                variant="contained"
                color="secondary"
                sx={{
                  backgroundColor: "#ff4081",
                  "&:hover": {
                    backgroundColor: "#e91e63",
                  },
                }}
              >
                Registrera dig
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <RegisterDialog
        open={registerDialogOpen}
        onClose={() => setRegisterDialogOpen(false)}
      />
    </>
  );
}
