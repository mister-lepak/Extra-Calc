import { useState } from "react";
import Details from "./Details";

const Calculator = ({ data }) => {
  const [housingType, setHousingType] = useState();
  const [principal, setPrincipal] = useState();
  const [duration, setDuration] = useState();

  const buttonClick = () => {
    const principalVal = document.querySelector("#principal").value;
    const durationVal = document.querySelector("#duration").value;
    setHousingType(document.querySelector("#housingType").value);
    if (!principalVal && !durationVal) {
      document.querySelectorAll(".field")[1].classList.add("error");
      document.querySelectorAll(".field")[2].classList.add("error");
      return;
    }
    if (!principalVal) {
      document.querySelectorAll(".field")[1].classList.add("error");
      return;
    }
    if (!durationVal) {
      document.querySelectorAll(".field")[2].classList.add("error");
      return;
    }
    document.querySelectorAll(".field")[1].classList.remove("error");
    document.querySelectorAll(".field")[2].classList.remove("error");
    setPrincipal(principalVal);
    setDuration(durationVal);
  };

  return (
    <div className="ui stackable grid">
      <div className="one wide column"></div>
      <div className="three wide column">
        <div className="ui form">
          <div className="field">
            <label>Type of Housing</label>
            <select className="ui fluid dropdown" id="housingType">
              <option value="1">HDB</option>
              <option value="2">Private Residence</option>
              <option value="3">Commercial Property</option>
            </select>
          </div>
          <div className="field">
            <label>Principal in SG$</label>
            <input
              type="number"
              name="principal"
              step="100"
              placeholder="SGD XXX,XXX"
              id="principal"
            ></input>
          </div>
          <div className="field">
            <label>Loan Duration in Years</label>
            <input
              type="number"
              name="duration"
              placeholder="number of years"
              id="duration"
            ></input>
          </div>
          <button className="ui button" onClick={buttonClick}>
            Submit
          </button>
        </div>
      </div>

      <div className="eleven wide column">
        <Details
          data={data}
          input={{
            housing_type: housingType,
            principal: principal,
            duration: duration,
          }}
        />
      </div>
    </div>
  );
};

export default Calculator;
