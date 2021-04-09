import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dishdata:[]
    }
  }

  componentWillMount(){
    fetch('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1')
    .then(response => response.json())
    .then(data => {
      this.setState({dishdata:data.results}, () => {
        console.log(this.state.dishdata);
      })
    })
  }

  render(){
    const {dishdata} = this.state;
    return (
      <div className="App">
        <div className="app-top">
          <div className="card">
            <div className="card-header">
              High Margin Recipes
            </div>
            <div className="class-body">
              <section className="bar">
                  <span>Ambur Biryani<br/><br/></span>
                  <svg className="circle-chart" viewBox="0 0 83.83098862 83.83098862" width="90" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart__background" stroke="#efefef" strokeWidth="2" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <circle className="circle-chart__circle" stroke="#c10020" strokeWidth="3" strokeDasharray="130,200" strokeLinecap="round" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="26.91549431" y="25.5" alignmentBaseline="central" textAnchor="middle" fontSize="13">80%</text>
                    </g>
                  </svg>
              </section>
              <section className="bar">
                  <span>Panner Tikka<br/> Masala</span>
                  <svg className="circle-chart" viewBox="0 0 83.83098862 83.83098862" width="90" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart__background" stroke="#efefef" strokeWidth="3" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <circle className="circle-chart__circle" stroke="#c10020" strokeWidth="3" strokeDasharray="130,200" strokeLinecap="round" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="26.91549431" y="25.5" alignmentBaseline="central" textAnchor="middle" fontSize="13">80%</text>
                    </g>
                  </svg>
              </section>
              <section className="bar">
                  <span>Panner panner<br/>Butter Masala</span>
                  <svg className="circle-chart" viewBox="0 0 83.83098862 83.83098862" width="90" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart__background" stroke="#efefef" strokeWidth="3" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <circle className="circle-chart__circle" stroke="#c10020" strokeWidth="3" strokeDasharray="130,200" strokeLinecap="round" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="26.91549431" y="25.5" alignmentBaseline="central" textAnchor="middle" fontSize="13">80%</text>
                    </g>
                  </svg>
              </section>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Low Margin Recipes
            </div>
            <div className="class-body">
            <section className="bar">
                  <span>Ambur Biryani<br/><br/></span>
                  <svg className="circle-chart" viewBox="0 0 83.83098862 83.83098862" width="90" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart__background" stroke="#efefef" strokeWidth="3" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <circle className="circle-chart__circle" stroke="#c10020" strokeWidth="3" strokeDasharray="68,100" strokeLinecap="round" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="26.91549431" y="25.5" alignmentBaseline="central" textAnchor="middle" fontSize="13">48%</text>
                    </g>
                  </svg>
              </section>
              <section className="bar">
                  <span>Panner Tikka<br/> Masala</span>
                  <svg className="circle-chart" viewBox="0 0 83.83098862 83.83098862" width="90" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart__background" stroke="#efefef" strokeWidth="3" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <circle className="circle-chart__circle" stroke="#c10020" strokeWidth="3" strokeDasharray="30,200" strokeLinecap="round" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="26.91549431" y="25.5" alignmentBaseline="central" textAnchor="middle" fontSize="13">25%</text>
                    </g>
                  </svg>
              </section>
              <section className="bar">
                  <span>Panner panner<br/>Butter Masala</span>
                  <svg className="circle-chart" viewBox="0 0 83.83098862 83.83098862" width="90" height="100" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-chart__background" stroke="#efefef" strokeWidth="3" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <circle className="circle-chart__circle" stroke="#c10020" strokeWidth="3" strokeDasharray="20,200" strokeLinecap="round" fill="none" cx="26.91549431" cy="26.91549431" r="25.1549431" />
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="26.91549431" y="25.5" alignmentBaseline="central" textAnchor="middle" fontSize="13">15%</text>
                    </g>
                  </svg>
              </section>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Top Fluctuating Recipes
            </div>
            <div className="class-body">
              <div className="chart-body">
                <span>Ambur Biryani<br/><br/></span>
                <svg className="chart2" width="70" height="10">
                  <g transform="translate(0,0)">
                    <rect width="50%" height="2"></rect>
                  </g>
                </svg>
                5%
              </div>
              <div className="chart-body">
                <span>Panner Tikka<br/> Masala</span>
                <svg className="chart2" width="70" height="10">
                  <g transform="translate(0,0)">
                    <rect width="50%" height="2"></rect>
                  </g>
                </svg>
                3%
              </div>
              <div className="chart-body">
                <span>Panner panner<br/>Butter Masala</span>
                <svg className="chart2" width="70" height="10">
                  <g transform="translate(0,0)">
                    <rect width="50%" height="2"></rect>
                  </g>
                </svg>
                8%
              </div>
            </div>
          </div>
        </div>
        <div className="table-body">
          <div className="shape">
            <div className="trapezoid recipes">ALL RECIPE(S)</div>
            <div className="trapezoid">INCORRECT</div>
            <div className="trapezoid">UNTAGGED</div>
            <div className="trapezoid">DISABLED</div>
          </div>
          <div className="inside-table">
            <table className="table">
              <thead className="bg-primary">
                <tr>
                  <th><input type="checkbox"/></th>
                  <th>NAME</th>
                  <th>LAST UPDATED</th>
                  <th>COGS%</th>
                  <th>COST PRICE</th>
                  <th>SALE PRICE</th>
                  <th>GROSS MARGIN</th>
                  <th>TAGS/ACTIONS</th>
                </tr>
              </thead>
              {
                Object.keys(dishdata).map(function(key, index) {
                  return(
                    <tbody key={key}>
                      <tr>
                        <td><input type="checkbox"/></td>
                        <td>{dishdata[index].name}</td>
                        <td>{dishdata[index].last_updated.date}</td>
                        <td>{dishdata[index].cogs}%</td>
                        <td>{dishdata[index].cost_price.toFixed(2)}</td>
                        <td>{dishdata[index].sale_price.toFixed(2)}</td>
                        <td>{dishdata[index].gross_margin.toFixed(2)}%</td>
                        <td></td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
