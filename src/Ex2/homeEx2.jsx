import React, { Component } from 'react';
import Navbar from './navbar'
import Carousel from './carousel'
import Content from './content'
import Footer from './footer'

class HomeEx2 extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Carousel/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default HomeEx2;