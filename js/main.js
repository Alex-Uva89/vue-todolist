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
        delteTodo(index){
            this.todos.splice(index, 1);
        },
        addTodo(){
            if(this.newTodo.trim() != ''){
                this.idArray++
                const newObjTodo = { name: this.newTodo , isDone: false, id: this.idArray };
                this.todos.unshift(newObjTodo).strim;
                this.newTodo = '';
            }
        },
        toggle(element){
            // this.todos[index].isDone = true;
            // console.log(this.todos[index].isDone);
            element.isDone = true;
        }
    }

    
  })