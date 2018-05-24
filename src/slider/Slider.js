import React, { Component } from 'react';
import './style.css';

class Slider extends Component {
    constructor(props){
        super(props);
        this.createSlides = this.createSlides.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.autoPlaySlide = this.autoPlaySlide.bind(this);
        this.state = {
            slidesCount:props.slidesCount,
            listWidth:0,
            slides:"",
            left:0,
            domSlides:[],
            sliderClass:"slider-list",
            autoPlay:props.autoPlay,
            loop:props.loop
        }

        this.index = props.index;
        if(this.index>props.slides.length-props.slidesCount)this.index = props.slides.length-props.slidesCount;
        this.autoPlayInterval = -1;

    }

    createSlides(_slides,_listWidth = 0){
        let slides = _slides.map((element,index) =>
            <div className="d-inline-block slide" id={"slide_"+index}  key={index}  style={{ background: 'url('+window.location.href+'/images/'+element+') no-repeat'}}></div>
        );
        this.setState({slides: slides,listWidth:_listWidth});
    }

    componentDidMount(){
        let w = document.querySelectorAll(".slide")[0].offsetWidth;
        this.setState({listWidth:w*this.props.slidesCount,left:-w*this.index,domSlides:document.querySelectorAll(".slide")});
    }
    componentWillMount(){
        this.createSlides(this.props.slides);
        if(this.state.autoPlay){
            this.setState({loop:true});
            this.autoPlayInterval = setInterval(()=>{
                this.autoPlaySlide();
            },3000)
        }
    }
    autoPlaySlide(){
        //clearInterval(this.autoPlayInterval);
        this.nextSlide();
    }


    componentDidUpdate(prevProps, prevState){
        let w;
        if(this.index<0){
            w = this.state.domSlides[0].offsetWidth;
            this.index = 0;
            this.setState({left:-w*this.index,sliderClass:"slider-list"});
        }else{
            if(this.index>this.state.slides.length-(this.state.slidesCount)){
                w = this.state.domSlides[0].offsetWidth;
                this.index=this.state.slides.length-(this.state.slidesCount);
                this.setState({left:-w*this.index,sliderClass:"slider-list"});
            }
        }
    }

    prevSlide(){
        this.index--;
        let w = this.state.domSlides[0].offsetWidth;
        if(this.index<0){
            if(this.state.loop){
                let sld = this.state.slides.slice(0,this.state.slides.length-1);
                sld.unshift(this.state.slides[this.state.slides.length-1]);
                this.setState({slides: sld,left:-w,sliderClass:"slider-list-no-animation"});
            }else{
                this.index = 0;
            }

        }else{
            this.setState({left:-w*this.index});
        }



    }
    nextSlide(){
        this.index++;
        let w = this.state.domSlides[0].offsetWidth;
        if(this.index>this.state.slides.length-(this.state.slidesCount)){
            if(this.state.loop){
                let sld = this.state.slides.slice(1,this.state.slides.length);
                sld.push(this.state.slides[0]);
                this.setState({slides: sld,left:-w*(this.index-2),sliderClass:"slider-list-no-animation"});
            }else{
                this.index=this.state.slides.length-(this.state.slidesCount);
            }

        }else{
            this.setState({left:-w*this.index});
        }
    }

    render() {
        return (
            <div className="slider">
                <div onClick={this.prevSlide} className="arrow leftArrow"></div>
                <div className="slider-container"  style={{width:this.state.listWidth}}>
                    <div className={this.state.sliderClass} style={{left:this.state.left}}>
                        {this.state.slides}
                    </div>
                </div>
                <div onClick={this.nextSlide} className="arrow rightArrow"></div>
            </div>
        );

    }
}

export default Slider;

