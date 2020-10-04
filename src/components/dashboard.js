import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

import MUIDataTable from "mui-datatables";

// Chart
import Chart from "react-google-charts";

// async
import { useAsync } from 'react-async';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=bengaluru&appid=${API_KEY}`;

const loadUsers = async () =>
  // That is weather API which pulls Bangalore's 5 day weather data.
  await fetch(API_URL)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
  
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    gridPos: {
        display: 'flex',
        justifyContent: 'center',
        flexGrow: 1,
        padding: theme.spacing(5),
    }  
}));

export default function Dashboard() {
   
    const { data, error, isLoading } = useAsync(
        { 
            promiseFn: loadUsers 
        }
    )
    const classes = useStyles();
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    // console.log("Data is", data)
    // Pulling temparature data
    const mapped = data.list.map(d => [d.main.temp_min, d.main.temp_max]);
    const chartData = [["Time", "Temperature"], ...mapped];
    // Pulling humidity data
    const map = data.list.map(dt => [dt.main.humidity]);
    const pulledData = [["Humidity"], ...map];
    // Pulling weather and wind data
    const mp = data.list.map(dat => [dat.weather.main, dat.wind.speed, dat.wind.deg, dat.clouds.all]);
    const pulledcomboData = [["Status", "Speed", "Degree", "Clouds"], ...mp];
    // Pulling overall details
    const columns = ["Date and Time", "Wind Speed", "Ground Level Pressure", "Sea Level Pressure", "Humidity", "Temparature"];
    const tableData = data.list.map(tabled => [tabled.dt_txt, tabled.wind.speed, tabled.main.grnd_level, tabled.main.sea_level, tabled.main.humidity, tabled.main.temp]); 
    // console.log("Table data is", tableData);
    const options = {
        filterType: 'checkbox',
    };
        
    if (data)
 
    return (
        <div className="container">
            <div className={classes.root}>
                <div className="App">
                    <h2>Weather Details</h2>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} gutterBottom>
                                    Temparature Data:
                                </Typography>
                                <Typography variant="body2" component={'span'}>
                                <Chart
                                    chartType="BarChart"
                                    data={chartData}
                                    loader={<div>Loading Chart</div>}
                                    options={{
                                        chartArea: { 
                                            width: '50%',
                                            height: '50%'
                                        },
                                        hAxis: {
                                          title: 'Maximum Temparature',
                                        },
                                        vAxis: {
                                          title: 'Minimum Temprature',
                                        },
                                    }}
                                />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} gutterBottom>
                                    Humidity Histogram:
                                </Typography>
                                <Typography variant="body2" component={'span'}>
                                    <Chart
                                        chartType="Histogram"
                                        data={pulledData}
                                        loader={<div>Loading Chart</div>}
                                        options={{
                                            seriesType: 'bars',
                                            series: { 5: { type: 'line' } },
                                        }}
                                    />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} gutterBottom>
                                    Wind Data History:
                                </Typography>
                                <Typography variant="body2" component={'span'}>
                                    <Chart
                                        chartType="BubbleChart"
                                        loader={<div>Loading Chart</div>}
                                        data={pulledcomboData}
                                        options={{
                                            chartArea: { 
                                                width: '50%',
                                                height: '50%'
                                            },
                                            bubble: { textStyle: { fontSize: 11 } },
                                        }}
                                    />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <MUIDataTable
                            title={"Overall data"}
                            data={tableData}
                            columns={columns}
                            options={options}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}