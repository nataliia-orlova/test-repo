import { FaTimes } from 'react-icons/fa';

export default function Task({ task, onDelete }) {
    return (
        <div className="task">
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <h3>{task.day}</h3>
        </div>
    );
}