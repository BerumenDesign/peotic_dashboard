import React, { Component } from 'react';
import Navbar from './Navbar';

import ColumnChart from './ColumnChart';

class Insights extends Component {
    render () {

        let top_cats_series = [
            {
                name: 'Actual',
                data: [2.3, 1.8, 1.6, 1.1]
            },
            {
                name: 'Expected',
                data: [2.8, 1.7, 2.1, 3.1]
            }
        ];

        let top_demo_series = [
            {
                name: 'You',
                data: [20, 18, 8, 6, 4]
            },
            {
                name: 'Competitors',
                data: [24, 21, 16, 12, 8]
            }
        ];

        let consider_sale_series = [
            {
                name: 'Correlation',
                data: [51, 47, 32]
            }
        ];

        let new_prod_series = [
            {
                name: 'You',
                data: [8, 13, 6, 3]
            },
            {
                name: 'Similar Store',
                data: [15, 27, 13, 8]
            }
        ];

        let new_prod_categories = [ 'Organic Meat', 'Herbal Supplemetns', 'Gutten Free', 'Artisanal Pizza' ];

        let consider_sale_categories = [ 'Loyal', 'Mixed', 'Dynamic' ];

        let top_demo_categories = [ 'M1N', 'M4E', 'M3A', 'M1k', 'M5M' ];

        let top_cats_categories = [ 'Weight Control', 'Organic Food', 'Ready Meals', 'Cosmetics' ];
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 main main-dashboard">
                        <h1>Insights Dashboard</h1>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 white-panel top-cat">
                                <ColumnChart id="top_cats" title="Top Categories For this Demographic" height="350px" series={top_cats_series} categories={top_cats_categories} />
                            </div>
                            <div className="col-xs-12 col-sm-6 placeholder blue-panel force-350">
                                <h4>18-25 Females with higher than average income</h4>
                                <br />
                                <p>Store A0008 has a statistically higher number of customers who are Female, aged between 18-25 with higher than average income. However sales of categories that are typically purchased by this demographic are not significantly higher. Consider expanding the product selection and shelf positioning of these categories.</p>
                                <br />
                                <button type="button" className="btn btn-warning">Find Out More</button>
                            </div>
                        </div>

                        <div className="row placeholders">
                            <div className="col-xs-12 col-md-4">
                                <div className="col-md-12 white-panel">
                                    <ColumnChart id="demographic_opp" title="Demographic Opportunity" height="350px" series={top_demo_series} categories={top_demo_categories} />
                                </div>
                                <div className="col-md-12 blue-panel force-250">
                                    <p>Your competitors have a statically higher market share of the 35-44 Male demographic in these postal codes. This represents an opportunity for you to increase market share in this space.</p>
                                </div>
                                <div className="col-md-12 blue-panel">
                                    <button type="button" className="btn btn-link black">
                                        <h5><i className="fa fa-plus-circle yellow" /> Find out more</h5>
                                    </button>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="col-md-12 white-panel">
                                    <ColumnChart id="consider_sale" title="Consider Running a Sale" height="350px" series={consider_sale_series} categories={consider_sale_categories} />
                                </div>
                                <div className="col-md-12 blue-panel force-250">
                                    <p>In analyzing your sales we identified an average 43.3% correlation between Ground Meet & Hamburger Buns. This correlation is even bigger at 49.6% for your local customers. One way to capitalize on this is to place Ground Meat on sale and keep Hamburger Buns at full price.</p>
                                </div>
                                <div className="col-md-12 blue-panel">
                                    <button type="button" className="btn btn-link black">
                                        <h5><i className="fa fa-plus-circle yellow" /> Find out more</h5>
                                    </button>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="col-md-12 white-panel">
                                    <ColumnChart id="new_prod_opp" title="New Product Opportunities" height="350px" series={new_prod_series} categories={new_prod_categories} />
                                </div>
                                <div className="col-md-12 blue-panel force-250">
                                    <p>Looking at similar stores to you we noticed that the number SKU’s sold in particular categories are significantly below stores similar to you. Consider expanding the product line in these categories to increase total basket size.</p>
                                </div>
                                <div className="col-md-12 blue-panel">
                                    <button type="button" className="btn btn-link black">
                                        <h5><i className="fa fa-plus-circle yellow" /> Find out more</h5>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <p>© Copyright Peotic Inc. 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Insights;