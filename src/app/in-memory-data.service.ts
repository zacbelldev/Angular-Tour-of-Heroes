import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. NiceMan', rank: 1 },
      { id: 12, name: 'Narco', rank: 3 },
      { id: 13, name: 'Bombasto', rank: 1 },
      { id: 14, name: 'Celeritas', rank: 1 },
      { id: 15, name: 'Magneta', rank: 2 },
      { id: 16, name: 'RubberMan', rank: 1 },
      { id: 17, name: 'Dynama', rank: 1 },
      { id: 18, name: 'Dr IQ', rank: 6 },
      { id: 19, name: 'Magma', rank: 1 },
      { id: 20, name: 'Tornado', rank: 2 }
    ];
    return {heroes};
  }
}