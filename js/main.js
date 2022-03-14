const app = new Vue({
    el:'#js-root',
    data:{
        newTodo: '',
        idArray: 0,
        todos: [
            {
                name: 'Esempio prova',
                isDone: false, 
                id: 0,
            },
            
        ]
    },
    methods: {
        delteTodo(element){
            this.todos.splice(element, 1);
        },
        addTodo(){
            this.idArray++
            const newObjTodo = { name: this.newTodo , isDone: false, id: this.idArray };
            this.todos.unshift(newObjTodo);
            this.newTodo = '';
        },
        toggle(element){
            // this.todos[index].isDone = true;
            // console.log(this.todos[index].isDone);
            element.isDone = true;
        }
    }

    
  })