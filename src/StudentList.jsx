import Student from "./Student";

const StudentList = (props) => {
  return ( 
    <>
      <h3>This is the Student List component</h3>
      {props.students.map(student =>
        <Student student={student}/>
        )}
    </>
  );
}

export default StudentList;