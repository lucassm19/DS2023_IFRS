import React, { useContext } from 'react';
import UserContext from './UserContext';
function HomePage() {
    const user = useContext(UserContext)
    return <div>{user.name}</div>
}
export default HomePage;