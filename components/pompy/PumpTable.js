import React from "react";

const PumpTable = (props) => {
  return (
    <>
      <tr>
        <th></th>
        <td>
          <img src={props.pump.image} />
        </td>
        <td>
          {props.pumpB ? (
            <img src={props.pumpB.image} />
          ) : (
            <img src="https://fundacja-sprzymierzeni.pl/wp-content/uploads/2021/04/no-image-1.jpg" />
          )}
        </td>
      </tr>
      <tr>
        <th colSpan={3}>Specification</th>
      </tr>
      <tr>
        <th>Brand</th>
        <td>{props.pump.brand}</td>
        <td>{props.pumpB.brand}</td>
      </tr>
      <tr>
        <th>Model</th>
        <td>{props.pump.model}</td>
        <td>{props.pumpB.model}</td>
      </tr>
      <tr>
        <th>Product number</th>
        <td>{props.pump.serial}</td>
        <td>{props.pumpB.serial}</td>
      </tr>
      <tr>
        <th>Power (kW)</th>
        <td>{props.pump.power}</td>
        <td>{props.pumpB.power}</td>
      </tr>
      <tr>
        <th>Type</th>
        <td>{props.pump.type}</td>
        <td>{props.pumpB.type}</td>
      </tr>
      <tr>
        <th>Dimensions</th>
        <td>
          {props.pump.width}x{props.pump.height}x{props.pump.depth}{" "}
          {props.pump.weight} kg
        </td>
        <td>
          {props.pumpB.width}x{props.pumpB.height}x{props.pumpB.depth}{" "}
          {props.pumpB.weight} kg
        </td>
      </tr>
      <tr>
        <th>Power supply</th>
        <td>
          {props.pump.phase}|{props.pump.voltage}(V)|{props.pump.cycle}(Hz)
        </td>
        <td>
          {props.pumpB.phase}|{props.pumpB.voltage}(V)|{props.pumpB.cycle}(Hz)
        </td>
      </tr>
      <tr>
        <th>Breaker</th>
        <td>{props.pump.breaker}</td>
        <td>{props.pumpB.breaker}</td>
      </tr>
    </>
  );
};

export default PumpTable;