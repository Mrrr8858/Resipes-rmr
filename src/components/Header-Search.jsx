import React from 'react';
import FormSearch from './FormSearch';
import FilterModal from './FilterModal';


class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="header-outer d-flex justify-content-between">
                    <div className="header-inner">
                        <div className="header-text p-5 m-5">
                            <h1>Air Recipes</h1>
                            <p>Best Recipes for Best People {this.props.margin}</p>
                            <div className='d-flex'>
                                <FormSearch />
                                <FilterModal />
                            </div>
                        </div>
                    </div>
                    <div className="header-logo">
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;