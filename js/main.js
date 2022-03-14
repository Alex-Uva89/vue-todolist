const app = new Vue({
    el:'#js-root',
    data:{
        newTodo: '',
        todos: [
            {
                name: 'Esempio prova',
                condition: 'true', 
            },
            
        ]
    },
    methods: {
        delteTodo(element){
            this.todos.splice(element, 1);
        },
        addTodo(){
            this.todos.push(newTodo);
        }
    }

    
  })