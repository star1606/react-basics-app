import React, { Component } from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  // array를 만든다
  //   const ninjaList = ninjas.map((ninja) => {
  //     if (ninja.age >= 30) {
  //       return (
  //         <div className="ninja" key={ninja.id}>
  //           <div>name : {ninja.name}</div>
  //           <div>age : {ninja.age}</div>
  //           <div>belt : {ninja.belt}</div>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });

  const ninjaList = ninjas.map((ninja) => {
    return ninja.age >= 30 ? (
      <div className="ninja" key={ninja.id}>
        <div>name : {ninja.name}</div>
        <div>age : {ninja.age}</div>
        <div>belt : {ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete ninja
        </button>
      </div>
    ) : null;
  });

  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
