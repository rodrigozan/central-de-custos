import { server } from './config/api'

const PORT = process.env.PORT || 3500

server.listen(PORT, () => console.log(`API running in port ${PORT}`))