const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

let d = []

class grid{
    constructor(x, y){
        this.x = x
        this.y = y
        this.dirty = false
    }

    isDirty(){
        return(this.dirty)
    }
}

function touching(idx){
    let touch = 0
    let nubers = [-1, -119, -120, -121, 1, 119, 120, 121]
    for(o=0; o<nubers.length; o++){
        try{
            if(d[idx + nubers[o]].dirty == true){
                touch++
                console.log()
            }
        }catch(error){}
    }
    return(touch)
}

draw = function(){
    console.log("pee is stored in the balls")
    console.log(d.length)
    for(i=0; i<d.length; i++){
        getTouched = touching(i)
        document.onmousemove = (event) => {
            x = event.clientX
            y = event.clientY
        }
        if(getTouched == 3 && d[i].dirty == false){
            d[i].dirty = true
        }else if(getTouched >= 2 && getTouched <= 3 && d[i].dirty == true){
            d[i].dirty = true
        }/*else if(x >= d[i].x && x <= d[i].x + 10 && y >= d[i].y && y <= d[i].y + 10){
            d[i].dirty = true
        } */else {
            d[i].dirty = false
        }
        if(d[i].dirty){
            ctx.beginPath();
            ctx.fillRect(d[i].x, d[i].y, 10, 10)
            ctx.closePath();
        } else{
            ctx.beginPath();
            ctx.strokeRect(d[i].x, d[i].y, 10, 10)
            ctx.closePath();
        }
        
    }
    return(null)
}


for(i=0;i<120;i++){
    y = i*10
    for(o=0;o<120;o++){
        x = o*10
        d.push(new grid(x, y))
    }
}
d[501].dirty = true
d[502].dirty = true
d[503].dirty = true

dra = setInterval(draw, 1000)