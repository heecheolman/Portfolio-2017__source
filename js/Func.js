import './../css/common.css';
import './../assets/spaceStar.png';
import './../assets/srcCode.png';

class Func {
    constructor(){
        this.textSec = document.getElementsByClassName('textSec');
        this.header = document.getElementById('header');
        this.sideLine = document.getElementsByClassName('side_line');
        this.arrowWrap = document.getElementById('arrow_wrap');
        this.h = window.innerHeight;

        this.fadeIn.bind(this);
        this.fadeOut.bind(this);
        this.lineIncrease.bind(this);
        this.fadingSection.bind(this);

        window.onload = () => {this.textSec[0].style.opacity = "1"};
        window.addEventListener('scroll', () => {
            this.fadingSection(); // 섹션 숨기기
        });
    }
    fadeIn(obj){
        obj.style.opacity = "1";
    }
    fadeOut(){
        for(let i = 0; i < arguments.length; i++){
            arguments[i].style.opacity = "0";
        }
    }
    lineIncrease(obj){
        obj.style.width = "40px";
        obj.style.opacity = "1";
    }
    fadingSection(){ // 텍스트 섹션 숨기기
        if(window.pageYOffset >= 0){
            this.fadeIn(this.textSec[0]);
            this.fadeOut(this.textSec[1], this.textSec[2], this.textSec[3]);
            this.lineIncrease(this.sideLine[0]);
            this.lineDecrease(this.sideLine[1], this.sideLine[2], this.sideLine[3]);
        }if(this.h / 2 <= window.pageYOffset && window.pageYOffset < this.h + this.h / 2){ // 0 ~ 680
            this.fadeIn(this.textSec[1]);
            this.fadeOut(this.textSec[0], this.textSec[2], this.textSec[3]);
            this.lineIncrease(this.sideLine[1]);
            this.lineDecrease(this.sideLine[0], this.sideLine[2], this.sideLine[3]);
        }if(this.h + this.h / 2 <= window.pageYOffset && window.pageYOffset < 2 * this.h + this.h / 2){ // 681 ~ 1360
            this.fadeIn(this.textSec[2]);
            this.fadeOut(this.textSec[0], this.textSec[1], this.textSec[3]);
            this.lineIncrease(this.sideLine[2]);
            this.lineDecrease(this.sideLine[0], this.sideLine[1], this.sideLine[3]);
        }if(2 * this.h + this.h / 2 <= window.pageYOffset && window.pageYOffset <= 4 * this.h){ // 1361 ~ 2040
            this.fadeIn(this.textSec[3]);
            this.fadeOut(this.textSec[0], this.textSec[1], this.textSec[2]);
            this.lineIncrease(this.sideLine[3]);
            this.lineDecrease(this.sideLine[0], this.sideLine[1], this.sideLine[2]);
            this.header.style.top = "0px";
            this.arrowWrap.style.opacity = "1";
        }if(!(2 * this.h + this.h / 2 <= window.pageYOffset && window.pageYOffset <= 4 * this.h)){
            this.header.style.top = "-100px";
            this.arrowWrap.style.opacity = "0";
        }
    }
    lineDecrease(){
        for(let i = 0; i < arguments.length; i++){
            arguments[i].style.width = "25px";
            arguments[i].style.opacity = "0.5";
        }
    }
}
export default Func;
