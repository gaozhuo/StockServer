import * as express from 'express'
import {Stock} from "./stock";
import {StockService} from "./stock.service";

const app = express();

app.get('/api/stock', (request, response) => {
    response.json(stockService.getStocks());
});

app.get('/api/stock/:id', (request, response) => {
    const id = request.params.id;
    response.json(stockService.getStock(id));
});

const server = app.listen(8080, 'localhost', () => {
    console.log("server started");
});

const stockService: StockService = new StockService();


