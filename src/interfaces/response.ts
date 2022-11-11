export interface IResponse<T = unknown> {
  /** @param { number } code Represents HTTP response code.  */
  code: number;

  /** @param { unknown } data Represents the response from the server. [Optional]  */
  data?: T;

  /** @param { unknown } data Represents the response message. [Optional] */
  msg?: string;

  /** @param { unknown } data Represents the response error. [Optional] */
  error?: unknown;
}
