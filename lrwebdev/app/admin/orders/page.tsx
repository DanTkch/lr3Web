import './orders.css';

export default function AdminOrdersPage() {
    return (
        <>
            <div className="page-title-box">
                <h1>Управління замовленнями покупців</h1>
            </div>

            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                    <tr>
                        <th>№ Замовлення</th>
                        <th>Клієнт</th>
                        <th>Дата та час</th>
                        <th>Сума</th>
                        <th>Спосіб оплати</th>
                        <th>Статус</th>
                        <th>Дії</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <strong className="order-id">#1024</strong>
                        </td>
                        <td>
                            <div className="customer-info">
                                <span className="customer-name">Іван Петренко</span>
                                <span className="customer-phone">097-111-2233</span>
                            </div>
                        </td>
                        <td>22.09.2026, 14:30</td>
                        <td>
                            <strong className="order-amount">420.00 грн</strong>
                        </td>
                        <td>Карткою онлайн</td>
                        <td>
                            <select name="status" className="form-select status-select" defaultValue="new">
                                <option value="new">Нове</option>
                                <option value="processing">В обробці</option>
                                <option value="delivering">В дорозі</option>
                                <option value="completed">Виконано</option>
                            </select>
                        </td>
                        <td>
                            <div className="table-btn-group">
                                <button type="button" className="btn btn-sm btn-outline">
                                    Деталі
                                </button>
                                <button type="button" className="btn btn-sm btn-primary">
                                    Зберегти
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}