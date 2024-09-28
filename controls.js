class Controls{
    constructor(){
        this.left = false;
        this.right = false;
        this.#add_key_listener();
    }
    #add_key_listener(){
        document.onkeydown=(e)=>{
            switch(e.key){
                case "ArrowLeft":{
                    this.left = true;
                }break;
                case "ArrowRight":{
                    this.right = true;
                }break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
            }
        }
    }
}