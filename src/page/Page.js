import React, { Component } from 'react';
import './style.css';
import Slider from '../slider/Slider'

class Page extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mx-0">
                    <div className="col-12">
                        <div className="page">
                            <div className="logo"></div>
                        </div>
                    </div>
                </div>

                <div className="row mx-0">
                    <div className="col-12 content-container">
                        <div className="slider-page-container">
                            <Slider slidesCount="3" index={5} loop={true}  autoPlay={true}  slides={["slide1.png","slide2.png","slide3.png","slide1.png","slide1.png","slide1.png","slide1.png"]}/>
                        </div>
                        <div className="blocks">
                            <div className="row mx-0">
                                <div className="col-8 px-0">
                                    <div className="pageBlock1">
                                        <div className="blockTitle1">TITLE</div>
                                        <div className="blockTitle2">12 DEC</div>
                                        <div className="pageBlockText">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    </div>
                                    <div className="pageBlock2">
                                        <div className="blockTitle1">TITLE</div>
                                        <div className="blockTitle2">12 DEC</div>
                                        <div className="pageBlockText">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="searchBlock">
                                        <div className="searchHeader">
                                            <div>SEARCH</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                               <div>copyright 2012</div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>



        );
    }
}

export default Page;
/*
*  <Slider slidesCount="3" index={5} loop={false}  autoPlay={false}  slides={["slide1.png","slide2.png","slide3.png","slide1.png","slide1.png","slide1.png","slide1.png"]}/>

                <div className="row mx-0 justify-content-center align-items-center">
                    <div className="col-md-12 mx-0">
                        <div className="pageBlock1">
                            <div className="blockTitle1">TITLE</div>
                            <div className="blockTitle2">TITLE</div>
                        </div>
                        <div className="pageBlock2">
                            <div className="blockTitle1">TITLE</div>
                            <div className="blockTitle2">TITLE</div>
                        </div>
                    </div>
                      </div>

* */