import fetch from "isomorphic-unfetch";
import { Officer } from "utils/types";

export const getOfficers = (officer: Officer) =>
    fetch("http://localhost:3000/api/officer/getOfficers", {
        method: "POST",
        mode: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(officer),
    })
        .then(response => response.json())
        .then(json => {
            if (json == null) {
                throw new Error("Could not connect to API!");
            } else if (!json.success) {
                throw new Error(json.message);
            }

            return json.payload;
        });

export const addOfficer = (form: FormData) =>
    fetch("http://localhost:3000/api/officer/addOfficer", {
        method: "POST",
        mode: "same-origin",
        body: form,
    })
        .then(response => response.json())
        .then(json => {
            if (json == null) {
                throw new Error("Could not connect to API!");
            } else if (!json.success) {
                throw new Error(json.message);
            }

            return json.payload;
        });

export const deleteOfficer = (officer: Officer) =>
    fetch("http://localhost:3000/api/officer/deleteOfficer", {
        method: "POST",
        mode: "same-origin",
        body: JSON.stringify(officer),
    })
        .then(response => response.json())
        .then(json => {
            if (json == null) {
                throw new Error("Could not connect to API!");
            } else if (!json.success) {
                throw new Error(json.message);
            }

            return json.payload;
        });
