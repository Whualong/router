import HashRouter from "./hash"
import HistoryRouter from "./history"
class Router {
    static mode  = 'hash'
    constructor( options ){
        mode = options.mode ? options.mode : 'hash'
        this.base = options.base ? options.base : ''
        this.routes = options.routes ? options.routes : []
    }
    push( ){

    }
    replace() {

    }
    go(){

    }
    forward(){

    }
    back(){

    }
    update(){

    }
}

Array.prototype.myFlat = function ( n = 1  ){
    if(Array.isArray(this)){
        let arr = this
        if ( n == 1 ){
            return [].concat( ...arr )
        }else{
            let i = 0;
            while( arr.some((item)=>Array.isArray(item))&& i < n){
                arr = [].concat(...arr)
                i++
            }
        }
        return arr;
    }else{
        return []
    }
    

}
export default Router