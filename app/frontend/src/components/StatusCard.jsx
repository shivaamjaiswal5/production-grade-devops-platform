function StatusCard({ health }) {

    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginTop: "20px"
            }}
        >
            <h2>Backend Status</h2>

            <p><b>Status:</b> {health.status}</p>
            <p><b>Service:</b> {health.service}</p>
            <p><b>Version:</b> {health.version}</p>
            <p><b>Time:</b> {health.timestamp}</p>
        </div>
    );

}

export default StatusCard;