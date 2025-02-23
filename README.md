# Express.js Unhandled Error with Malformed JSON POST Request

This repository demonstrates a common error in Express.js applications where insufficient error handling around `req.body` can lead to crashes when receiving malformed JSON data in POST requests. The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version with robust error handling.

## Problem

The original code lacks checks to ensure the incoming JSON data is correctly formatted and contains the expected fields.  Attempting to access properties (like `user.name` in this case) on a potentially undefined or malformed `req.body` object can result in an unexpected crash or error.

## Solution

The solution implements proper validation and error handling. It checks if `req.body` is defined and contains the necessary fields before processing the data, providing appropriate error responses to the client if issues are detected.