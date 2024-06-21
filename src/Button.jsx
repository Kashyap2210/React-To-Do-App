import "./main.css";
// import { markAsUnImp } from "./Task";

export default function Button({ onClick, label }) {
  return (
    <div className="button-element">
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
