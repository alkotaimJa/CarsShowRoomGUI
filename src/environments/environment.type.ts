export type Environment = {
    name: string,
    backend: {
        hostname: string,
        authService: string,
        carShowRoom: {
            fetchShowroom: string
        }
    }
}
