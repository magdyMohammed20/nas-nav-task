import axios from 'axios'

// Fetch The First Product Data
const req = async () => {
    const response = await axios.get('/api/data.json').then(res => res.data[0])
    return response
}

const data = req()

export default data