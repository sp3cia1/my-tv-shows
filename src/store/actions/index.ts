export type Action<T = any> = {
  type: string;
  payload?: T;
}

export type ActionCreator<T = any> = (payload: T) => Action<T>;