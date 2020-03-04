import React from "react";

const RestaurantItem = ({
  item: { Brand, Variety, Style, Country, Stars, year, count }
}) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div className="card container backgg" style={{ borderRadius: "9px" }}>
        <span style={{ marginTop: "2rem" }} />
        <div>
          <h4 style={{ color: "blue" }}>
            {Brand} <small className="light">(#{count})</small>
            <small style={{ float: "right" }}>
              <span
                className={
                  (Stars === 5 && " card darkgreen round-img") ||
                  (Stars === "NaN" && "card red round-img") ||
                  "card orange round-img"
                }
              >
                <span style={{ margin: "auto", color: "white" }}>{Stars}</span>
              </span>
              <strong style={{ float: "right", color: "black" }}>
                <small> Style : {Style}</small>
              </strong>
            </small>
          </h4>
        </div>
        <p>
          <strong className="light"> Variety : </strong>
          <strong> {Variety}</strong>
        </p>
        <p>
          <strong className="light"> Country : </strong>
          <span className="font-italic"> {Country}</span>
        </p>

        {year &&
          year !== "NaN" && (
            <p>
              <strong className="light"> Year : </strong>
              {year}
            </p>
          )}
      </div>
    </div>
  );
};

export default RestaurantItem;
