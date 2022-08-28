class retagle{
    width;
    height;
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
        let area=this.width+this.height;
        return area;
    }
    getP(){
        return this.width*this.height;
    }
    getCanvans(){
        var canvas = document.getElementById("DemoCanvas");
        var ctx = canvas.getContext('2d');
        ctx.fillStyle='#fa4b2a';   
        ctx.fillRect(10, 40, this.width, this.height); 
    }
}


retagle1=new retagle(50,70);
retagle2=new retagle(200,200);