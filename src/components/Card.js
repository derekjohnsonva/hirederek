// import './Card.css';

function Card(props) {
  return (
    <div className="Card">
        <div className="LeftColumn">
            <h3>{props.organization}</h3>
            <p className="Date">{props.dateRange}</p>
        </div>
        <div className="RightColumn">
            <h5>{props.title}</h5>
            <p>{props.details}</p>
        </div>
    </div>
  );
}

export default Card;