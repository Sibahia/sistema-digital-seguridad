import express from 'express';
import cors from 'cors';

var corsOptions = {
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};

export default function loadMiddlewares(app) {
    app.use(express.json());
    app.use(cors(corsOptions));
}