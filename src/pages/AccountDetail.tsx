import { useParams } from "react-router-dom";

function AccountDetail() {
    const { id } = useParams();
    return (
        <div>
            <h1>AccountDetail</h1>
            <p>{id}번 페이지로 이동</p>
        </div>
    );
}
    
export default AccountDetail;
