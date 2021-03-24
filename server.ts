import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as nodemailer from 'nodemailer';
import {request} from 'https';
import {environment} from './src/environments/environment.prod';
import * as bodyParser from 'body-parser';
import cors from 'cors'

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();

  // // DEV
  // const distFolder = join(process.cwd(), './dist/v12-seo-angular/browser/');

  // // PRODUÇÃO
  const distFolder = join(process.cwd(), '../browser/');

  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}) );
  // server.use(cors);

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      {provide: 'request', useFactory: () => server.request},
      {provide: 'host', useFactory: () => server.request.hostname}
    ]
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Nodemailer route
  server.post('/send-email', cors(), (req: any, res: any, next) => {
    const transporter = nodemailer.createTransport({
      // alterar tudo para arquivo .env depois de realizar os testes
      host: environment.smtpHost,
      port: environment.smtpPort,
      secure: environment.smtpSecure,
      auth: {
        user: environment.smtpUsername,
        pass: environment.smtpPassword
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: environment.smtpRejectInvalidTls
      }
    });

    // transporter.verify((error, success) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Server is ready to take our messages');
    //   }
    // });

    const email = {
      from: 'contato@v12brasil.com.br',
      to: 'contato@v12brasil.com.br',
      replyTo: req.body.email.toString(), // <- vai vir o email do cliente
      subject: 'Contato de: ' + req.body.name.toString() + '| Solicitação de orçamento e/ou agendamento de reunião',
      text: JSON.stringify(req.body)
    };

    // console.log(req.body);
    //
    // return res.sendStatus(200).end();

    transporter.sendMail(email, (error, info) => {
      if(error) {
        // console.log(error);
        return res.sendStatus(400).end();

      } else {
        // console.log('Message sent: ' + info.response);
        return res.sendStatus(200).end();
      }
      // close smtp connection
      transporter.close();

      // return status code 200
      // return res.end();
    })
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
