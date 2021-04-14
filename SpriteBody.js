class SpriteBody{
    constructor(x1, y1, x2, y2){
        this.x=x1;
        this.y=y1;
        this.width=x2;
        this.height=y2;
    }
    //
    setColor(color){
        fill(color);
    }
    //
    display(){
            rect(this.x, this.y, this.width, this.height);
    }
    //
    
    mouseOver(){
        if(
            mouseX>=this.x&&
            mouseY>=this.y&&
            mouseX<=this.x+this.width&&
            mouseY<=this.y+this.height
        ){
            return true;
        }
    }
    //
    mousePressedOver(){
        if(mouseIsPressed&&this.mouseOver()){
            return true;
        }
    }
    //
    setX(xDisplacement){
        this.x=xDisplacement;
    }
    // 
    setY(yDisplacement){
        this.y=yDisplacement;
    }
    //
    setXY(xDisplacement_, yDisplacement_){
        this.x=xDisplacement_;
        this.y=yDisplacement_;
    }
    //
    setWidth(width_){
        this.width=width_;
    }
    //
    setHeight(height_){
        this.height=height_;
    }
    //
    setDimensions(width__, height_){
        this.width=width__;
        this.height=height__;
    }

    touches(touchBody){
        if(
            this.x>touchBody.x&&
            this.x<touchBody.x+touchBody.width
        )2
            {
                console.log("hii");
            }
        }
    }