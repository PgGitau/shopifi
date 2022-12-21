function Jumbotron(props) {
    return (
      <div className="container-fluid bg-primary">
        <div className="row">
            <div className="col text-center p-4 bg-warning">
                <h1>{props.title}</h1>
                <p className="lead">{props.subtitle}</p>
            </div>
        </div>
      </div>
    );
}
  
export default Jumbotron;