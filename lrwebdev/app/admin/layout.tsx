import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminFooter from '@/components/admin/AdminFooter';
import './admin.css';


export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-body">
            <AdminHeader />
            <div className="admin-layout">
                <AdminSidebar />
                <main className="admin-main">{children}</main>
            </div>
            <AdminFooter />
        </div>
    );
}