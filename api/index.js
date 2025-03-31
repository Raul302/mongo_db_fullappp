import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';


const app = express();
app.use(cors());


dotenv.config();

const PORT = 3010;
const MONGOURL = process.env.MONG_URL;

    app.listen(PORT, () => {
        console.log(' SERVER IS RUNNING')

        mongoose.connect("mongodb://localhost:27017/sakila").then( async () => {
            console.log(' Database is connected ');
        
            // const collections = await mongoose.connection.db.listCollections().toArray();
            // const collectionNames = collections.map(col => col.name);
            // console.log('COLLECTIONNAMES',collectionNames);

        })
        .catch((error) => console.log(error))

    });


const generalSchema = new mongoose.Schema({
    name: String
})

// Using views instead make all query [ OK ]
const films_by_category = mongoose.model('films_by_category', generalSchema, 'films_by_category');

app.get('/api/films_by_category', async (req, res) => {

    try {
        
        // Fetch data from the testModel collection
        const films_category = await films_by_category.find();
    
        // Log the testing data to check what's fetched
        console.log('films_category:', films_category);
    
        // Respond with the fetched data
        res.json(films_category);
      } catch (err) {
        // Handle any errors that occur during the database query
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from database');
      }
      
})

// Using views instead make all query

const ten_films_most_rentals = mongoose.model('ten_films_most_rentals', generalSchema, 'ten_films_most_rentals');

app.get('/api/ten_films_most_rentals', async (req, res) => {

    try {
        
        // Fetch data from the testModel collection
        const films_most_rentals = await ten_films_most_rentals.find();
    
        // Log the testing data to check what's fetched
        // const films_most_rentals = { }
        console.log('testingData:', films_most_rentals);
    
        // Respond with the fetched data
        res.json(films_most_rentals);
      } catch (err) {
        // Handle any errors that occur during the database query
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from database');
      }
      
})

// Using views instead make all query [ OK ] 2005 grouped by month

const earning_fromtwofive = mongoose.model('payment_summary_by_month', generalSchema, 'payment_summary_by_month');

app.get('/api/earnings_from_two_thousand_five', async (req, res) => {

    try {

       
        // Fetch data from the testModel collection
        const earnings_by_month = await earning_fromtwofive.find();
    
        // Log the testing data to check what's fetched
        console.log('testingData:', earnings_by_month);
    
        // Respond with the fetched data
        res.json(earnings_by_month);
      } catch (err) {
        // Handle any errors that occur during the database query
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from database');
      }
      
})


// Using views instead make all query [ OK, 6s loading ]

const earnings_by_store = mongoose.model('payment_summary_by_inventory_store', generalSchema, 'payment_summary_by_inventory_store');

app.get('/api/earnings_by_store', async (req, res) => {

    try {

        // Fetch data from the testModel collection
        const earnings_store = await earnings_by_store.find();
    
        // Log the testing data to check what's fetched
        console.log('testingData:', earnings_store);
    
        // Respond with the fetched data
        res.json(earnings_store);
      } catch (err) {
        // Handle any errors that occur during the database query
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from database');
      }
      
})


// Using views instead make all query [ OK ]

const customer_city = mongoose.model('customer_by_city', generalSchema, 'customer_by_city');

app.get('/api/customer_by_city', async (req, res) => {

    try {

        // Fetch data from the testModel collection
        const resp_customer_city = await customer_city.find();
    
        // Log the testing data to check what's fetched
        console.log('testingData:', resp_customer_city);
    
        // Respond with the fetched data
        res.json(resp_customer_city);
      } catch (err) {
        // Handle any errors that occur during the database query
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data from database');
      }
      
})