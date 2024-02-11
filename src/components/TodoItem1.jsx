export function TodoItem1() {

    let todoName = "Buy milk";
    let todoDate = "1/1/2024";

  return (
    <div className="container">
      <div className="row todo-item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
