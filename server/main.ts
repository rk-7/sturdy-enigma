import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { INestApplication } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  addHelmet(app);
  app.use(compression());
  await app.listen(process.env.PORT || 4000);
}
function addHelmet(app: INestApplication): void {
  app.use(helmet.contentSecurityPolicy({
    directives: {
      'default-src': ['\'self\'', '*.spacexdata.com'],
      'base-uri': ['\'self\''],
      'block-all-mixed-content': [],
      'font-src': ['\'self\'', 'https:', 'data:'],
      'frame-ancestors': ['\'self\''],
      'img-src': ['\'self\'', 'data:', '*.imgbox.com'],
      'object-src': ['\'none\''],
      'script-src': ['\'self\''],
      'script-src-attr': ['\'none\''],
      'style-src': ['\'self\'', 'https:', '\'unsafe-inline\''],
      'upgrade-insecure-requests': [],
    },
  }));
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());
}
// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => console.error(err));
}

