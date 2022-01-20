import {IModule} from "../../../domain/models/module";

export function Module(attributes: IModule) {
    return function <T extends { new(...args: any[]): any }>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                console.log(attributes);
            }
        }
    }
}

