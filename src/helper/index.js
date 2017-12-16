// flow

export const copyInstance = (instance: any): any => {
    return Object.assign(Object.create(Object.getPrototypeOf(instance)), instance);
}
