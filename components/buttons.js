class Button{
    constructor(color, borderColor, borderWidth, x, y, w, h, text, textColor, textItalic, textCaps, textBold, textSize, fontFamily, textY, visibility){
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
        this.color = color;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.textColor = textColor;
        this.textItalic = textItalic;
        this.textCaps = textCaps;
        this.textBold = textBold;
        this.textSize = textSize;
        this.fontFamily = fontFamily;
        this.textY = textY;
        this.visibility = visibility;
    }

    draw(){
        if(this.visibility){
            context.fillStyle = this.borderColor;
            context.fillRect(this.x, this.y, this.w, this.h);
            context.fillStyle = this.color;
            context.fillRect(this.x + this.borderWidth , this.y + this.borderWidth, 
                            this.w - 2 * this.borderWidth, this.h - 2 * this.borderWidth);

            context.fillStyle = this.textColor;
            context.font = `${this.textItalic}
                            ${this.textCaps} 
                            ${this.textBold}
                            ${this.textSize}px 
                            ${this.fontFamily}`
                            
            context.fillText(this.text , this.x + (this.w - context.measureText(this.text).width) / 2, this.textY)
        }
    }

    click(){
        if(mouseX >= this.x && mouseX <= this.x + this.w &&
            mouseY >= this.y && mouseY <= this.y + this.h && this.visibility && mouseClick){
            return true;
        }
    }
} 