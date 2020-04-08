import React from 'react';
import newReleases from '../../dist/assets/newReleases.png';
import men from '../../dist/assets/men.png';
import women from '../../dist/assets/women.png';
import kids from '../../dist/assets/kids.png';
import customize from '../../dist/assets/customize.png';
import logo from '../../dist/assets/logo.png';
import converse from '../../dist/assets/converse.png';
import jordan from '../../dist/assets/jordan.png';
import hurley from '../../dist/assets/hurley.png';
import cart from '../../dist/assets/cart.png';
import pin from '../../dist/assets/pin.png';
import LogInModal from './LogInModal.jsx';
import Overlay from './Overlay.jsx';
import Help from './Help.jsx';
import Locations from './Location.jsx';
import NewReleases from './NewReleases';
import Mens from './Mens.jsx';
import Womens from './Womens.jsx';
import Kids from './Kids.jsx';
import Customize from './Customize.jsx';
import Search from './Search.jsx';
import SearchModal from './SearchModal.jsx';
import Footer from './Footer.jsx';
import Feedback from './Feedback.jsx';
import Header from './Header.jsx';
import ReactDOM from 'react-dom';


class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modal: '',
            keyword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.setKeyword = this.setKeyword.bind(this);
    }

    handleChange(option){
        if(option === ''){
            document.body.style.overflow='unset';
            this.setState({
                modal: '',
            })
        }
        else if(option === 'search'){
            this.setState({
                modal: 'search',
            });
        }
        else if(option === 'join'){
            this.setState({
                modal: 'join',
            });
        }
        else{
            this.setState({
                modal: option,
            })
        }
    }

    setKeyword(keyword){
        this.setState({
            keyword: keyword
        })
    }

    render(){
        return(
            <div id='app-container'>
                <Overlay keyword={this.state.keyword} display={this.state.modal} handleClick={this.handleChange}/>
                <LogInModal display={this.state.modal} handleClick={this.handleChange} />
                <Locations display={this.state.modal} handleClick={this.handleChange} />
                <Feedback display={this.state.modal} handleClick={this.handleChange} />
                <div id='header'>
                    <Header display={this.state.modal} handleChange={this.handleChange} keyword={this.state.keyword} setKeyword={this.setKeyword}/>
                </div>
                {/* <div id='filler'></div> */}
                <div id='footer'><Footer display={this.state.modal} handleChange={this.handleChange}/></div>
            </div>
        )
    }
}

export default Navigation;



