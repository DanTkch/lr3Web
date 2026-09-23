export default function AdminDashboardPage() {
    return (
        <>
            <div className="page-title-box">
                <h1>Загальна статистика системи</h1>
            </div>

            <section className="admin-section">
                <h2 className="section-subtitle">Показники складу</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-label">Всього позицій товарів</span>
                        <span className="stat-value">450</span>
                    </div>
                    <div className="stat-card stat-warning">
                        <span className="stat-label">Товарів закінчується (&lt; 10 шт)</span>
                        <span className="stat-value">18</span>
                    </div>
                    <div className="stat-card stat-danger">
                        <span className="stat-label">Товарів немає в наявності</span>
                        <span className="stat-value">5</span>
                    </div>
                    <div className="stat-card stat-success">
                        <span className="stat-label">Загальна вартість товарів</span>
                        <span className="stat-value">
              340,500 <small>грн</small>
            </span>
                    </div>
                </div>
            </section>

            <section className="admin-section">
                <h2 className="section-subtitle">Останні сповіщення</h2>
                <div className="notifications-box">
                    <p className="empty-msg">Немає нових сповіщень</p>
                </div>
            </section>
        </>
    );
}