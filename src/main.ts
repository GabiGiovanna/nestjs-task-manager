import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app/app.module.js';
/**
 * Arquivos principais:
 * - src/app/app.module.ts: Módulo principal do aplicativo.
 * - src/app/app.controller.ts: Define as rotas e lida com as requisições.
 * - src/app/app.service.ts: Contém a lógica de negócio separada do controlador.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
