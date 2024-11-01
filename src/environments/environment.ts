import { Environment } from "./environment.type";


let host = 'http://localhost';
export const environment: Environment = {
    name: 'dev',
    backend: {
        hostname: "",
        authService: "",
        carShowRoom: {
            fetchShowRooms: host + ':8077/showrooms',
            fetchShowroom: host + ':8077/showroom',
            deleteShowRoom: host + ':8077/showroom' ,
            createShowroom: host + ':8077/showroom',
            updateShowroom: host + ':8077/showroom'
        },
        Cars:{
            fetchCars: host + ':8077/cars',
            createCar: host + ':8077/car',
        }
}};
