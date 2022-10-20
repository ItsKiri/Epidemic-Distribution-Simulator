import React from "react";
import PropTypes from "prop-types";
import Result from "./Result";

function Results({ contents }) {
  return (
    <div>
      {contents.map((result, i) => (
        <Result key={i} result={result}></Result>
      ))}
    </div>
  );
}

Results.propTypes = {};

export default Results;
