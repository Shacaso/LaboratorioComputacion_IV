export class Province {
    id: number;
    provincia: string;

    constructor (
      id = 0,
      provincia = ''
    ) {
      this.id = id
      this.provincia = provincia
    }
}

export class ProvinciaDTO {
    provincia: string;

    constructor (
      provincia = ''
    ) {
      this.provincia = provincia
    }
}
