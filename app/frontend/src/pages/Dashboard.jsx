import { useEffect, useState } from "react";
import api from "../api/api";
import StatusCard from "../components/StatusCard";

function Dashboard() {

    const [health, setHealth] = useState(null);

    useEffect(() => {
        api.get("/health")
            .then(res => setHealth(res.data));
    }, []);

    return (
        <div style={{ padding: "40px" }}>
            <h1>Production Grade DevOps Platform 🚀</h1>

            {health
                ? <StatusCard health={health} />
                : <p>Loading...</p>}
        </div>
    );

}

export default Dashboard;