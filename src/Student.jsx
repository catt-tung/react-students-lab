import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
    <div className="student">
      <h2>{props.student.name}</h2>
        <h3>{props.student.bio}</h3>
        <h4>
          {props.student.scores.map(score =>
            <Score name={props.student.name} score={score.score} date={score.date}/>
            )}
        </h4>
    </div>
    </>
    
  );
}

export default Student;