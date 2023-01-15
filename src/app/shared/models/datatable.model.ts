export class ModelDatatable {
  limit: number;
  skip: number;
  activePage: number;
  numberPagging: number;
  total: number;
  search: string;

  constructor(
    limit: number,
    skip: number,
    activePage: number,
    numberPagging: number,
    total: number,
    search: string
  ) {
    this.limit = limit;
    this.skip = skip;
    this.activePage = activePage;
    this.numberPagging = numberPagging;
    this.total = total;
    this.search = search;
  }
}
