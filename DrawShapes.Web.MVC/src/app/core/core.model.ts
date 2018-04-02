export class Response<T>
{
  constructor(data: T) {
    this.data = data;
  }
  public data: T;
  public errorMessages: string[];
}
