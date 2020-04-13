import React from 'react';
import SearchModalProducts from './SearchModalProducts.jsx';
import axios from 'axios';
import exit from '../../dist/assets/exit.png';

export default class SearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            selected: '',
            products: [],
            productCount: ''
        }
    }

    getSuggestedCollection() {
        var keyword = this.props.keyword;
        var collections = ['Men Shoe', 'Women Shoe', 'Nike', 'Run', 'Air', 'Free', 'Zoom', 'React', 'Vomero', 'RN', 'Jordan', 'Free', 'Odyssey', 'A.I.R', 'Terra', 'Vomero', 'Ianga', 'Fly', 'Element', '3', '14', 'Motion', 'HyperSet', 'Freak', '55', 'Pegasus', 'Globe', 'Rise', 'JoyRide', 'CC', 'FlyEase', 'Light Redwood', 'Pink Quartz', 'White', 'Dark Grey', 'Pure Platinum', 'Anthracite', 'Bright Crimson', 'Black', 'Pink Blast', 'Dune Red', 'Mahogany', 'Team Orange', 'Burgundy Ash', 'Stone Mauve', 'Barely Rose', 'Smokey Mauve', 'Metallic Red Bronze', 'Volt', 'Gum Light Brown', 'Aura', 'Light Armory Blue', 'Mint Foam', 'Blackened Blue', 'Cosmic Clay', 'Blue Hero', 'Sail', 'Barely Grey', 'Fossil', 'Pistachio Frost', 'Iced Lilac', 'Noble Red', 'Atomic Violet', 'Night Maroon', 'Oil Grey', 'Wolf Grey', 'Cool Grey', 'Metallic Platinum', 'Valerian Blue', 'Vivid Purple', 'Plum Chalk', 'Infinite Gold', 'Silver Lilac', 'Metallic Gold', 'True Berry', 'Vast Grey', 'Phantom', 'Barely Volt', 'Spruce Aura', 'Bio Beige', 'Light Orewood Brown', 'Villain Red', 'Hyper Crimson', 'Pumice', 'Celestial Gold', 'Echo Pink', 'Photon Dust', 'Light Thistle', 'Pollen Rise', 'Magic Flamingo', 'University Blue', 'Half Blue', 'Beechtree', 'Cargo Khaki', 'Off Noir', 'Summit White', 'Laser Fuchsia', 'Psychic Purple', 'Thunder Grey', 'Light Carbon', 'Bright Ceramic', 'Yellow Pulse', 'Ocean Cube', 'Metallic Cool Grey', 'Speed Yellow', 'Team Red', 'Cosmic Fuchsia', 'Limelight', 'Hyper Pink', 'Racer Blue', 'Atmosphere Grey', 'Sky Grey', 'Obsidian Mist', 'Particle Grey', 'Lava Glow', 'Light Bone', 'Laser Crimson', 'Platinum Tint', 'Track Red', 'Light Blue'];
        const regex = new RegExp(keyword, 'i')
        var match = collections.filter((collection) => collection.match(regex));
        if (match.length > 0) {
            var shortenedMatch = match.splice(0, 6);
            this.setState({
                suggestions: shortenedMatch,
                selected: shortenedMatch[0]
            }, () => {
                console.log(this.state.selected)
                axios.get(`/search/${this.state.selected}`)
                    .then((result) => {
                        //console.log(result)
                        var shoes = result.data;
                        var shoeCount = result.data.length;
                        var shortenedShoes = [];
                        var shoeNames = [];

                        shoes.forEach((shoe) => {
                            if (!shoeNames.includes(shoe.name)) {
                                shortenedShoes.push(shoe);
                                shoeNames.push(shoe.name);
                            }
                        })

                        if (shortenedShoes.length > 6) {
                            shortenedShoes = shortenedShoes.slice(0, 6);
                        }

                        this.setState({
                            products: shortenedShoes,
                            productCount: shoeCount
                        })

                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
        }
        else {
            this.props.handleChange('');
            document.body.style.overflow = 'unset';
        }
    }

    handleHover(suggestion) {

        axios.get(`/search/${suggestion}`)
            .then((result) => {
                var shoes = result.data;
                var shoeCount = result.data.length;
                var shortenedShoes = [];
                var shoeNames = [];

                shoes.forEach((shoe) => {
                    if (!shoeNames.includes(shoe.name)) {
                        shortenedShoes.push(shoe);
                        shoeNames.push(shoe.name);

                    }
                })

                if (shortenedShoes.length > 6) {
                    shortenedShoes = shortenedShoes.slice(0, 6);
                }


                this.setState({
                    selected: suggestion,
                    products: shortenedShoes,
                    productCount: shoeCount
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidUpdate(prevProps) {
        if ((this.props.keyword !== prevProps.keyword) && (this.props.keyword.length > 1)) {
            this.getSuggestedCollection();
        }
    }

    render() {
        if ((this.props.display === 'search') && (this.props.keyword.length > 1)) {
            document.body.style.overflow = 'hidden';
            return (
                <div className='search-modal'>
                    <div className='result-display'>
                        <div className='search-results-container'>
                            <div id='top-suggestions'>TOP SUGGESTIONS</div>
                            <SearchModalProducts products={this.state.products} productCount={this.state.productCount} handleChange={this.props.handleChange} />
                            <div id='view-all'>View All ({this.state.productCount})</div>
                        </div>
                    </div>
                    <div className='match-suggestions'>
                        <div className='search-results-container'>
                            {this.state.suggestions.map((suggestion) => (
                                <div className={this.state.selected === suggestion ? 'suggestion-active' : 'suggestion'} onMouseEnter={() => this.handleHover(suggestion)}>{suggestion}</div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}