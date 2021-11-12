import { server } from './config/api'

const PORT = process.env.PORT || 4000

server.listen(PORT, () => console.log(`API running in port ${PORT}`))