import React, { useState } from "react";
import TrashIcon from "@rsuite/icons/Trash";

const ToDoListComponents = (props) => {
  const [Check, setCheck] = useState(props.dataToDo.check);
  const [activity, setactivity] = useState(props.dataToDo.activity);
  const [Edit, setEdit] = useState(true);

  const iconTambahan = () => {
    return (
      <TrashIcon color="red" style={{ fontSize: "1.3rem", height: "100%" }} />
    );
  };

const deleteData = () => {
    props.Delete(props.DataAll.filter(value => value.id !== props.dataToDo.id));
  console.log(deleteData, "delete")
  };

  return (
    <>
      <div
        className={`flex justify-between font-semibold text-[1rem] border-[1px] border-[#969696] px-[1rem] py-[0.3rem] w-[100%] rounded-md text-black-500`}
      >
        <div className="flex justify-center items-center">
          {Edit ? (
            <h1
              className={`${Check ? "italic line-through text-red-600" : ""}`}
            >
              {activity}
            </h1>
          ) : (
            <input
             key={props.dataToDo.id}
              value={activity}
              onChange={(e) => {
                setactivity(e.target.value);
              }}
              className="border-[1px] border-[#969696] rounded-[0.2rem] p-[0.2rem]"
            />
          )}
        </div>
        <div className="flex justify-center gap-2 h-10 items-center">
          <input
            className="cursor-pointer w-[2rem] h-[1rem]"
            checked={Check}
            type="checkbox"
            onChange={(e) => {
              setCheck(!Check);
            }}
          />
          <button
            className="flex justify-center items-center"
            onClick={() => {
              setEdit(!Edit);
            }}
          >
            {Edit ? (
              <i className="fa-solid fa-pencil mr-1 hover:cursor-pointer"></i>
            ) : (
              <span className="bg-green-600 rounded-md py-[0.5rem] hover:bg-green-700 hover:text-white px-[1rem] font-bold border-none">
                Save
              </span>
            )}
          </button>
          <button
            onClick={deleteData}
            className="flex justify-center items-center"
          >
            {iconTambahan()}
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoListComponents;
