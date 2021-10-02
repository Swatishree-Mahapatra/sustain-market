export default function AdminHome() {
    return (
        <div className="AdminHome">
            <form>
                <div className="mb-3">
                    <label className="form-label"> Product Image </label>
                    <input className="form-control" type="file" />
                </div><br />
                <div className="mb-3">
                    <label className="form-label"> Product Name </label>
                    <input type="text" className="form-control" />
                </div><br />
                <div className="mb-3">
                    <label className="form-label"> Product Description </label>
                    <input type="text" className="form-control" />
                </div><br />
                <div className="mb-3">
                    <label className="form-label"> Price </label>
                    <input type="number" className="form-control" />
                </div><br />
                <div className="mb-3">
                    <label className="form-lable"> Stock </label>
                    <input type="number" className="form-control" />
                </div><br />
                <button type="submit" className="btn btn-success"> Submit </button>
            </form>
        </div>
    );
}