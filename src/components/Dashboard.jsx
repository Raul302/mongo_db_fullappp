import React, { useEffect, useState } from 'react'
import { Chart as ChartJs } from 'chart.js/auto';
import { Bar,Bubble,Doughnut, Line, PolarArea } from 'react-chartjs-2'
import { toast } from 'react-toastify';
import axios from 'axios';
import url from '../constants/constants';
import url_api from '../constants/constants';

export default function Dashboard() {

  const [ avg_films_rentals_bycategory , set_avg_films_rentals_bycategory] = useState([{}]);
  const [ films_by_category , set_films_by_category] = useState([{}]);
  const [ earnings_two_thousand_five , set_earnings_two_thousand_five] = useState([{}]);
  const [ earnings_by_store , set_earnings_by_store] = useState([{}]);
  const [ customer_by_city , set_customer_by_city] = useState([{}]);
  const [ less_actor_aparitions , set_less_actor_aparitions] = useState([{}]);
  const [ most_films_rentals  , set_most_rentals] = useState([{}]);

  const [ loader_most_rentals , set_loader_most_rentals] = useState(false);
  const [ loader_films_by_category , set_loader_films_by_category] = useState(false);
  const [ loader_earnings_two_thouseand_five , set_loader_earnings_two_thouseand_five] = useState(false);
  const [ loader_customer_by_city , set_loader_customer_by_city] = useState(false);
  const [ loader_earnings_by_store , set_loader_earnings_by_store] = useState(false);


  

  
  
  useEffect(()=>{
    
    // Pending optimize 
    most_films_rentals_load();


    earnings_by_store_load();
    earnings_from_two_thousand_five();
    // avg_films_rentals_category()earnings_from_two_thousand_five
    films_by_category_load()
    customer_by_city_load()


  },[])



  // colors
  const background_color = [
    "rgba(43,63,229,0.8)",
    "rgba(88, 9, 79, 0.8)",
    "rgba(229, 43, 173, 0.8)",
    "rgba(135, 136, 153, 0.8)",
    "rgba(3, 214, 84, 0.8)",
    "rgba(185, 8, 8, 0.8)",
    "rgba(43,63,229,0.8)",
    "rgba(111, 1, 255, 0.8)",
    "rgba(40, 16, 71, 0.8)",
    "rgba(229, 142, 43, 0.8)",
    "rgba(100, 142, 43, 0.8)",
    "rgba(229, 185, 43, 0.8)",
  ]

  const options = {
    plugins: {
      legend: {
        position: 'right',
        textAlign:'left',
        rtl : true,
        labels: {
          usePointStyle: true,
          pointStyle: 'star',
                              color: 'rgb(255, 99, 132)'
        }
      }
    },
}

  

  const randomBack = () =>{
    const position = Math.floor(Math.random() * 10);
    return background_color[position]
  }



  

  const customer_by_city_load = () => {
    // toast.info('Loading data!',{autoClose:1000})
    axios.get(url+'customer_by_city')
      .then(function (response) {
        set_customer_by_city(response.data)
        set_loader_customer_by_city(true)
      }).catch(function (error) {
        // toast.error('Something was wrong')


      });
  }

  const films_by_category_load = () => {
    // toast.info('Loading data!',{autoClose:1000})
    axios.get(url+'films_by_category')
      .then(function (response) {
        set_films_by_category(response.data)
        set_loader_films_by_category(true)
      }).catch(function (error) {
        // toast.error('Something was wrong')


      });
  }
  const avg_films_rentals_category = () => {
    // toast.info('Loading data!',{autoClose:1000})
    axios.get(url+'/dashboard/avg_films_rentals_bycategory')
      .then(function (response) {
        set_avg_films_rentals_bycategory(response.data.avg_films_rentals_bycategory);
        // set_actors(response.data.actors)

      }).catch(function (error) {
        // toast.error('Something was wrong')


      });
  }

  

  const earnings_by_store_load = () => {

     
    // toast.info('Loading data!',{autoClose:1000})
    axios.get(url_api+'earnings_by_store')
      .then(function (response) {
     
       set_earnings_by_store(response.data);
       set_loader_earnings_by_store(true)
        // set_actors(response.data.actors)

      }).catch(function (error) {
        // toast.error('Something was wrong')


      });
      
  }
  const earnings_from_two_thousand_five = () =>{

    
    // toast.info('Loading data!',{autoClose:1000})
    axios.get(url_api+'earnings_from_two_thousand_five')
      .then(function (response) {
      set_earnings_two_thousand_five(response.data);
      set_loader_earnings_two_thouseand_five(true)
        // set_actors(response.data.actors)

      }).catch(function (error) {
        // toast.error('Something was wrong')


      });
    
}
  const most_films_rentals_load = () =>{

    
    // toast.info('Loading data!',{autoClose:1000})
    axios.get(url_api+'ten_films_most_rentals')
      .then(function (response) {
        console.log('TEEEEEEEEEEN FILMS')
        console.log('ten_films_most_rentals',response);
        set_most_rentals(response.data);
        set_loader_most_rentals(true)
        // set_actors(response.data.actors)

      }).catch(function (error) {
        // toast.error('Something was wrong')


      });
    
}
  return (
    <div>


<div>
  {/* !-- Content Wrapper. Contains page content --&gt; */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-12">
            <h1 className="m-0">Dashboard</h1>
          </div>{/* /.col */}
         
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
 
    { (loader_customer_by_city && loader_earnings_by_store && loader_earnings_two_thouseand_five && loader_films_by_category && loader_most_rentals)  ? 
    

    <>
    
    <div className="row">

    <div className="col-md-8 col-xs-8 col-lg-6 ml-2">

  {/* // Bar chart */}
  <div className="card card-primary card-outline">
    <div className="card-header">
      <h3 className="card-title">
        <i className="far fa-chart-bar" />
        &nbsp;  Films by category
      </h3>
      <div className="card-tools">
        <button type="button" className="btn btn-tool" data-card-widget="collapse">
          <i className="fas fa-minus" />
        </button>
        <button type="button" className="btn btn-tool" data-card-widget="remove">
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
    <div className="card-body">
      <div id="bar-chart"  />
      <Bar 
      options={options}
      data={{
        labels:films_by_category.map((rental)=>rental.category_name),
        datasets:[{
          label:films_by_category.map((rental)=>rental.category_name),
          data:films_by_category.map((rental) =>rental.quantity_films),
          backgroundColor: films_by_category.map((rental)=> randomBack())
        }]
      }}
      ></Bar>


    </div>
  </div>
    
  {/* /.card */}


  {/* /.card */}
</div>

<div className="col-md-8 col-xs-8 col-lg-8">
  <div className="card card-primary card-outline">
    <div className="card-header">
      <h3 className="card-title">
        <i className="far fa-chart-bar" />
        &nbsp; City by customer
      </h3>
      <div className="card-tools">
        <button type="button" className="btn btn-tool" data-card-widget="collapse">
          <i className="fas fa-minus" />
        </button>
        <button type="button" className="btn btn-tool" data-card-widget="remove">
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
    <div className="card-body">
      <div id="bar-chart"  />
      <Bar 
      options={options}
      data={{
        labels:customer_by_city.map((rental)=>rental.email),
        datasets:[{
          label:customer_by_city.map((rental)=>rental.city_name),
          data:customer_by_city.map((rental) =>rental.quantity_customer),
          backgroundColor: customer_by_city.map((rental)=> randomBack())
        }]
      }}
      ></Bar> 

    </div>
  </div>


  {/* /.card */}
</div>


    </div>

    <div className="row">



<div className="col-md-6">
{/* Bar chart */}
<div className="card card-primary card-outline">
<div className="card-header">
  <h3 className="card-title">
    <i className="far fa-chart-bar" />
    &nbsp; Earnings from 2005
  </h3>
  <div className="card-tools">
    <button type="button" className="btn btn-tool" data-card-widget="collapse">
      <i className="fas fa-minus" />
    </button>
    <button type="button" className="btn btn-tool" data-card-widget="remove">
      <i className="fas fa-times" />
    </button>
  </div>
</div>
<div className="card-body">
  <div id="bar-chart"  />
  <Bar 
  options = { options}
  data={{
    
    labels:earnings_two_thousand_five.map((rental)=> 'MES:'+rental.month),
    datasets:[{
      label:earnings_two_thousand_five.map((rental)=>'MES :' + rental.month),
      data:earnings_two_thousand_five.map((rental) =>rental.earnings),
      backgroundColor: earnings_two_thousand_five.map((rental)=> randomBack())
    }]
  }}
  ></Bar>

</div>
{/* /.card-body*/}
</div>
{/* /.card */}


{/* /.card */}
</div>

</div>



<div className="row">



<div className="col-md-6">
{/* Bar chart */}
<div className="card card-primary card-outline">
<div className="card-header">
  <h3 className="card-title">
    <i className="far fa-chart-bar" />
    &nbsp; Earnings by store
  </h3>
  <div className="card-tools">
    <button type="button" className="btn btn-tool" data-card-widget="collapse">
      <i className="fas fa-minus" />
    </button>
    <button type="button" className="btn btn-tool" data-card-widget="remove">
      <i className="fas fa-times" />
    </button>
  </div>
</div>
<div className="card-body">
  <div id="bar-chart"  />
  <Bar 
  options = { options}
  data={{
    
    labels:earnings_by_store.map((rental)=> 'Store id: '+ rental.store_id),
    datasets:[{
      label:earnings_by_store.map((rental)=>'Store id:'+ rental.store_id),
      data:earnings_by_store.map((rental) =>rental.totalAmount),
      backgroundColor: earnings_by_store.map((rental)=> randomBack())
    }]
  }}
  ></Bar>

</div>
{/* /.card-body*/}
</div>
{/* /.card */}


{/* /.card */}
</div>

</div>



<div className="row">



<div className="col-md-6">
{/* Bar chart */}
<div className="card card-primary card-outline">
<div className="card-header">
  <h3 className="card-title">
    <i className="far fa-chart-bar" />
    &nbsp; 10 most films rented
  </h3>
  <div className="card-tools">
    <button type="button" className="btn btn-tool" data-card-widget="collapse">
      <i className="fas fa-minus" />
    </button>
    <button type="button" className="btn btn-tool" data-card-widget="remove">
      <i className="fas fa-times" />
    </button>
  </div>
</div>
<div className="card-body">
  <div id="bar-chart"  />
  <Bar 
  options = { options}
  data={{
    
    labels:most_films_rentals.map((rental)=> rental.title),
    datasets:[{
      label:most_films_rentals.map((rental)=>rental.title),
      data:most_films_rentals.map((rental) =>rental.quantity_rentals),
      backgroundColor: most_films_rentals.map((rental)=> randomBack())
    }]
  }}
  ></Bar>

</div>
{/* /.card-body*/}
</div>
{/* /.card */}


{/* /.card */}
</div>

</div>



</>
    :

    <h1>Loading...</h1>
    
    }






    {/* /.content */}
  </div>
</div>

    </div>
  )
}
