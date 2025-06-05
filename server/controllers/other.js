const getHome = (req, res) => {
    res.json({ message: 'Welcome to Electronic World' });
}

const getHealth = (req, res) => {
    res.json({ message: 'Server is up and running' });
}
const getNotFound = (req, res) => {
    res.status(404).json({ message: 'API endpoint not found' });
}
export {
    getHome,
    getHealth,
    getNotFound

}