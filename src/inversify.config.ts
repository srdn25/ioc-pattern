import { Container } from 'inversify';
import type { IApp, IGlobalConfig, IMongoConfig, IMongoLib, Logger, ILoggerList } from './interfaces';
import { TYPES } from './types';
import { MongoConfig } from './components/MongoConfig';
import { MongoLib } from './components/MongoLib';
import { GlobalConfig } from './components/GlobalConfig';
import { App } from './components/App';
import { LoggerPublic } from './components/Logger.public';
import { LoggerConfidential } from './components/Logger.confidential';
import { LoggerList } from './components/LoggerList';

export const container = new Container();

container.bind<IMongoConfig>(TYPES.IMongoConfig).to(MongoConfig);
container.bind<IMongoLib>(TYPES.IMongoLib).to(MongoLib);
container.bind<IGlobalConfig>(TYPES.IGlobalConfig).to(GlobalConfig);
container.bind<IApp>(TYPES.IApp).to(App);
container.bind<Logger>(TYPES.IConfidentialLogger).to(LoggerConfidential);
container.bind<Logger>(TYPES.IPublicLogger).to(LoggerPublic);
container.bind<ILoggerList>(TYPES.ILoggerList).to(LoggerList);