//----------------------------------------------------------------------------------------------------------------------
// Vue Seed Server
//----------------------------------------------------------------------------------------------------------------------

import path from 'path';
import fs from 'fs';
import { AddressInfo } from 'net';

import express from 'express';

import config from './config';

//----------------------------------------------------------------------------------------------------------------------

const http : Record<string, any> = config.http as Record<string, any>;

// Build the express app
const app = express();

// JSON Support
app.use(express.json());

// Setup static serving
app.use(express.static(path.resolve(__dirname, '..', 'dist', 'client')));

// Serve index.html for any html requests, but 404 everything else.
app.get('*', (_request, response) =>
{
    response.format({
        html: (_req, resp) =>
        {
            resp.setHeader('Content-Type', 'text/html');
            fs.createReadStream(path.resolve(__dirname, '..', 'dist', 'client', 'index.html')).pipe(resp);
        },
        json: (_req, resp) =>
        {
            resp.status(404).end();
        }
    });
});

//----------------------------------------------------------------------------------------------------------------------
// Server
//----------------------------------------------------------------------------------------------------------------------

// Start the server
const server = app.listen(http.port, () =>
{
    const { address, port } = server.address() as AddressInfo;

    const host = address === '::' ? 'localhost' : address;
    console.log(`Vue Seed listening at http://${ host }:${ port }.`);
});

//----------------------------------------------------------------------------------------------------------------------
