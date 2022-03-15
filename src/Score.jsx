const Score = (props) => {
  return ( 
    <>
      <h4>Score component</h4>
      <h4>{props.name} got {props.score} on {props.date}</h4>
    </>
  );
}

export default Score;