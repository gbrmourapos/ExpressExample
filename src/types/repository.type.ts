interface IBaseRepository<T> {
    save(payload: T): Promise<T>;
    retrieveAll(): Promise<Array<T>>;
    retrieveById(id: number): Promise<T | null>;
    update(payload: T): Promise<number>;
    delete(id: number): Promise<number>;
}

export { IBaseRepository }