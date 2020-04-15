
import * as React from 'react';
import kendoka from '../assets/kendoka.png';
import github from '../assets/github-icon.svg';

import { Button } from '@progress/kendo-react-buttons';

const Info = () => {
    return (
        <div id="Info" className="info-page main-content">
            <div className="content">
                    <div className="kendoka">
                        <img src={kendoka} alt="kendoka" />
                    </div>
                    <div className="section-1">
                        <h1>KendoReact</h1>
                        <h2>UI for React Developers</h2>
                        <div className="button-group">
                            <Button primary={true}>Start Free Trial</Button>
                            <Button>Buy Now</Button>
                        </div>

                        <a className="github-link" href="https://github.com/telerik/react-coffee-warehouse">
                            <img src={github} alt="github icon" />
                            <span className="github-text"> Get the source code on GitHub</span>
                        </a>
                    </div>
                    <div className="section-2">
                        <p>This demo application is built using the following KendoReact components and the KendoReact Default Theme</p>
                    </div>
                    <div className="section-3">
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/buttons/">Buttons</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/buttons/button">Button</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup">ButtonGroup</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/dataquery/">Data Query</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/charts/">Charts</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/charts/chart">Chart</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/charts/series-types/bar">Column Bar</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/charts/series-types/line">Horizontal Line</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/datatools/">Data Tools</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/datatools/pager">Pager</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/dateinputs/">Date Inputs</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker">DateRangePicker</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/dialogs/">Dialogs</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/dialogs/dialog">Dialog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/drawing/">Drawing</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/dropdowns/">Dropdowns</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete">AutoComplete</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist">DropDownList</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/editor/">Editor</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/excelexport/">Excel Export</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/form/">Form</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/grid/">Grid</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/inputs/">Inputs</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/inputs/checkbox">Checkbox</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/inputs/input">Input</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/inputs/maskedtextbox">MaskedTextBox</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/inputs/switch">Switch</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/layout/">Layout</a>
                                </h3>
                                <ul className="package-items">
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/layout/avatar">Avatar</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/layout/card">Card</a>
                                    </li>
                                    <li className="component-link">
                                        <a href="https://www.telerik.com/kendo-react-ui/components/layout/drawer">Drawer</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/scheduler/">Scheduler</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/tooltip/">Tooltip</a>
                                </h3>
                            </div>
                        </div>
                        <div>
                            <div className="package-item">
                                <h3 className="package-title">
                                    <a href="https://www.telerik.com/kendo-react-ui/components/scheduler/">Upload</a>
                                </h3>
                            </div>
                        </div>
                </div>
            </div>
            <div className="footer"/>
        </div>
    );
}

export default Info;

