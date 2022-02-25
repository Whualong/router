class HashRouter {
    push( path  = ''){
        location.hash = path
    }
    replace( path = '' ){
        let url = location.pathname + '#' + path
        history.replaceState(null,'', url)
        this.update( path )
    }
    go( num ){
        history.go( num )
    }
    forward(){
        history.forward()
    }
    back(){
        history.back()
    }
    update( ){

    }

}
export default HashRouter