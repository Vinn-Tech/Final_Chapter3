import React, { useEffect, useState } from "react";
import SearchIcon from "@rsuite/icons/Search";
import ToDoListComponents from "../components/ToDoListComponents";

const ToDoList = () => {
  const [dataToDo, setDataToDo] = useState([
    {
      id: 0,
      activity: "Membersihkan Rumah",
      check: true,
    },
    {
      id: 1,
      activity: "Belanja",
      check: false,
    },
    {
      id: 2,
      activity: "Olahraga",
      check: false,
    },
    {
      id: 3,
      activity: "Jemput Adik di Sekolah",
      check: false,
    },
  ]);

  const [Task, setTask] = useState("");
  const [DataAwal, setDataAwal] = useState([]);
  const [DataSearch, setDataSearch] = useState("");
  const [List, setList] = useState("");

  const filterData = () => {
    setDataToDo(
      DataAwal.filter((value) => value.activity.includes(DataSearch))
    );
  };

  const renderToDo = () => {
    let listData = dataToDo;
    if (List === "done") {
      listData = dataToDo.filter((value) => value.check);
    } else if (List === "todo") {
      listData = dataToDo.filter((value) => !value.check);
    } else {
      listData = dataToDo;
    }
    return listData.map((value) => {
      return (
        <ToDoListComponents
          key={value.id}
          Delete={setDataToDo}
          dataToDo={value}
          DataAll={dataToDo}
        />
      );
    });
  };

  const iconSearch = () => {
    return <SearchIcon color="white" style={{ fontSize: "1.2rem" }} />;
  };

  // delete done task
  const deleteDoneActivity = () => {
    const notDone = dataToDo.filter((value) => !value.check);
    setDataToDo(notDone);
  };

  // delete all list
  const deleteAllActivity = () => {
    setDataToDo([]);
  };

  useEffect(() => {
    setDataAwal(dataToDo);
  }, []);

  return (
    <>
      <div className="parents flex justify-center items-center h-screen w-full">
        <div className="to-do-table border-8 border-[#969696] w-[50vw] h-[95vh] flex items-center flex-col rounded-[1rem]">
          <div className="header-text">
            <h1 className="font-bold text-[1.5rem] mt-[0.5rem]">TodoSearch</h1>
          </div>
          {/* Top Section (Search) */}
          <div className="top-section border-2 border-[#969696] h-[25%] w-[95%] mt-[0.5rem] rounded-[0.2rem] p-[1rem] flex flex-col justify-around gap-2">
            <div className="search-section border-[1px] rounded-[0.2rem] border-[#969696] h-[2rem] w-[100%]">
              <div className="search-section bg-[#34b1c5] h-[100%] flex justify-between">
                <button
                  onClick={() => {
                    filterData();
                  }}
                  className="search-btn hover:bg-blue-800 flex px-[0.5rem] justify-center items-center"
                >
                  {iconSearch()}
                </button>
                <input
                  onChange={(e) => {
                    setDataSearch(e.target.value);
                  }}
                  className="search-input w-[95%] px-[0.5rem] border-[1px] border-[#969696]"
                  type="text"
                  placeholder="Cari Item"
                />
              </div>
            </div>

            <div className="bottom-btn w-[100%] flex justify-between rounded-[0.2rem] gap-12">
              <button
                onClick={() => {
                  filterData();
                }}
                className="hover:bg-blue-800 bg-[#34b1c5] w-[100%] p-[0.3rem] rounded-[0.2rem] text-white text-[1rem]"
              >
                Search
              </button>
            </div>

            <div className="search-section border-[1px] rounded-[0.2rem] border-[#969696] h-[2rem] w-[100%]">
              <div className="search-section bg-[#34b1c5] h-[100%] flex justify-between">
                {/* Tambah Item array */}
                <input
                  value={Task}
                  onChange={(e) => {
                    setTask(e.target.value);
                  }}
                  className="search-input w-[100%] px-[0.5rem] border-[1px] border-[#969696]"
                  type="text"
                  placeholder="Tambah Item"
                />
              </div>
            </div>

            <div className="bottom-btn w-[100%] flex justify-between rounded-[0.2rem] gap-12">
              <button
                onClick={() => {
                  setDataToDo([
                    ...dataToDo,
                    { id: dataToDo.length + 1, activity: Task },
                  ]);
                  setTask("");
                  // console.log(dataToDo.id);
                }}
                className="hover:bg-blue-800 bg-[#34b1c5] w-[100%] p-[0.3rem] rounded-[0.2rem] text-white text-[1rem]"
              >
                Add New Task
              </button>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mid-section w-[95%] mt-[0.5rem] flex flex-col items-center">
            <div className="mid-title">
              <h1 className="font-bold text-[1.5rem]">TodoList</h1>
            </div>
            <div className="btn-mid-section w-[100%] h-[20%] flex justify-between mt-[0.3rem]">
              <button
                onClick={() => {
                  setList("all");
                }}
                className="bg-[#34b1c5] hover:bg-blue-800 w-[30%] rounded-[0.2rem] text-white text-[1rem] p-[1rem] items-center justify-center flex"
              >
                All
              </button>
              <button
                onClick={() => {
                  setList("done");
                }}
                className="bg-[#34b1c5] hover:bg-blue-800 w-[30%] rounded-[0.2rem] text-white text-[1rem] p-[1rem] items-center justify-center flex"
              >
                Done
              </button>
              <button
                onClick={() => {
                  setList("todo");
                }}
                className="bg-[#34b1c5] hover:bg-blue-800 w-[30%] rounded-[0.2rem] text-white text-[1rem] p-[1rem] items-center justify-center flex"
              >
                Todo
              </button>
            </div>
          </div>

          {/* Data Section */}
          <div className="data-section w-[95%] mt-[0.5rem] flex flex-col items-center h-[46%]">
            <div className="card-data-section flex justify-between gap-4 flex-col w-[100%]">
              {renderToDo()}
            </div>
          </div>

          {/* End Section         */}
          <div className="end-section w-[95%] h-[5%] flex justify-between">
            <button
              onClick={() => {
                deleteDoneActivity();
              }}
              className="bg-red-600 hover:bg-red-700 w-[47%] rounded-[0.2rem] text-white"
            >
              Delete done tasks
            </button>
            <button
              onClick={() => {
                deleteAllActivity();
              }}
              className="bg-red-600 hover:bg-red-700 w-[47%] rounded-[0.2rem] text-white"
            >
              Delete all tasks
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
