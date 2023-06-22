export class Location {
    id: number;
    localidad: string;
    // eslint-disable-next-line
    id_provincia: number;

    constructor (
      id = 0,
      localidad = '',
      // eslint-disable-next-line
      id_provincia = 0
    ) {
      this.id = id
      this.localidad = localidad
      // eslint-disable-next-line
      this.id_provincia = id_provincia
    }
}
