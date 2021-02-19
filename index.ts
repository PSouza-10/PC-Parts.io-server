require('dotenv').config()
import app from './src'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
