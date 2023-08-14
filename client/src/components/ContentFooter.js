import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveFilter, clearCompleted, selecTodos, stateActiveFilter } from './redux/todos/todosSlice';

function ContentFooter() {
    const dispatch = useDispatch();

    const items = useSelector(selecTodos);
    const itemsLeft = items.filter((item) => !item.completed).length;

    const activeFilter = useSelector(stateActiveFilter);

    useEffect(() => {
        localStorage.setItem("activeFilter", activeFilter)
    }, [activeFilter]);


    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{itemsLeft} </strong>
                item{itemsLeft > 1 && "s"} left
            </span>

            <ul className='filters'>
                <li>
                    <a href='#'
                        className={activeFilter === "all" ? "selected" : ""}
                        onClick={() => dispatch(changeActiveFilter("all"))}>All</a>
                </li>
                <li>
                    <a href='#'
                        className={activeFilter === "active" ? "selected" : ""}
                        onClick={() => dispatch(changeActiveFilter("active"))}>Active</a>
                </li>
                <li>
                    <a href='#'
                        className={activeFilter === "copmleted" ? "selected" : ""}
                        onClick={() => dispatch(changeActiveFilter("completed"))}>Completed</a>
                </li>
            </ul>

            <button className='clear-completed' onClick={() => dispatch(clearCompleted())}>
                Clear Completed
            </button>
        </footer>
    )
}

export default ContentFooter