import { AiFillDelete } from 'react-icons/ai'

export function TodoItem({todoName, todoDate, deleteItem}) {

  const handleDeleteButton = ()=>{
    deleteItem(todoName)
  }
    return (
      <div className="container">
        <div className="row todo-item-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger todo-button" onClick={handleDeleteButton}>
              <AiFillDelete/>
            </button>
          </div>
        </div>
      </div>
    );
  }
  