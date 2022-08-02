class Calculatrice {

    add(x,y){
        return x+y;
    }

    sub(x,y){
        return x-y;
    }

    mul(x,y){
        return x*y;
    }

    div(x,y){
        return x/y;
    }

    test(){
        console.assert(this.add(1,2) == 3, "Error add")

        console.assert(this.sub(1,2) == -1, "Error sub")

        console.assert(this.mul(2,3) == 6, "Error mul")

        console.assert(this.div(6,3) == 2, "Error div")
    }
}


let calc = new Calculatrice()

calc.test()