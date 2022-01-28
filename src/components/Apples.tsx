import React from "react";
import useStore from "../components/GlobalState";
/**
 * @description This component will be used to display all available apples
 * (from our global state).
 */

// can also write React.FC which maps to this.
const Apples: React.FunctionComponent = () => {
  // this uses the apples from the global state. Everytime apples will be
  // updated, this component will re-render.
  const apples = useStore((state) => state.apples);

  // TODO(pierre): render apples here. For now just increase a value instead of
  // using an object.
  // const renderApples = (): JSX.Element[] => {
  //   return people.map((person) => {
  //     return (
  //       <li className="List" key={person.url}>
  //         <div className="List-header">
  //           <img className="List-img" src={person.url} />
  //           <h2> {person.name} </h2>
  //         </div>
  //         <p> {person.age} years old </p>
  //         <p className="List-note"> {person.note} </p>
  //       </li>
  //     );
  //   });
  // };

  if (apples === 0) {
    return (
      <div className="text-2xl text-green-600 font-medium">
        We have no apples yet :[
      </div>
    );
  }

  return (
    <div className="text-2xl text-green-600 font-medium">
      Yaaay, we have {apples} apples!
    </div>
  );
};

export default Apples;
