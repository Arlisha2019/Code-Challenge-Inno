import React, {Component} from 'react';
import MeterData from './MeterData';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const reducedData = MeterData
  .filter((ob, i) => i % 100 === 0);

const maper = MeterData.forEach((data) => {
  console.log(data.Type, data.Meter_ID);
  return data.Type
})


const options = {
  series: reducedData.map((data, i) => {
    const values = Object.keys(data)
      .filter(key => !isNaN(key))
      .map(key => data[key]);
      console.log(data);


      console.log('values', values)



    return {
      name: ` Meter ID ${data.Meter_ID} `,
      data:  values
    };
  })
}

console.log('data', reducedData)

export class AppProvider extends Component{
  constructor(props) {
    super(props);
    this.state  = {
      meters: []
    };
  }

  render() {

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options} />
          Innowatts Arlisha Hayles Code Collenge!!!
          {MeterData.map((data, i) =>
            <h1> {data.Date} {data.Meter_ID} </h1>
          )}
      </div>
    );
  }
}

// export default withHighcharts(MyComponent, Highcharts);

// export default App;
