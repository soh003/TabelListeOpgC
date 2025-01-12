const app = Vue.createApp({
    data(){
        return{
            intro:'Tools',
            name: null,
            url: null,
            kundeListe: [],
            tools: [
                  { name: "Vue.js", url: "https://vuejs.org/" },
                  { name: "React.js", url: "https://reactjs.org/" },
                  { name: "Angular", url: "https://angular.io/" }
                ]
        }
    }, 
    methods: {
        addMethod(){
            if (this.name && this.url) {

            
            this.tools.push({name:this.name, url:this.url});
            this.name='';
            this.url='';
            }
        },
        deleteMethod() {
            this.tools = this.tools.filter(tool=>tool.name!==this.deleteName);
            this.deleteName= '';
        }
    },
    computed:{
        myComputed(){
            return''
        },
    }


})