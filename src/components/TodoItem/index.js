import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteButton} = props
  const {title, id} = eachTodo

  const onDelete = () => {
    onDeleteButton(id)
  }

  return (
    <li className="todo-div">
      <p className="para">{title}</p>
      <button className="delete-btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
