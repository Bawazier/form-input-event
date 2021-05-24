/* eslint-disable react/prop-types */
import React from "react";

export default function Error({ statusCode }) {
  return <h1>{statusCode} - Page Not Found</h1>;
}