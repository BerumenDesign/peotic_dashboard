import React, { Component } from 'react';

class Sidebar extends Component {
    render () {
        return (
            <div>
                <ul className="nav nav-sidebar">
                    <li>
                        <h4>Pick a Period
                            <span className="pull-right">
                                <button type="button" className="btn btn-default btn-sm">Submit</button>
                            </span>
                        </h4>
                    </li>
                    <li><hr /> </li>
                    <li>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button">
                                <i className="fa fa-calendar"/> 2016/02/01 - 2016/02/28 <span className="caret"/>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#" className="active"><i className="fa fa-calendar"/> 2016/02/01 - 2016/02/28</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-calendar"/> 2016/03/01 - 2016/03/30</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-calendar"/> 2016/04/01 - 2016/04/30</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li><hr /> </li>
                    <li>
                        <h4>Customer type
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />Loyal</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />Mixed</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />Dynamic</label>
                        </div>
                    </li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li><hr /> </li>
                    <li>
                        <h4>Age
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>18-24</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />25-34</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />35-44</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />45-54</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />55-64</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />65+</label>
                        </div>
                    </li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li><hr /> </li>
                    <li>
                        <h4>Gender
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" /> Male</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" /> Female</label>
                        </div>
                    </li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li>
                        <hr /> </li>
                    <li>
                        <h4>Avg Balance
                            <span className="pull-right blue-botton">
                                <a href="#">All</a> | <a href="#">None</a>
                            </span>
                        </h4>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />{ '< 1k'}</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value=""/>$1.1k-$2.5K</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />$2.6-$4K</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />$4.1-$6K</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />$6.1k-$10K</label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" />$10.1k+</label>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;