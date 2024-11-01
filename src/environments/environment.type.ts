export type Environment = {
    name: string,
    backend: {
        hostname: string,
        authService: string,
        carShowRoom: {
            fetchShowRooms: string,
            fetchShowroom: string,
            deleteShowRoom: string,
            createShowroom: string,
            updateShowroom: string
        }
    }
}
