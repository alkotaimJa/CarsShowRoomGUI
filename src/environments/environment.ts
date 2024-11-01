import { Environment } from "./environment.type";


let host = 'http://localhost';
export const environment: Environment = {
    name: 'dev',
    backend: {
        hostname: "",
        authService: "",
        carShowRoom: {
            fetchShowroom: host + ':8077/showrooms'
        }
}};
