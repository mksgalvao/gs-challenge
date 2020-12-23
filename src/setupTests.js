// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Issue: Error: Cross origin http://localhost forbidden
// https://github.com/axios/axios/issues/2654
import axios from "axios";
axios.defaults.adapter = require("axios/lib/adapters/http");
