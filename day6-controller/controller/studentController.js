// this is the controller file where we are going to add the all the callback function

const allStudent = (req, res) => {
  res.send("This is the all student from controller all student");
};

const createStudent = (req, res) => {
  res.send(
    "This is the create student route from the Controller createStudent"
  );
};

const updateStudent = (req, res) => {
  res.send("This is the update student route from controller updateStudent");
};

const deleteStudent = (req, res) => {
  res.send("This is the delete student route  from controller deleteStudent");
};

export { allStudent, createStudent, updateStudent, deleteStudent };
