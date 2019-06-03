// Nous allons créer le coeur d'une todo list.
// Une toto list est définie par une liste qui contient des todos
// Une todo est définie par un identifiant, un titre et un état (todo, done)

// 1 - Création d'un enum 'State' qui aura deux valeurs: Todo et Done
enum State {
    Todo,
    Done
};

// 2 - Création d'une interface Todo
// Elle a trois propriété:
// - id de type numérique
// - title de type string
// - state de type State

interface Todo {
    id: number;
    title: string;
    state: State;
}

// 3 - Création d'une classe TodoList
// Cette classe a une propriété: todos qui est un tableau de todo
// Cette classe a trois méthodes publiques:
// - addTodo qui prend en paramètre une chaine de caractère (le titre)
// - switchStateOfTodo qui prend en paramètre un nombre représentant l'identifiant de la todo dont l'état doit changer
// - remove qui prend en paramètre un nombre représentant l'identifiant de la todo à supprimer

class TodoList {
    todos: Todo[] = [];

    addTodo(title: string) {
        this.todos.push({
            id: this.getNewId(),
            title: title,
            state: State.Todo
        });
    }

    switchStateOfTodo(id: number) {
        this.todos.forEach((todo, i) => {
            if (todo.id === id) {
                todo.state = (todo.state == State.Done ? State.Todo : State.Done);
            }
        });
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    private getNewId(): number {
        let max = 0;
        this.todos.forEach(todo => {
            if (todo.id > max) {
                max = todo.id;
            }
        });

        return (max + 1);
    }

}