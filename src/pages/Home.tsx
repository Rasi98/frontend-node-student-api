import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import DataTable from "../components/DataTable";
import IStudent, { StudentResponseType } from "../types/Student";
import {
  getAllStudents,
  getStudent,
  addStudent,
} from "../services/studentServices";
import StudentModal from "../components/StudentModal";
import ActionBar from "../components/ActionBar";

export type ACTION = "add" | "update";

const Home: React.FC = () => {
  const [students, setStudents] = useState<StudentResponseType[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [action, setAction] = useState<ACTION>("add");

  useEffect(() => {
    getAllStudents().then((res) => {
      if (res) {
        setStudents(res);
      }
    });
  }, []);

  useEffect(() => {
    if (searchName) {
      getStudent(searchName).then((res) => {
        if (res) {
          setStudents(res);
        }
      });
    } else {
      getAllStudents().then((res) => {
        if (res) {
          setStudents(res);
        }
      });
    }
  }, [searchName]);

  const handleSearchName = (name: string = "") => {
    setSearchName(name);
  };

  const handleAddStudent = (action: ACTION) => {
    switchAction(action);
    switchModalBehavior();
  };

  const switchModalBehavior = () => {
    setShowModal((showModal) => !showModal);
  };

  const switchAction = (action: ACTION) => {
    setAction(action === "add" ? "add" : "update");
  };

  const handleSubmit = (name: string, city: string, phone: string) => {
    const newStudent: IStudent = {
      name: name,
      city: city,
      phone: phone,
    };

    addStudent(newStudent)
      .then((res) => {
        console.log("res", res);
        if (res) {
          switchModalBehavior();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <SearchBar onSearch={handleSearchName} />
      <ActionBar onClick={handleAddStudent} />
      <DataTable data={students} />
      <StudentModal
        open={showModal}
        handleClose={switchModalBehavior}
        handleSubmit={handleSubmit}
        action={action}
      />
    </>
  );
};

export default Home;
