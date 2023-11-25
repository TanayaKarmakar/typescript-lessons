import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;

}

interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps> {
    state = {
        fetching: false
    };

    constructor(props: AppProps) {
        super(props);

        this.state = { fetching: false};
    }

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if(!prevProps.todos.length && this.props.todos.length) {
            this.setState({
                fetching: false
            });
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({
            fetching: true
        });
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
            <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
             {todo.title}
            </div>
            );
        });
    }

    render() {
        return <div>
            <button onClick = {this.onButtonClick}>Fetch</button>
            {this.state.fetching ? 'LOADING': null}
            {this.renderList()}
            </div>;
    }
}

const matchStateToProps = (state: StoreState): {todos: Todo[]} => {
    return {
        todos: state.todos
    };
};

export const App = connect(
    matchStateToProps,
    { fetchTodos, deleteTodo }
)(_App);

